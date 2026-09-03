import { PageHeader } from "./PageHeader";

/**
 * Placeholder for a module whose functionality has not been built yet.
 * It states plainly what the module will do and which stage delivers it —
 * it never simulates working functionality.
 */
export function ModuleStub({
  title,
  description,
  stage,
  planned,
  dependsOn,
}: {
  title: string;
  description: string;
  /** Delivery stage, e.g. "Stage 06". */
  stage: string;
  /** What this module will do once implemented. */
  planned: string[];
  /** Prerequisites, if any. */
  dependsOn?: string;
}) {
  return (
    <div className="space-y-8">
      <PageHeader title={title} description={description} />

      <div className="rounded-md border border-border bg-card p-6">
        <p className="inline-flex items-center rounded-sm border border-border-strong px-2 py-0.5 text-xs font-semibold tracking-wide text-foreground uppercase">
          Not built yet &middot; {stage}
        </p>
        <h2 className="mt-4 text-sm font-semibold text-foreground">
          What this section will do
        </h2>
        <ul className="mt-3 space-y-2">
          {planned.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {dependsOn ? (
          <p className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
            Depends on: {dependsOn}
          </p>
        ) : null}
      </div>
    </div>
  );
}
