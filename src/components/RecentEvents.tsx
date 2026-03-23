'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  category: string;
  articleLink?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Water Philippines Expo 2025",
    date: "March 19, 2025",
    location: "SMX Convention Center, Pasay City",
    description: "NXTLVL Water Technology participated in the Water Philippines Expo 2025, showcasing our innovative GoWater dispensers and advanced RO filtration technology. The event provided an excellent platform to connect with industry leaders and potential partners.",
    images: [
      "/images/Water Philippines Expo/1.JPG",
      "/images/Water Philippines Expo/2.jpg",
      "/images/Water Philippines Expo/3.jpg",
      "/images/Water Philippines Expo/4.jpg"
    ],
    category: "Expo",
    articleLink: "/events/water-philippines-expo-2025"
  },
  {
    id: 2,
    title: "Franchise Pinas 2025",
    date: "July 5-6, 2025",
    location: "SMX Convention Center Clark",
    description: "Join us at Franchise Pinas 2025, the premier franchising expo in the Philippines. Discover exciting franchise opportunities with GoWater and learn how you can be part of the sustainable water revolution.",
    images: [
      "/images/Franchise Pinas 2025/1.jpg",
      "/images/Franchise Pinas 2025/2.jpg",
      "/images/Franchise Pinas 2025/3.jpg",
      "/images/Franchise Pinas 2025/4.jpg"
    ],
    category: "Franchise",
    articleLink: "/events/franchise-pinas-2025"
  },
  {
    id: 3,
    title: "Liga ng Barangay",
    date: "Monthly Event",
    location: "World Trade Center, Pasay City",
    description: "Community engagement with Liga ng Barangay held monthly at the World Trade Center. We're bringing clean water access to local communities through our GoWater dispensing solutions.",
    images: [
      "/images/Liga ng Barangay/1.png",
      "/images/Liga ng Barangay/2.png",
      "/images/Liga ng Barangay/3.png",
      "/images/Liga ng Barangay/4.png",
      "/images/Liga ng Barangay/5.png"
    ],
    category: "Community",
    articleLink: "/events/liga-ng-barangay"
  },
  {
    id: 4,
    title: "Demo for IMES Group",
    date: "August 29, 2025",
    location: "IMES Group Corporation",
    description: "Live demonstration of GoWater technology for IMES Group, showcasing our advanced water purification systems, smart IoT features, and sustainable dispensing solutions.",
    images: [
      "/images/Demo for IMES Group/1.jpg",
      "/images/Demo for IMES Group/2.JPG",
      "/images/Demo for IMES Group/3.JPG",
      "/images/Demo for IMES Group/4.JPG"
    ],
    category: "Demo",
    articleLink: "/events/demo-for-imes-group"
  }
];

const RecentEvents = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  const handleNextImage = (eventId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) + 1) % totalImages
    }));
  };

  const handlePrevImage = (eventId: number, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [eventId]: ((prev[eventId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-sky-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Recent Events
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover how we're making an impact through expos, partnerships, and community engagement
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-12">
          {events.map((event) => {
            const currentImageIndex = activeImageIndex[event.id] || 0;

            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Event Header */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-cyan-50">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block px-5 py-2 bg-white text-cyan-700 text-sm font-bold rounded-full uppercase tracking-wide">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 p-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={event.images[currentImageIndex]}
                        alt={`${event.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      {/* Navigation Arrows */}
                      {event.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handlePrevImage(event.id, event.images.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                            aria-label="Previous image"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleNextImage(event.id, event.images.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                            aria-label="Next image"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-slate-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentImageIndex + 1} / {event.images.length}
                      </div>
                    </div>

                    {/* Thumbnail Indicators */}
                    <div className="flex gap-2 mt-4 justify-center">
                      {event.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(prev => ({ ...prev, [event.id]: index }))}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? 'bg-cyan-600 w-8'
                              : 'bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex flex-col justify-center space-y-4">
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {event.description}
                    </p>

                    <Link
                      href={event.articleLink || "/events"}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      {event.articleLink ? 'Read Full Article' : 'View Full Details'}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-16">
          <Link
            href="/events"
            className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
