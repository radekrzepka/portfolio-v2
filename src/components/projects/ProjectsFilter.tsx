import React, { useState } from "react";
import { Brain, Layers, Layout, Server } from "lucide-react";
import { ProjectCategory } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface Filter {
  name: string;
  value: string;
  icon: React.ElementType;
}

const filters: Filter[] = [
  { name: "All", value: ProjectCategory.ALL, icon: Layers },
  { name: "Frontend", value: ProjectCategory.FRONTEND, icon: Layout },
  { name: "Backend", value: ProjectCategory.BACKEND, icon: Server },
  { name: "Machine Learning", value: ProjectCategory.ML, icon: Brain },
];

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
