import type { Niche } from "./business";

/** Sections a template can declare. A template composes these; it never owns business data. */
export type SectionKind =
  | "navigation"
  | "hero"
  | "services"
  | "about"
  | "gallery"
  | "reviews"
  | "cta"
  | "contact"
  | "footer";

export type TemplateStatus = "draft" | "beta" | "published" | "retired";

export interface TemplateSection {
  kind: SectionKind;
  /** Whether the customer may hide this section. */
  optional: boolean;
  /** Layout variants the section supports, e.g. ["split", "stacked"]. */
  variants: string[];
}

export interface TemplateConfigSchema {
  /** Customer-selectable palette identifiers defined by the template. */
  palettes: string[];
  /** Customer-selectable typography set identifiers. */
  typographySets: string[];
  /** Whether the template supports a dark surface treatment. */
  supportsDarkSurfaces: boolean;
}

export interface Template {
  id: string;
  name: string;
  niche: Niche;
  /** Semantic version of the template's markup contract. */
  version: string;
  status: TemplateStatus;
  description: string;
  preview: {
    /** Path or URL to a still preview. Null until artwork exists. */
    imageUrl: string | null;
    aspectRatio: "16/10" | "4/3";
  };
  sections: TemplateSection[];
  configuration: TemplateConfigSchema;
}
