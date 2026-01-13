"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { SiteContent, Language, loadContent } from "../../lib/siteContent";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;
  const [language, setLanguage] = useState<Language>("ko");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  useEffect(() => {
    setContent(loadContent());
  }, []);

  if (!content) {
    return null;
  }

  const currentLang = content.languages[language];
  
  // 제품 정보 가져오기
  const getProduct = () => {
    switch (productId) {
      case "shoes":
        return currentLang.products.shoes;
      case "tshirt":
        return currentLang.products.tshirt;
      case "hoodie":
        return currentLang.products.hoodie;
      default:
        return currentLang.products.shoes;
    }
  };

  const product = getProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 결제 처리 로직 (실제로는 Stripe API 호출)
    // 여기서는 데모용으로 바로 성공 페이지로 이동
    // 실제 결제 시스템 연동 시에는 여기서 결제 API를 호출하고 성공 시에만 이동
    router.push(`/checkout/success?product=${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 제품 정보 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">주문 상품</h2>
            <div className="flex gap-4">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          </div>

          {/* 결제 폼 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">결제 정보</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일 *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  주소 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    도시 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    우편번호 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              {/* 결제 수단 선택 */}
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  결제 수단 *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      defaultChecked
                      className="mr-3"
                    />
                    <span>신용카드</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      className="mr-3"
                    />
                    <span>계좌이체</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="kakao"
                      className="mr-3"
                    />
                    <span>카카오페이</span>
                  </label>
                </div>
              </div>

              {/* 총 결제 금액 */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">총 결제 금액</span>
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
                >
                  결제하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
