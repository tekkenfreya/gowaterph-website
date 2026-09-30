import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h-section mt-5">{title}</h2>
      {subtitle && <p className="text-lead mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
