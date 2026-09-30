import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaBand from '@/components/ui/CtaBand';
import ProductCard, { productImageClass } from '@/components/products/ProductCard';
import { getProduct, products } from '@/data/products';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon, PhoneIcon } from '@/components/ui/icons';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} - GoWater`,
    description: product.summary,
  };
}

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-azure-50 text-azure-600">
          <CheckIcon className="h-3.5 w-3.5" />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3);
  const quickFacts = product.specs.filter((spec) => ['Product output', 'Dimension (L×W×H)', 'Rated voltage'].includes(spec.label));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-36">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-azure-50/80 via-white to-white" />
          <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-iris-100/60 blur-3xl" />

          <div className="container-page">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
              <Link href="/products" className="transition hover:text-azure-700">
                Products
              </Link>
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <span className="text-slate-600">{product.name}</span>
            </nav>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] border border-white bg-gradient-to-b from-azure-50 via-white to-iris-50 shadow-card sm:h-[520px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-contain p-10 ${productImageClass(product)}`}
                />
              </div>

              <div>
                <span className="eyebrow">{product.type}</span>
                <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight text-ink sm:text-5xl">{product.name}</h1>
                <p className="text-lead mt-5">{product.summary}</p>

                <div className="glass mt-8 flex flex-col gap-5 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Price starts at</p>
                    <p className="text-2xl font-bold text-ink">{product.priceFrom}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/contact" className="btn-primary">
                      Request a quote
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <a href="tel:+639681980041" className="btn-secondary whitespace-nowrap">
                      <PhoneIcon className="h-4 w-4" />
                      Call us
                    </a>
                  </div>
                </div>

                {quickFacts.length > 0 && (
                  <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                    {quickFacts.map((spec) => (
                      <div key={spec.label} className="rounded-2xl border border-slate-100 bg-white p-4">
                        <dt className="text-xs text-slate-400">{spec.label}</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{Array.isArray(spec.value) ? spec.value.join(', ') : spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white via-azure-50/70 to-white py-16 sm:py-20">
          <div className="container-page">
            <SectionHeading eyebrow="How it works" title="From water source to clean water" subtitle="Every stage of the treatment process, from the source to the final output." />
            <Reveal className="mt-10">
              <div className="card-soft overflow-hidden p-3 sm:p-5">
                <Image
                  src={product.diagram}
                  alt={`${product.name} water treatment process`}
                  width={1600}
                  height={900}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="h-section">Product specification</h2>
              <div className="card-soft mt-6 overflow-hidden">
                <dl className="divide-y divide-slate-100">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="grid gap-1 px-5 py-4 sm:grid-cols-5 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-semibold text-ink sm:col-span-2">{spec.label}</dt>
                      <dd className="text-sm text-slate-600 sm:col-span-3">
                        {Array.isArray(spec.value) ? (
                          <ul className="space-y-1">
                            {spec.value.map((value) => (
                              <li key={value}>{value}</li>
                            ))}
                          </ul>
                        ) : (
                          spec.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <div className="card-soft p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-ink">Key features</h2>
                  <div className="mt-5">
                    <CheckList items={product.features} />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="card-soft p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-ink">Benefits</h2>
                  <div className="mt-5">
                    <CheckList items={product.benefits} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-4">
          <div className="container-page">
            <Reveal>
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-ink">What&apos;s included</h2>
                <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {product.inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-azure-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="container-page">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="h-section">Related products</h2>
                <Link href="/products" className="btn-secondary self-start sm:self-auto">
                  All products
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.slug} product={item} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand title={`Interested in the ${product.name}?`} text="Contact our team for a quote, installation details, and partnership options." />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
