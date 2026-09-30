import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { ArrowRightIcon, CheckIcon, PhoneIcon } from '@/components/ui/icons';

const benefits = ['Passive income', 'Low overhead cost', 'High-demand product', 'Scalable business', 'Eco-friendly business', 'Brand support'];

const PartnerBand = () => {
  return (
    <section className="pt-4 pb-24 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <Image src="/images/visuals/wave.webp" alt="" fill sizes="100vw" className="-z-10 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-iris-900/70 via-azure-900/40 to-transparent" />

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="eyebrow-light">Partner program</span>
                <h2 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl">
                  Partner with us and grow your business
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-azure-100">
                  Start your own GoWater water station with the full support of our team.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-light">
                    Become a partner
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <a href="tel:+639681980041" className="btn-ghost-light whitespace-nowrap">
                    <PhoneIcon className="h-4 w-4" />
                    0968-198-0041
                  </a>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-xs font-medium text-white backdrop-blur sm:gap-3 sm:px-4 sm:py-4 sm:text-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PartnerBand;
