'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-full border border-white/70 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? 'bg-white/85 shadow-glass' : 'bg-white/65 shadow-[0_4px_24px_-12px_rgba(13,27,62,0.15)]'
        }`}
      >
        <div className="flex h-16 items-center justify-between pr-2.5 pl-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="GoWater home">
            <Image src="/images/brand/gowater-mark.png" alt="" width={141} height={131} className="h-8 w-auto" priority />
            <Image src="/images/brand/gowater-wordmark.png" alt="GoWater" width={319} height={76} className="h-[22px] w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) ? 'bg-azure-50 text-azure-700' : 'text-slate-600 hover:bg-slate-50 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn-primary hidden px-5 py-2.5 lg:inline-flex">
              Get a quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-slate-100 lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/70 bg-white/95 p-3 shadow-glass backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-medium ${
                  isActive(link.href) ? 'bg-azure-50 text-azure-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-3 w-full">
            Get a quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
