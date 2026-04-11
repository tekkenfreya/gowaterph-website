'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  tagline: string;
  image: string;
  priceFrom: string;
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
      name: 'Cold Flow Dispenser',
      tagline: 'Everyday Cold Water Refill',
      image: '/images/products/cold-flow.png',
      priceFrom: 'Php 22,999 + VAT',
      description:
        'A reliable cold water dispenser with 3-stage filtration for homes, offices, and commercial use. Designed for 24/7 automated operation with multiple payment options and SMS remote monitoring.',
      specifications: [
        '24/7 Automated Operation',
        'Cold Water Refill',
        '3-Stage Filtration System',
        'Touch Screen Ordering',
        'Multiple Payment Options',
        'SMS Remote Monitoring',
      ],
      variants: ['Gallon Type', 'Direct Piping Type'],
      badge: 'Starter',
      badgeColor: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      name: 'Smart Vendo',
      tagline: 'Automated Water Vending Machine',
      image: '/images/products/smart-vendo.png',
      priceFrom: 'Php 79,999 + VAT',
      description:
        'Fully automated water vending machine with RO filtration, HMI touchscreen, multi-payment, and SMS-based remote monitoring. Ideal for barangays, LGUs, schools, and high-traffic community areas.',
      specifications: [
        'Reverse Osmosis Filtration',
        'Touch Screen Ordering',
        'Multi-Payment (Coins / QR)',
        'SMS Sales & Alert Monitoring',
        '30L Food Grade Stainless Tank',
        'Customizable Branding',
      ],
      variants: ['HMI + Coin Slot', 'HMI Only', 'Coin Slot Only'],
      badge: 'Popular',
      badgeColor: 'from-blue-500 to-indigo-600',
    },
    {
      id: 3,
      name: 'Quad Flow Dispenser',
      tagline: '6-Stage Filtration with Cold Water',
      image: '/images/products/quad-flow.png',
      priceFrom: 'Php 188,888 + VAT',
      description:
        'Compact automated water dispenser with 6-stage advanced filtration, cold water capability, and touchscreen ordering. Built for schools, offices, LGUs, condominiums, and community stations.',
      specifications: [
        '6 Stages Advanced Filtration',
        'Cold Water Refill',
        'RO + UV Light Sterilizer',
        'Touch Screen Ordering',
        'Multiple Payment Options',
        'Energy Efficient',
      ],
      variants: ['HMI Interface'],
      badge: 'Premium',
      badgeColor: 'from-purple-500 to-fuchsia-600',
    },
    {
      id: 4,
      name: 'Water Filtration — Basic',
      tagline: 'Multi-media + Carbon',
      image: '/images/products/water-filtration-basic.png',
      priceFrom: 'Php 29,999 + VAT',
      description:
        'Multi-stage household filtration with multimedia, 10 & 5 micron sediment, and carbon filters. For non-potable household applications — washing, cleaning, and general domestic use.',
      specifications: [
        '6FRP Multimedia Filter',
        '4 Stages Cartridge Filtration',
        'Removes Sediment & Chlorine',
        'Manual / Automatic Backwash',
        'Non-Potable Household Water',
        '1 Year Service Warranty',
      ],
      variants: ['Manual Head', 'Automatic Head'],
      badge: 'Filtration',
      badgeColor: 'from-teal-500 to-cyan-600',
    },
    {
      id: 5,
      name: 'Water Filtration — With Softener',
      tagline: 'Multi-media + Softener + Carbon',
      image: '/images/products/water-filtration-softener.png',
      priceFrom: 'Php 49,999 + VAT',
      description:
        'Advanced filtration with water softener for hard water areas. Reduces calcium, magnesium, chlorine, and sediment buildup. Non-potable — ideal for households, laundry, and general domestic use.',
      specifications: [
        'FRP Multimedia Filter',
        'FRP Softener Filter',
        'FRP Active Carbon Filter',
        '4 Stages Cartridge Filtration',
        'Brine Tank Included',
        'Prevents Scale Buildup',
      ],
      variants: ['Manual Head', 'Automatic Head'],
      badge: 'Softener',
      badgeColor: 'from-emerald-500 to-green-600',
    },
    {
      id: 6,
      name: 'Reverse Osmosis Purifier',
      tagline: 'Potable Drinking Water',
      image: '/images/products/reverse-osmosis.png',
      priceFrom: 'Php 18,999 + VAT',
      description:
        'Reverse Osmosis purification system producing clean, high-purity drinking water. Removes dissolved salts, heavy metals, chemicals, bacteria, and viruses — safe for drinking and beverage use.',
      specifications: [
        '3-Stage Pre-Filtration',
        'RO Membrane',
        'Post Carbon Filter',
        'UV Light Sterilizer',
        'Booster Pump',
        'High / Low Pressure Switches',
      ],
      variants: ['Standard'],
      badge: 'Potable',
      badgeColor: 'from-sky-500 to-blue-600',
    },
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
              Professional water vending, filtration, and purification solutions engineered for reliability.
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
                Six models covering vending, filtration, and drinking water purification.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-56 mb-6 bg-white rounded-xl overflow-hidden border border-slate-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${product.badgeColor} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {product.name}
                  </h3>

                  <p className="text-cyan-600 font-semibold text-sm mb-3">
                    {product.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-xs text-slate-500 font-medium">Starts at</span>
                    <p className="text-lg font-bold text-slate-900">{product.priceFrom}</p>
                  </div>

                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-5">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg
                            className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0"
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
                  <div className="mb-5 pb-5 border-b border-slate-300">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                      Available Models
                    </h4>
                    <div className="flex flex-wrap gap-2">
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
                    className="mt-auto w-full inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
