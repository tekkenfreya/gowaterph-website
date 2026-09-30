import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { ArrowUpRightIcon } from '@/components/ui/icons';

export const productImageClass = (product: Product) => {
  if (product.imageStyle === 'photo') return 'photo-fade';
  if (product.imageStyle === 'white') return 'photo-white';
  return '';
};

interface ProductCardProps {
  product: Product;
  sizes?: string;
}

const ProductCard = ({ product, sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw' }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group card-soft flex h-full flex-col p-3 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-b from-azure-50 via-white to-iris-50/70">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={sizes}
          className={`object-contain p-6 transition duration-500 group-hover:scale-105 ${productImageClass(product)}`}
        />
      </div>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <p className="text-xs font-semibold tracking-wide text-azure-600 uppercase">{product.type}</p>
        <h3 className="mt-1.5 text-lg leading-snug font-bold text-ink">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">{product.summary}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-xs text-slate-400">Starts at</p>
            <p className="font-semibold text-ink">{product.priceFrom}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azure-50 text-azure-600 transition duration-300 group-hover:bg-azure-500 group-hover:text-white">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
