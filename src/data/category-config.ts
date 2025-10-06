import {
  BookOpen,
  Brain,
  Cloud,
  Code,
  Cog,
  Database,
  Lightbulb,
  Server,
  TestTube,
  Wrench,
} from "lucide-react";

import { SkillCategory } from "./skills";

export enum ProjectCategory {
  ALL = "all",
  FRONTEND = "frontend",
  BACKEND = "backend",
  ML = "machine-learning",
  OTHER = "other",
}

export const skillCategoryConfig = {
  [SkillCategory.ALL]: { name: "Wszystkie", icon: Cog },
  [SkillCategory.FRONTEND]: { name: "Frontend", icon: Code },
  [SkillCategory.BACKEND]: { name: "Backend", icon: Server },
  [SkillCategory.DATABASE]: { name: "Database", icon: Database },
  [SkillCategory.DEVOPS]: { name: "DevOps", icon: Cloud },
  [SkillCategory.TOOLS]: { name: "Narzędzia", icon: Wrench },
  [SkillCategory.TEST]: { name: "Testing", icon: TestTube },
  [SkillCategory.CURRENTLY_LEARNING]: {
    name: "W trakcie nauki",
    icon: BookOpen,
  },
  [SkillCategory.PLANNING_TO_LEARN]: {
    name: "Planuję nauczyć się",
    icon: Lightbulb,
  },
};

export const projectCategoryConfig = {
  [ProjectCategory.ALL]: { name: "Wszystkie", icon: Cog },
  [ProjectCategory.FRONTEND]: { name: "Frontend", icon: Code },
  [ProjectCategory.BACKEND]: { name: "Backend", icon: Server },
  [ProjectCategory.ML]: { name: "Machine Learning", icon: Brain },
  [ProjectCategory.OTHER]: { name: "Inne", icon: Wrench },
};
