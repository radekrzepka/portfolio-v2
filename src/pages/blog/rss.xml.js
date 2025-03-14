import rss from "@astrojs/rss";

import { FEATURES } from "../../config/features";

export async function GET(context) {
  if (!FEATURES.BLOG_ENABLED) {
    return context.redirect("/");
  }

  return rss({
    title: "Radosław Rzepka | Blog",
    description:
      "Blog o programowaniu, technologiach webowych i moich doświadczeniach jako full-stack developer.",
    site: context.site || "https://radoslawrzepka.me",
    items: [],
    customData: `<language>pl</language>`,
  });
}
