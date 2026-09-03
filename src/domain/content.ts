import type { SectionKind } from "./template";
import type { Id, TenantOwned } from "./tenant";

/**
 * Rendered copy for one section of a website. Values are derived from
 * `Business` data by default and may be overridden per website, which keeps
 * business data reusable across templates.
 */
export interface SectionContent {
  kind: SectionKind;
  /** Which template layout variant to use, when the template offers several. */
  variant: string | null;
  hidden: boolean;
  /** Section-level overrides. Absent keys fall back to Business data. */
  overrides: Record<string, string | string[] | null>;
}

export interface WebsiteContent extends TenantOwned {
  websiteId: Id;
  /** Ordered sections as they appear on the page. */
  sections: SectionContent[];
  /** Per-page SEO copy, keyed by page path ("/", "/services", ...). */
  seo: Record<string, { title: string; description: string; canonicalPath: string }>;
}
