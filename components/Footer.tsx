import Link from "next/link";
import { business, footer } from "@/site.config";
import { mailHref, telHref } from "@/lib/utils";
import { Container } from "@/components/ui";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-black py-12 text-muted sm:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm leading-relaxed">{business.tagline}</p>
            <p className="mt-4 max-w-sm leading-relaxed">
              <span className="font-semibold text-fg">{footer.serviceAreaLabel}:</span>{" "}
              {business.serviceAreas.join(", ")}, {business.remoteNote}.
            </p>
          </div>

          <ul className="space-y-3 text-lg md:justify-self-end">
            <li>
              <a href={mailHref(business.email)} className="font-semibold break-words text-fg hover:text-accent-400">
                {business.email}
              </a>
            </li>
            <li>
              <a href={telHref(business.demoPhone)} className="font-semibold text-fg hover:text-accent-400">
                {business.demoPhone}
              </a>
              <span className="block text-sm">Demo line, call anytime</span>
            </li>
            <li className="flex gap-5">
              <Link href="/privacy/" className="hover:text-fg">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="hover:text-fg">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm">
          © {year} {business.name}. {business.city}, {business.state}.
        </p>
      </Container>
    </footer>
  );
}
