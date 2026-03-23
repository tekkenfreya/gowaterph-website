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
                    <strong>GoWater by NXTLVL Water Technology Inc.</strong> is dedicated to transforming access to clean, convenient, and affordable drinking water while actively promoting sustainability.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Advanced Technology</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our innovative GoWater vendo machines harness advanced water purification technology, including Reverse Osmosis (RO). This filtration process uses a semipermeable membrane to effectively remove contaminants, ensuring top-quality purity.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Environmental Impact</h3>
                  <p className="text-slate-700 leading-relaxed">
                    By providing clean, convenient, and affordable drinking water, GoWater machines offer a smarter alternative to traditional water sourcing methods. Our goal is to meet water demands while reducing environmental impact by eliminating plastic waste and promoting sustainable consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;