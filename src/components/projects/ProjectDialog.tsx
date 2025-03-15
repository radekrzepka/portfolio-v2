import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project, Credential } from "@/data/projects";
import { skills } from "@/data/skills";
import type { IconType } from "react-icons";

interface ProjectDialogProps {
  project: Project;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ProjectDialog({
  project,
  open = false,
  onOpenChange,
}: ProjectDialogProps) {
  const findSkillIcon = (techName: string) => {
    const skill = skills.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase(),
    );
    return skill ? { icon: skill.icon as IconType, color: skill.color } : null;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>

        {project.images && project.images.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-lg">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`${project.title} screenshot`}
                        className="h-auto w-full rounded-md object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" />
                  <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2" />
                </>
              )}
            </Carousel>
          </div>
        )}

        <div className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">Description</h3>
          <p className="text-muted-foreground">{project.longDescription}</p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => {
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
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="default"
                className="flex cursor-pointer items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="flex cursor-pointer items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Source Code
              </Button>
            </a>
          )}

          {project.credentials && project.credentials.length > 0 && (
            <div className="border-border bg-background mt-4 w-full rounded-md border p-3">
              <h4 className="mb-1 font-medium">Test Credentials</h4>
              <div className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
                {project.credentials.map((cred: Credential, index: number) => (
                  <div
                    key={index}
                    className="border-border col-span-2 grid grid-cols-2 gap-2 border-t pt-2 first:border-0 first:pt-0"
                  >
                    <div>
                      Username:{" "}
                      <span className="font-mono">{cred.username}</span>
                    </div>
                    <div>
                      Password:{" "}
                      <span className="font-mono">{cred.password}</span>
                    </div>
                    {cred.role && (
                      <div className="col-span-2">
                        Role: <span className="font-mono">{cred.role}</span>
                      </div>
                    )}
                    {cred.description && (
                      <div className="col-span-2 text-xs">
                        {cred.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
