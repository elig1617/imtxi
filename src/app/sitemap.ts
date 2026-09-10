import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/framework",
  "/standards",
  "/join",
  "/join/practitioners",
  "/join/centers",
  "/join/industry",
  "/council",
  "/reimbursement",
  "/resources",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/reimbursement" || route === "/news" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route === "/framework" || route === "/reimbursement" ? 0.9 : 0.7,
  }));
}
