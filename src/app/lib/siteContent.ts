export type Language = "ko" | "en" | "ja";

export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductContent {
  image: ImageConfig;
  name: string;
  price: string;
  description: string;
}

export interface FeatureContent {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialContent {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface FAQContent {
  question: string;
  answer: string;
}

export interface LanguageContent {
  brandTitle: string;
  brandDescription: string;
  ctaText: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  featuresTitle: string;
  features: FeatureContent[];
  testimonialsTitle: string;
  testimonials: TestimonialContent[];
  faqTitle: string;
  faqs: FAQContent[];
  stats: {
    customers: string;
    products: string;
    satisfaction: string;
    customersLabel: string;
    productsLabel: string;
    satisfactionLabel: string;
  };
  productsTitle: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaButton: string;
  products: {
    shoes: ProductContent;
    tshirt: ProductContent;
    hoodie: ProductContent;
  };
}

export interface SiteContent {
  titleFontSize: number;
  bodyFontSize: number;
  heroImage: ImageConfig;
  languages: {
    ko: LanguageContent;
    en: LanguageContent;
    ja: LanguageContent;
  };
}

export const defaultContent: SiteContent = {
  titleFontSize: 48,
  bodyFontSize: 18,
  heroImage: {
    src: "/images/hero.jpg",
    alt: "Hero",
    width: 1200,
    height: 600,
  },
  languages: {
    ko: {
      brandTitle: "My Store",
      brandDescription: "최고의 품질과 스타일을 제공하는 패션 브랜드",
      ctaText: "구매하기",
      heroHeadline: "연습용 마케팅 패션 랜딩페이지 생성",
      heroSubheadline: "최고 품질의 의류와 액세서리로 일상에 특별함을 더하세요",
      heroCtaPrimary: "지금 쇼핑하기",
      heroCtaSecondary: "더 알아보기",
      featuresTitle: "왜 우리를 선택해야 할까요?",
      features: [
        {
          title: "프리미엄 품질",
          description: "엄선된 소재와 정교한 제작 공정으로 오래 지속되는 품질을 보장합니다",
          icon: "✨",
        },
        {
          title: "합리적인 가격",
          description: "고품질 제품을 합리적인 가격에 제공하여 누구나 접근할 수 있습니다",
          icon: "💰",
        },
        {
          title: "빠른 배송",
          description: "주문 후 24시간 이내 발송, 전국 어디서나 빠르고 안전한 배송",
          icon: "🚀",
        },
        {
          title: "환불 보장",
          description: "만족하지 않으시면 30일 이내 무조건 환불해드립니다",
          icon: "🛡️",
        },
      ],
      testimonialsTitle: "고객들의 생생한 후기",
      testimonials: [
        {
          name: "김민수",
          role: "패션 블로거",
          comment: "품질이 정말 좋아요! 다른 곳에서 구매한 것보다 훨씬 만족스럽습니다. 배송도 빠르고 서비스도 훌륭해요.",
          rating: 5,
        },
        {
          name: "이지은",
          role: "직장인",
          comment: "가격 대비 품질이 정말 좋습니다. 특히 신발이 너무 편하고 스타일리시해요. 친구들에게도 추천했어요!",
          rating: 5,
        },
        {
          name: "박준호",
          role: "대학생",
          comment: "학생인데도 부담 없이 살 수 있는 가격에 이 정도 품질이면 정말 만족입니다. 계속 주문할 예정이에요!",
          rating: 5,
        },
      ],
      faqTitle: "자주 묻는 질문",
      faqs: [
        {
          question: "배송은 얼마나 걸리나요?",
          answer: "주문 후 24시간 이내 발송되며, 일반적으로 2-3일 내에 배송됩니다. 제주 및 도서산간 지역은 추가 1-2일이 소요될 수 있습니다.",
        },
        {
          question: "교환 및 환불 정책은 어떻게 되나요?",
          answer: "제품 수령 후 30일 이내에 교환 및 환불이 가능합니다. 제품이 손상되지 않은 상태에서 포장을 개봉하지 않은 경우에 한합니다.",
        },
        {
          question: "사이즈 선택에 도움이 필요해요",
          answer: "각 제품 페이지에 상세한 사이즈 가이드가 제공됩니다. 불확실하신 경우 고객센터로 문의해주시면 정확한 사이즈를 안내해드립니다.",
        },
        {
          question: "해외 배송도 가능한가요?",
          answer: "현재는 국내 배송만 가능하며, 해외 배송 서비스는 준비 중입니다. 곧 서비스를 시작할 예정이니 많은 관심 부탁드립니다.",
        },
      ],
      stats: {
        customers: "10만+",
        products: "500+",
        satisfaction: "98%",
        customersLabel: "만족한 고객",
        productsLabel: "다양한 제품",
        satisfactionLabel: "고객 만족도",
      },
      productsTitle: "인기 제품",
      finalCtaTitle: "지금 바로 시작하세요",
      finalCtaDescription: "특별한 스타일과 품질을 경험해보세요. 지금 가입하시면 첫 주문 10% 할인 쿠폰을 드립니다!",
      finalCtaButton: "브랜드 알아보기",
      products: {
        shoes: {
          image: {
            src: "/images/shoe-1.jpg",
            alt: "신발",
            width: 400,
            height: 400,
          },
          name: "신발",
          price: "99,000원",
          description: "편안하고 스타일리시한 신발",
        },
        tshirt: {
          image: {
            src: "/images/tshirt-1.jpg",
            alt: "티셔츠",
            width: 400,
            height: 400,
          },
          name: "티셔츠",
          price: "39,000원",
          description: "부드럽고 내구성 있는 티셔츠",
        },
        hoodie: {
          image: {
            src: "/images/hoodie-1.jpg",
            alt: "후드",
            width: 400,
            height: 400,
          },
          name: "후드",
          price: "79,000원",
          description: "따뜻하고 편안한 후드",
        },
      },
    },
    en: {
      brandTitle: "My Store",
      brandDescription: "A fashion brand offering the best quality and style",
      ctaText: "Buy Now",
      heroHeadline: "Practice Marketing Fashion Landing Page",
      heroSubheadline: "Add something special to your everyday life with high-quality clothing and accessories",
      heroCtaPrimary: "Shop Now",
      heroCtaSecondary: "Learn More",
      featuresTitle: "Why Choose Us?",
      features: [
        {
          title: "Premium Quality",
          description: "Carefully selected materials and meticulous craftsmanship ensure lasting quality",
          icon: "✨",
        },
        {
          title: "Affordable Prices",
          description: "High-quality products at reasonable prices, accessible to everyone",
          icon: "💰",
        },
        {
          title: "Fast Shipping",
          description: "Shipped within 24 hours of order, fast and secure delivery anywhere in the country",
          icon: "🚀",
        },
        {
          title: "Money-Back Guarantee",
          description: "100% refund within 30 days if you're not satisfied",
          icon: "🛡️",
        },
      ],
      testimonialsTitle: "What Our Customers Say",
      testimonials: [
        {
          name: "John Smith",
          role: "Fashion Blogger",
          comment: "The quality is really great! Much more satisfying than what I bought elsewhere. Fast shipping and excellent service.",
          rating: 5,
        },
        {
          name: "Sarah Johnson",
          role: "Office Worker",
          comment: "The quality for the price is really good. Especially the shoes are so comfortable and stylish. I recommended it to my friends!",
          rating: 5,
        },
        {
          name: "Mike Davis",
          role: "Student",
          comment: "Even as a student, I can afford it, and the quality at this price is really satisfying. I plan to keep ordering!",
          rating: 5,
        },
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Orders are shipped within 24 hours and typically arrive within 2-3 days. Jeju and remote islands may take an additional 1-2 days.",
        },
        {
          question: "What is your exchange and refund policy?",
          answer: "Exchanges and refunds are available within 30 days of receiving the product. This applies only if the product is undamaged and the packaging is unopened.",
        },
        {
          question: "I need help choosing a size",
          answer: "Detailed size guides are provided on each product page. If you're unsure, please contact customer service for accurate size guidance.",
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship domestically. International shipping service is in preparation and will be available soon.",
        },
      ],
      stats: {
        customers: "100K+",
        products: "500+",
        satisfaction: "98%",
        customersLabel: "Satisfied Customers",
        productsLabel: "Products",
        satisfactionLabel: "Satisfaction Rate",
      },
      productsTitle: "Popular Products",
      finalCtaTitle: "Get Started Today",
      finalCtaDescription: "Experience exceptional style and quality. Sign up now and get a 10% discount coupon on your first order!",
      finalCtaButton: "Learn About Brand",
      products: {
        shoes: {
          image: {
            src: "/images/shoe-1.jpg",
            alt: "Shoes",
            width: 400,
            height: 400,
          },
          name: "Shoes",
          price: "$99",
          description: "Comfortable and stylish shoes",
        },
        tshirt: {
          image: {
            src: "/images/tshirt-1.jpg",
            alt: "T-Shirt",
            width: 400,
            height: 400,
          },
          name: "T-Shirt",
          price: "$39",
          description: "Soft and durable t-shirt",
        },
        hoodie: {
          image: {
            src: "/images/hoodie-1.jpg",
            alt: "Hoodie",
            width: 400,
            height: 400,
          },
          name: "Hoodie",
          price: "$79",
          description: "Warm and comfortable hoodie",
        },
      },
    },
    ja: {
      brandTitle: "My Store",
      brandDescription: "最高の品質とスタイルを提供するファッションブランド",
      ctaText: "購入する",
      heroHeadline: "練習用マーケティングファッションランディングページ作成",
      heroSubheadline: "最高品質の衣類とアクセサリーで日常に特別さを加えましょう",
      heroCtaPrimary: "今すぐショッピング",
      heroCtaSecondary: "詳しく見る",
      featuresTitle: "なぜ私たちを選ぶべきか？",
      features: [
        {
          title: "プレミアム品質",
          description: "厳選された素材と精巧な製造工程により、長持ちする品質を保証します",
          icon: "✨",
        },
        {
          title: "手頃な価格",
          description: "高品質製品を手頃な価格で提供し、誰でもアクセス可能にします",
          icon: "💰",
        },
        {
          title: "迅速な配送",
          description: "注文後24時間以内に発送、全国どこでも迅速で安全な配送",
          icon: "🚀",
        },
        {
          title: "返金保証",
          description: "ご満足いただけない場合、30日以内に全額返金いたします",
          icon: "🛡️",
        },
      ],
      testimonialsTitle: "お客様の生の声",
      testimonials: [
        {
          name: "田中太郎",
          role: "ファッションブロガー",
          comment: "品質が本当に良いです！他の場所で購入したものよりずっと満足しています。配送も速く、サービスも素晴らしいです。",
          rating: 5,
        },
        {
          name: "佐藤花子",
          role: "会社員",
          comment: "価格対品質が本当に良いです。特に靴がとても快適でスタイリッシュです。友達にもおすすめしました！",
          rating: 5,
        },
        {
          name: "鈴木一郎",
          role: "学生",
          comment: "学生でも負担のない価格で、この品質なら本当に満足です。今後も注文する予定です！",
          rating: 5,
        },
      ],
      faqTitle: "よくある質問",
      faqs: [
        {
          question: "配送にはどのくらいかかりますか？",
          answer: "注文後24時間以内に発送され、通常2-3日で到着します。済州および離島地域は追加で1-2日かかる場合があります。",
        },
        {
          question: "交換・返品ポリシーはどうなっていますか？",
          answer: "商品到着後30日以内に交換・返品が可能です。商品が損傷しておらず、包装が未開封の場合に限ります。",
        },
        {
          question: "サイズ選びのサポートが必要です",
          answer: "各商品ページに詳細なサイズガイドが提供されています。不明な場合は、カスタマーサービスにお問い合わせください。",
        },
        {
          question: "海外配送も可能ですか？",
          answer: "現在は国内配送のみ可能で、海外配送サービスは準備中です。まもなくサービスを開始予定ですので、ご期待ください。",
        },
      ],
      stats: {
        customers: "10万+",
        products: "500+",
        satisfaction: "98%",
        customersLabel: "満足したお客様",
        productsLabel: "多様な製品",
        satisfactionLabel: "顧客満足度",
      },
      productsTitle: "人気商品",
      finalCtaTitle: "今すぐ始めましょう",
      finalCtaDescription: "特別なスタイルと品質を体験してください。今登録すると、初回注文10%割引クーポンをプレゼントします！",
      finalCtaButton: "ブランドについて",
      products: {
        shoes: {
          image: {
            src: "/images/shoe-1.jpg",
            alt: "靴",
            width: 400,
            height: 400,
          },
          name: "靴",
          price: "¥9,900",
          description: "快適でスタイリッシュな靴",
        },
        tshirt: {
          image: {
            src: "/images/tshirt-1.jpg",
            alt: "Tシャツ",
            width: 400,
            height: 400,
          },
          name: "Tシャツ",
          price: "¥3,900",
          description: "柔らかく耐久性のあるTシャツ",
        },
        hoodie: {
          image: {
            src: "/images/hoodie-1.jpg",
            alt: "フーディー",
            width: 400,
            height: 400,
          },
          name: "フーディー",
          price: "¥7,900",
          description: "暖かく快適なフーディー",
        },
      },
    },
  },
};

export function loadContent(): SiteContent {
  if (typeof window === "undefined") {
    return defaultContent;
  }
  const stored = localStorage.getItem("siteContentV1");
  if (!stored) {
    return defaultContent;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return defaultContent;
  }
}

export function saveContent(content: SiteContent): void {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem("siteContentV1", JSON.stringify(content));
}

export function resetContent(): void {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem("siteContentV1");
}
