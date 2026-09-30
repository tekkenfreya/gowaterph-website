import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { ArrowRightIcon, PhoneIcon } from '@/components/ui/icons';

interface CtaBandProps {
  title: string;
  text: string;
  buttonLabel?: string;
}

const CtaBand = ({ title, text, buttonLabel = 'Request a quote' }: CtaBandProps) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12 lg:py-16">
            <Image src="/images/visuals/wave.webp" alt="" fill sizes="100vw" className="-z-10 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-iris-900/40" />
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-azure-100">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-light">
                {buttonLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href="tel:+639681980041" className="btn-ghost-light whitespace-nowrap">
                <PhoneIcon className="h-4 w-4" />
                0968-198-0041
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
