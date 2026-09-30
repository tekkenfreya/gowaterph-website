import Link from 'next/link';
import { featuredProducts, products } from '@/data/products';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRightIcon } from '@/components/ui/icons';

const Solutions = () => {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our solutions"
          title={
            <>
              Clean water systems for <span className="text-gradient">every space</span>
            </>
          }
          subtitle="Professional water vending, dispensing, purification, and filtration solutions engineered for reliability."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.slug} delay={index * 100} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products" className="btn-secondary">
            View all {products.length} products
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
