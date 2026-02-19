import { defaultLocale, ui, type Locale, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith("/pl")) {
    return "pl";
  }
  return "en";
}

export function useTranslations(lang: Locale) {
  return function t(key: UIKey, params?: Record<string, string | number>): string {
    let str: string = (ui[lang][key] ?? ui[defaultLocale][key] ?? key) as string;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, String(v));
      });
    }
    return str;
  };
}

export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: string, targetLang: Locale = lang): string {
    const cleanPath = path.replace(/^\//, "").replace(/\/$/, "") || "";
    if (targetLang === defaultLocale) {
      return cleanPath ? `/${cleanPath}` : "/";
    }
    return cleanPath ? `/${targetLang}/${cleanPath}` : `/${targetLang}`;
  };
}
