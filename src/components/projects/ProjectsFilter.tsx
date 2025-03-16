import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { projectCategoryConfig, ProjectCategory } from "@/data/category-config";

interface Filter {
  name: string;
  value: string;
  icon: React.ElementType;
}

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState<string>(ProjectCategory.ALL);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      const categoriesAttr = card.getAttribute("data-categories");
      const categories = categoriesAttr ? categoriesAttr.split(",") : [];

      if (filter === ProjectCategory.ALL || categories.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };

  const filters: Filter[] = Object.entries(projectCategoryConfig).map(
    ([value, config]) => ({
      value,
      name: config.name,
      icon: config.icon,
    }),
  );

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        const Icon = filter.icon;

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
