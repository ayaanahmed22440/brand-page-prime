import type { Entity, Id } from "./tenant";

/** The trade a business operates in. Cleaning ships first; the model is niche-independent. */
export type Niche =
  | "cleaning"
  | "painting"
  | "landscaping"
  | "plumbing"
  | "hvac"
  | "roofing"
  | "contracting"
  | "handyman"
  | "auto-detailing"
  | "other";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface OpeningHours {
  day: Weekday;
  /** 24h "HH:mm", or null when closed. */
  opensAt: string | null;
  closesAt: string | null;
}

export interface Address {
  line1: string | null;
  line2: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  countryCode: string | null;
}

export interface ServiceOffering {
  id: Id;
  name: string;
  description: string | null;
  /** Optional display price, e.g. "from $120". Never used for billing. */
  priceLabel: string | null;
}

export interface Testimonial {
  id: Id;
  /** Customer-supplied only. The platform never generates these. */
  authorName: string;
  quote: string;
  rating: number | null;
  collectedAt: string | null;
}

export interface SocialLinks {
  facebook: string | null;
  instagram: string | null;
  google: string | null;
  linkedin: string | null;
  tiktok: string | null;
}

/**
 * A tenant. Business data is stored here and never inside a template, so the
 * same data can render through any template.
 */
export interface Business extends Entity {
  ownerUserId: Id;
  name: string;
  niche: Niche;
  legalName: string | null;
  phone: string | null;
  email: string | null;
  description: string | null;
  address: Address;
  /** Free-text service areas, e.g. ["Leeds", "Wakefield"]. */
  serviceAreas: string[];
  services: ServiceOffering[];
  hours: OpeningHours[];
  logoAssetId: Id | null;
  photoAssetIds: Id[];
  social: SocialLinks;
  testimonials: Testimonial[];
}

export interface Asset extends Entity {
  businessId: Id;
  kind: "logo" | "photo" | "document";
  storagePath: string;
  fileName: string;
  contentType: string;
  byteSize: number;
  altText: string | null;
}
