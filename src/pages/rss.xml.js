import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    site: context.site,
  });
}
