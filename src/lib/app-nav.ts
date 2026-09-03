import type { ShellNavItem } from "@/components/app-shell/AppShell";

export const CUSTOMER_NAV: ShellNavItem[] = [
  { label: "Overview", to: "/app" },
  { label: "Website", to: "/app/website" },
  { label: "Business", to: "/app/business" },
  { label: "Leads", to: "/app/leads" },
  { label: "Reviews", to: "/app/reviews" },
  { label: "Domain", to: "/app/domain" },
  { label: "Billing", to: "/app/billing" },
  { label: "Support", to: "/app/support" },
  { label: "Settings", to: "/app/settings" },
];

export const ADMIN_NAV: ShellNavItem[] = [
  { label: "Overview", to: "/admin" },
  { label: "Customers", to: "/admin/customers" },
  { label: "Websites", to: "/admin/websites" },
  { label: "Templates", to: "/admin/templates" },
  { label: "Domains", to: "/admin/domains" },
  { label: "Leads", to: "/admin/leads" },
  { label: "Billing", to: "/admin/billing" },
  { label: "Support", to: "/admin/support" },
  { label: "Analytics", to: "/admin/analytics" },
  { label: "Settings", to: "/admin/settings" },
];
