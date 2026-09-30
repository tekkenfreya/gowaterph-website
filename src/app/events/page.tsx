import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/events/EventCard';
import { eventsNewestFirst } from '@/data/events';
import { FacebookIcon } from '@/components/ui/icons';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          eyebrow="Events & initiatives"
          title={
            <>
              Where GoWater <span className="text-gradient">makes an impact</span>
            </>
          }
          subtitle="Stay updated with our latest events, community initiatives, and business opportunities."
        />

        <section className="pb-20">
          <div className="container-page">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {eventsNewestFirst.map((event, index) => (
                <Reveal key={event.slug} delay={(index % 3) * 100} className="h-full">
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page">
            <Reveal>
              <div className="glass mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-12">
                <h2 className="h-section">Stay updated</h2>
                <p className="text-lead mx-auto mt-4 max-w-xl">
                  Don&apos;t miss out on our upcoming events and opportunities. Follow us on social media or contact us directly.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/contact" className="btn-primary">
                    Contact us
                  </Link>
                  <a href="https://www.facebook.com/GowaterByNXTLVLWater" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FacebookIcon className="h-4 w-4" />
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
