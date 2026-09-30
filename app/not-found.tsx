import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-sm font-semibold tracking-wide text-accent-400 uppercase">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-lg bg-accent-600 px-6 font-semibold text-white hover:bg-accent-500"
      >
        Go to the home page
      </Link>
    </Container>
  );
}
