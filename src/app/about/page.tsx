import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import { LeafIcon, ShieldCheckIcon } from '@/components/ui/icons';

const team = [
  { name: 'Paco Caparas', role: 'CEO', image: '/images/team/paco-caparas.png' },
  { name: 'John Jadczak', role: 'CFO', image: '/images/team/john-jadczak.png' },
  { name: 'Earl Lim', role: 'CTO', image: '/images/team/earl-lim.png' },
  { name: 'Derya Tanghe', role: 'CMO', image: '/images/team/derya-tanghe.png' },
];

// Official UN SDG colors
const sdgs = [
  { num: '6', title: 'Clean Water & Sanitation', color: '#26BDE2' },
  { num: '8', title: 'Decent Work & Economic Growth', color: '#A21942' },
  { num: '11', title: 'Sustainable Cities & Communities', color: '#FD9D24' },
  { num: '13', title: 'Climate Action', color: '#3F7E44' },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          eyebrow="About us"
          title={
            <>
              Sustainable water solutions, <span className="text-gradient">one island at a time</span>
            </>
          }
          subtitle="NXTLVL Water Technology, Inc. provides sustainable water solutions for coastal and island communities across the Philippines."
        />

        <section className="pb-20 sm:pb-24">
          <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <figure className="card-soft overflow-hidden p-3">
                <div className="relative aspect-[8/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/founders-2.png"
                    alt="NXTLVL Water Technology Team"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 pt-5 pb-3">
                  <p className="font-bold text-ink">NXTLVL Water Technology Team</p>
                  <p className="mt-1 text-sm text-slate-500">Visionaries committed to sustainable water solutions</p>
                </figcaption>
              </figure>
            </Reveal>

            <div>
              <span className="eyebrow">Our mission</span>
              <p className="mt-5 text-xl leading-relaxed text-slate-700">
                <strong className="font-semibold text-ink">NXTLVL Water Technology, Inc.</strong>{' '}provides sustainable water solutions for coastal and island communities — solving the country&apos;s potable water issues one island at a time. Since 2017, we have served several communities around the Philippines through innovative renewable technologies that use the unlimited water and power resources of the sea and sun to supply reliable, top-quality drinking water.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-3xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                    <ShieldCheckIcon />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-ink">Advanced Technology</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Our GoWater vending and dispenser systems use multi-stage filtration, Reverse Osmosis, and UV sterilization to remove sediments, chemicals, and microorganisms — producing clean, safe drinking water suitable for homes, offices, LGUs, schools, and community water stations.
                  </p>
                </div>
                <div className="glass rounded-3xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-azure-600 text-white shadow-soft">
                    <LeafIcon />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-ink">Environmental Impact</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    By providing clean, convenient, and affordable drinking water, GoWater machines offer a smarter alternative to traditional bottled water — reducing plastic waste and promoting sustainable consumption at the community level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-azure-50/70 to-white py-20 sm:py-24">
          <div className="container-page">
            <SectionHeading eyebrow="Leadership" title="Management team" subtitle="The leadership behind NXTLVL Water Technology." />
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 100}>
                  <div className="card-soft p-3 text-center">
                    <div className="relative mx-auto aspect-[2/3] w-full max-w-[196px] overflow-hidden rounded-2xl bg-azure-50">
                      <Image src={member.image} alt={member.name} fill sizes="196px" className="object-cover" />
                    </div>
                    <h3 className="mt-4 font-bold text-ink">{member.name}</h3>
                    <p className="mt-0.5 mb-2 text-xs font-semibold tracking-wider text-azure-600 uppercase">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Sustainability</span>
              <h2 className="h-section mt-5">Our commitment to the SDGs</h2>
              <p className="text-lead mt-4">
                Water is the heart of social development, human health, economic growth, and environmental conservation — making it the very core of the UN 2030 Agenda for Sustainable Development. NXTLVL Water Technology, Inc. is fully committed to helping solve four core Sustainable Development Goals through service and technologies that are useful, replicable, sustainable, and adaptable to climate extremities.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
              {sdgs.map((sdg, index) => (
                <Reveal key={sdg.num} delay={index * 100} className="h-full">
                  <div className="card-soft flex h-full flex-col items-start p-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold text-white" style={{ backgroundColor: sdg.color }}>
                      {sdg.num}
                    </span>
                    <p className="mt-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">SDG {sdg.num}</p>
                    <h3 className="mt-1 font-bold leading-snug text-ink">{sdg.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Let's work together" text="Bring clean, safe drinking water to your community or business." buttonLabel="Contact us" />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
