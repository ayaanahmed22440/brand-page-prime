import type { Niche } from "@/domain/business";
import type { Template } from "@/domain/template";

/**
 * Template registry.
 *
 * Templates are registered here, keyed by id. Adding "Cleaning Template 02"
 * later means adding one entry plus its renderer — no platform changes.
 * Renderers are implemented in Stage 05; today the registry holds metadata
 * only so the rest of the system can be written against a stable contract.
 */

const CLEANING_STANDARD_SECTIONS: Template["sections"] = [
  { kind: "navigation", optional: false, variants: ["inline", "centered"] },
  { kind: "hero", optional: false, variants: ["split", "stacked"] },
  { kind: "services", optional: false, variants: ["cards", "list"] },
  { kind: "about", optional: true, variants: ["single-column"] },
  { kind: "gallery", optional: true, variants: ["grid"] },
  { kind: "reviews", optional: true, variants: ["quotes"] },
  { kind: "cta", optional: false, variants: ["banner"] },
  { kind: "contact", optional: false, variants: ["form-and-details"] },
  { kind: "footer", optional: false, variants: ["compact"] },
];

const TEMPLATES: Template[] = [
  {
    id: "cleaning-01",
    name: "Cleaning 01",
    niche: "cleaning",
    version: "0.1.0",
    status: "draft",
    description:
      "Straightforward layout for domestic and commercial cleaners: services, service area, contact form.",
    preview: { imageUrl: null, aspectRatio: "16/10" },
    sections: CLEANING_STANDARD_SECTIONS,
    configuration: {
      palettes: ["ink", "slate", "forest"],
      typographySets: ["inter"],
      supportsDarkSurfaces: false,
    },
  },
];

const REGISTRY: ReadonlyMap<string, Template> = new Map(TEMPLATES.map((t) => [t.id, t]));

export function listTemplates(options?: { niche?: Niche; includeUnpublished?: boolean }) {
  const includeUnpublished = options?.includeUnpublished ?? false;
  return TEMPLATES.filter((template) => {
    if (options?.niche && template.niche !== options.niche) return false;
    if (!includeUnpublished && template.status !== "published") return false;
    return true;
  });
}

export function getTemplate(id: string): Template | undefined {
  return REGISTRY.get(id);
}

export function templateCount(): number {
  return TEMPLATES.length;
}
