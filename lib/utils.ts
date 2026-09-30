/** Joins class names, skipping empty ones. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** "(425) 555-0123" → "tel:+14255550123" */
export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return `tel:${digits}`;
}

export function mailHref(email: string) {
  return `mailto:${email}`;
}

/** True once a placeholder like "[GHL FORM EMBED URL]" has been replaced with a real link. */
export function isRealUrl(value: string) {
  return /^https:\/\/[^\s[\]]+$/.test(value.trim());
}

/**
 * Prefixes a file in /public with the GitHub Pages base path.
 * Use it for images and videos: asset("/images/me.jpg").
 */
export function asset(path: string) {
  if (!path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
