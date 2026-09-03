import type { TenantOwned } from "./tenant";

export type SubscriptionStatus = "trialing" | "active" | "past_due" | "canceled";
export type PlanId = "starter" | "standard" | "managed";

export interface Subscription extends TenantOwned {
  planId: PlanId;
  status: SubscriptionStatus;
  /** Identifier from the payment provider. No card data is ever stored here. */
  providerSubscriptionId: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
}

export type SupportRequestStatus = "open" | "waiting_on_customer" | "resolved";

export interface SupportRequest extends TenantOwned {
  subject: string;
  body: string;
  status: SupportRequestStatus;
  requestedByUserId: string;
}
