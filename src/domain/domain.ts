import type { Id, TenantOwned } from "./tenant";

export type DomainStatus =
  | "pending_dns"
  | "verifying"
  | "active"
  | "failed"
  | "purchase_pending";

export type DomainSource = "customer_owned" | "purchased_through_platform";

export interface CustomDomain extends TenantOwned {
  websiteId: Id | null;
  hostname: string;
  source: DomainSource;
  status: DomainStatus;
  /** DNS records the customer must add, when applicable. */
  requiredRecords: { type: "A" | "CNAME" | "TXT"; name: string; value: string }[];
  verifiedAt: string | null;
  expiresAt: string | null;
}
