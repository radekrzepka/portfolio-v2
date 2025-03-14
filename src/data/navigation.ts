import { Github, Linkedin, Mail } from "lucide-react";

import { FEATURES } from "../config/features";

export const socialLinks = [
  { href: "https://github.com/radekrzepka", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/radosław-rzepka-a87157248",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:kontakt@radoslawrzepka.me", icon: Mail, label: "Email" },
];

// Base navigation links that are always shown
const baseNavLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/experience", label: "Doświadczenie" },
  { href: "/projects", label: "Projekty" },
  { href: "/skills", label: "Umiejętności" },
  { href: "/contact", label: "Kontakt" },
];

// Blog link that is conditionally added
const blogLink = { href: "/blog", label: "Blog" };

// Export the final navigation links based on feature flags
export const navLinks = FEATURES.BLOG_ENABLED
  ? [...baseNavLinks, blogLink]
  : baseNavLinks;
