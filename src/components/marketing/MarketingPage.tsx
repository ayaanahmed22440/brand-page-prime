import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Shared chrome for every public page. */
export function MarketingPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className = "",
  as: Tag = "section",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  "aria-labelledby"?: string;
}) {
  return (
    <Tag className={`border-b border-border py-16 md:py-20 ${className}`} {...rest}>
      <div className="container-page">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="measure mt-3 leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
