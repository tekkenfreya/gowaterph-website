'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  specifications: string[];
  variants: string[];
  badge: string;
  badgeColor: string;
}

const ProductsPage = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'GoWater Vendo Machine',
      tagline: 'Full-Featured Commercial Solution',
      description: 'Complete water vending system designed for high-traffic commercial locations. Equipped with advanced RO filtration, smart payment systems, and remote monitoring capabilities.',
      specifications: [
        'Reverse Osmosis (RO) Filtration System',
        'HMI Touch Screen Interface',
        'Multi-Payment: Coins + Online (GCash, Maya)',
        'SMS & Mobile App Sales Monitoring',
        'Water Level Sensor with SMS Alerts',
        'Real-Time Remote System Access'
      ],
      variants: ['Standard', 'Cold Water'],
      badge: 'Premium',
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Dispenser Model',
      tagline: 'Compact & Lightweight',
      description: 'Space-efficient cold water dispenser with smart monitoring features. Ideal for smaller locations requiring essential connectivity and real-time alerts.',
      specifications: [
        'Cold Water Dispensing Only',
        'HMI Touch Screen Interface',
        'Coin Slot Payment System',
        'SMS & Mobile App Sales Monitoring',
        'Water Level Sensor with SMS Alerts',
        'Compact Footprint Design'
      ],
      variants: ['Cold Water'],
      badge: 'Compact',
      badgeColor: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-200"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
              GoWater Product Range
            </h1>
            <p className="text-xl text-slate-700">
              Professional water vending solutions engineered for reliability and performance.
            </p>
          </div>
        </section>

        {/* Product Showcase Image */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/products.JPG"
                alt="GoWater Product Range"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Product Comparison Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-3">
                Choose Your Solution
              </h2>
              <p className="text-lg text-slate-600">
                Two models designed for different operational requirements.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${product.badgeColor} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-cyan-600 font-semibold mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                      Specifications
                    </h4>
                    <ul className="space-y-2.5">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg
                            className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Variants */}
                  <div className="mb-6 pb-6 border-b border-slate-300">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                      Available Models
                    </h4>
                    <div className="flex gap-2">
                      {product.variants.map((variant, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-md border border-slate-300"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Request Quote
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose GoWater */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Why Choose GoWater
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-3">
                  <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Premium Quality
                </h3>
                <p className="text-sm text-slate-600">
                  99.9% contaminant removal with multi-stage RO filtration
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Smart Monitoring
                </h3>
                <p className="text-sm text-slate-600">
                  Real-time IoT tracking and remote management capabilities
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Flexible Payment
                </h3>
                <p className="text-sm text-slate-600">
                  Coins and online payment options for user convenience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our team to discuss your water vending requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Request Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
