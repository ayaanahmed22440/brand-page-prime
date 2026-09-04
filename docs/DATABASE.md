# Planned database schema

Not yet provisioned. Documented here so the model is settled before the data
layer is added (Stage 03).

| Table | Purpose | Tenant key |
| --- | --- | --- |
| `users` | Account identity | — |
| `businesses` | Tenant root record | `id` |
| `websites` | One site per business per template instance | `business_id` |
| `templates` | Registry mirror, versioned | — |
| `website_content` | Section content per website | `business_id` |
| `website_customizations` | Palette, typography, overrides | `business_id` |
| `assets` | Logos and photos | `business_id` |
| `domains` | Custom and platform domains | `business_id` |
| `leads` | Quote requests | `business_id` |
| `google_connections` | Google Business Profile tokens | `business_id` |
| `subscriptions` | Plan and billing state | `business_id` |
| `support_requests` | Customer messages | `business_id` |
| `activity_logs` | Audit trail | `business_id` |

Rules: every tenant-owned table carries `business_id`; row-level security is
enabled on all of them; membership links `users` to `businesses` so a user can
belong to more than one business.
