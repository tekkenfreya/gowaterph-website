# Claude Development Rules - General Template

> This is a general-purpose template for AI-assisted development. Customize for your specific project needs.

## Golden Rule
- **Never make irreversible or project-wide changes without explicit approval.** Always choose the safest, simplest option.
- **When in doubt, ask first.** It's better to clarify than to assume and make mistakes.

## Workflow
1. **Understand First** - Carefully read the problem and scan the codebase for relevant files before proposing solutions.
2. **Plan & Document** - Write a clear plan in `tasks/todo.md` with checklist items.
3. **Get Approval** - Share the plan for approval **before** starting implementation.
4. **Work Incrementally** - Complete tasks step by step, marking each as done in `todo.md`.
5. **Explain Changes** - After each step, provide a brief explanation of what was changed and why.
6. **Never Skip Steps** - Don't skip planned steps unless explicitly approved.
7. **Ask When Unclear** - If something is ambiguous, pause and ask before continuing.

## Code Quality & Safety
8. **Match Existing Style** - Follow the project's naming conventions, formatting, and structure.
9. **Keep It Simple** - Make minimal, focused changes. Avoid large refactors or complex edits.
10. **Use Strong Typing** - Prefer explicit types (TypeScript interfaces, Python type hints, C++ templates) over implicit/dynamic types.
11. **Always Handle Errors** - Add try/catch blocks, validate input, provide fallbacks.
12. **Don't Break Things** - Don't remove or refactor existing code unless it's part of the approved task.
13. **Use Existing Patterns** - When calling functions or services, use the exact existing names and signatures. Don't invent new patterns.
14. **Test Your Changes** - Before marking complete, verify the code works as expected.

## Communication
15. **Explain Why, Not Just What** - Don't just say "fixed bug"; explain why the bug occurred and how your fix addresses the root cause.
16. **Provide Progress Updates** - For tasks taking > 15 minutes, give mid-progress status updates.
17. **Clarify Assumptions** - If you're making assumptions about requirements, state them explicitly.
18. **Be Concise** - Keep explanations clear and to-the-point. Avoid unnecessary verbosity.

## Version Control (Git)
19. **One Logical Change Per Commit** - Each commit should be small, focused, and reviewable.
20. **Use Conventional Commits** - Format: `type(scope): message`
    - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
    - Example: `fix(auth): handle expired tokens correctly`
21. **No AI Mentions** - Don't mention Claude, AI, or code generation in commit messages.
22. **Don't Commit Docs to Main** - Keep `.md` documentation files out of main branch unless explicitly requested.
23. **No Force Pushes** - Never force-push unless explicitly approved.
24. **Write Good Commit Messages** - Explain *why* the change was made, not just *what* changed.

## Dependencies & Configuration
25. **Ask Before Adding Dependencies** - Propose new dependencies for approval before installing.
26. **Don't Touch Config Without Permission** - Don't modify `package.json`, build configs, or environment files unless asked.
27. **Use Environment Variables for Secrets** - Never hardcode API keys, passwords, or tokens.
28. **Document Required Environment Variables** - Keep a list of required env vars in README or .env.example.

