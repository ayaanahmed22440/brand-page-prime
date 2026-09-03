/**
 * Tenancy conventions.
 *
 * A `User` may belong to one or more `Business` records (a tenant). Every
 * tenant-owned resource in this system carries `businessId` and must be
 * filtered by it in every read and write, at the database level once the
 * database is enabled (Stage 03).
 */

export type Id = string;
export type IsoDateTime = string;

/** Base fields shared by every persisted record. */
export interface Entity {
  id: Id;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
}

/** Base fields for every resource owned by a tenant. */
export interface TenantOwned extends Entity {
  businessId: Id;
}

export type UserRole = "owner" | "member" | "admin";

export interface User extends Entity {
  email: string;
  fullName: string | null;
  /** Platform-level role. Tenant membership is modelled separately. */
  role: Extract<UserRole, "admin"> | "customer";
}

export interface BusinessMembership extends Entity {
  userId: Id;
  businessId: Id;
  role: Exclude<UserRole, "admin">;
}
