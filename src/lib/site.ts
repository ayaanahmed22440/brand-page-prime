/**
 * Static site configuration for the public marketing pages.
 * Presentation components read from here so copy and navigation live in one place.
 */

export const SITE = {
  name: "WebWarheads",
  tagline: "Websites for local businesses, without the hassle.",
  description:
    "WebWarheads builds and hosts professional websites for local service businesses. Add your business details, choose a design, publish.",
  supportEmail: "support@webwarheads.com",
} as const;

export type NavItem = { label: string; to: string };

export const MARKETING_NAV: NavItem[] = [
  { label: "Product", to: "/product" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

/** Public routes included in the generated sitemap. */
export const PUBLIC_ROUTES = ["/", "/product", "/how-it-works", "/pricing"] as const;

export type CapabilityStatus = "available" | "planned";

export type Capability = {
  title: string;
  description: string;
  status: CapabilityStatus;
  stage: string;
};

/**
 * Planned product capabilities. `status` is honest on purpose: nothing is
 * marked available until it actually ships.
 */
export const CAPABILITIES: Capability[] = [
  {
    title: "Professional templates",
    description:
      "A small set of designs built for service businesses, each reviewed by a designer rather than generated at random.",
    status: "planned",
    stage: "Stage 05",
  },
  {
    title: "Simple editing",
    description:
      "Change your details, services and photos from a form. Your content stays separate from the design, so switching template keeps your text.",
    status: "planned",
    stage: "Stage 06",
  },
  {
    title: "Custom domains",
    description:
      "Point a domain you already own at your site, or buy one during setup. DNS and certificates are handled for you.",
    status: "planned",
    stage: "Stage 08",
  },
  {
    title: "Google Business Profile",
    description:
      "Connect your profile so your opening hours, service area and reviews stay consistent with what customers see on Google.",
    status: "planned",
    stage: "Stage 09",
  },
  {
    title: "Lead capture",
    description:
      "Quote requests from your site arrive by email and stay in one list, so nothing gets lost in an inbox.",
    status: "planned",
    stage: "Stage 10",
  },
  {
    title: "Human support",
    description:
      "Message a person when something needs changing. No ticket queues built to keep you at arm's length.",
    status: "planned",
    stage: "Stage 12",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Add your business",
    description:
      "Business name, phone, email, service area, services, hours, logo and photos. Entered once, reused everywhere.",
  },
  {
    step: "02",
    title: "Choose your website",
    description:
      "Pick a template built for your trade. Your details fill the pages automatically, so there is no blank canvas to fight with.",
  },
  {
    step: "03",
    title: "Publish",
    description:
      "Review the pages, then publish on a WebWarheads address or your own domain. Changes go live when you approve them.",
  },
] as const;
