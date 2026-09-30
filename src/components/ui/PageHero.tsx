import Image from 'next/image';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src="/images/visuals/hero-water.webp" alt="" fill loading="eager" sizes="100vw" className="object-cover object-right opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-display mt-6">{title}</h1>
          {subtitle && <p className="text-lead mt-5 max-w-2xl">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
