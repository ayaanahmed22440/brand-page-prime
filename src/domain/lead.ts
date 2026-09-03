import type { Id, TenantOwned } from "./tenant";

export type LeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";
export type LeadSource = "website_form" | "phone_click" | "email_click" | "manual";

export interface Lead extends TenantOwned {
  websiteId: Id | null;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  /** Service the enquiry refers to, when the form captured one. */
  serviceName: string | null;
  source: LeadSource;
  status: LeadStatus;
  /** Referring page path on the customer's website. */
  pagePath: string | null;
}
