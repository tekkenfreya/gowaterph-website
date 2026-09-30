'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@/components/ui/icons';

interface EventGalleryProps {
  images: string[];
  title: string;
}

const EventGallery = ({ images, title }: EventGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const go = (step: number) => setCurrent((index) => (index + step + total) % total);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink shadow-card sm:aspect-[16/10]">
        {/* Blurred copy fills the frame so portrait and landscape photos both look intentional */}
        <Image src={images[current]} alt="" aria-hidden="true" fill sizes="100vw" className="scale-110 object-cover opacity-60 blur-2xl" />
        <Image
          src={images[current]}
          alt={`${title} - photo ${current + 1} of ${total}`}
          fill
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-lg backdrop-blur transition hover:bg-white sm:left-5"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-lg backdrop-blur transition hover:bg-white sm:right-5"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </>
        )}
        <span className="absolute right-4 bottom-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {current + 1} / {total}
        </span>
      </div>

      {total > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === current}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl transition sm:h-20 sm:w-28 ${
                index === current ? 'ring-2 ring-azure-500 ring-offset-2' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={image} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventGallery;
