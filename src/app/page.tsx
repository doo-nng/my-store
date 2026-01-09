"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SiteContent, Language, loadContent } from "./lib/siteContent";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
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
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <LanguageSwitcher
            language={language}
            onLanguageChange={setLanguage}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-8 md:mb-12">
          <h1
            className="font-bold mb-4 md:mb-6"
            style={{ fontSize: `${content.titleFontSize}px` }}
          >
            {currentLang.brandTitle}
          </h1>
          <p
            className="text-gray-600"
            style={{ fontSize: `${content.bodyFontSize}px` }}
          >
            {currentLang.brandDescription}
          </p>
        </section>

        <section className="mb-8 md:mb-12">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "2/1" }}>
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full mb-4 overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <Image
                src={currentLang.products.shoes.image.src}
                alt={currentLang.products.shoes.image.alt}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2
              className="font-semibold mb-2"
              style={{ fontSize: `${content.titleFontSize * 0.5}px` }}
            >
              {currentLang.products.shoes.name}
            </h2>
            <p
              className="text-gray-600 mb-2 font-medium"
              style={{ fontSize: `${content.bodyFontSize * 0.9}px` }}
            >
              {currentLang.products.shoes.price}
            </p>
            <p
              className="text-gray-600 mb-4"
              style={{ fontSize: `${content.bodyFontSize * 0.85}px` }}
            >
              {currentLang.products.shoes.description}
            </p>
            <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              {currentLang.ctaText}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full mb-4 overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <Image
                src={currentLang.products.tshirt.image.src}
                alt={currentLang.products.tshirt.image.alt}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2
              className="font-semibold mb-2"
              style={{ fontSize: `${content.titleFontSize * 0.5}px` }}
            >
              {currentLang.products.tshirt.name}
            </h2>
            <p
              className="text-gray-600 mb-2 font-medium"
              style={{ fontSize: `${content.bodyFontSize * 0.9}px` }}
            >
              {currentLang.products.tshirt.price}
            </p>
            <p
              className="text-gray-600 mb-4"
              style={{ fontSize: `${content.bodyFontSize * 0.85}px` }}
            >
              {currentLang.products.tshirt.description}
            </p>
            <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              {currentLang.ctaText}
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
            <div className="relative w-full mb-4 overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <Image
                src={currentLang.products.hoodie.image.src}
                alt={currentLang.products.hoodie.image.alt}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2
              className="font-semibold mb-2"
              style={{ fontSize: `${content.titleFontSize * 0.5}px` }}
            >
              {currentLang.products.hoodie.name}
            </h2>
            <p
              className="text-gray-600 mb-2 font-medium"
              style={{ fontSize: `${content.bodyFontSize * 0.9}px` }}
            >
              {currentLang.products.hoodie.price}
            </p>
            <p
              className="text-gray-600 mb-4"
              style={{ fontSize: `${content.bodyFontSize * 0.85}px` }}
            >
              {currentLang.products.hoodie.description}
            </p>
            <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              {currentLang.ctaText}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
