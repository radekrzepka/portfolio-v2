export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Gorrion",
    period: "Lipiec 2023 - Obecnie",
    description:
      "Praca w dynamicznym zespole nad rozwojem nowoczesnych aplikacji webowych dla klientów z różnych branż. Implementacja rozwiązań full-stack z wykorzystaniem najnowszych technologii.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "Node.js",
      "NestJS",
      "tRPC",
      "GraphQL",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Firebase",
      "Docker",
      "AWS",
      "Pulumi",
      "Turborepo",
      "Jest",
      "Playwright",
    ],
    responsibilities: [
      "Projektowanie i implementacja interfejsów użytkownika z wykorzystaniem React, Next.js i TypeScript",
      "Tworzenie i utrzymanie API z wykorzystaniem NestJS, tRPC i GraphQL",
      "Implementacja integracji płatności online z wykorzystaniem Stripe",
      "Projektowanie i zarządzanie bazami danych PostgreSQL z wykorzystaniem Prisma i Drizzle",
      "Wdrażanie aplikacji w środowisku chmurowym AWS z wykorzystaniem Pulumi i Docker",
      "Pisanie testów jednostkowych i end-to-end z wykorzystaniem Jest i Playwright",
      "Współpraca z zespołem UX/UI przy projektowaniu nowych funkcjonalności",
      "Udział w code review i procesie ciągłej integracji",
      "Praca w metodologii Agile i udział w spotkaniach Scrum",
    ],
  },
  {
    title: "Korepetytor matematyki",
    company: "Działalność własna",
    period: "2019 - Obecnie",
    description:
      "Prowadzenie indywidualnych zajęć z matematyki dla uczniów szkół podstawowych i średnich. Przygotowanie do egzaminów ósmoklasisty i maturalnych.",
    responsibilities: [
      "Prowadzenie indywidualnych zajęć z matematyki dostosowanych do potrzeb i poziomu ucznia",
      "Przygotowanie uczniów do egzaminu ósmoklasisty i egzaminu maturalnego z matematyki",
      "Opracowanie spersonalizowanych materiałów dydaktycznych i zadań dostosowanych do indywidualnych potrzeb uczniów",
      "Diagnozowanie trudności w nauce i dostosowywanie metod nauczania do stylu uczenia się ucznia",
      "Regularne monitorowanie postępów uczniów i udzielanie konstruktywnej informacji zwrotnej",
      "Budowanie motywacji i pewności siebie uczniów w zakresie umiejętności matematycznych",
    ],
  },
  {
    title: "Wsparcie informatyczne",
    company: "Fizjofit",
    period: "Czerwiec 2020 - Lipiec 2025",
    description:
      "Zapewnienie wsparcia informatycznego dla firmy z branży fizjoterapeutycznej. Zarządzanie stroną internetową, tworzenie raportów oraz automatyzacja procesów.",
    technologies: ["WordPress", "Excel", "Python"],
    responsibilities: [
      "Obsługa i edycja strony internetowej opartej na systemie WordPress",
      "Tworzenie i zarządzanie raportami w programie Excel",
      "Projektowanie i implementacja skryptów w języku Python do automatyzacji generowania raportów",
      "Optymalizacja procesów pracy poprzez wdrażanie rozwiązań informatycznych",
      "Bieżące wsparcie techniczne dla pracowników firmy",
      "Aktualizacja i utrzymanie systemów informatycznych",
    ],
  },
];
