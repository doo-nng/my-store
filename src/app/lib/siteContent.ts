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

export interface LanguageContent {
  brandTitle: string;
  brandDescription: string;
  ctaText: string;
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
      products: {
        shoes: {
          image: {
            src: "/images/shoes.jpg",
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
            src: "/images/tshirt.jpg",
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
            src: "/images/hoodie.jpg",
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
      products: {
        shoes: {
          image: {
            src: "/images/shoes.jpg",
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
            src: "/images/tshirt.jpg",
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
            src: "/images/hoodie.jpg",
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
      products: {
        shoes: {
          image: {
            src: "/images/shoes.jpg",
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
            src: "/images/tshirt.jpg",
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
            src: "/images/hoodie.jpg",
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
