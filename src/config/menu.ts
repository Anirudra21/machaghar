import type { MenuCategory, MenuItem } from "@/types/menu";

/**
 * Menu categories — order matches the navigation/filter order:
 * All | Appetizers & Snacks | Momo Varieties | Achars (Pickles) | Main Courses | Sides & Extras
 */
export const menuCategories: MenuCategory[] = [
  {
    key: "appetizers",
    label: "Appetizers & Snacks",
    tagline: "Crispy, savoury bites to begin the feast",
  },
  {
    key: "momo",
    label: "Momo Varieties",
    tagline: "Hand-folded dumplings — 8 pcs per plate",
  },
  {
    key: "achars",
    label: "Achars (Pickles)",
    tagline: "Tangy, spiced fish pickles in a jar",
  },
  {
    key: "main",
    label: "Main Courses",
    tagline: "Signature fish preparations & hearty plates",
  },
  {
    key: "sides",
    label: "Sides & Extras",
    tagline: "The perfect companions for your meal",
  },
];

/**
 * Full Macha Ghar menu — 24 items with exact prices (NPR).
 * Do NOT alter prices or item names without explicit approval.
 */
export const menu: MenuItem[] = [
  // ── Appetizers & Snacks ──────────────────────────────────────────────
  {
    id: "fish-tawa-fry",
    name: "Fish Tawa Fry",
    price: 320,
    category: "appetizers",
    description:
      "Marinated fish pan-seared on a cast-iron tawa until golden and crisp.",
    featured: true,
    image: "/images/dish-tawa-fry.png",
    badges: ["Signature"],
  },
  {
    id: "fish-cutlet",
    name: "Fish Cutlet",
    price: 280,
    category: "appetizers",
    unit: "2 pcs",
    description: "Spiced fish patties, crumb-fried to a crunchy golden finish.",
  },
  {
    id: "fish-cheese-balls",
    name: "Fish Cheese Balls",
    price: 200,
    category: "appetizers",
    unit: "5 pcs",
    description: "Molten cheese and minced fish, rolled into crisp bites.",
  },
  {
    id: "fish-finger",
    name: "Fish Finger",
    price: 270,
    category: "appetizers",
    unit: "6 pcs",
    description: "Tender fish strips in a crisp crumb coating.",
  },
  {
    id: "fish-chhoila",
    name: "Fish Chhoila",
    price: 310,
    category: "appetizers",
    description: "Smoky grilled fish flaked with mustard oil, garlic & herbs.",
    image: "/images/gallery-chhoila.png",
  },
  {
    id: "fish-lollipop",
    name: "Fish Lollipop",
    price: 320,
    category: "appetizers",
    unit: "5 pcs",
    description: "Spiced fish lollipops, fried crisp and saucy.",
  },
  {
    id: "fish-balls",
    name: "Fish Balls",
    price: 240,
    category: "appetizers",
    unit: "6 pcs",
    description: "Minced fish rolled into savoury, bite-sized balls.",
  },

  // ── Momo Varieties (8 pcs) ───────────────────────────────────────────
  {
    id: "fish-momo-steam",
    name: "Fish Momo (Steam)",
    price: 220,
    category: "momo",
    unit: "8 pcs",
    description: "Steamed hand-folded dumplings filled with spiced fish.",
    featured: true,
    image: "/images/dish-momo.png",
    badges: ["Signature"],
  },
  {
    id: "fish-momo-fry",
    name: "Fish Momo (Fry)",
    price: 250,
    category: "momo",
    unit: "8 pcs",
    description: "Pan-fried momo with a golden, crisp base.",
  },
  {
    id: "fish-momo-chilly",
    name: "Fish Momo (Chilly)",
    price: 280,
    category: "momo",
    unit: "8 pcs",
    description: "Tossed in a fiery Indo-Chinese chilly sauce.",
    badges: ["Spicy"],
  },
  {
    id: "fish-momo-sadeko",
    name: "Fish Momo (Sadeko)",
    price: 270,
    category: "momo",
    unit: "8 pcs",
    description: "Nepali-style tossed momo with onion, garlic & herbs.",
  },

  // ── Achars (Pickles) ─────────────────────────────────────────────────
  {
    id: "fish-sidra-achar",
    name: "Fish Sidra Achar",
    price: 380,
    category: "achars",
    unit: "Jar",
    description: "Dried sidra fish pickle with sesame, timur & spices.",
  },
  {
    id: "fish-sukuti-achar",
    name: "Fish Sukuti Achar",
    price: 350,
    category: "achars",
    unit: "Jar",
    description: "Sun-dried fish sukuti pounded with mustard oil & chillies.",
  },
  {
    id: "dried-fish-achar",
    name: "Dried Fish Achar",
    price: 300,
    category: "achars",
    unit: "Jar",
    description: "Classic dried-fish achar, tangy and deeply spiced.",
  },

  // ── Main Courses ─────────────────────────────────────────────────────
  {
    id: "whole-grilled-fish",
    name: "Whole Grilled Fish",
    price: 450,
    category: "main",
    description:
      "A whole fish marinated in Nepali spices and grilled over open flame.",
    featured: true,
    image: "/images/dish-grilled-fish.png",
    badges: ["Signature"],
  },
  {
    id: "whole-steamed-fish",
    name: "Whole Steamed Fish",
    price: 420,
    category: "main",
    description: "Delicately steamed whole fish with herbs & aromatics.",
  },
  {
    id: "fish-tikka",
    name: "Fish Tikka",
    price: 380,
    category: "main",
    description: "Yogurt-marinated fish chunks, char-grilled in the tandoor.",
    image: "/images/gallery-tikka.png",
  },
  {
    id: "fish-khana-set",
    name: "Fish Khana Set (Thali)",
    price: 550,
    category: "main",
    description:
      "A complete Nepali thali: rice, fish curry, tawa fry, achar, salad & more.",
    featured: true,
    image: "/images/dish-thali.png",
    badges: ["Signature"],
  },
  {
    id: "fish-sadeko",
    name: "Fish Sadeko (Nepali Style)",
    price: 200,
    category: "main",
    description: "Tossed fish with onion, garlic, ginger & mustard oil.",
  },
  {
    id: "fish-burger",
    name: "Fish Burger",
    price: 350,
    category: "main",
    description: "Crisp fish fillet, fresh slaw & house sauce in a soft bun.",
  },
  {
    id: "fish-chowmein",
    name: "Fish Chowmein",
    price: 300,
    category: "main",
    description: "Wok-tossed noodles with spiced fish & vegetables.",
  },

  // ── Sides & Extras ───────────────────────────────────────────────────
  {
    id: "steamed-rice",
    name: "Steamed Rice",
    price: 60,
    category: "sides",
    description: "Fluffy steamed rice, the perfect base for any curry.",
  },
  {
    id: "corn-bread",
    name: "Corn Bread",
    price: 50,
    category: "sides",
    description: "Traditional Nepali corn bread, warm and hearty.",
  },
  {
    id: "salad",
    name: "Salad",
    price: 70,
    category: "sides",
    description: "Garden-fresh cucumber, onion, tomato & lemon.",
  },
  {
    id: "poppadum",
    name: "Poppadum",
    price: 30,
    category: "sides",
    description: "Crisp, light poppadum — an ideal crunchy side.",
  },
];

/** Featured / signature dishes shown in the Specialties section. */
export const featuredDishes: MenuItem[] = menu.filter((m) => m.featured);

/** Quick lookup by id. */
export const menuById: Record<string, MenuItem> = Object.fromEntries(
  menu.map((m) => [m.id, m]),
);
