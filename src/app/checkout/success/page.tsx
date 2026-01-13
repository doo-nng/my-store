"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { SiteContent, Language, loadContent } from "../../lib/siteContent";

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get("product") || "";
  const [language, setLanguage] = useState<Language>("ko");
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  if (!content) {
    return null;
  }

  const currentLang = content.languages[language];

  const getProductName = () => {
    switch (productId) {
      case "shoes":
        return currentLang.products.shoes.name;
      case "tshirt":
        return currentLang.products.tshirt.name;
      case "hoodie":
        return currentLang.products.hoodie.name;
      default:
        return "제품";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            결제가 완료되었습니다!
          </h1>
          <p className="text-gray-600 text-lg">
            주문해주셔서 감사합니다.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">주문 정보</h2>
          <div className="text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">주문 상품:</span>
              <span className="font-semibold">{getProductName()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">주문 번호:</span>
              <span className="font-semibold">
                {Date.now().toString().slice(-8)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">주문 일시:</span>
              <span className="font-semibold">
                {new Date().toLocaleString("ko-KR")}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            주문 확인 이메일을 발송했습니다. 배송 정보는 이메일로 안내드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              홈으로 돌아가기
            </Link>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              주문 내역 출력
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