## Security Best Practices
29. **Fail Securely** - When security checks fail, deny access (don't grant by default).
30. **Validate All Input** - Never trust user input. Validate, sanitize, and check types.
31. **Use Strong Authentication** - Implement proper token-based auth, never rely on client-side only checks.
32. **Hash Sensitive Data** - Use bcrypt/argon2 for passwords, proper encryption for sensitive data.
33. **Log Safely** - Don't log passwords, tokens, or full user objects. Sanitize error messages in production.
34. **Keep Secrets Secret** - Never commit secrets. Use .env files (git ignored) or secret management services.

## Task Management
35. **Keep TODO Updated** - `tasks/todo.md` should reflect current progress at all times.
36. **Mark Blockers** - Clearly indicate when waiting for approval or external input.
37. **Break Down Large Tasks** - Split big features into smaller, manageable subtasks.

## Critical Rules (from GoWater battle-tested lessons)

### 0. Use Opus 4.6

- **Always use Claude Opus 4.6** as the model for all AI-assisted development in this project
- Do not downgrade to Sonnet or Haiku for code generation tasks

### 1. No AI Attribution

- **Never mention AI, Claude, or any AI assistant** in commit messages, code comments, documentation, or anywhere in the codebase
- **No Co-Authored-By lines** referencing AI in commits
- Keep all contributions anonymous as standard developer work

### 2. Always Read Documentation First

Before making ANY changes, read the relevant docs and reference files in the project. Never assume — verify.

### 3. Never Hallucinate

- **Database fields:** Always use exact field names from schema or reference docs
- **API endpoints:** Always verify endpoints exist before calling them
- **Types:** Always import from shared types or check existing type definitions
- **Components:** Check if component exists before creating new ones

### 4. Naming Conventions

| Context                 | Convention | Example                                      |
| ----------------------- | ---------- | -------------------------------------------- |
| Database fields         | snake_case | `user_id`, `check_in_time`, `break_duration` |
| TypeScript/JS variables | camelCase  | `userId`, `checkInTime`, `breakDuration`     |
| React components        | PascalCase | `TaskCard`, `AttendanceModal`                |
| CSS classes             | kebab-case | `task-card`, `modal-header`                  |
| API routes              | kebab-case | `/api/attendance/edit-requests`              |
| File names (components) | PascalCase | `TaskCard.tsx`                               |
| File names (utilities)  | camelCase  | `formatDate.ts`                              |

### 5. Plan Before Executing

- State the full implementation plan before writing any code or modifying any file
- Get explicit approval before proceeding
- If scope changes mid-implementation, stop and re-plan

### 6. Production-Grade Clean Code

- No hacks, no shortcuts, no commented-out code, no dead code
- No bloating — do not add dependencies, abstractions, or utilities unless directly required
- No over-engineering — solve only what is asked, nothing more
- **Simple tasks require simple solutions** — if a feature is adding items to an existing list, don't create new pages/routes/layouts. Follow the existing pattern
- Before creating new files, ask: can this be done by adding to an existing file? If yes, do that
- Before creating new routes, ask: does the existing page already handle similar content? If yes, add to it
- Don't create separate pages for content that belongs in the same view
- No `any` types — use exact types or define a precise local interface
- No `console.log` left in production code — use proper logging
- Every function does one thing

### 7. AI Temperature — Precision First

- **Development approach:** Claude must be precision-first and deterministic — follow existing patterns exactly, no creative liberties, no unsolicited refactoring or improvements

## Project-Specific Rules
> Add your project-specific rules here:
> - Programming language conventions
> - Framework-specific patterns
> - Team workflows
> - Custom tools or scripts

## Common Pitfalls to Avoid

1. **Don't create duplicate components** - Check existing components/references first
2. **Don't hardcode API URLs** - Use environment variables
3. **Don't skip loading states** - Always show loading indicators
4. **Don't ignore errors** - Always handle and display errors
5. **Don't forget type safety** - Always define proper TypeScript types
6. **Don't create separate pages/routes for content that belongs in an existing view** - Follow existing patterns
7. **Don't assume `CREATE TABLE IF NOT EXISTS` applies constraints** - If the table already exists, PostgreSQL skips the entire statement including all constraints. Add constraints separately
8. **Single migration file** - All DB migrations should be idempotent (safe to run multiple times)

## Quality Checklist (Before Completing Any Task)
- [ ] Code follows existing style and conventions
- [ ] All functions/methods have appropriate error handling
- [ ] Input validation is in place
- [ ] No hardcoded secrets or credentials
- [ ] Changes are minimal and focused
- [ ] Code is tested and works as expected
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear and follow format
- [ ] TODO list is updated
- [ ] No new security vulnerabilities introduced

---

## Tips for Effective AI-Assisted Development

### For the Developer:
1. **Be Specific** - The more specific your instructions, the better the results.
2. **Provide Context** - Share relevant background, constraints, and goals.
3. **Review Everything** - Always review AI-generated code before committing.
4. **Ask Questions** - If the AI's approach seems off, ask for clarification or alternatives.
5. **Iterate** - Don't expect perfection on first try. Refine through feedback.

### For the AI:
1. **Understand Before Coding** - Read existing code patterns before proposing changes.
2. **Prefer Existing Patterns** - Use what's already there over introducing new patterns.
3. **Explain Trade-offs** - When multiple solutions exist, explain pros/cons.
4. **Admit Uncertainty** - If you're not sure, say so rather than guessing.
5. **Stay Focused** - Stick to the task at hand, avoid scope creep.

---

## Customization Guide

This template should be customized for:
- **Project Type** - Web app, CLI tool, library, game, etc.
- **Tech Stack** - Specific frameworks, languages, tools
- **Team Size** - Solo developer vs. team collaboration
- **Project Phase** - Prototype, MVP, production, maintenance

See the specialized templates for:
- [Web Applications](./CLAUDE_WEB.md)
- [Python Projects](./CLAUDE_PYTHON.md)
- [Lua Scripting](./CLAUDE_LUA.md)
- [C++ Development](./CLAUDE_CPP.md)

---

**Version:** 1.1
**Last Updated:** March 23, 2026
**Based on:** Real-world lessons from GoWater project security audit + GoWater monorepo critical rules
