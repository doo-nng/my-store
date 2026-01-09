"use client";

import { useState, useEffect } from "react";
import {
  SiteContent,
  Language,
  defaultContent,
  loadContent,
  saveContent,
  resetContent,
} from "../lib/siteContent";

export default function AdminPage() {
  const [language, setLanguage] = useState<Language>("ko");
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    setContent(loadContent());
  }, []);

  const currentLang = content.languages[language];

  const updateContent = (updater: (prev: SiteContent) => SiteContent) => {
    setContent((prev) => updater(prev));
  };

  const handleSave = () => {
    saveContent(content);
    alert("저장되었습니다.");
  };

  const handleReset = () => {
    if (confirm("기본값으로 복구하시겠습니까?")) {
      resetContent();
      setContent(defaultContent);
      alert("기본값으로 복구되었습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLanguage("ko")}
              className={`px-4 py-2 rounded ${
                language === "ko"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              ko
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded ${
                language === "en"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              en
            </button>
            <button
              onClick={() => setLanguage("ja")}
              className={`px-4 py-2 rounded ${
                language === "ja"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              ja
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Global Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                타이틀 폰트 크기 (px)
              </label>
              <input
                type="number"
                value={content.titleFontSize}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    titleFontSize: parseInt(e.target.value) || 48,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                본문 폰트 크기 (px)
              </label>
              <input
                type="number"
                value={content.bodyFontSize}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    bodyFontSize: parseInt(e.target.value) || 18,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Hero Image</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">src</label>
              <input
                type="text"
                value={content.heroImage.src}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    heroImage: { ...prev.heroImage, src: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">alt</label>
              <input
                type="text"
                value={content.heroImage.alt}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    heroImage: { ...prev.heroImage, alt: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">width</label>
                <input
                  type="number"
                  value={content.heroImage.width}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      heroImage: {
                        ...prev.heroImage,
                        width: parseInt(e.target.value) || 1200,
                      },
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">height</label>
                <input
                  type="number"
                  value={content.heroImage.height}
                  onChange={(e) =>
                    updateContent((prev) => ({
                      ...prev,
                      heroImage: {
                        ...prev.heroImage,
                        height: parseInt(e.target.value) || 600,
                      },
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Content ({language.toUpperCase()})
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                브랜드 타이틀
              </label>
              <input
                type="text"
                value={currentLang.brandTitle}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    languages: {
                      ...prev.languages,
                      [language]: {
                        ...prev.languages[language],
                        brandTitle: e.target.value,
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                브랜드 설명
              </label>
              <textarea
                value={currentLang.brandDescription}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    languages: {
                      ...prev.languages,
                      [language]: {
                        ...prev.languages[language],
                        brandDescription: e.target.value,
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CTA 텍스트</label>
              <input
                type="text"
                value={currentLang.ctaText}
                onChange={(e) =>
                  updateContent((prev) => ({
                    ...prev,
                    languages: {
                      ...prev.languages,
                      [language]: {
                        ...prev.languages[language],
                        ctaText: e.target.value,
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {(["shoes", "tshirt", "hoodie"] as const).map((productKey) => {
          const product = currentLang.products[productKey];
          return (
            <div
              key={productKey}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6"
            >
              <h2 className="text-xl font-semibold mb-4">
                {productKey === "shoes"
                  ? "신발"
                  : productKey === "tshirt"
                  ? "티셔츠"
                  : "후드"}
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    이미지 src
                  </label>
                  <input
                    type="text"
                    value={product.image.src}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        languages: {
                          ...prev.languages,
                          [language]: {
                            ...prev.languages[language],
                            products: {
                              ...prev.languages[language].products,
                              [productKey]: {
                                ...prev.languages[language].products[productKey],
                                image: {
                                  ...prev.languages[language].products[productKey]
                                    .image,
                                  src: e.target.value,
                                },
                              },
                            },
                          },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    이미지 alt
                  </label>
                  <input
                    type="text"
                    value={product.image.alt}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        languages: {
                          ...prev.languages,
                          [language]: {
                            ...prev.languages[language],
                            products: {
                              ...prev.languages[language].products,
                              [productKey]: {
                                ...prev.languages[language].products[productKey],
                                image: {
                                  ...prev.languages[language].products[productKey]
                                    .image,
                                  alt: e.target.value,
                                },
                              },
                            },
                          },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      이미지 width
                    </label>
                    <input
                      type="number"
                      value={product.image.width}
                      onChange={(e) =>
                        updateContent((prev) => ({
                          ...prev,
                          languages: {
                            ...prev.languages,
                            [language]: {
                              ...prev.languages[language],
                              products: {
                                ...prev.languages[language].products,
                                [productKey]: {
                                  ...prev.languages[language].products[
                                    productKey
                                  ],
                                  image: {
                                    ...prev.languages[language].products[
                                      productKey
                                    ].image,
                                    width: parseInt(e.target.value) || 400,
                                  },
                                },
                              },
                            },
                          },
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      이미지 height
                    </label>
                    <input
                      type="number"
                      value={product.image.height}
                      onChange={(e) =>
                        updateContent((prev) => ({
                          ...prev,
                          languages: {
                            ...prev.languages,
                            [language]: {
                              ...prev.languages[language],
                              products: {
                                ...prev.languages[language].products,
                                [productKey]: {
                                  ...prev.languages[language].products[
                                    productKey
                                  ],
                                  image: {
                                    ...prev.languages[language].products[
                                      productKey
                                    ].image,
                                    height: parseInt(e.target.value) || 400,
                                  },
                                },
                              },
                            },
                          },
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">이름</label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        languages: {
                          ...prev.languages,
                          [language]: {
                            ...prev.languages[language],
                            products: {
                              ...prev.languages[language].products,
                              [productKey]: {
                                ...prev.languages[language].products[productKey],
                                name: e.target.value,
                              },
                            },
                          },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">가격</label>
                  <input
                    type="text"
                    value={product.price}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        languages: {
                          ...prev.languages,
                          [language]: {
                            ...prev.languages[language],
                            products: {
                              ...prev.languages[language].products,
                              [productKey]: {
                                ...prev.languages[language].products[productKey],
                                price: e.target.value,
                              },
                            },
                          },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">설명</label>
                  <textarea
                    value={product.description}
                    onChange={(e) =>
                      updateContent((prev) => ({
                        ...prev,
                        languages: {
                          ...prev.languages,
                          [language]: {
                            ...prev.languages[language],
                            products: {
                              ...prev.languages[language].products,
                              [productKey]: {
                                ...prev.languages[language].products[productKey],
                                description: e.target.value,
                              },
                            },
                          },
                        },
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    rows={2}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-medium"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
