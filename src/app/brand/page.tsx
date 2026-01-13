"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiteContent, Language, loadContent } from "../lib/siteContent";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function BrandPage() {
  const router = useRouter();
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => router.push("/")}
            className="text-2xl font-bold hover:text-gray-600 transition-colors"
          >
            {currentLang.brandTitle}
          </button>
          <LanguageSwitcher
            language={language}
            onLanguageChange={setLanguage}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            {/* 귀여운 이모지들 */}
            <div className="text-6xl md:text-8xl mb-6 animate-bounce">
              🎉
            </div>
            <div className="text-4xl md:text-6xl mb-4">
              😊✨🎈
            </div>
          </div>

          {/* 메인 메시지 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-2 border-pink-200">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-pink-500">앗!</span> 여기는 여기까지
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
              눌러보셨군요!
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              여긴 아직입니닷! <span className="text-2xl">😄</span>
            </p>
          </div>

          {/* 추가 메시지 */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border-2 border-yellow-300">
            <p className="text-lg md:text-xl text-gray-800">
              곧 더 멋진 내용으로 찾아뵐게요! <span className="text-2xl">🌟</span>
            </p>
          </div>

          {/* 홈으로 돌아가기 버튼 */}
          <button
            onClick={() => router.push("/")}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            🏠 홈으로 돌아가기
          </button>

          {/* 귀여운 장식 요소들 */}
          <div className="mt-12 flex justify-center gap-4 text-3xl animate-pulse">
            <span>💖</span>
            <span>✨</span>
            <span>🎀</span>
            <span>💫</span>
            <span>🌸</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {currentLang.brandTitle}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
