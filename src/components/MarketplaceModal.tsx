'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CloseIcon } from '@/components/ui/icons';

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
      <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm animate-fade-in" onClick={handleClose} />

      {/* Modal */}
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="pointer-events-auto relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-glass backdrop-blur-xl animate-slide-up sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-ink"
            aria-label="Close modal"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <div className="mb-6 text-center">
            <span className="eyebrow">Web marketplace coming soon</span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">Need parts or supplies?</h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-500">
              Authorized GoWater replacement parts and accessories available exclusively for our vendo and dispenser owners.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4">
            {categories.map((category) => (
              <div key={category.name} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-0.5 hover:shadow-card">
                <div className="relative h-32 bg-gradient-to-b from-azure-50 to-white sm:h-40">
                  <Image src={category.image} alt={category.name} fill sizes="(max-width: 640px) 50vw, 320px" className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                </div>
                <p className="border-t border-slate-100 p-3 text-center text-sm font-semibold text-ink">{category.name}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={handleClose} className="btn-secondary flex-1">
              Maybe later
            </button>
            <Link href="/contact" className="btn-primary flex-1">
              Contact us
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
