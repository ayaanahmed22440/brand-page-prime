import type { Id, TenantOwned } from "./tenant";

export type WebsiteStatus = "draft" | "ready" | "published" | "unpublished";

/**
 * Business Data + Template + Customization = Website.
 * A website references a template and its own content/customization records;
 * it never embeds business data.
 */
export interface Website extends TenantOwned {
  templateId: string;
  templateVersion: string;
  status: WebsiteStatus;
  /** Subdomain on the platform host, e.g. "brightclean" -> brightclean.webwarheads.site */
  slug: string;
  primaryDomainId: Id | null;
  publishedAt: string | null;
  lastPublishedByUserId: Id | null;
}
