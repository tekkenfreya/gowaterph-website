'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  articleLink?: string;
}

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Water Philippines Expo 2025",
      date: "March 19, 2025",
      description: "NXTLVL Water Technology participated in the Water Philippines Expo 2025 at SMX Convention Center, Pasay City, showcasing our innovative GoWater dispensers and advanced RO filtration technology.",
      image: "/images/Water Philippines Expo/1.JPG",
      category: "Expo",
      articleLink: "/events/water-philippines-expo-2025"
    },
    {
      id: 2,
      title: "Franchise Pinas 2025",
      date: "July 5-6, 2025",
      description: "Join us at Franchise Pinas 2025 at SMX Convention Center Clark, the premier franchising expo in the Philippines. Discover exciting franchise opportunities with GoWater.",
      image: "/images/Franchise Pinas 2025/1.jpg",
      category: "Franchise",
      articleLink: "/events/franchise-pinas-2025"
    },
    {
      id: 3,
      title: "Liga ng Barangay",
      date: "Monthly Event",
      description: "Community engagement with Liga ng Barangay held monthly at the World Trade Center. We're bringing clean water access to local communities through our GoWater dispensing solutions.",
      image: "/images/Liga ng Barangay/1.png",
      category: "Community",
      articleLink: "/events/liga-ng-barangay"
    },
    {
      id: 4,
      title: "Demo for IMES Group",
      date: "August 29, 2025",
      description: "Live demonstration of GoWater technology for IMES Group, showcasing our advanced water purification systems, smart IoT features, and sustainable dispensing solutions.",
      image: "/images/Demo for IMES Group/1.jpg",
      category: "Demo",
      articleLink: "/events/demo-for-imes-group"
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
              Events & Initiatives
            </h1>
            <p className="text-xl text-slate-700">
              Stay updated with our latest events, community initiatives, and business opportunities.
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => {
                const CardContent = (
                  <>
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-sm text-cyan-600 font-semibold mb-2">{event.date}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                      <p className="text-slate-600 text-sm line-clamp-3">
                        {event.description}
                      </p>
                      <div className="mt-4 flex items-center text-cyan-600 text-sm font-semibold">
                        <span>Learn more</span>
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </>
                );

                return event.articleLink ? (
                  <Link
                    key={event.id}
                    href={event.articleLink}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <article
                    key={event.id}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {CardContent}
                  </article>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated</h3>
                <p className="text-slate-600 mb-6">
                  Don&apos;t miss out on our upcoming events and opportunities. Follow us on social media or contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://www.facebook.com/GowaterByNXTLVLWater"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-lg border border-slate-300 transition duration-300"
                  >
                    Follow on Facebook
                  </a>
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

export default EventsPage;