import type { MetadataRoute } from "next";

const siteUrl = "https://www.stanchiqa.com";

const projects = ["clime", "fairmoney", "prune"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/works`,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/playground`,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/journal`,
      priority: 0.6,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/works/${project}`,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
