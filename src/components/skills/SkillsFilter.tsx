import { useState } from "react";
import { SkillCategory } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { Brain, Layers, Layout, Server } from "lucide-react";

const filters = [
  { value: SkillCategory.ALL, name: "All", icon: Layers },
  { value: SkillCategory.FRONTEND, name: "Frontend", icon: Layout },
  { value: SkillCategory.BACKEND, name: "Backend", icon: Server },
  { value: SkillCategory.ML, name: "Machine Learning", icon: Brain },
];

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
