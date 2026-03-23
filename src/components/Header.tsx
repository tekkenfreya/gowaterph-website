'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
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

  return (
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        background: 'rgba(255, 255, 255, 0.75)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '0 0 24px 24px',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation Group - Left Side */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/gowater new logo.png"
                alt="GoWater Logo"
                width={2000}
                height={2000}
                className="w-auto h-20"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              <Link
                href="/"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Our Products
              </Link>
              <Link
                href="/events"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* CTA Buttons - Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-slate-800 hover:bg-slate-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-full text-base transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-slate-800 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300 p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200">
              <Link
                href="/"
                className="bg-slate-100 text-slate-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-800 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-slate-800 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Our Products
              </Link>
              <Link
                href="/events"
                className="text-slate-800 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-slate-800 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
              <div className="border-t border-slate-200 pt-3 mt-3 space-y-2">
                <Link
                  href="/contact"
                  className="text-slate-800 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white block px-3 py-2 rounded-full text-base font-medium text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;