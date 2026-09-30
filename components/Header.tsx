"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarCheck, Menu, Phone, X } from "lucide-react";
import { business, header, SHOW_DEMO, SHOW_TESTIMONIALS } from "@/site.config";
import { asset, telHref } from "@/lib/utils";
import { ButtonLink, Container } from "@/components/ui";
import { Logo } from "@/components/Logo";

const navItems = SHOW_TESTIMONIALS
  ? [...header.nav.slice(0, 3), { label: "Testimonials", href: "#testimonials" }, ...header.nav.slice(3)]
  : header.nav;

export function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" prefetch={false} className="min-w-0 rounded" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${item.href}`}
                  prefetch={false}
                  className="text-[15px] font-medium text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          {SHOW_DEMO ? (
            <ButtonLink
              href={telHref(business.demoPhone)}
              className="h-10 gap-1.5 px-3.5 text-sm sm:h-11 sm:gap-2 sm:px-5 sm:text-[15px]"
            >
              <Phone aria-hidden className="size-4" />
              {header.demoLabel}
            </ButtonLink>
          ) : (
            <ButtonLink
              href={asset("/#contact")}
              onClick={() => setOpen(false)}
              className="h-10 gap-1.5 px-3.5 text-sm sm:h-11 sm:gap-2 sm:px-5 sm:text-[15px]"
            >
              <CalendarCheck aria-hidden className="size-4" />
              <span className="sm:hidden">{header.consultLabelShort}</span>
              <span className="hidden sm:inline">{header.consultLabel}</span>
            </ButtonLink>
          )}
          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded-lg text-fg hover:bg-white/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/[0.06] bg-ink-950 lg:hidden">
          <Container className="py-2">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3.5 text-lg font-medium text-fg last:border-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
