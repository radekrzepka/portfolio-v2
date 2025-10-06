import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCardContent } from "./ProjectCardContent";
import { ProjectDialog } from "./ProjectDialog";

interface ProjectCardComponentProps {
  project: Project;
}

export function ProjectCardComponent({ project }: ProjectCardComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <ProjectCardContent project={project} onClick={handleOpenDialog} />
      <ProjectDialog
        project={project}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
