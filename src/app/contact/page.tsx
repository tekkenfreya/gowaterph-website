'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Contact Form - GoWater Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:info@gowater.ph?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <main>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-cyan-100 to-blue-200"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-700">
              Ready to transform your water business? Contact us today.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <header className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Contact Us</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Get in touch with us for inquiries, support, or partnership opportunities. We&apos;d love to hear from you.
                </p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Form */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 resize-vertical"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-1">Address</h4>
                          <p className="text-slate-600">2288 Chino Roces Ave. Makati City</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-1">Phone</h4>
                          <p className="text-slate-600">
                            <a href="tel:+639681980041" className="whitespace-nowrap hover:text-cyan-600 transition duration-200">
                              0968-198-0041
                            </a>{' '}
                            /{' '}
                            <a href="tel:+639681980042" className="whitespace-nowrap hover:text-cyan-600 transition duration-200">
                              0968-198-0042
                            </a>{' '}
                            /{' '}
                            <a href="tel:+639989880043" className="whitespace-nowrap hover:text-cyan-600 transition duration-200">
                              0998-988-0043
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-1">Email</h4>
                          <p className="text-slate-600">
                            <a href="mailto:info@gowater.ph" className="hover:text-cyan-600 transition duration-200">
                              info@gowater.ph
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Business Hours</h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Via email</span>
                      </div>
                    </div>
                  </div>
                </div>

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