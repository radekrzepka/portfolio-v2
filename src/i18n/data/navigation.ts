import { Github, Linkedin, Mail } from "lucide-react";
import type { Locale } from "../ui";

export interface NavLink {
  path: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: typeof Github;
  label: string;
}

const navLinksData: Record<Locale, NavLink[]> = {
  en: [
    { path: "", label: "Home" },
    { path: "experience", label: "Experience" },
    { path: "projects", label: "Projects" },
    { path: "skills", label: "Skills" },
    { path: "contact", label: "Contact" },
  ],
  pl: [
    { path: "", label: "Strona główna" },
    { path: "experience", label: "Doświadczenie" },
    { path: "projects", label: "Projekty" },
    { path: "skills", label: "Umiejętności" },
    { path: "contact", label: "Kontakt" },
  ],
};

const socialLinksData: Record<Locale, SocialLink[]> = {
  en: [
    { href: "https://github.com/radekrzepka", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/radosław-rzepka-a87157248",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:kontakt@radoslawrzepka.me", icon: Mail, label: "Email" },
  ],
  pl: [
    { href: "https://github.com/radekrzepka", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/radosław-rzepka-a87157248",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:kontakt@radoslawrzepka.me", icon: Mail, label: "Email" },
  ],
};

export function getNavLinks(locale: Locale): NavLink[] {
  return navLinksData[locale];
}

export function getSocialLinks(locale: Locale): SocialLink[] {
  return socialLinksData[locale];
}
