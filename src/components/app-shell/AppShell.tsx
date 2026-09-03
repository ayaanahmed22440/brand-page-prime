import { Link, Outlet } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Wordmark } from "@/components/marketing/Wordmark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export type ShellNavItem = {
  label: string;
  to: string;
  description?: string;
};

const linkClass =
  "block rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";
const activeLinkClass = "bg-muted text-foreground font-medium";

function ShellNav({ items, onNavigate }: { items: ShellNavItem[]; onNavigate?: () => void }) {
  return (
    <ul className="space-y-0.5">
      {items.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            onClick={onNavigate}
            className={linkClass}
            activeProps={{ className: cn(linkClass, activeLinkClass) }}
            activeOptions={{ exact: item.to.split("/").length <= 2 }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Shared shell for the customer and admin applications: persistent sidebar on
 * large screens, drawer navigation on small screens.
 */
export function AppShell({
  items,
  areaLabel,
  contextLabel,
  contextNote,
  actions,
}: {
  items: ShellNavItem[];
  /** e.g. "Customer app" or "Admin" — announced to assistive tech. */
  areaLabel: string;
  /** Tenant or scope currently in view. */
  contextLabel: string;
  contextNote: string;
  actions?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[16rem_1fr]">
      <aside className="hidden border-r border-border bg-sidebar lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-border px-5">
          <Wordmark />
        </div>
        <div className="border-b border-border px-5 py-4">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {areaLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">{contextLabel}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{contextNote}</p>
        </div>
        <nav aria-label={areaLabel} className="flex-1 overflow-y-auto p-3">
          <ShellNav items={items} />
        </nav>
        <div className="border-t border-border p-3">
          <Link
            to="/"
            className="block rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to website
          </Link>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col">
        <header className="flex h-16 items-center justify-between gap-3 border-b border-border px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" aria-label="Open navigation">
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[16rem] p-0">
                <div className="flex h-16 items-center border-b border-border px-5">
                  <Wordmark />
                </div>
                <SheetTitle className="px-5 pt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {areaLabel}
                </SheetTitle>
                <nav aria-label={`${areaLabel} (mobile)`} className="p-3">
                  <ShellNav items={items} onNavigate={() => setOpen(false)} />
                </nav>
              </SheetContent>
            </Sheet>
            <div className="lg:hidden">
              <p className="text-sm font-medium text-foreground">{contextLabel}</p>
              <p className="text-xs text-muted-foreground">{areaLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </header>

        <main id="main" className="flex-1 px-5 py-8 lg:px-8 lg:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
