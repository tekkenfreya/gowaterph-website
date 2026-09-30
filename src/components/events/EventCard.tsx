import Image from 'next/image';
import Link from 'next/link';
import type { EventItem } from '@/data/events';
import { ArrowRightIcon } from '@/components/ui/icons';

const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <Link href={`/events/${event.slug}`} className="group card-soft flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-azure-50">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-azure-700 shadow-sm">{event.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-slate-400">
          {event.date}
          {event.location ? ` · ${event.location}` : ''}
        </p>
        <h3 className="mt-2 text-lg font-bold text-ink transition group-hover:text-azure-700">{event.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{event.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-azure-600">
          Read story
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
