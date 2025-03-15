import {
  BookOpen,
  Brain,
  Cloud,
  Code,
  Cog,
  Database,
  Server,
  TestTube,
  Wrench,
} from "lucide-react";

import { SkillCategory } from "./skills";

export const categoryConfig = {
  [SkillCategory.ALL]: { name: "All", icon: Cog },
  [SkillCategory.FRONTEND]: { name: "Frontend", icon: Code },
  [SkillCategory.BACKEND]: { name: "Backend", icon: Server },
  [SkillCategory.DATABASE]: { name: "Database", icon: Database },
  [SkillCategory.DEVOPS]: { name: "DevOps", icon: Cloud },
  [SkillCategory.TOOLS]: { name: "Tools", icon: Wrench },
  [SkillCategory.TEST]: { name: "Testing", icon: TestTube },
  [SkillCategory.ML]: { name: "Machine Learning", icon: Brain },
  [SkillCategory.CURRENTLY_LEARNING]: {
    name: "Currently Learning",
    icon: BookOpen,
  },
};
