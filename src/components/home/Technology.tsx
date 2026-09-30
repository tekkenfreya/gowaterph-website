import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { BeakerIcon, FilterIcon, SignalIcon, SunIcon } from '@/components/ui/icons';

const steps = [
  {
    title: 'Multi-stage filtration',
    text: 'Sediment and carbon filters remove dirt, sediment, and chlorine.',
    Icon: FilterIcon,
  },
  {
    title: 'Reverse osmosis',
    text: 'An RO membrane removes dissolved salts, heavy metals, and chemicals.',
    Icon: BeakerIcon,
  },
  {
    title: 'UV sterilization',
    text: 'UV light sterilizes the water to eliminate microorganisms.',
    Icon: SunIcon,
  },
  {
    title: 'Smart dispensing',
    text: 'Touchscreen ordering, coin and QR payments, and SMS monitoring.',
    Icon: SignalIcon,
  },
];

const Technology = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-azure-50/70 to-white py-24 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div aria-hidden="true" className="absolute inset-10 rounded-full bg-gradient-to-br from-azure-200/70 to-iris-200/50 blur-3xl" />
            <div aria-hidden="true" className="absolute inset-4 rounded-full border border-white/80 bg-white/30" />
            <Image
              src="/images/visuals/droplet.webp"
              alt="Clean water droplet"
              width={700}
              height={700}
              className="relative mx-auto w-4/5 animate-float-slow"
            />
            <div className="glass absolute bottom-10 left-0 rounded-2xl px-5 py-4">
              <p className="text-2xl font-bold text-ink">99.9%</p>
              <p className="text-xs text-slate-500">Contaminant removal</p>
            </div>
            <div className="glass absolute top-12 right-0 rounded-2xl px-5 py-4">
              <p className="text-2xl font-bold text-ink">RO + UV</p>
              <p className="text-xs text-slate-500">Purified and sterilized</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Technology"
            title="How GoWater purifies every drop"
            subtitle="Our vending and dispenser systems use multi-stage filtration, reverse osmosis, and UV sterilization to produce clean, safe drinking water."
          />
          <ol className="mt-10 space-y-4">
            {steps.map(({ title, text, Icon }, index) => (
              <Reveal key={title} delay={index * 100}>
                <li className="glass flex items-start gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                    <Icon />
                  </span>
                  <span>
                    <span className="flex items-center gap-2 text-base font-bold text-ink">
                      <span className="text-xs font-semibold text-azure-500">0{index + 1}</span>
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-500">{text}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Technology;
