export type MenuCategoryKey =
  | "appetizers"
  | "momo"
  | "achars"
  | "main"
  | "sides";

export interface MenuCategory {
  key: MenuCategoryKey;
  label: string;
  /** Short tagline shown under the category name */
  tagline: string;
}

export interface MenuItem {
  id: string;
  name: string;
  /** Exact price in NPR as a number */
  price: number;
  category: MenuCategoryKey;
  /** Optional short description shown on the menu card */
  description?: string;
  /** Whether this item is a signature / featured dish */
  featured?: boolean;
  /** Optional image path (used for featured dishes + gallery mapping) */
  image?: string;
  /** Optional unit note, e.g. "8 pcs", "Jar" */
  unit?: string;
  /** Optional spicy / new badge labels */
  badges?: string[];
}

export interface CartLine {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit?: string;
}

export interface CartTotals {
  subtotal: number;
  count: number;
}

export interface CustomerDetails {
  name: string;
  instructions: string;
  table: number | null;
}
