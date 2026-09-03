import { Link } from "@tanstack/react-router";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Text wordmark with a small square mark. No decorative illustration. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-sm text-[0.975rem] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80",
        className,
      )}
      aria-label={`${SITE.name} home`}
    >
      <span
        aria-hidden="true"
        className="grid size-6 place-items-center rounded-[3px] bg-primary text-[0.7rem] font-bold text-primary-foreground"
      >
        W
      </span>
      <span>
        Web<span className="text-muted-foreground">Warheads</span>
      </span>
    </Link>
  );
}
