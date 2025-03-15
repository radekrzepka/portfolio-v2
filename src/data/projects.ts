export enum ProjectCategory {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  ML = "machine-learning",
}

export interface Credential {
  username: string;
  password: string;
  role?: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images?: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  categories: ProjectCategory[];
  credentials?: Credential[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio v2",
    description:
      "Nowoczesna strona portfolio z animacjami i interaktywnymi elementami.",
    longDescription:
      "Moja osobista strona portfolio zbudowana przy użyciu Astro i Tailwind CSS. Zawiera płynne animacje, wsparcie dla trybu ciemnego, responsywny design i zoptymalizowaną wydajność. Strona prezentuje projekty, umiejętności i treści blogowe w eleganckim i przyjaznym dla użytkownika interfejsie. Wykorzystałem nowoczesne technologie webowe, aby stworzyć szybkie i interaktywne doświadczenie dla odwiedzających.",
    images: [
      "/projects/portfolio-v2/main-page.png",
      "/projects/portfolio-v2/experience-page.png",
      "/projects/portfolio-v2/skills-page.png",
    ],
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://radoslawrzepka.me",
    githubUrl: "https://github.com/radoslawrzepka/portfolio-v2",
    categories: [ProjectCategory.FRONTEND],
    featured: true,
  },
  {
    id: 2,
    title: "Chess Profile Analyzer",
    description:
      "Aplikacja do analizy wyników szachowych dla graczy Lichess.org",
    longDescription:
      "Chess Profile Analyzer to aplikacja webowa, która pomaga szachistom analizować ich wyniki na platformie Lichess.org. Aplikacja koncentruje się na identyfikacji otwarć szachowych, które przynoszą najlepsze rezultaty dla gracza oraz dostarcza wgląd w jego mocne i słabe strony.\n\n" +
      "Analizując rozegrane partie, aplikacja pomaga graczom:\n" +
      "- Zrozumieć, które otwarcia przynoszą im najlepsze wyniki\n" +
      "- Śledzić progresję rankingu w czasie\n" +
      "- Identyfikować wzorce w ich grze\n\n" +
      "Aplikacja wykorzystuje API Lichess do pobierania danych o grach i przeprowadza analizę statystyczną, aby dostarczyć praktyczne wskazówki do poprawy umiejętności szachowych.",
    images: [
      "/projects/chess-profile-analyzer/start-page.png",
      "/projects/chess-profile-analyzer/openings-analysis.png",
      "/projects/chess-profile-analyzer/chess-games-page.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://chess-profile-analyzer.vercel.app",
    githubUrl: "https://github.com/radekrzepka/chess-profile-analyzer",
    categories: [ProjectCategory.FRONTEND],
    featured: true,
  },
];
