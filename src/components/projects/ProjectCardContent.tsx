import type { Project } from "@/data/projects";
import { skills } from "@/data/skills";
import type { IconType } from "react-icons";
import { Hammer } from "lucide-react";

interface ProjectCardContentProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCardContent({
  project,
  onClick,
}: ProjectCardContentProps) {
  const findSkillIcon = (techName: string) => {
    const skill = skills.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase(),
    );
    return skill ? { icon: skill.icon as IconType, color: skill.color } : null;
  };

  return (
    <div className="project-card-content cursor-pointer" onClick={onClick}>
      <div className="relative aspect-video overflow-hidden rounded-md">
        <img
          src={
            project.images && project.images.length > 0
              ? project.images[0]
              : "/placeholder.svg"
          }
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.isInProgress && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-amber-500/90 px-2 py-1 text-xs font-medium text-white shadow-md backdrop-blur-sm">
            <Hammer className="h-3 w-3" />W trakcie
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => {
            const skillInfo = findSkillIcon(tech);
            const IconComponent = skillInfo?.icon;

            return (
              <span
                key={index}
                className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs"
              >
                {IconComponent && (
                  <IconComponent
                    style={{ color: skillInfo?.color }}
                    className="h-3.5 w-3.5"
                  />
                )}
                {tech}
              </span>
            );
          })}
          {project.technologies.length > 3 && (
            <span className="bg-background text-muted-foreground inline-flex items-center rounded-full px-2 py-1 text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
