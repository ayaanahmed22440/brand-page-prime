import type { Id, TenantOwned } from "./tenant";

/** Customer-chosen presentation settings, constrained by the template's configuration schema. */
export interface WebsiteCustomization extends TenantOwned {
  websiteId: Id;
  paletteId: string;
  typographySetId: string;
  /** Optional brand colour override, hex. Validated against contrast rules before use. */
  brandColorHex: string | null;
  /** Text on the primary call-to-action buttons. */
  primaryCtaLabel: string;
  showTestimonials: boolean;
  showGallery: boolean;
}
