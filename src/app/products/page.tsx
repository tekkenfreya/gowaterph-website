import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import ProductCard from '@/components/products/ProductCard';
import { categories, products } from '@/data/products';
import { CashIcon, ShieldCheckIcon, SignalIcon } from '@/components/ui/icons';

const reasons = [
  { title: 'Premium quality', text: '99.9% contaminant removal with multi-stage RO filtration', Icon: ShieldCheckIcon },
  { title: 'Smart monitoring', text: 'Real-time IoT tracking and remote management capabilities', Icon: SignalIcon },
  { title: 'Flexible payment', text: 'Coins and online payment options for user convenience', Icon: CashIcon },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          eyebrow="Our products"
          title={
            <>
              GoWater <span className="text-gradient">product range</span>
            </>
          }
          subtitle="Professional water vending, dispensing, purification, and filtration solutions engineered for reliability."
        >
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="btn-secondary px-5 py-2.5">
                {category.title}
              </a>
            ))}
          </div>
        </PageHero>

        {categories.map((category) => {
          const items = products.filter((product) => product.category === category.id);
          return (
            <section key={category.id} id={category.id} className="scroll-mt-28 py-14 sm:py-16">
              <div className="container-page">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <h2 className="h-section">{category.title}</h2>
                    <p className="text-lead mt-3">{category.description}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{items.length} products</p>
                </div>
                <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                  {items.map((product, index) => (
                    <Reveal key={product.slug} delay={index * 100} className="h-full">
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="bg-gradient-to-b from-white via-azure-50/70 to-white py-16 sm:py-20">
          <div className="container-page">
            <h2 className="h-section text-center">Why choose GoWater</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reasons.map(({ title, text, Icon }) => (
                <div key={title} className="glass rounded-3xl p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Ready to get started?" text="Contact our team to discuss your water vending requirements." />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
