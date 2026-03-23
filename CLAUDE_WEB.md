# Claude Development Rules - Web Applications

> Specialized template for modern web application development (React, Next.js, Vue, Angular, etc.)

## Extends: [General Template](./CLAUDE.md)
Read the general template first, then apply these web-specific rules.

---

## Web Application Security (CRITICAL)

### Authentication & Authorization
1. **Server-Side Authentication Only** - Never trust client-side auth checks alone.
   ```typescript
   // ❌ BAD - Client-side only
   if (user.role !== 'admin') return <Redirect to="/login" />;

   // ✅ GOOD - Server enforced (API route or middleware)
   export async function middleware(req) {
     const user = await verifyAuth(req);
     if (!user || user.role !== 'admin') {
       return NextResponse.redirect('/unauthorized');
     }
   }
   ```

2. **Token Management**
   - Use HTTPOnly cookies for auth tokens (not localStorage)
   - Set `secure: true` in production
   - Use `sameSite: 'lax'` or `'strict'`
   - Implement token expiration and refresh logic

3. **Role-Based Access Control (RBAC)**
   - Check permissions on EVERY API endpoint
   - Use middleware for route protection
   - Validate roles server-side, even if UI hides elements

### API Endpoint Security
4. **Input Validation** - Validate and sanitize ALL user input
   ```typescript
   // ✅ Use validation libraries (Zod, Yup, Joi)
   const schema = z.object({
     email: z.string().email(),
     age: z.number().min(0).max(120)
   });
   const validated = schema.parse(req.body); // Throws if invalid
   ```

5. **Rate Limiting** - Protect against brute force and DoS
   ```typescript
   // Implement rate limiting on:
   // - Login endpoints (5 attempts per 15 min)
   // - Password reset (3 attempts per hour)
   // - API calls (100 requests per minute)
   ```

6. **CORS Configuration** - Only allow trusted origins
   ```typescript
   // ❌ BAD
   res.setHeader('Access-Control-Allow-Origin', '*');

   // ✅ GOOD
   const allowedOrigins = ['https://yourdomain.com'];
   if (allowedOrigins.includes(origin)) {
     res.setHeader('Access-Control-Allow-Origin', origin);
   }
   ```

7. **Error Handling** - Don't leak implementation details
   ```typescript
   // ❌ BAD
   catch (error) {
     return res.json({ error: error.stack }); // Exposes internals!
   }

   // ✅ GOOD
   catch (error) {
     logger.error('Database query failed', error);
     return res.json({ error: 'Internal server error' }); // Generic message
   }
   ```

### Frontend Security
8. **XSS Prevention**
   - React/Vue automatically escape content (but be careful with `dangerouslySetInnerHTML`)
   - Sanitize user-generated HTML with DOMPurify
   - Use Content Security Policy (CSP) headers

9. **CSRF Protection**
   - Use CSRF tokens for state-changing operations
   - Verify `Origin` and `Referer` headers
   - Most frameworks have built-in CSRF protection (enable it!)

10. **Dependency Security**
    - Run `npm audit` regularly
    - Keep dependencies updated
    - Use tools like Snyk or Dependabot
    - Avoid packages with known vulnerabilities

---

## Environment Variables (Next.js/React/Vue)

### Variable Naming Rules
```bash
# ✅ GOOD - Public variables (exposed to browser)
NEXT_PUBLIC_API_URL=https://api.example.com
VITE_APP_TITLE=My App
REACT_APP_VERSION=1.0.0

# ✅ GOOD - Server-only secrets (NEVER exposed)
DATABASE_URL=postgresql://...
JWT_SECRET=abc123...
API_SECRET_KEY=xyz789...

# ❌ BAD - Secret with public prefix (will be exposed!)
NEXT_PUBLIC_SECRET_KEY=abc123  # WRONG!!!
```

### Required Environment Variable Pattern
```typescript
// ❌ BAD - Falls back to insecure default
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

// ✅ GOOD - Fails fast if missing
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

// ✅ BETTER - Validate at startup
function validateEnv() {
  const required = ['JWT_SECRET', 'DATABASE_URL', 'API_KEY'];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
validateEnv();
```

---

## Code Organization

### File Structure (Next.js/React Example)
```
src/
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API routes (server-side)
│   ├── (auth)/            # Route groups
│   └── page.tsx           # Page components
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── features/         # Feature-specific components
├── lib/                   # Utility libraries
│   ├── *-client.ts       # Client-safe code
│   ├── *-server.ts       # Server-only code
│   └── logger.ts         # Logging utility
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── utils/                 # Helper functions
```

### Component Best Practices
11. **'use client' vs 'use server'** (Next.js 13+)
    - Default to Server Components (better performance)
    - Only use `'use client'` when needed:
      - Interactive UI (onClick, useState, useEffect)
      - Browser APIs (localStorage, window)
      - Third-party components that require client rendering

