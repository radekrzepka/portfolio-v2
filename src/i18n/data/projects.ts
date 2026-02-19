import type { Locale } from "../ui";

import { ProjectCategory } from "./category-config";

export interface Credential {
  username: string;
  password: string;
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
  isInProgress?: boolean;
}

type ProjectTranslations = Record<
  number,
  { title?: string; description: string; longDescription: string }
>;

const projectTranslations: Record<Locale, ProjectTranslations> = {
  en: {
    1: {
      title: "Reduko",
      description:
        "Full-stack application for managing educational content and classes for tutors, built in a monorepo architecture.",
      longDescription:
        "Full-stack application for managing educational content and classes for tutors, built in a monorepo architecture. The platform enables tutors to efficiently manage teaching materials, schedule lessons, and organize educational content.",
    },
    2: {
      title: "Portfolio v2",
      description:
        "Modern portfolio website with animations and interactive elements.",
      longDescription:
        "My portfolio website built with Astro and Tailwind CSS. Features smooth animations, dark mode support, responsive design, and optimized performance. The site presents projects and skills in an elegant, user-friendly interface.",
    },
    8: {
      title: "ZUSometr",
      description:
        "Platform for calculating and simulating pensions for the Polish social insurance system (ZUS).",
      longDescription:
        "ZUSometr is a platform for forecasting pension benefits, exploring improvement scenarios, and generating detailed PDF reports. The project was created during the hack-yeah-2025 hackathon. Built in a monorepo architecture using Turborepo.\n\nKey features:\n- Advanced pension calculations: Complex algorithms accounting for salary growth, valorization, contract types (employment, B2B, mandate, specific task) and custom career periods\n- Interactive dashboards: Real-time pension forecast visualization with interactive charts and KPI cards\n- Improvement scenarios: Explore multiple optimization strategies including longer work, reduced sick leave, and salary increases\n- PDF report generation: Automatic generation of comprehensive pension reports using Puppeteer for dynamic React component rendering\n- Admin panel: Administrative interface for managing simulation data and system analytics\n\nTechnical architecture:\n- Backend: NestJS with CQRS pattern, Drizzle ORM, Puppeteer for PDF generation, Swagger/OpenAPI\n- Frontend: Next.js 14 with App Router, React Query, React Hook Form + Zod, Recharts, Tailwind CSS + shadcn/ui\n- Monorepo: Turborepo with packages for database schemas, business logic, shared types and UI components\n- Security: JWT authentication, input validation, CORS configuration, password hashing",
    },
    3: {
      title: "Chess Profile Analyzer",
      description:
        "Application for analyzing chess results for Lichess.org players",
      longDescription:
        "Chess Profile Analyzer is a web application that helps chess players analyze their results on the Lichess.org platform. The app focuses on identifying chess openings that yield the best results for the player and provides insight into their strengths and weaknesses.\n\nBy analyzing played games, the app helps players:\n- Understand which openings bring them the best results\n- Track ranking progression over time\n- Identify patterns in their play\n\nThe application uses the Lichess API to fetch game data.",
    },
    4: {
      title: "Nextpress Chat",
      description:
        "Educational project for learning backend - real-time communication app built with Next.js and Express.",
      longDescription:
        "Nextpress Chat is an educational project created to learn backend development. The real-time messaging application was built with Next.js and Express to practically explore backend technologies and server architecture. The project enables users to connect with friends, exchange messages in real-time, and manage their profile.\n\nKey features:\n- Real-time messages: Exchange messages with contacts in real-time using WebSocket technology\n- Contact management: Browse contacts and add new friends\n- User authentication: Secure registration, login, and password recovery procedures\n- Profile customization: Change avatar and manage profile\n- Online status: Check which contacts are currently online\n- Responsive design: Works smoothly on both desktop and mobile devices\n- Message history: Access and browse conversation history",
    },
    5: {
      title: "Prime Numbers",
      description:
        "Educational website about prime numbers, awarded in the 'See Mathematics' competition.",
      longDescription:
        "Website created for the 13th edition of the 'See Mathematics' competition organized by the AGH University of Science and Technology in Kraków. The project provides comprehensive information about prime numbers, their properties, and significance in mathematics.\n\nThe project was awarded second prize by AGH.\n\nKey features:\n- Detailed exploration of prime number distribution\n- Explanation of different types of prime numbers\n- Algorithms for finding prime numbers\n- Real-world applications of prime numbers\n- Current hypotheses and unsolved problems related to prime numbers",
    },
    6: {
      title: "Kodent Website",
      description: "Professional website for a dental practice.",
      longDescription:
        "Kodent website is a professional dental practice site that presents services, technologies, and specialist knowledge.\n\nThe site serves as an information portal for potential patients and specialists interested in dental training and education.\n\nKey features:\n- Responsive design: Fully responsive site that works smoothly on desktop and mobile devices\n- Interactive elements: Scroll animations and video player for a better user experience\n- Service presentation: Detailed presentation of dental services and technologies",
    },
    7: {
      title: "Advent of Code",
      description:
        "Collection of solutions to programming challenges from the annual Advent of Code.",
      longDescription:
        "Repository containing my solutions to Advent of Code challenges from previous years, implemented in various programming languages. Advent of Code is an annual set of festive programming puzzles that can be solved in any programming language.\n\nEach puzzle consists of two parts, with the second part building on the first. The repository organizes solutions by year and day, with each solution implemented in one or more programming languages.\n\nProject features:\n- Solutions from multiple years of Advent of Code\n- Implementations in various programming languages (Go for 2024, Rust for 2023, Python for 2022)",
    },
  },
  pl: {
    1: {
      title: "Reduko",
      description:
        "Full-stack aplikacja do zarządzania treściami edukacyjnymi i zajęciami dla korepetytorów zbudowana w architekturze monorepo.",
      longDescription:
        "Full-stack aplikacja do zarządzania treściami edukacyjnymi i zajęciami dla korepetytorów zbudowana w architekturze monorepo. Platforma umożliwia korepetytorom efektywne zarządzanie materiałami dydaktycznymi, planowanie zajęć oraz organizację treści edukacyjnych.",
    },
    2: {
      title: "Portfolio v2",
      description:
        "Nowoczesna strona portfolio z animacjami i interaktywnymi elementami.",
      longDescription:
        "Moja strona portfolio zbudowana przy użyciu Astro i Tailwind CSS. Zawiera płynne animacje, wsparcie dla trybu ciemnego, responsywny design i zoptymalizowaną wydajność. Strona prezentuje projekty, umiejętności w eleganckim i przyjaznym dla użytkownika interfejsie.",
    },
    8: {
      title: "ZUSometr",
      description:
        "Platforma do kalkulacji i symulacji emerytur dla polskiego systemu ubezpieczeń społecznych (ZUS).",
      longDescription:
        "ZUSometr to platforma do prognozowania świadczeń emerytalnych, eksploracji scenariuszy poprawy oraz generowania szczegółowych raportów PDF. Projekt został stworzony podczas hackathonu hack-yeah-2025. Platforma została zbudowana w architekturze monorepo z wykorzystaniem Turborepo.\n\nGłówne funkcje:\n- Zaawansowane kalkulacje emerytalne: Złożone algorytmy uwzględniające wzrost wynagrodzeń, waloryzację, typy umów (UOP, B2B, zlecenie, dzieło) oraz niestandardowe okresy doświadczenia zawodowego\n- Interaktywne dashboardy: Wizualizacja prognoz emerytalnych w czasie rzeczywistym z interaktywnymi wykresami i kartami KPI\n- Scenariusze poprawy: Eksploracja wielu strategii optymalizacji, w tym dłuższej pracy, redukcji zwolnień lekarskich i podwyżek wynagrodzeń\n- Generowanie raportów PDF: Automatyczne generowanie kompleksowych raportów emerytalnych przy użyciu Puppeteer do renderowania dynamicznych komponentów React\n- Panel administracyjny: Interfejs administracyjny do zarządzania danymi symulacji i analityką systemu\n\nArchitektura techniczna:\n- Backend: NestJS z wzorcem CQRS, Drizzle ORM, Puppeteer do generowania PDF, Swagger/OpenAPI\n- Frontend: Next.js 14 z App Router, React Query, React Hook Form + Zod, Recharts, Tailwind CSS + shadcn/ui\n- Monorepo: Turborepo z pakietami dla schematów bazy danych, logiki biznesowej, współdzielonych typów i komponentów UI\n- Bezpieczeństwo: Uwierzytelnianie JWT, walidacja wejść, konfiguracja CORS, hashowanie haseł",
    },
    3: {
      title: "Chess Profile Analyzer",
      description:
        "Aplikacja do analizy wyników szachowych dla graczy Lichess.org",
      longDescription:
        "Chess Profile Analyzer to aplikacja webowa, która pomaga szachistom analizować ich wyniki na platformie Lichess.org. Aplikacja koncentruje się na identyfikacji otwarć szachowych, które przynoszą najlepsze rezultaty dla gracza oraz dostarcza wgląd w jego mocne i słabe strony.\n\nAnalizując rozegrane partie, aplikacja pomaga graczom:\n- Zrozumieć, które otwarcia przynoszą im najlepsze wyniki\n- Śledzić progresję rankingu w czasie\n- Identyfikować wzorce w ich grze\n\nAplikacja wykorzystuje API Lichess do pobierania danych o grach.",
    },
    4: {
      title: "Nextpress Chat",
      description:
        "Projekt edukacyjny do nauki backendu - aplikacja do komunikacji w czasie rzeczywistym zbudowana przy użyciu Next.js i Express.",
      longDescription:
        "Nextpress Chat to projekt edukacyjny stworzony w celu nauki backendu. Aplikacja do przesyłania wiadomości w czasie rzeczywistym została zbudowana przy użyciu Next.js i Express, aby praktycznie poznać technologie backendowe i architekturę serwerową. Projekt umożliwia użytkownikom łączenie się ze znajomymi, wymianę wiadomości w czasie rzeczywistym i zarządzanie swoim profilem.\n\nGłówne funkcje:\n- Wiadomości w czasie rzeczywistym: Wymiana wiadomości z kontaktami w czasie rzeczywistym przy użyciu technologii WebSocket\n- Zarządzanie kontaktami: Przeglądanie kontaktów i dodawanie nowych znajomych\n- Uwierzytelnianie użytkowników: Bezpieczna rejestracja, logowanie i procedury odzyskiwania hasła\n- Personalizacja profilu: Zmiana awatara i zarządzanie profilem\n- Status online: Sprawdzanie, którzy z kontaktów są obecnie online\n- Responsywny design: Działa płynnie zarówno na komputerach stacjonarnych, jak i urządzeniach mobilnych\n- Historia wiadomości: Dostęp i przeglądanie historii konwersacji",
    },
    5: {
      title: "Liczby pierwsze",
      description:
        "Edukacyjna strona internetowa o liczbach pierwszych nagrodzona w konkursie 'Zobaczyć Matematykę'.",
      longDescription:
        "Strona internetowa stworzona w ramach 13. edycji konkursu 'Zobaczyć Matematykę' organizowanego przez Akademię Górniczo-Hutniczą im. Stanisława Staszica w Krakowie. Projekt dostarcza kompleksowych informacji o liczbach pierwszych, ich właściwościach i znaczeniu w matematyce.\n\nProjekt został nagrodzony nagrodą II stopnia przez AGH.\n\nGłówne funkcje:\n- Szczegółowa eksploracja rozkładu liczb pierwszych\n- Wyjaśnienie różnych typów liczb pierwszych\n- Algorytmy znajdowania liczb pierwszych\n- Zastosowania liczb pierwszych w świecie rzeczywistym\n- Aktualne hipotezy i nierozwiązane problemy związane z liczbami pierwszymi",
    },
    6: {
      title: "Kodent Website",
      description:
        "Profesjonalna strona internetowa dla gabinetu stomatologicznego.",
      longDescription:
        "Strona internetowa Kodent to profesjonalna witryna gabinetu stomatologicznego, która prezentuje usługi, technologie i wiedzę specjalistyczną.\n\nStrona służy jako portal informacyjny dla potencjalnych pacjentów oraz specjalistów zainteresowanych szkoleniami i edukacją stomatologiczną.\n\nGłówne funkcje:\n- Responsywny design: W pełni responsywna strona, która działa płynnie na urządzeniach stacjonarnych i mobilnych\n- Interaktywne elementy: Animacje przewijania i odtwarzacz wideo dla lepszego doświadczenia użytkownika\n- Prezentacja usług: Szczegółowa prezentacja usług stomatologicznych i technologii",
    },
    7: {
      title: "Advent of Code",
      description:
        "Zbiór rozwiązań zadań programistycznych z corocznego wyzwania Advent of Code.",
      longDescription:
        "Repozytorium zawiera moje rozwiązania zadań z Advent of Code z ubiegłych lat, zaimplementowane w różnych językach programowania. Advent of Code to coroczny zestaw świątecznych łamigłówek programistycznych, które można rozwiązać w dowolnym języku programowania.\n\nKażda łamigłówka składa się z dwóch części, przy czym druga część bazuje na pierwszej. Repozytorium organizuje rozwiązania według roku i dnia, a każde rozwiązanie jest zaimplementowane w jednym lub kilku językach programowania.\n\nGłówne cechy projektu:\n- Rozwiązania z wielu lat Advent of Code\n- Implementacje w różnych językach programowania (Go dla 2024, Rust dla 2023, Python dla 2022)",
    },
  },
};

