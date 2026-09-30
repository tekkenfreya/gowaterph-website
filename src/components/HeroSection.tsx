import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, LeafIcon, ShieldCheckIcon, SignalIcon } from '@/components/ui/icons';

const stats = [
  { value: '2017', label: 'Serving communities since' },
  { value: '99.9%', label: 'Contaminant removal' },
  { value: '24/7', label: 'Automated operation' },
  { value: 'RO + UV', label: 'Multi-stage purification' },
];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36 lg:pb-24">
      {/* Soft water backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image src="/images/visuals/hero-water.webp" alt="" fill loading="eager" sizes="100vw" className="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-azure-200/40 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-azure-500" />
            Next-generation water technology
          </span>
          <h1 className="h-display mt-6">
            Sustainable <span className="text-gradient">drinking water</span> for all.
          </h1>
          <p className="text-lead mt-6 max-w-xl">
            Since 2017, NXTLVL Water Technology has delivered sustainable water solutions to coastal and island communities across the Philippines — solving the country&apos;s potable water issues one island at a time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Become a partner
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/products" className="btn-secondary">
              Explore products
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto flex h-[460px] w-full max-w-[540px] items-center justify-center sm:h-[560px]">
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-azure-100 via-white to-iris-100 shadow-soft sm:h-[430px] sm:w-[430px]" />
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white sm:h-[520px] sm:w-[520px]" />
            <Image
              src="/images/visuals/bubbles.webp"
              alt=""
              aria-hidden="true"
              width={900}
              height={900}
              className="absolute top-2 right-0 w-24 animate-float sm:w-32"
            />
            <Image
              src="/images/products/smart-vendo-machine.webp"
              alt="GoWater Smart Vendo water vending machine"
              width={542}
              height={1341}
              loading="eager"
              fetchPriority="high"
              className="relative h-[400px] w-auto animate-float-slow drop-shadow-[0_30px_35px_rgba(13,27,62,0.22)] sm:h-[500px]"
            />

            <div className="glass absolute top-20 left-0 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-500/10 text-azure-600">
                <ShieldCheckIcon />
              </span>
              <span>
                <span className="block text-xs text-slate-500">RO filtration</span>
                <span className="block text-sm font-bold text-ink">99.9% pure</span>
              </span>
            </div>
            <div className="glass absolute top-1/2 right-0 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-iris-500/10 text-iris-600">
                <SignalIcon />
              </span>
              <span>
                <span className="block text-xs text-slate-500">Smart IoT</span>
                <span className="block text-sm font-bold text-ink">Enabled</span>
              </span>
            </div>
            <div className="glass absolute bottom-16 left-6 hidden items-center gap-3 rounded-2xl px-4 py-3 sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <LeafIcon />
              </span>
              <span>
                <span className="block text-xs text-slate-500">Eco-friendly</span>
                <span className="block text-sm font-bold text-ink">Sustainable</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-12 lg:mt-6">
        <dl className="glass grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 sm:px-10 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse items-center justify-end text-center lg:px-6">
              <dt className="mt-1 text-sm text-slate-500">{stat.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
