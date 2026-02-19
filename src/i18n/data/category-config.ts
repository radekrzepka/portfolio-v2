import {
  Cloud,
  Code,
  Cog,
  Database,
  FileCode,
  Lightbulb,
  Server,
  TestTube,
  Wrench,
} from "lucide-react";
import { SkillCategory } from "@/lib/skills";
import type { Locale } from "../ui";

export enum ProjectCategory {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  ML = "machine-learning",
  OTHER = "other",
}

interface CategoryConfig {
  name: string;
  icon: typeof Cog;
}

const skillCategoryConfigData: Record<
  Locale,
  Partial<Record<SkillCategory, CategoryConfig>>
> = {
  en: {
    [SkillCategory.ALL]: { name: "All", icon: Cog },
    [SkillCategory.LANGUAGE]: { name: "Languages", icon: FileCode },
    [SkillCategory.FRONTEND]: { name: "Frontend", icon: Code },
    [SkillCategory.BACKEND]: { name: "Backend", icon: Server },
    [SkillCategory.DATABASE]: { name: "Database", icon: Database },
    [SkillCategory.DEVOPS]: { name: "DevOps", icon: Cloud },
    [SkillCategory.TOOLS]: { name: "Tools", icon: Wrench },
    [SkillCategory.TEST]: { name: "Testing", icon: TestTube },
    [SkillCategory.PLANNING_TO_LEARN]: {
      name: "Planning to learn",
      icon: Lightbulb,
    },
  },
  pl: {
    [SkillCategory.ALL]: { name: "Wszystkie", icon: Cog },
    [SkillCategory.LANGUAGE]: { name: "Języki", icon: FileCode },
    [SkillCategory.FRONTEND]: { name: "Frontend", icon: Code },
    [SkillCategory.BACKEND]: { name: "Backend", icon: Server },
    [SkillCategory.DATABASE]: { name: "Database", icon: Database },
    [SkillCategory.DEVOPS]: { name: "DevOps", icon: Cloud },
    [SkillCategory.TOOLS]: { name: "Narzędzia", icon: Wrench },
    [SkillCategory.TEST]: { name: "Testing", icon: TestTube },
    [SkillCategory.PLANNING_TO_LEARN]: {
      name: "Planuję nauczyć się",
      icon: Lightbulb,
    },
  },
};

const projectCategoryConfigData: Record<
  Locale,
  Record<string, CategoryConfig>
> = {
  en: {
    [ProjectCategory.ALL]: { name: "All", icon: Cog },
    [ProjectCategory.FRONTEND]: { name: "Frontend", icon: Code },
    [ProjectCategory.BACKEND]: { name: "Backend", icon: Server },
    [ProjectCategory.OTHER]: { name: "Other", icon: Wrench },
  },
  pl: {
    [ProjectCategory.ALL]: { name: "Wszystkie", icon: Cog },
    [ProjectCategory.FRONTEND]: { name: "Frontend", icon: Code },
    [ProjectCategory.BACKEND]: { name: "Backend", icon: Server },
    [ProjectCategory.OTHER]: { name: "Inne", icon: Wrench },
  },
};

export function getSkillCategoryConfig(locale: Locale) {
  return skillCategoryConfigData[locale];
}

export function getProjectCategoryConfig(locale: Locale) {
  return projectCategoryConfigData[locale];
}
