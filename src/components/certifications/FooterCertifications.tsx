import { certifications } from "@/data/certifications";

export function FooterCertifications() {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <a
              key={cert.name}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
            >
              <Icon className="h-3 w-3" />
              <span className="max-w-[120px] truncate">
                {cert.name.split("-")[0].trim()}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
