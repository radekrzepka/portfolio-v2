import type { Locale } from "../ui";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  responsibilities: string[];
}

const experiencesData: Record<Locale, Experience[]> = {
  en: [
    {
      title: "Fullstack Developer",
      company: "Devopsbay",
      period: "September 2025 - Present",
      description:
        "Working on migrating services from monolithic to distributed cloud architecture on AWS. Developing new APIs and integrations using serverless technologies.",
      technologies: [
        "TypeScript",
        "Node.js",
        "AWS",
        "Terraform",
        "GitHub Actions",
        "Vitest",
      ],
      responsibilities: [
        "Migrating service from Ruby monolith to AWS Lambda-based architecture",
        "Creating new API and AWS SNS notification consumers for integration with existing system",
        "Gradually replacing legacy services with parallel operation of new and old systems",
        "Writing and maintaining unit and integration tests using Vitest",
        "Collaborating on migration planning to ensure backward compatibility and system reliability",
      ],
    },
    {
      title: "Software Developer",
      company: "Gorrion",
      period: "July 2023 - July 2025",
      description:
        "Working in a dynamic team on developing modern web applications for clients from various industries. Implementing full-stack solutions using the latest technologies.",
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
        "GitHub Actions",
      ],
      responsibilities: [
        "Designing and implementing user interfaces using React, Next.js, and TypeScript",
        "Creating and maintaining APIs using NestJS, tRPC, and GraphQL",
        "Implementing online payment integrations using Stripe",
        "Designing and managing PostgreSQL databases using Prisma and Drizzle",
        "Deploying applications on AWS cloud using Pulumi and Docker",
        "Writing unit and end-to-end tests using Jest and Playwright",
        "Collaborating with UX/UI team on designing new features",
        "Participating in code review and continuous integration process",
        "Working in Agile methodology and participating in Scrum meetings",
      ],
    },
    {
      title: "Math tutor",
      company: "Self-employed",
      period: "2019 - Present",
      description:
        "Conducting individual mathematics lessons for elementary and high school students. Preparing students for eighth-grade and matriculation exams.",
      responsibilities: [
        "Conducting individual mathematics lessons tailored to student needs and level",
        "Preparing students for eighth-grade exam and mathematics matriculation exam",
        "Developing personalized teaching materials and exercises for individual student needs",
        "Diagnosing learning difficulties and adapting teaching methods to student learning style",
        "Regularly monitoring student progress and providing constructive feedback",
        "Building student motivation and confidence in mathematical skills",
      ],
    },
    {
      title: "IT support",
      company: "Fizjofit",
      period: "June 2020 - July 2025",
      description:
        "Providing IT support for a physiotherapy company. Managing website, creating reports, and automating processes.",
      technologies: ["WordPress", "Excel", "Python"],
      responsibilities: [
        "Operating and editing website based on WordPress",
        "Creating and managing reports in Excel",
        "Designing and implementing Python scripts for report generation automation",
        "Optimizing work processes through IT solutions",
        "Ongoing technical support for company employees",
        "Updating and maintaining information systems",
      ],
    },
  ],
  pl: [
    {
      title: "Fullstack Developer",
      company: "Devopsbay",
      period: "Wrzesień 2025 - Obecnie",
      description:
        "Praca nad migracją serwisów z architektury monolitycznej do rozproszonej w chmurze AWS. Rozwój nowych API i integracji z wykorzystaniem technologii serverless.",
      technologies: [
        "TypeScript",
        "Node.js",
        "AWS",
        "Terraform",
        "GitHub Actions",
        "Vitest",
      ],
      responsibilities: [
        "Migracja serwisu z monolitu Ruby do architektury opartej na AWS Lambda",
        "Tworzenie nowego API oraz konsumentów powiadomień AWS SNS do integracji z istniejącym systemem",
        "Stopniowe zastępowanie starych serwisów z równoległym działaniem nowych i legacy systemów",
        "Pisanie i utrzymanie testów jednostkowych oraz integracyjnych przy użyciu Vitest",
        "Współpraca przy planowaniu migracji zapewniającej kompatybilność wsteczną i niezawodność systemu",
      ],
    },
    {
      title: "Software Developer",
      company: "Gorrion",
      period: "Lipiec 2023 - Lipiec 2025",
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
        "GitHub Actions",
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
  ],
};

export function getExperiences(locale: Locale): Experience[] {
  return experiencesData[locale];
}
