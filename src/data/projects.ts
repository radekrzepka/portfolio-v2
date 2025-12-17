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

export const projects: Project[] = [
  {
    id: 1,
    title: "Reduko",
    description:
      "Full-stack aplikacja do zarządzania treściami edukacyjnymi i zajęciami dla korepetytorów zbudowana w architekturze monorepo.",
    longDescription:
      "Full-stack aplikacja do zarządzania treściami edukacyjnymi i zajęciami dla korepetytorów zbudowana w architekturze monorepo. Platforma umożliwia korepetytorom efektywne zarządzanie materiałami dydaktycznymi, planowanie zajęć oraz organizację treści edukacyjnych.",
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
    isInProgress: true,
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio v2",
    description:
      "Nowoczesna strona portfolio z animacjami i interaktywnymi elementami.",
    longDescription:
      "Moja strona portfolio zbudowana przy użyciu Astro i Tailwind CSS. Zawiera płynne animacje, wsparcie dla trybu ciemnego, responsywny design i zoptymalizowaną wydajność. Strona prezentuje projekty, umiejętności w eleganckim i przyjaznym dla użytkownika interfejsie.",
    images: [
      "/projects/portfolio-v2/main-page.png",
      "/projects/portfolio-v2/experience-page.png",
      "/projects/portfolio-v2/skills-page.png",
    ],
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "https://radoslawrzepka.me",
    githubUrl: "https://github.com/radekrzepka/portfolio-v2",
    categories: [ProjectCategory.FRONTEND],
    featured: true,
  },
  {
    id: 8,
    title: "ZUSometr",
    description:
      "Platforma do kalkulacji i symulacji emerytur dla polskiego systemu ubezpieczeń społecznych (ZUS).",
    longDescription:
      "ZUSometr to platforma do prognozowania świadczeń emerytalnych, eksploracji scenariuszy poprawy oraz generowania szczegółowych raportów PDF. Projekt został stworzony podczas hackathonu hack-yeah-2025. Platforma została zbudowana w architekturze monorepo z wykorzystaniem Turborepo.\n\nGłówne funkcje:\n- Zaawansowane kalkulacje emerytalne: Złożone algorytmy uwzględniające wzrost wynagrodzeń, waloryzację, typy umów (UOP, B2B, zlecenie, dzieło) oraz niestandardowe okresy doświadczenia zawodowego\n- Interaktywne dashboardy: Wizualizacja prognoz emerytalnych w czasie rzeczywistym z interaktywnymi wykresami i kartami KPI\n- Scenariusze poprawy: Eksploracja wielu strategii optymalizacji, w tym dłuższej pracy, redukcji zwolnień lekarskich i podwyżek wynagrodzeń\n- Generowanie raportów PDF: Automatyczne generowanie kompleksowych raportów emerytalnych przy użyciu Puppeteer do renderowania dynamicznych komponentów React\n- Panel administracyjny: Interfejs administracyjny do zarządzania danymi symulacji i analityką systemu\n\nArchitektura techniczna:\n- Backend: NestJS z wzorcem CQRS, Drizzle ORM, Puppeteer do generowania PDF, Swagger/OpenAPI\n- Frontend: Next.js 14 z App Router, React Query, React Hook Form + Zod, Recharts, Tailwind CSS + shadcn/ui\n- Monorepo: Turborepo z pakietami dla schematów bazy danych, logiki biznesowej, współdzielonych typów i komponentów UI\n- Bezpieczeństwo: Uwierzytelnianie JWT, walidacja wejść, konfiguracja CORS, hashowanie haseł",
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
    githubUrl: "https://github.com/radekrzepka",
    featured: true,
  },
  {
    id: 3,
    title: "Chess Profile Analyzer",
    description:
      "Aplikacja do analizy wyników szachowych dla graczy Lichess.org",
    longDescription:
      "Chess Profile Analyzer to aplikacja webowa, która pomaga szachistom analizować ich wyniki na platformie Lichess.org. Aplikacja koncentruje się na identyfikacji otwarć szachowych, które przynoszą najlepsze rezultaty dla gracza oraz dostarcza wgląd w jego mocne i słabe strony.\n\nAnalizując rozegrane partie, aplikacja pomaga graczom:\n- Zrozumieć, które otwarcia przynoszą im najlepsze wyniki\n- Śledzić progresję rankingu w czasie\n- Identyfikować wzorce w ich grze\n\nAplikacja wykorzystuje API Lichess do pobierania danych o grach.",
    images: [
      "/projects/chess-profile-analyzer/start-page.png",
      "/projects/chess-profile-analyzer/openings-analysis.png",
      "/projects/chess-profile-analyzer/chess-games-page.png",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://chess-profile-analyzer.vercel.app",
    githubUrl: "https://github.com/radekrzepka/chess-profile-analyzer",
    categories: [ProjectCategory.FRONTEND],
  },
  {
    id: 4,
    title: "Nextpress Chat",
    description:
      "Projekt edukacyjny do nauki backendu - aplikacja do komunikacji w czasie rzeczywistym zbudowana przy użyciu Next.js i Express.",
    longDescription:
      "Nextpress Chat to projekt edukacyjny stworzony w celu nauki backendu. Aplikacja do przesyłania wiadomości w czasie rzeczywistym została zbudowana przy użyciu Next.js i Express, aby praktycznie poznać technologie backendowe i architekturę serwerową. Projekt umożliwia użytkownikom łączenie się ze znajomymi, wymianę wiadomości w czasie rzeczywistym i zarządzanie swoim profilem.\n\nGłówne funkcje:\n- Wiadomości w czasie rzeczywistym: Wymiana wiadomości z kontaktami w czasie rzeczywistym przy użyciu technologii WebSocket\n- Zarządzanie kontaktami: Przeglądanie kontaktów i dodawanie nowych znajomych\n- Uwierzytelnianie użytkowników: Bezpieczna rejestracja, logowanie i procedury odzyskiwania hasła\n- Personalizacja profilu: Zmiana awatara i zarządzanie profilem\n- Status online: Sprawdzanie, którzy z kontaktów są obecnie online\n- Responsywny design: Działa płynnie zarówno na komputerach stacjonarnych, jak i urządzeniach mobilnych\n- Historia wiadomości: Dostęp i przeglądanie historii konwersacji",
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
    githubUrl: "https://github.com/radekrzepka/nextpress-chat",
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
  },
  {
    id: 5,
    title: "Liczby pierwsze",
    description:
      "Edukacyjna strona internetowa o liczbach pierwszych nagrodzona w konkursie 'Zobaczyć Matematykę'.",
    longDescription:
      "Strona internetowa stworzona w ramach 13. edycji konkursu 'Zobaczyć Matematykę' organizowanego przez Akademię Górniczo-Hutniczą im. Stanisława Staszica w Krakowie. Projekt dostarcza kompleksowych informacji o liczbach pierwszych, ich właściwościach i znaczeniu w matematyce.\n\nProjekt został nagrodzony nagrodą II stopnia przez AGH.\n\nGłówne funkcje:\n- Szczegółowa eksploracja rozkładu liczb pierwszych\n- Wyjaśnienie różnych typów liczb pierwszych\n- Algorytmy znajdowania liczb pierwszych\n- Zastosowania liczb pierwszych w świecie rzeczywistym\n- Aktualne hipotezy i nierozwiązane problemy związane z liczbami pierwszymi",
    images: [
      "/projects/prime-numbers/types.png",
      "/projects/prime-numbers/usage.png",
      "/projects/prime-numbers/algorithms.png",
      "/projects/prime-numbers/hypothesis.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript"],
    liveUrl: "https://radekrzepka.github.io/prime-numbers/",
    githubUrl: "https://github.com/radekrzepka/prime-numbers",
    categories: [ProjectCategory.FRONTEND],
  },
  {
    id: 6,
    title: "Kodent Website",
    description:
      "Profesjonalna strona internetowa dla gabinetu stomatologicznego.",
    longDescription:
      "Strona internetowa Kodent to profesjonalna witryna gabinetu stomatologicznego, która prezentuje usługi, technologie i wiedzę specjalistyczną.\n\nStrona służy jako portal informacyjny dla potencjalnych pacjentów oraz specjalistów zainteresowanych szkoleniami i edukacją stomatologiczną.\n\nGłówne funkcje:\n- Responsywny design: W pełni responsywna strona, która działa płynnie na urządzeniach stacjonarnych i mobilnych\n- Interaktywne elementy: Animacje przewijania i odtwarzacz wideo dla lepszego doświadczenia użytkownika\n- Prezentacja usług: Szczegółowa prezentacja usług stomatologicznych i technologii",
    images: [
      "/projects/kodent/main-page.png",
      "/projects/kodent/services.png",
      "/projects/kodent/contact.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript"],
    liveUrl: "https://startezeby.pl/",
    categories: [ProjectCategory.FRONTEND],
  },
  {
    id: 7,
    title: "Advent of Code",
    description:
      "Zbiór rozwiązań zadań programistycznych z corocznego wyzwania Advent of Code.",
    longDescription:
      "Repozytorium zawiera moje rozwiązania zadań z Advent of Code z ubiegłych lat, zaimplementowane w różnych językach programowania. Advent of Code to coroczny zestaw świątecznych łamigłówek programistycznych, które można rozwiązać w dowolnym języku programowania.\n\nKażda łamigłówka składa się z dwóch części, przy czym druga część bazuje na pierwszej. Repozytorium organizuje rozwiązania według roku i dnia, a każde rozwiązanie jest zaimplementowane w jednym lub kilku językach programowania.\n\nGłówne cechy projektu:\n- Rozwiązania z wielu lat Advent of Code\n- Implementacje w różnych językach programowania (Go dla 2024, Rust dla 2023, Python dla 2022)",
    images: ["/projects/advent-of-code/overview.png"],
    technologies: ["Go", "Rust", "Python"],
    githubUrl: "https://github.com/radekrzepka/advent-of-code",
    categories: [ProjectCategory.OTHER],
  },
];
