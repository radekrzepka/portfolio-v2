import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { skills } from "@/lib/skills";
import { getExperiences } from "@/i18n";

const uiStrings: Record<
  "en" | "pl",
  { technologies: string; responsibilities: string; expand: string; collapse: string }
> = {
  en: {
    technologies: "Technologies",
    responsibilities: "Responsibilities",
    expand: "Expand",
    collapse: "Collapse",
  },
  pl: {
    technologies: "Technologie",
    responsibilities: "Zakres obowiązków",
    expand: "Rozwiń",
    collapse: "Zwiń",
  },
};

interface ExperienceTimelineProps {
  locale: "en" | "pl";
}

export function ExperienceTimeline({ locale }: ExperienceTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);
  const experiences = getExperiences(locale);
  const t = uiStrings[locale];

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  const findSkillIcon = (techName: string) => {
    const skill = skills.find(
      (s) => s.name.toLowerCase() === techName.toLowerCase(),
    );
    return skill ? { icon: skill.icon, color: skill.color } : null;
  };

  return (
    <div className="relative">
      <div className="bg-muted absolute top-0 bottom-0 left-4 hidden w-0.5 sm:block"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="bg-primary absolute left-4 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full sm:flex">
              <Briefcase className="text-primary-foreground h-4 w-4" />
            </div>
            <div className="bg-muted rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:ml-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="text-primary mt-1 font-medium">
                    {exp.company}
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-muted-foreground hover:text-foreground hover:bg-background/50 cursor-pointer rounded-full p-1 transition-colors"
                  aria-expanded={isExpanded(index)}
                  aria-label={
                    isExpanded(index) ? t.collapse : t.expand
                  }
                >
                  {isExpanded(index) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              <div className="text-muted-foreground mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded(index)
                    ? "mt-4 max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h4 className="mb-2 font-medium">{t.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => {
                          const skillInfo = findSkillIcon(tech);
                          const Icon = skillInfo?.icon;

                          return (
                            <span
                              key={tech}
                              className="bg-primary/10 text-primary flex items-center gap-1 rounded-full px-2 py-1 text-xs"
                            >
                              {Icon && (
                                <Icon
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
                  )}

                  <div>
                    <h4 className="mb-2 font-medium">
                      {t.responsibilities}
                    </h4>
                    <ul className="text-muted-foreground list-inside list-disc space-y-1">
                      {exp.responsibilities.map(
                        (responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
