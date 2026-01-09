"use client";

interface LanguageSwitcherProps {
  language: "ko" | "en" | "ja";
  onLanguageChange: (lang: "ko" | "en" | "ja") => void;
}

export default function LanguageSwitcher({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onLanguageChange("ko")}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ko
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        en
      </button>
      <button
        onClick={() => onLanguageChange("ja")}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ja
      </button>
    </div>
  );
}
