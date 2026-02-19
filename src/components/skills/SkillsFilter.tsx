import { useState } from "react";
import { SkillCategory } from "@/lib/skills";
import { Button } from "@/components/ui/button";
import { getSkillCategoryConfig } from "@/i18n";

interface SkillsFilterProps {
  onFilterChange: (filter: SkillCategory) => void;
  locale: "en" | "pl";
}

export function SkillsFilter({ onFilterChange, locale }: SkillsFilterProps) {
  const [activeFilter, setActiveFilter] = useState(SkillCategory.ALL);
  const skillCategoryConfig = getSkillCategoryConfig(locale);

  const handleFilterClick = (filterValue: SkillCategory) => {
    setActiveFilter(filterValue);
    onFilterChange(filterValue);
  };

  const filters = Object.entries(skillCategoryConfig)
    .filter(([, config]) => config !== undefined)
    .map(([value, config]) => ({
      value: value as SkillCategory,
      name: config!.name,
      icon: config!.icon,
    }));

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = activeFilter === filter.value;

        return (
          <Button
            key={filter.value}
            onClick={() => handleFilterClick(filter.value)}
            variant={isActive ? "default" : "outline"}
            size="default"
            className="min-w-[120px]"
          >
            <Icon className="mr-2 h-4 w-4" />
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
}
