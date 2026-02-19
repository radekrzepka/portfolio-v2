import { useState } from "react";
import type { Project } from "@/i18n";
import { ProjectCardContent } from "./ProjectCardContent";
import { ProjectDialog } from "./ProjectDialog";

interface ProjectCardComponentProps {
  project: Project;
  locale: "en" | "pl";
}

export function ProjectCardComponent({
  project,
  locale,
}: ProjectCardComponentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <ProjectCardContent
        project={project}
        onClick={handleOpenDialog}
        locale={locale}
      />
      <ProjectDialog
        project={project}
        locale={locale}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
}
