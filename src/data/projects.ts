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
    githubUrl: "https://github.com/radekrzepka/portfolio-v2",
    categories: [ProjectCategory.FRONTEND],
    featured: true,
  },
  {
    id: 2,
    title: "Chess Profile Analyzer",
    description:
      "Aplikacja do analizy wyników szachowych dla graczy Lichess.org",
    longDescription:
      "Chess Profile Analyzer to aplikacja webowa, która pomaga szachistom analizować ich wyniki na platformie Lichess.org. Aplikacja koncentruje się na identyfikacji otwarć szachowych, które przynoszą najlepsze rezultaty dla gracza oraz dostarcza wgląd w jego mocne i słabe strony.\n\nAnalizując rozegrane partie, aplikacja pomaga graczom:\n- Zrozumieć, które otwarcia przynoszą im najlepsze wyniki\n- Śledzić progresję rankingu w czasie\n- Identyfikować wzorce w ich grze\n\nAplikacja wykorzystuje API Lichess do pobierania danych o grach i przeprowadza analizę statystyczną, aby dostarczyć praktyczne wskazówki do poprawy umiejętności szachowych.",
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
  {
    id: 3,
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
    id: 4,
    title: "Smakosfera",
    description:
      "Platforma do dzielenia się przepisami kulinarnymi z możliwością zapisywania ulubionych.",
    longDescription:
      "Smakosfera to platforma do dzielenia się przepisami kulinarnymi, która umożliwia użytkownikom odkrywanie, tworzenie i zapisywanie przepisów. Aplikacja zapewnia intuicyjny interfejs do przeglądania przepisów, filtrowania według tagów i zarządzania osobistą kolekcją ulubionych.\n\nProjekt został stworzony, aby ułatwić entuzjastom jedzenia dzielenie się swoimi doświadczeniami kulinarnymi i odkrywanie nowych przepisów od innych użytkowników.\n\nGłówne funkcje:\n- Uwierzytelnianie użytkowników: Bezpieczna rejestracja i logowanie\n- Zarządzanie przepisami: Tworzenie, przeglądanie i zarządzanie własnymi przepisami\n- Ulubione przepisy: Zapisywanie przepisów innych użytkowników do kolekcji ulubionych\n- Odkrywanie przepisów: Przeglądanie wszystkich przepisów udostępnionych przez społeczność\n- Filtrowanie tagów: Filtrowanie przepisów według tagów, aby znaleźć dokładnie to, czego szukasz\n- Personalizacja nazwy użytkownika: Ustawianie i zmiana nazwy użytkownika\n- Responsywny design: Zoptymalizowany zarówno dla komputerów stacjonarnych, jak i urządzeń mobilnych",
    images: ["/projects/smakosfera/main-page.png"],
    technologies: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://smakosfera.web.app/",
    githubUrl: "https://github.com/radekrzepka/smakosfera",
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
    credentials: [
      {
        username: "test@gmail.com",
        password: "qwerty",
      },
    ],
  },
  {
    id: 5,
    title: "Kodent Website",
    description:
      "Profesjonalna strona internetowa dla gabinetu stomatologicznego specjalizującego się w cyfrowej stomatologii i projektowaniu uśmiechu.",
    longDescription:
      "Strona internetowa Kodent to profesjonalna witryna gabinetu stomatologicznego, która prezentuje usługi, technologie i wiedzę specjalistyczną oferowane przez praktykę dentystyczną dr. Błażeja Szczerbaniewicza. Strona koncentruje się na rozwiązaniach cyfrowej stomatologii, w tym leczeniu Invisalign, cyfrowym projektowaniu uśmiechu i interdyscyplinarnym leczeniu zaburzeń czynnościowych układu stomatognatycznego.\n\nStrona służy jako portal informacyjny dla potencjalnych pacjentów oraz specjalistów zainteresowanych szkoleniami i edukacją stomatologiczną.\n\nGłówne funkcje:\n- Responsywny design: W pełni responsywna strona, która działa płynnie na urządzeniach stacjonarnych i mobilnych\n- Nowoczesny interfejs: Czysty i profesjonalny design odpowiedni dla praktyki stomatologicznej\n- Interaktywne elementy: Animacje przewijania i odtwarzacz wideo dla lepszego doświadczenia użytkownika\n- Prezentacja usług: Szczegółowa prezentacja usług stomatologicznych i technologii\n- Nawigacja mobilna: Menu hamburgerowe dla lepszej nawigacji na urządzeniach mobilnych",
    images: [
      "/projects/kodent/main-page.png",
      "/projects/kodent/services.png",
      "/projects/kodent/contact.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript"],
    liveUrl: "https://startezeby.pl/",
    categories: [ProjectCategory.FRONTEND],
  },
];
