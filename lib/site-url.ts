import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The public address of the site, used for canonical links, the sitemap, link previews,
 * and Google's business info. Build-time only (it reads a file), so only import this
 * from server code.
 *
 * 1. Your domain from public/CNAME → https://voicebutlerwa.com
 * 2. Otherwise NEXT_PUBLIC_SITE_URL, if set
 * 3. Otherwise localhost
 */
export function getSiteUrl(): string {
  const domain = readCname();
  if (domain) return `https://${domain}`;

  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/+$/, "");

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
