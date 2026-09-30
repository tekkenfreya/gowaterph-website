'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/ui/PageHero';
import { ArrowRightIcon, CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from '@/components/ui/icons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const phones = [
  { href: 'tel:+639681980041', label: '0968-198-0041' },
  { href: 'tel:+639681980042', label: '0968-198-0042' },
  { href: 'tel:+639989880043', label: '0998-988-0043' },
];

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Via email' },
];

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition focus:border-azure-400 focus:ring-4 focus:ring-azure-100 focus:outline-none';

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Contact Form - GoWater Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` + `Email: ${formData.email}\n` + `Phone: ${formData.phone}\n\n` + `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@gowater.ph?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact us"
          title={
            <>
              Get in <span className="text-gradient">touch</span>
            </>
          }
          subtitle="Ready to transform your water business? Contact us today."
        />

        <section className="pb-24">
          <div className="container-page grid gap-8 lg:grid-cols-12">
            <div className="card-soft p-6 sm:p-10 lg:col-span-7">
              <h2 className="text-2xl font-bold text-ink">Send us a message</h2>
              <p className="mt-2 text-slate-500">
                Get in touch with us for inquiries, support, or partnership opportunities. We&apos;d love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Full name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className={inputClass} placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email address *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className={inputClass} placeholder="Enter your email" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="Enter your phone number" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send message
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="glass rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-ink">Get in touch</h2>
                <ul className="mt-6 space-y-6">
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                      <MapPinIcon />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">Address</span>
                      <span className="mt-1 block text-slate-600">2288 Chino Roces Ave. Makati City</span>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                      <PhoneIcon />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">Phone</span>
                      <span className="mt-1 flex flex-col gap-1">
                        {phones.map((phone) => (
                          <a key={phone.href} href={phone.href} className="whitespace-nowrap text-slate-600 transition hover:text-azure-700">
                            {phone.label}
                          </a>
                        ))}
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-azure-500 to-iris-700 text-white shadow-soft">
                      <MailIcon />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">Email</span>
                      <a href="mailto:info@gowater.ph" className="mt-1 block text-slate-600 transition hover:text-azure-700">
                        info@gowater.ph
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-soft p-6 sm:p-8">
                <h2 className="flex items-center gap-2 text-xl font-bold text-ink">
                  <CalendarIcon className="h-5 w-5 text-azure-500" />
                  Business hours
                </h2>
                <dl className="mt-5 divide-y divide-slate-100">
                  {hours.map((row) => (
                    <div key={row.day} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <dt className="text-slate-600">{row.day}</dt>
                      <dd className="font-semibold text-ink">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
