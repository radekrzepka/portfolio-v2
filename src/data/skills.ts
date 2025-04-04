import type { IconType } from "react-icons";
import { FaFileExcel } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiAstro,
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPulumi,
  SiPython,
  SiReact,
  SiRust,
  SiSass,
  SiScikitlearn,
  SiShadcnui,
  SiStorybook,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiTensorflow,
  SiTestcafe,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiWordpress,
} from "react-icons/si";

export enum SkillCategory {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  DATABASE = "database",
  DEVOPS = "devops",
  TOOLS = "tools",
  TEST = "testing",
  ML = "machine learning",
  CURRENTLY_LEARNING = "currently learning",
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: IconType;
  color: string;
  isFeatured?: boolean;
  hideInSkills?: boolean;
}

export const skills: Skill[] = [
  {
    name: "React",
    category: SkillCategory.FRONTEND,
    icon: SiReact,
    color: "#61DAFB",
    isFeatured: true,
  },
  {
    name: "Next.js",
    category: SkillCategory.FRONTEND,
    icon: SiNextdotjs,
    color: "#000000",
    isFeatured: true,
  },
  {
    name: "Astro",
    category: SkillCategory.FRONTEND,
    icon: SiAstro,
    color: "#FF5D01",
  },
  {
    name: "TypeScript",
    category: SkillCategory.FRONTEND,
    icon: SiTypescript,
    color: "#3178C6",
    isFeatured: true,
  },
  {
    name: "JavaScript",
    category: SkillCategory.FRONTEND,
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    category: SkillCategory.FRONTEND,
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: SkillCategory.FRONTEND,
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "SASS",
    category: SkillCategory.FRONTEND,
    icon: SiSass,
    color: "#CC6699",
  },
  {
    name: "Tailwind CSS",
    category: SkillCategory.FRONTEND,
    icon: SiTailwindcss,
    color: "#06B6D4",
    isFeatured: true,
  },
  {
    name: "shadcn/ui",
    category: SkillCategory.FRONTEND,
    icon: SiShadcnui,
    color: "#000000",
    hideInSkills: true,
  },
  {
    name: "Figma",
    category: SkillCategory.FRONTEND,
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Storybook",
    category: SkillCategory.FRONTEND,
    icon: SiStorybook,
    color: "#FF4785",
  },
  {
    name: "Node.js",
    category: SkillCategory.BACKEND,
    icon: SiNodedotjs,
    color: "#339933",
    isFeatured: true,
  },
  {
    name: "Express.js",
    category: SkillCategory.BACKEND,
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "NestJS",
    category: SkillCategory.BACKEND,
    icon: SiNestjs,
    color: "#E0234E",
    isFeatured: true,
  },
  {
    name: "tRPC",
    category: SkillCategory.BACKEND,
    icon: SiTrpc,
    color: "#2596BE",
  },
  {
    name: "Strapi",
    category: SkillCategory.BACKEND,
    icon: SiStrapi,
    color: "#2F2E8B",
    isFeatured: true,
  },
  {
    name: "GraphQL",
    category: SkillCategory.BACKEND,
    icon: SiGraphql,
    color: "#E10098",
  },
  {
    name: "Stripe",
    category: SkillCategory.BACKEND,
    icon: SiStripe,
    color: "#008CDD",
    isFeatured: true,
  },
  {
    name: "PostgreSQL",
    category: SkillCategory.DATABASE,
    icon: SiPostgresql,
    color: "#4169E1",
    isFeatured: true,
  },
  {
    name: "Prisma",
    category: SkillCategory.DATABASE,
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    name: "Drizzle",
    category: SkillCategory.DATABASE,
    icon: SiDrizzle,
    color: "#C5F74F",
    isFeatured: true,
  },
  {
    name: "Firebase",
    category: SkillCategory.DATABASE,
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Docker",
    category: SkillCategory.DEVOPS,
    icon: SiDocker,
    color: "#2496ED",
    isFeatured: true,
  },
  {
    name: "AWS",
    category: SkillCategory.DEVOPS,
    icon: SiAmazonwebservices,
    color: "#FF9900",
    isFeatured: true,
  },
  {
    name: "Vercel",
    category: SkillCategory.DEVOPS,
    icon: SiVercel,
    color: "#000000",
  },
  {
    name: "Pulumi",
    category: SkillCategory.DEVOPS,
    icon: SiPulumi,
    color: "#8A3391",
    isFeatured: true,
  },
  {
    name: "GitHub Actions",
    category: SkillCategory.DEVOPS,
    icon: SiGithubactions,
    color: "#2088FF",
    isFeatured: true,
  },
  {
    name: "Git",
    category: SkillCategory.TOOLS,
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Turborepo",
    category: SkillCategory.TOOLS,
    icon: SiTurborepo,
    color: "#EF4444",
    isFeatured: true,
  },
  {
    name: "ESLint",
    category: SkillCategory.TOOLS,
    icon: SiEslint,
    color: "#4B32C3",
  },
  {
    name: "Prettier",
    category: SkillCategory.TOOLS,
    icon: SiPrettier,
    color: "#F7B93E",
  },
  {
    name: "Jest",
    category: SkillCategory.TEST,
    icon: SiJest,
    color: "#C21325",
    isFeatured: true,
  },
  {
    name: "Playwright",
    category: SkillCategory.TEST,
    icon: SiTestcafe,
    color: "#E33332",
  },
  {
    name: "Vitest",
    category: SkillCategory.TEST,
    icon: SiVitest,
    color: "#729B1B",
  },
  {
    name: "Python",
    category: SkillCategory.ML,
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Pandas",
    category: SkillCategory.ML,
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "TensorFlow",
    category: SkillCategory.ML,
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "scikit-learn",
    category: SkillCategory.ML,
    icon: SiScikitlearn,
    color: "#F7931E",
  },
  {
    name: "NumPy",
    category: SkillCategory.ML,
    icon: SiNumpy,
    color: "#013243",
  },
  {
    name: "Go",
    category: SkillCategory.CURRENTLY_LEARNING,
    icon: SiGo,
    color: "#00ADD8",
  },
  {
    name: "Rust",
    category: SkillCategory.CURRENTLY_LEARNING,
    icon: SiRust,
    color: "#000000",
    hideInSkills: true,
  },
  {
    name: "WordPress",
    category: SkillCategory.TOOLS,
    icon: SiWordpress,
    color: "#21759B",
    hideInSkills: true,
  },
  {
    name: "Excel",
    category: SkillCategory.TOOLS,
    icon: FaFileExcel,
    color: "#217346",
    hideInSkills: true,
  },
];