12. **Data Fetching**
    ```typescript
    // ✅ GOOD - Server Component (secure, can access database directly)
    async function UserProfile({ userId }: Props) {
      const user = await db.users.findUnique({ where: { id: userId } });
      return <div>{user.name}</div>;
    }

    // ✅ GOOD - Client Component (use API route)
    'use client';
    function UserProfile({ userId }: Props) {
      const { data } = useSWR(`/api/users/${userId}`, fetcher);
      return <div>{data?.name}</div>;
    }
    ```

---

## API Design

### RESTful Conventions
13. **HTTP Methods**
    - `GET` - Retrieve data (idempotent, no side effects)
    - `POST` - Create new resource
    - `PUT` / `PATCH` - Update existing resource
    - `DELETE` - Remove resource

14. **Status Codes**
    - `200` - Success
    - `201` - Created (POST success)
    - `400` - Bad Request (validation error)
    - `401` - Unauthorized (no/invalid token)
    - `403` - Forbidden (valid token, insufficient permissions)
    - `404` - Not Found
    - `429` - Too Many Requests (rate limited)
    - `500` - Internal Server Error

15. **Response Format** - Be consistent
    ```typescript
    // ✅ Success response
    { success: true, data: { ... } }

    // ✅ Error response
    { success: false, error: 'Error message' }

    // ❌ Inconsistent
    { ok: true, result: { ... } }     // Different from error format!
    { error: { message: '...' } }     // Different structure!
    ```

---

## State Management

### When to Use What
16. **URL State** (Search params, route params)
    - Shareable links
    - Browser history
    - SEO-friendly

17. **Local State** (useState)
    - Component-specific UI state
    - Form inputs
    - Toggle states

18. **Global State** (Context, Redux, Zustand)
    - User authentication status
    - Theme preferences
    - Shared application data

19. **Server State** (React Query, SWR)
    - API data
    - Cached responses
    - Background refetching

### Context Best Practice
```typescript
// ✅ GOOD - Separate concerns
<AuthProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</AuthProvider>

// ❌ BAD - God provider
<AppProvider>  {/* Everything in one! */}
  <App />
</AppProvider>
```

---

## Performance

### Code Splitting
20. **Lazy Load Routes** - Don't load everything upfront
    ```typescript
    // Next.js - Automatic code splitting per route

    // React Router - Lazy load
    const Dashboard = lazy(() => import('./pages/Dashboard'));
    ```

21. **Dynamic Imports** - Load heavy components on demand
    ```typescript
    // ✅ Heavy chart library only loaded when needed
    const Chart = dynamic(() => import('./Chart'), { ssr: false });
    ```

### Image Optimization
22. **Use Framework Image Components**
    ```tsx
    // ✅ Next.js Image (automatic optimization)
    <Image src="/photo.jpg" width={800} height={600} alt="Photo" />

    // ❌ Regular img tag (no optimization)
    <img src="/photo.jpg" />
    ```

### Caching
23. **HTTP Caching Headers**
    ```typescript
    // ✅ Cache static assets aggressively
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

    // ✅ Don't cache user-specific data
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    ```

---

## Testing

### Test Pyramid
24. **Unit Tests** (Most) - Test individual functions
    ```typescript
    describe('calculateTotal', () => {
      it('sums prices correctly', () => {
        expect(calculateTotal([10, 20, 30])).toBe(60);
      });
    });
    ```

25. **Integration Tests** (Some) - Test component interactions
    ```typescript
    it('submits form on button click', async () => {
      render(<LoginForm />);
      fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
      fireEvent.click(screen.getByText('Submit'));
      await waitFor(() => expect(mockLogin).toHaveBeenCalled());
    });
    ```

26. **E2E Tests** (Few) - Test critical user flows
    ```typescript
    // Playwright/Cypress
    test('user can complete checkout', async ({ page }) => {
      await page.goto('/products');
      await page.click('text=Add to Cart');
      await page.click('text=Checkout');
      await page.fill('#card-number', '4242424242424242');
      await page.click('text=Pay');
      await expect(page.locator('text=Order confirmed')).toBeVisible();
    });
    ```

---

## Accessibility

27. **Semantic HTML** - Use appropriate elements
    ```tsx
    // ✅ GOOD
    <button onClick={handleClick}>Submit</button>

    // ❌ BAD
    <div onClick={handleClick}>Submit</div>
    ```

28. **ARIA Labels** - Screen reader support
    ```tsx
    <button aria-label="Close dialog" onClick={onClose}>
      <X />  {/* Icon only, needs label */}
    </button>
    ```

29. **Keyboard Navigation** - All interactive elements should be keyboard accessible
    ```tsx
    // ✅ Handles both click and Enter key
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      Click me
    </div>
    ```

