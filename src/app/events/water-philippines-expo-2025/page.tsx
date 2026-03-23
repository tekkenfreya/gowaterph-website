'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const WaterPhilippinesExpo2025 = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/Water Philippines Expo/1.JPG",
    "/images/Water Philippines Expo/2.jpg",
    "/images/Water Philippines Expo/3.jpg",
    "/images/Water Philippines Expo/4.jpg"
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-32 pb-20">
        {/* Article Header */}
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-200"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>

            <span className="inline-block px-4 py-2 bg-cyan-600 text-white text-sm font-bold rounded-full uppercase tracking-wide mb-4">
              Expo Event
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Water Philippines Expo 2025
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">March 19, 2025</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">SMX Convention Center, Pasay City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

          {/* Featured Image Gallery */}
          <div className="mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-100 mb-4">
              <Image
                src={images[selectedImage]}
                alt={`Water Philippines Expo 2025 - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index
                      ? 'ring-4 ring-cyan-600 scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              NXTLVL Water Technology Showcases Innovation at Water Philippines Expo 2025
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              NXTLVL Water Technology Inc. proudly participated in the Water Philippines Expo 2025, held at the prestigious SMX Convention Center in Pasay City. This premier event brought together industry leaders, innovators, and stakeholders in the water technology sector to showcase the latest advancements in water purification, sustainability, and smart dispensing solutions.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Showcasing GoWater Technology
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              At our booth, visitors experienced firsthand demonstrations of our cutting-edge GoWater dispensers featuring advanced Reverse Osmosis (RO) filtration technology. Our team highlighted how GoWater machines are revolutionizing access to clean, affordable drinking water while promoting environmental sustainability by reducing plastic waste.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 my-8">
              <p className="text-slate-800 font-medium italic">
                "The Water Philippines Expo provided an excellent platform to connect with industry leaders, potential partners, and customers who share our vision for sustainable water solutions. The response to our GoWater technology was overwhelming!"
              </p>
              <p className="text-slate-600 text-sm mt-2">— NXTLVL Water Technology Team</p>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Key Highlights
            </h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700">Live demonstrations of our advanced RO water purification technology</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700">Interactive displays showcasing smart IoT-enabled water dispensing systems</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700">Networking opportunities with industry leaders and potential business partners</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700">Educational sessions on sustainability and reducing environmental impact</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Looking Forward
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              The Water Philippines Expo 2025 reinforced our commitment to innovation and sustainability in the water technology sector. We're excited about the partnerships formed and the opportunities ahead to expand GoWater's reach in providing clean, accessible drinking water to communities across the Philippines.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Thank you to everyone who visited our booth and engaged with our team. Together, we're making a difference in ensuring sustainable water access for all.
            </p>
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Share this article</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/GowaterByNXTLVLWater"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gowater.vendo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">More Events</h3>
            <Link
              href="/"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Events
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaterPhilippinesExpo2025;
