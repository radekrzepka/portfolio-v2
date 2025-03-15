import { useState } from "react";
import { SkillCategory } from "@/data/skills";
import { categoryConfig } from "@/data/category-config";

const categoryOrder = [
  SkillCategory.ALL,
  SkillCategory.FRONTEND,
  SkillCategory.BACKEND,
  SkillCategory.DATABASE,
  SkillCategory.DEVOPS,
  SkillCategory.TOOLS,
  SkillCategory.TEST,
  SkillCategory.ML,
  SkillCategory.CURRENTLY_LEARNING,
];

const filters = categoryOrder.map((category) => ({
  value: category,
  name: categoryConfig[category].name,
  icon: categoryConfig[category].icon,
}));

interface SkillsFilterProps {
  onFilterChange: (filter: SkillCategory) => void;
}

export function SkillsFilter({ onFilterChange }: SkillsFilterProps) {
  const [activeFilter, setActiveFilter] = useState(SkillCategory.ALL);

  const handleFilterClick = (filterValue: SkillCategory) => {
    setActiveFilter(filterValue);
    onFilterChange(filterValue);
  };

  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            onClick={() => handleFilterClick(filter.value)}
            className={`inline-flex h-10 cursor-pointer items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
              isActive
                ? "bg-primary text-primary-foreground dark:bg-white dark:text-black"
                : "border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground border dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white"
            }`}
          >
            <Icon className="mr-2 h-4 w-4" />
            {filter.name}
          </button>
        );
      })}
    </div>
  );
}
