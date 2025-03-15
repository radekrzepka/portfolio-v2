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

const baseNavLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/experience", label: "Doświadczenie" },
  { href: "/projects", label: "Projekty" },
  { href: "/skills", label: "Umiejętności" },
  { href: "/contact", label: "Kontakt" },
];

const blogLink = { href: "/blog", label: "Blog" };

export const navLinks = FEATURES.BLOG_ENABLED
  ? [...baseNavLinks, blogLink]
  : baseNavLinks;
