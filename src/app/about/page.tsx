'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-200"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
              About GoWater
            </h1>
            <p className="text-xl text-slate-700">
              Transforming water access through innovative technology and sustainable practices.
            </p>
          </div>
        </section>

        {/* Management Team Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-3">Management Team</h2>
              <p className="text-lg text-slate-600">The leadership behind NXTLVL Water Technology.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Paco Caparas', role: 'CEO', image: '/images/team/paco-caparas.png' },
                { name: 'John Jadczak', role: 'CFO', image: '/images/team/john-jadczak.png' },
                { name: 'Earl Lim', role: 'CTO', image: '/images/team/earl-lim.png' },
                { name: 'Derya Tanghe', role: 'CMO', image: '/images/team/derya-tanghe.png' },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                  <p className="text-sm text-cyan-600 font-semibold uppercase tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-20 overflow-hidden bg-white">

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Founders Image */}
              <div className="relative">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-lg">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src="/images/founders-2.png"
                      alt="NXTLVL Water Technology Team"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">NXTLVL Water Technology Team</h3>
                    <p className="text-slate-600">Visionaries committed to sustainable water solutions</p>
                  </div>
                </div>
              </div>

              {/* Company Story Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong>NXTLVL Water Technology, Inc.</strong> provides sustainable water solutions for coastal and island communities — solving the country&apos;s potable water issues one island at a time. Since 2017, we have served several communities around the Philippines through innovative renewable technologies that use the unlimited water and power resources of the sea and sun to supply reliable, top-quality drinking water.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Advanced Technology</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our GoWater vending and dispenser systems use multi-stage filtration, Reverse Osmosis, and UV sterilization to remove sediments, chemicals, and microorganisms — producing clean, safe drinking water suitable for homes, offices, LGUs, schools, and community water stations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Environmental Impact</h3>
                  <p className="text-slate-700 leading-relaxed">
                    By providing clean, convenient, and affordable drinking water, GoWater machines offer a smarter alternative to traditional bottled water — reducing plastic waste and promoting sustainable consumption at the community level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Commitment Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Commitment to the SDGs</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                Water is the heart of social development, human health, economic growth, and environmental conservation — making it the very core of the UN 2030 Agenda for Sustainable Development. NXTLVL Water Technology, Inc. is fully committed to helping solve four core Sustainable Development Goals through service and technologies that are useful, replicable, sustainable, and adaptable to climate extremities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '6', title: 'Clean Water & Sanitation', color: 'from-cyan-500 to-blue-500' },
                { num: '8', title: 'Decent Work & Economic Growth', color: 'from-red-500 to-rose-600' },
                { num: '11', title: 'Sustainable Cities & Communities', color: 'from-amber-500 to-orange-500' },
                { num: '13', title: 'Climate Action', color: 'from-emerald-500 to-green-600' },
              ].map((sdg) => (
                <div key={sdg.num} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${sdg.color} text-white text-2xl font-bold mb-3`}>
                    {sdg.num}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 leading-snug">{sdg.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;