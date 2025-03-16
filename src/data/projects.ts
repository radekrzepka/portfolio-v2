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
    liveUrl: "https://smakosfera-a84c7.web.app/",
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
  {
    id: 6,
    title: "Quiz React",
    description:
      "Responsywna i interaktywna aplikacja quizowa zbudowana przy użyciu React.",
    longDescription:
      "Quiz React to aplikacja webowa, która umożliwia użytkownikom testowanie swojej wiedzy w różnych kategoriach. Aplikacja oferuje czysty, przyjazny dla użytkownika interfejs, gdzie użytkownicy mogą:\n\n- Wybierać kategorie quizów\n- Odpowiadać na pytania\n- Oznaczać trudne pytania do późniejszego przeglądu\n- Śledzić czas spędzony na quizie\n- Przeglądać odpowiedzi i zobaczyć swój wynik na końcu\n\nGłówne funkcje:\n- Wybór kategorii: Wybór spośród różnych kategorii quizów\n- Interaktywny interfejs pytań: Przyjazny dla użytkownika interfejs do odpowiadania na pytania\n- Nawigacja między pytaniami: Łatwa nawigacja między pytaniami\n- Oznaczanie pytań: Możliwość oznaczania trudnych pytań do późniejszego przeglądu\n- Timer: Śledzenie czasu spędzonego na quizie\n- Przegląd wyników: Szczegółowe wyniki z poprawnymi odpowiedziami po ukończeniu quizu",
    images: [
      "/projects/quiz-react/quiz.png",
      "/projects/quiz-react/results.png",
    ],
    technologies: ["React"],
    liveUrl: "https://radekrzepka.github.io/quiz-react/",
    githubUrl: "https://github.com/radekrzepka/quiz-react",
    categories: [ProjectCategory.FRONTEND],
  },
  {
    id: 7,
    title: "Budget App",
    description:
      "Kompleksowa aplikacja webowa do śledzenia i zarządzania osobistymi finansami.",
    longDescription:
      "Budget App to narzędzie do zarządzania finansami osobistymi, które pomaga śledzić zarobki i wydatki. Aplikacja zapewnia przyjazny dla użytkownika interfejs do rejestrowania transakcji finansowych, wizualizacji wzorców wydatków i monitorowania celów budżetowych.\n\nAplikacja rozwiązuje powszechny problem śledzenia, na co wydawane są pieniądze i pomaga podejmować świadome decyzje finansowe, zapewniając jasne wizualizacje nawyków wydatkowych.\n\nGłówne funkcje:\n- Uwierzytelnianie użytkowników: Tworzenie i zarządzanie osobistym kontem w celu zabezpieczenia danych finansowych\n- Rejestrowanie transakcji: Łatwe dodawanie zapisów dochodów i wydatków z opisami i datami\n- Panel finansowy: Przeglądanie podsumowania bieżącego statusu finansowego na stronie głównej\n- Interaktywne wykresy: Wizualizacja wzorców wydatków i źródeł dochodów za pomocą intuicyjnych wykresów\n- Widok kalendarza: Śledzenie działań finansowych według daty w formacie kalendarza\n- Cele budżetowe: Ustawianie i monitorowanie celów dochodów i wydatków, aby pomóc w zarządzaniu finansami",
    images: [
      "/projects/budget-app/dashboard-page.png",
      "/projects/budget-app/calendar-page.png",
      "/projects/budget-app/chart-page.png",
    ],
    technologies: ["HTML5", "Sass", "JavaScript", "Firebase"],
    liveUrl: "https://budget-app-502e6.web.app/",
    githubUrl: "https://github.com/radekrzepka/budget-app",
    categories: [ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
    credentials: [
      {
        username: "test@gmail.com",
        password: "qwerty",
      },
    ],
  },
  {
    id: 8,
    title: "Advent of Code",
    description:
      "Zbiór rozwiązań zadań programistycznych z corocznego wyzwania Advent of Code w różnych językach programowania.",
    longDescription:
      "Repozytorium zawiera moje rozwiązania zadań z Advent of Code z wielu lat, zaimplementowane w różnych językach programowania. Advent of Code to coroczny zestaw świątecznych łamigłówek programistycznych, które można rozwiązać w dowolnym języku programowania.\n\nKażda łamigłówka składa się z dwóch części, przy czym druga część bazuje na pierwszej. Repozytorium organizuje rozwiązania według roku i dnia, a każde rozwiązanie jest zaimplementowane w jednym lub kilku językach programowania.\n\nGłówne cechy projektu:\n- Rozwiązania z wielu lat Advent of Code\n- Implementacje w różnych językach programowania (Go dla 2024, Rust dla 2023, Python dla 2022)",
    images: ["/projects/advent-of-code/overview.png"],
    technologies: ["Go", "Rust", "Python"],
    githubUrl: "https://github.com/radekrzepka/advent-of-code-solutions",
    categories: [ProjectCategory.OTHER],
  },
];
