"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SiteContent, Language, loadContent } from "./lib/siteContent";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("ko");
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  if (!content) {
    return null;
  }

  const currentLang = content.languages[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">{currentLang.brandTitle}</div>
          <LanguageSwitcher
            language={language}
            onLanguageChange={setLanguage}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {currentLang.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {currentLang.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                {currentLang.heroCtaPrimary}
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all">
                {currentLang.heroCtaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {currentLang.stats.customers}
              </div>
              <div className="text-gray-600">{currentLang.stats.customersLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {currentLang.stats.products}
              </div>
              <div className="text-gray-600">{currentLang.stats.productsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {currentLang.stats.satisfaction}
              </div>
              <div className="text-gray-600">{currentLang.stats.satisfactionLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentLang.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentLang.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentLang.productsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={currentLang.products.shoes.image.src}
                  alt={currentLang.products.shoes.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {currentLang.products.shoes.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {currentLang.products.shoes.price}
                </p>
                <p className="text-gray-600 mb-4">
                  {currentLang.products.shoes.description}
                </p>
                <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  {currentLang.ctaText}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={currentLang.products.tshirt.image.src}
                  alt={currentLang.products.tshirt.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {currentLang.products.tshirt.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {currentLang.products.tshirt.price}
                </p>
                <p className="text-gray-600 mb-4">
                  {currentLang.products.tshirt.description}
                </p>
                <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  {currentLang.ctaText}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={currentLang.products.hoodie.image.src}
                  alt={currentLang.products.hoodie.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {currentLang.products.hoodie.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {currentLang.products.hoodie.price}
                </p>
                <p className="text-gray-600 mb-4">
                  {currentLang.products.hoodie.description}
                </p>
                <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  {currentLang.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentLang.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentLang.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {currentLang.faqTitle}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {currentLang.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {currentLang.finalCtaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {currentLang.finalCtaDescription}
            </p>
            <button className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg">
              {currentLang.finalCtaButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {currentLang.brandTitle}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
