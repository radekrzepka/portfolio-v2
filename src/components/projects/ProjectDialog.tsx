import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
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
import "./project-dialog.css";

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
      <DialogContent className="custom-scrollbar max-h-[90vh] max-w-4xl overflow-y-auto p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <DialogTitle className="p-0">{project.title}</DialogTitle>
          <DialogClose className="hover:bg-muted cursor-pointer rounded-full p-1 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-4 overflow-hidden rounded-lg">
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
                  <CarouselPrevious className="bg-background/80 border-border hover:bg-background dark:bg-background/90 dark:border-border/50 absolute top-1/2 left-2 -translate-y-1/2 border shadow-sm" />
                  <CarouselNext className="bg-background/80 border-border hover:bg-background dark:bg-background/90 dark:border-border/50 absolute top-1/2 right-2 -translate-y-1/2 border shadow-sm" />
                </>
              )}
            </Carousel>
          </div>
        )}

        <div className="mb-4">
          <h3 className="mb-1 text-lg font-semibold">Opis</h3>
          <p className="text-muted-foreground text-sm whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="mb-1 text-lg font-semibold">Technologie</h3>
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
                Demo
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
                Kod źródłowy
              </Button>
            </a>
          )}

          {project.credentials && project.credentials.length > 0 && (
            <div className="border-border bg-background mt-4 w-full rounded-md border p-3">
              <h4 className="mb-1 font-medium">Dane testowe</h4>
              <div className="text-muted-foreground grid grid-cols-2 gap-2 text-sm">
                {project.credentials.map((cred: Credential, index: number) => (
                  <div
                    key={index}
                    className="border-border col-span-2 grid grid-cols-2 gap-2 border-t pt-2 first:border-0 first:pt-0"
                  >
                    <div>
                      Nazwa użytkownika:{" "}
                      <span className="font-mono">{cred.username}</span>
                    </div>
                    <div>
                      Hasło: <span className="font-mono">{cred.password}</span>
                    </div>
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
