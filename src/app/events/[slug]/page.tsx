import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/ui/Reveal';
import EventCard from '@/components/events/EventCard';
import EventGallery from '@/components/events/EventGallery';
import { eventsNewestFirst, events, getEvent, type ArticleBlock } from '@/data/events';
import { ArrowRightIcon, CalendarIcon, CheckIcon, ChevronRightIcon, FacebookIcon, InstagramIcon, MapPinIcon } from '@/components/ui/icons';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return { title: `${event.title} - GoWater`, description: event.description };
}

const ArticleContent = ({ blocks }: { blocks: ArticleBlock[] }) => (
  <div>
    {blocks.map((block, index) => {
      switch (block.type) {
        case 'h2':
          return (
            <h2 key={index} className="mb-5 text-2xl leading-tight font-bold tracking-tight text-ink sm:text-3xl">
              {block.text}
            </h2>
          );
        case 'h3':
          return (
            <h3 key={index} className="mt-10 mb-4 text-xl font-bold text-ink">
              {block.text}
            </h3>
          );
        case 'p':
          return (
            <p key={index} className="mb-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {block.text}
            </p>
          );
        case 'quote':
          return (
            <blockquote key={index} className="my-8 rounded-3xl border border-azure-100 bg-gradient-to-br from-azure-50 to-iris-50/60 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-ink italic sm:text-lg">&ldquo;{block.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-slate-500">— {block.cite}</footer>
            </blockquote>
          );
        case 'list':
          return (
            <ul key={index} className="my-6 space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-slate-600">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-50 text-azure-600">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          );
      }
    })}
  </div>
);

const EventPage = async ({ params }: EventPageProps) => {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const moreEvents = eventsNewestFirst.filter((item) => item.slug !== event.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pt-32 pb-10 sm:pt-36">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-azure-50/80 via-white to-white" />
          <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-iris-100/60 blur-3xl" />
          <div className="container-page max-w-5xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/events" className="transition hover:text-azure-700">
                Events
              </Link>
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <span className="text-slate-600">{event.title}</span>
            </nav>
            <span className="eyebrow mt-8">{event.category} event</span>
            <h1 className="h-display mt-5">{event.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-azure-500" />
                {event.date}
              </span>
              {event.location && (
                <span className="inline-flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-azure-500" />
                  {event.location}
                </span>
              )}
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="container-page max-w-5xl">
            <EventGallery images={event.images} title={event.title} />
          </div>
        </section>

        <section className="pb-16">
          <div className="container-page max-w-3xl">
            <ArticleContent blocks={event.article} />

            <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-ink">Share this story</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/GowaterByNXTLVLWater" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-2.5">
                  <FacebookIcon className="h-4 w-4" />
                  Facebook
                </a>
                <a href="https://www.instagram.com/gowater.vendo/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-5 py-2.5">
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-azure-50/60 to-white py-16 sm:py-20">
          <div className="container-page">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="h-section">More events</h2>
              <Link href="/events" className="btn-secondary self-start sm:self-auto">
                View all events
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {moreEvents.map((item, index) => (
                <Reveal key={item.slug} delay={index * 100} className="h-full">
                  <EventCard event={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
