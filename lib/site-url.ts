import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The public address of the site, used for SEO tags, the sitemap, and link previews.
 * Build-time only (it reads a file), so only import this from server code.
 *
 * 1. On GitHub, the deploy workflow passes in the real address automatically.
 * 2. Otherwise, it uses your domain from public/CNAME.
 * 3. Otherwise, localhost.
 */
export function getSiteUrl(): string {
  const fromWorkflow = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromWorkflow) return fromWorkflow.replace(/\/+$/, "");

  const domain = readCname();
  if (domain) return `https://${domain}`;

  return "http://localhost:3000";
}

function readCname(): string | null {
  try {
    const domain = readFileSync(join(process.cwd(), "public", "CNAME"), "utf8").trim();
    return /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain) ? domain : null;
  } catch {
    return null;
  }
}
