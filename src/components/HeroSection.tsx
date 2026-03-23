'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glassy Crystallized Background */}
      <div className="absolute inset-0 z-0">
        {/* Base crystal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-200"></div>

        {/* Multi-layered glass texture */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-cyan-200/15 to-blue-300/25"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-sky-100/30 to-white/10"></div>
        </div>

        {/* Crystal-like geometric overlays */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/30 to-cyan-200/20"
               style={{ clipPath: 'polygon(0 0, 80% 0, 100% 60%, 40% 100%, 0 80%)' }}></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-tl from-blue-100/40 to-white/20"
               style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)' }}></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-sky-200/30 to-transparent"
               style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 80% 0, 0 40%)' }}></div>
        </div>

        {/* Clean water ripples */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-cyan-300/40 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 border border-blue-200/50 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        </div>

        {/* Clean water particles/droplets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full bg-white/40 w-2 h-2 left-[15%] top-[25%] water-bubble-float" style={{ animationDelay: '0s' }} />
          <div className="absolute rounded-full bg-cyan-100/60 w-3 h-3 left-[75%] top-[20%] water-bubble-sway" style={{ animationDelay: '1.5s' }} />
          <div className="absolute rounded-full bg-blue-100/50 w-1.5 h-1.5 left-[30%] top-[65%] water-bubble-float" style={{ animationDelay: '2.8s' }} />
          <div className="absolute rounded-full bg-white/50 w-2.5 h-2.5 left-[85%] top-[75%] water-bubble-sway" style={{ animationDelay: '1s' }} />
          <div className="absolute rounded-full bg-sky-100/60 w-2 h-2 left-[50%] top-[35%] water-bubble-float" style={{ animationDelay: '3.2s' }} />
          <div className="absolute rounded-full bg-cyan-200/40 w-1 h-1 left-[20%] top-[85%] water-bubble-sway" style={{ animationDelay: '2.5s' }} />
          <div className="absolute rounded-full bg-white/60 w-3 h-3 left-[90%] top-[45%] water-bubble-float" style={{ animationDelay: '4s' }} />
          <div className="absolute rounded-full bg-blue-50/70 w-1.5 h-1.5 left-[65%] top-[80%] water-bubble-sway" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Glass shimmer and depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/8 to-sky-100/15" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-700 border border-cyan-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Next-Generation Water Technology
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
              Sustainable<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Drinking Water
              </span><br />
              For All
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
              We provide sustainable water solutions with the knowledge, technology and
              commitment needed to ensure clean drinking water for everyone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <button className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-slate-700 font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Column - Dispenser Image with Floating Cards */}
          <div className="relative flex items-center justify-center lg:justify-end min-h-[1200px]">
            <div className="relative">
              <Image
                src="/images/dispenser.png"
                alt="GoWater Dispenser"
                width={1800}
                height={3600}
                className="object-contain drop-shadow-2xl brightness-110"
                priority
              />
            </div>

            {/* Floating Feature Cards - VERY CLOSE TO DISPENSER WITH ANIMATIONS */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {/* Card 1 - Top Left - RO Filtration */}
              <div
                className="absolute top-[22%] left-[20%] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-cyan-100"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '0s'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">RO Filtration</p>
                    <p className="text-lg font-bold text-slate-800">99.9% Pure</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Middle Right - Smart IoT */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[18%] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-cyan-100"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '1.3s'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Smart IoT</p>
                    <p className="text-lg font-bold text-slate-800">Enabled</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Bottom Left - Eco-Friendly */}
              <div
                className="absolute bottom-[22%] left-[20%] bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-cyan-100"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '2.6s'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Eco-Friendly</p>
                    <p className="text-lg font-bold text-slate-800">Sustainable</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated water droplets around dispenser - SPHERE FORMATION */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top center */}
              <div className="absolute rounded-full bg-cyan-400/30 w-6 h-6 left-1/2 -translate-x-1/2 top-[5%] water-bubble-float" style={{ animationDelay: '0s' }} />

              {/* Top right */}
              <div className="absolute rounded-full bg-blue-400/30 w-4 h-4 right-[25%] top-[15%] water-bubble-sway" style={{ animationDelay: '1.2s' }} />

              {/* Right side */}
              <div className="absolute rounded-full bg-cyan-300/30 w-5 h-5 right-[15%] top-[35%] water-bubble-float" style={{ animationDelay: '2.5s' }} />
              <div className="absolute rounded-full bg-blue-300/30 w-3 h-3 right-[18%] top-1/2 -translate-y-1/2 water-bubble-sway" style={{ animationDelay: '3s' }} />
              <div className="absolute rounded-full bg-cyan-500/25 w-5 h-5 right-[20%] bottom-[35%] water-bubble-float" style={{ animationDelay: '0.5s' }} />

              {/* Bottom right */}
              <div className="absolute rounded-full bg-blue-500/25 w-4 h-4 right-[30%] bottom-[15%] water-bubble-sway" style={{ animationDelay: '1.8s' }} />

              {/* Bottom center */}
              <div className="absolute rounded-full bg-cyan-400/25 w-7 h-7 left-1/2 -translate-x-1/2 bottom-[8%] water-bubble-float" style={{ animationDelay: '3.5s' }} />

              {/* Bottom left */}
              <div className="absolute rounded-full bg-blue-400/25 w-6 h-6 left-[28%] bottom-[18%] water-bubble-sway" style={{ animationDelay: '0.8s' }} />

              {/* Left side */}
              <div className="absolute rounded-full bg-cyan-300/25 w-3 h-3 left-[16%] bottom-[38%] water-bubble-float" style={{ animationDelay: '2s' }} />
              <div className="absolute rounded-full bg-blue-300/25 w-5 h-5 left-[20%] top-1/2 -translate-y-1/2 water-bubble-sway" style={{ animationDelay: '4s' }} />
              <div className="absolute rounded-full bg-cyan-500/20 w-4 h-4 left-[18%] top-[32%] water-bubble-float" style={{ animationDelay: '1.5s' }} />

              {/* Top left */}
              <div className="absolute rounded-full bg-blue-500/20 w-4 h-4 left-[26%] top-[12%] water-bubble-sway" style={{ animationDelay: '2.8s' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;