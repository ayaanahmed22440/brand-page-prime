import { Link } from "@tanstack/react-router";

import { Wordmark } from "./Wordmark";
import { SITE } from "@/lib/site";

const COLUMNS: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Overview", to: "/product" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "Sign in", to: "/signin" },
      { label: "Get started", to: "/signup" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Wordmark />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Websites for local service businesses. Built, hosted and looked after by a small team.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="text-xs font-semibold tracking-wide text-foreground uppercase">
              {column.heading}
            </h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="rounded-sm transition-colors hover:text-foreground"
          >
            {SITE.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
