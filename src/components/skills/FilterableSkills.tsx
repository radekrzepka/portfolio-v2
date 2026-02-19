import { useState } from "react";
import { SkillsFilter } from "./SkillsFilter";
import { skills, SkillCategory } from "@/lib/skills";

interface FilterableSkillsProps {
  locale: "en" | "pl";
}

export function FilterableSkills({ locale }: FilterableSkillsProps) {
  const [activeFilter, setActiveFilter] = useState(SkillCategory.ALL);

  const filteredSkills = skills.filter(
    (skill) =>
      !skill.hideInSkills &&
      (activeFilter === SkillCategory.ALL
        ? skill.category !== SkillCategory.PLANNING_TO_LEARN
        : skill.category === activeFilter),
  );

  return (
    <div>
      <SkillsFilter onFilterChange={setActiveFilter} locale={locale} />

      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex transform flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-110"
            >
              <div
                className={`bg-background group rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 dark:bg-zinc-900`}
                style={{ boxShadow: `0 0 0 rgba(0, 0, 0, 0)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}33`;
                  e.currentTarget.style.color = skill.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(0, 0, 0, 0)`;
                  e.currentTarget.style.color = "";
                }}
              >
                <Icon className="h-8 w-8" />
              </div>
              <span className="text-foreground text-sm font-medium dark:text-zinc-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
