import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold tracking-tighter">Certyfikaty</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <div
              key={cert.name}
              className="bg-card rounded-lg border p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-2 flex items-center gap-4">
                <div
                  className={`rounded-full py-3 ${cert.color} bg-opacity-10`}
                >
                  <Icon className={`h-8 w-8 ${cert.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{cert.name}</h3>
              </div>
              <p className="text-muted-foreground mb-3 text-sm dark:text-zinc-400">
                {cert.issuer}
              </p>
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <p className="text-sm font-medium">
                  Wydany: {cert.issued} · Wygasa: {cert.expires}
                </p>
              </div>
              <p className="text-muted-foreground mb-4 text-sm dark:text-zinc-400">
                {cert.description}
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                <span>Pokaż certyfikat</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