const projectsBase = [
  {
    id: 1,
    images: undefined as string[] | undefined,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Drizzle",
      "Tailwind CSS",
      "shadcn/ui",
      "Turborepo",
      "AWS",
    ],
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
    liveUrl: undefined as string | undefined,
    githubUrl: undefined as string | undefined,
    credentials: undefined as Credential[] | undefined,
    isInProgress: true,
    featured: true,
  },
  {
    id: 2,
    images: [
      "/projects/portfolio-v2/main-page.png",
      "/projects/portfolio-v2/experience-page.png",
      "/projects/portfolio-v2/skills-page.png",
    ],
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    categories: [ProjectCategory.FRONTEND],
    liveUrl: "https://radoslawrzepka.me",
    githubUrl: "https://github.com/radekrzepka/portfolio-v2",
    credentials: undefined,
    isInProgress: false,
    featured: true,
  },
  {
    id: 8,
    images: [
      "/projects/zusometr/main-page.png",
      "/projects/zusometr/calculator.png",
      "/projects/zusometr/results.png",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Drizzle",
      "Tailwind CSS",
      "shadcn/ui",
      "Turborepo",
    ],
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
    liveUrl: undefined,
    githubUrl: "https://github.com/radekrzepka/hack-yeah-2025",
    credentials: undefined,
    isInProgress: false,
    featured: true,
  },
  {
    id: 3,
    images: [
      "/projects/chess-profile-analyzer/start-page.png",
      "/projects/chess-profile-analyzer/openings-analysis.png",
      "/projects/chess-profile-analyzer/chess-games-page.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: [ProjectCategory.FRONTEND],
    liveUrl: "https://chess-profile-analyzer.vercel.app",
    githubUrl: "https://github.com/radekrzepka/chess-profile-analyzer",
    credentials: undefined,
    isInProgress: false,
    featured: false,
  },
  {
    id: 4,
    images: [
      "/projects/nextpress-chat/main-chat.png",
      "/projects/nextpress-chat/main-chat-big.png",
      "/projects/nextpress-chat/user-view.png",
      "/projects/nextpress-chat/log-in-page.png",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
    liveUrl: undefined,
    githubUrl: "https://github.com/radekrzepka/nextpress-chat",
    credentials: undefined,
    isInProgress: false,
    featured: false,
  },
  {
    id: 5,
    images: [
      "/projects/prime-numbers/types.png",
      "/projects/prime-numbers/usage.png",
      "/projects/prime-numbers/algorithms.png",
      "/projects/prime-numbers/hypothesis.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript"],
    categories: [ProjectCategory.FRONTEND],
    liveUrl: "https://radekrzepka.github.io/prime-numbers/",
    githubUrl: "https://github.com/radekrzepka/prime-numbers",
    credentials: undefined,
    isInProgress: false,
    featured: false,
  },
  {
    id: 6,
    images: [
      "/projects/kodent/main-page.png",
      "/projects/kodent/services.png",
      "/projects/kodent/contact.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript"],
    categories: [ProjectCategory.FRONTEND],
    liveUrl: "https://startezeby.pl/",
    githubUrl: undefined,
    credentials: undefined,
    isInProgress: false,
    featured: false,
  },
  {
    id: 7,
    images: ["/projects/advent-of-code/overview.png"],
    technologies: ["Go", "Rust", "Python"],
    categories: [ProjectCategory.OTHER],
    liveUrl: undefined,
    githubUrl: "https://github.com/radekrzepka/advent-of-code",
    credentials: undefined,
    isInProgress: false,
    featured: false,
  },
];

export function getProjects(locale: Locale): Project[] {
  const trans = projectTranslations[locale];
  return projectsBase.map((base) => {
    const t = trans[base.id];
    return {
      ...base,
      title: t?.title ?? "",
      description: t?.description ?? "",
      longDescription: t?.longDescription ?? "",
      images: base.images,
      technologies: base.technologies,
      liveUrl: base.liveUrl,
      githubUrl: base.githubUrl,
      credentials: base.credentials,
      categories: base.categories,
      featured: base.featured,
      isInProgress: base.isInProgress,
    } as Project;
  });
}