---

## Logging (Web Applications)

30. **Environment-Aware Logger**
    ```typescript
    // Create logger utility
    export const logger = {
      debug: (...args) => {
        if (process.env.NODE_ENV === 'development') {
          console.debug('[DEBUG]', ...args);
        }
      },
      info: (...args) => console.info('[INFO]', ...args),
      warn: (...args) => console.warn('[WARN]', ...args),
      error: (message, error) => {
        if (process.env.NODE_ENV === 'production') {
          // Send to error tracking service (Sentry, etc.)
          console.error('[ERROR]', message, { name: error.name, message: error.message });
        } else {
          console.error('[ERROR]', message, error);
        }
      },
      security: (message, details) => {
        console.warn('[SECURITY]', message, details);
        // Log to security monitoring service
      },
      audit: (action, userId, details) => {
        console.info('[AUDIT]', { action, userId, timestamp: new Date().toISOString(), ...details });
        // Send to audit log service
      }
    };
    ```

31. **What to Log**
    - ✅ User actions (login, logout, purchases)
    - ✅ API errors (without sensitive data)
    - ✅ Security events (failed auth, rate limit hits)
    - ❌ Passwords, tokens, API keys
    - ❌ Full user objects
    - ❌ Stack traces in production

---

## Deployment

### Pre-Deployment Checklist
- [ ] All environment variables configured in hosting platform
- [ ] Database migrations run successfully
- [ ] HTTPS enabled (force redirect from HTTP)
- [ ] Security headers configured (CSP, HSTS, X-Frame-Options)
- [ ] Error tracking set up (Sentry, LogRocket, etc.)
- [ ] Analytics configured (if needed)
- [ ] Monitoring and alerting enabled
- [ ] Backup strategy in place
- [ ] Load testing performed
- [ ] Rollback plan documented

### Environment-Specific Configs
```typescript
// ✅ Different configs per environment
const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    logLevel: 'debug'
  },
  production: {
    apiUrl: 'https://api.yourapp.com',
    logLevel: 'error'
  }
}[process.env.NODE_ENV];
```

---

## Common Pitfalls (Web)

### Don't:
❌ Use `any` type in TypeScript - defeats the purpose of type safety
❌ Mutate state directly - use immutable updates
❌ Fetch data in useEffect without cleanup - causes memory leaks
❌ Store sensitive data in localStorage - use HTTP-only cookies
❌ Trust client-side validation alone - always validate server-side
❌ Use `eval()` or `dangerouslySetInnerHTML` without sanitization
❌ Forget to handle loading and error states
❌ Deploy without testing on production-like environment
❌ Ignore browser console warnings/errors
❌ Leave console.log statements in production code

### Do:
✅ Use TypeScript for type safety
✅ Implement proper error boundaries
✅ Handle loading, error, and empty states in UI
✅ Use linting and formatting tools (ESLint, Prettier)
✅ Review bundle size regularly (use webpack-bundle-analyzer)
✅ Test on multiple browsers and devices
✅ Implement proper SEO (meta tags, sitemap, robots.txt)
✅ Use feature flags for gradual rollouts
✅ Monitor Core Web Vitals (LCP, FID, CLS)
✅ Document API endpoints (OpenAPI/Swagger)

---

## Framework-Specific Notes

### Next.js
- Use App Router (app/) over Pages Router (pages/) for new projects
- Leverage Server Components by default
- Use `next/image` for automatic image optimization
- Implement `middleware.ts` for auth protection
- Use `revalidate` for ISR (Incremental Static Regeneration)

### React (Vite)
- Use Vite for faster development
- Implement code splitting with React.lazy
- Use React Query for server state
- Consider Zustand or Jotai for simple global state

### Vue 3
- Use Composition API over Options API
- Leverage `<script setup>` syntax
- Use Pinia for state management
- Implement proper TypeScript support

---

## Security Checklist (Web Apps)

Before deploying any web application:
- [ ] All API endpoints require authentication
- [ ] HTTPS enabled and enforced
- [ ] Security headers configured (CSP, HSTS, X-Content-Type-Options)
- [ ] Rate limiting implemented on auth endpoints
- [ ] Input validation on all forms
- [ ] XSS protection (sanitize user-generated content)
- [ ] CSRF protection enabled
- [ ] Secrets in environment variables, not code
- [ ] Error messages don't leak system info
- [ ] Dependencies scanned for vulnerabilities
- [ ] Session timeout configured
- [ ] Strong password requirements enforced
- [ ] SQL injection prevention (parameterized queries/ORM)
- [ ] File upload restrictions (type, size, location)
- [ ] Logging doesn't capture sensitive data

---

**Version:** 1.0
**Last Updated:** October 7, 2025
**Optimized for:** Next.js 13+, React 18+, TypeScript 5+
