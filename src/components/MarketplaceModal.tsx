'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MarketplaceModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const categories = [
    { name: 'RO Filters', image: '/images/marketplace/RO filters.jpg' },
    { name: 'Coin Slot', image: '/images/marketplace/coinslot.webp' },
    { name: 'HMI Screen', image: '/images/marketplace/hmi.jpg' },
    { name: 'Water Sensor', image: '/images/marketplace/watersensor.jpg' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show modal when user scrolls down to about 70% of viewport height
      if (window.scrollY > window.innerHeight * 0.7 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="rounded-2xl shadow-2xl max-w-2xl w-full p-8 pointer-events-auto animate-slide-up"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            background: 'rgba(255, 255, 255, 0.75)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Need Parts or Supplies?
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Authorized GoWater replacement parts and accessories available exclusively for our vendo and dispenser owners.
            </p>
            <span className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-sm font-semibold">
              Web Marketplace Coming Soon
            </span>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg border border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg"
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  background: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                <div className="relative h-40" style={{
                  background: 'rgba(255, 255, 255, 0.4)',
                }}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-t border-white/30 p-3" style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                }}>
                  <p className="text-slate-800 font-semibold text-sm text-center">{category.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold transition-colors"
            >
              Maybe Later
            </button>
            <Link
              href="/contact"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default MarketplaceModal;
