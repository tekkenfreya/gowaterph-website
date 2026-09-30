import Link from 'next/link';
import { eventsNewestFirst } from '@/data/events';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import EventCard from '@/components/events/EventCard';
import { ArrowRightIcon } from '@/components/ui/icons';

const latestEvents = eventsNewestFirst.slice(0, 3);

const RecentEvents = () => {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Events & community"
            title="Recent events"
            subtitle="Discover how we're making an impact through expos, partnerships, and community engagement."
          />
          <Link href="/events" className="btn-secondary shrink-0 self-start lg:self-auto">
            View all events
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latestEvents.map((event, index) => (
            <Reveal key={event.slug} delay={index * 120} className="h-full">
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
