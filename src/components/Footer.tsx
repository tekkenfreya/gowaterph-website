import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, YouTubeIcon } from '@/components/ui/icons';

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/products', label: 'Products' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

const phones = [
  { href: 'tel:+639681980041', label: '0968-198-0041' },
  { href: 'tel:+639681980042', label: '0968-198-0042' },
  { href: 'tel:+639989880043', label: '0998-988-0043' },
];

const socials = [
  { href: 'https://www.instagram.com/gowater.vendo/', label: 'Instagram', Icon: InstagramIcon },
  { href: '#', label: 'YouTube', Icon: YouTubeIcon },
  { href: 'https://www.facebook.com/GowaterByNXTLVLWater', label: 'Facebook', Icon: FacebookIcon },
];

const Footer = () => {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-ink text-slate-300">
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-96 w-[64rem] -translate-x-1/2 rounded-full bg-azure-500/20 blur-3xl" />

      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="GoWater home">
            <Image src="/images/brand/gowater-mark.png" alt="" width={141} height={131} className="h-9 w-auto" />
            <Image src="/images/brand/gowater-wordmark-white.png" alt="GoWater" width={319} height={76} className="h-6 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            GoWater by NXTLVL Water Technology Inc. delivers clean, safe, and affordable drinking water through smart vending and purification systems.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-azure-400 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Products</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.slug}`} className="transition hover:text-white">
                  {product.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-azure-400" />
              <span>2288 Chino Roces Ave. Makati City</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-azure-400" />
              <span className="flex flex-col gap-1">
                {phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="whitespace-nowrap transition hover:text-white">
                    {phone.label}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-azure-400" />
              <a href="mailto:info@gowater.ph" className="transition hover:text-white">
                info@gowater.ph
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} GoWater. All rights reserved.</p>
          <a href="#" className="transition hover:text-white">
            Media Kit
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
