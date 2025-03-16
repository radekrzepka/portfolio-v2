import { useState } from "react";
import { SkillCategory } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { skillCategoryConfig } from "@/data/category-config";

interface SkillsFilterProps {
  onFilterChange: (filter: SkillCategory) => void;
}

export function SkillsFilter({ onFilterChange }: SkillsFilterProps) {
  const [activeFilter, setActiveFilter] = useState(SkillCategory.ALL);

  const handleFilterClick = (filterValue: SkillCategory) => {
    setActiveFilter(filterValue);
    onFilterChange(filterValue);
  };

  // Create filters array from all categories in skillCategoryConfig
  const filters = Object.entries(skillCategoryConfig).map(
    ([value, config]) => ({
      value: value as SkillCategory,
      name: config.name,
      icon: config.icon,
    }),
  );

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
