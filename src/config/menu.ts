import type { MenuCategory, MenuItem } from "@/types/menu";

/** Menu categories — order matches the navigation/filter order. */
export const menuCategories: MenuCategory[] = [
  {
    key: "fish-recipes",
    label: "Fish Recipes",
    tagline: "Fish dishes and preparations",
  },
  {
    key: "mo-items",
    label: "Mo Items",
    tagline: "Mo items and platters",
  },
  {
    key: "special",
    label: "MACHA GHAR Special",
    tagline: "House specials",
  },
  {
    key: "boneless",
    label: "Boneless Platters and Snacks",
    tagline: "Boneless platters and snacks",
  },
  {
    key: "veg",
    label: "Veg Items",
    tagline: "Vegetarian dishes",
  },
  {
    key: "extras",
    label: "Extras",
    tagline: "Extras and sides",
  },
];

/** Full Macha Ghar menu — exact prices in NPR. */
export const menu: MenuItem[] = [
  {
    id: "majhikutna-style-grilled-fish",
    name: "Majhikutna-Style Grilled Fish",
    price: 600,
    category: "fish-recipes",
  },
  {
    id: "whole-grilled-fish",
    name: "Whole Grilled Fish",
    price: 500,
    category: "fish-recipes",
    description:
      "A whole fish marinated in Nepali spices and grilled over open flame.",
    featured: true,
    image: "/images/dish-grilled-fish.png",
    badges: ["Signature"],
  },
  {
    id: "whole-fish-fry",
    name: "Whole Fish Fry",
    price: 450,
    category: "fish-recipes",
  },
  {
    id: "steam-tilapia-fish",
    name: "Steam Tilapia Fish",
    price: 450,
    category: "fish-recipes",
  },
  {
    id: "butter-garlic-tilapia",
    name: "Butter Garlic Tilapia",
    price: 300,
    category: "fish-recipes",
  },
  {
    id: "fish-tawa-fry",
    name: "Tawa Fry Fish (Per Plate)",
    price: 150,
    category: "fish-recipes",
    description:
      "Marinated fish pan-seared on a cast-iron tawa until golden and crisp.",
    featured: true,
    image: "/images/dish-tawa-fry.png",
    badges: ["Signature"],
  },
  {
    id: "deep-fried-fish",
    name: "Deep Fried Fish (Per Plate)",
    price: 140,
    category: "fish-recipes",
  },
  {
    id: "fish-tikka",
    name: "Fish Tikka (Per Plate)",
    price: 350,
    category: "fish-recipes",
    description: "Yogurt-marinated fish chunks, char-grilled in the tandoor.",
    image: "/images/gallery-tikka.png",
  },
  {
    id: "fish-chilly",
    name: "Fish Chilly",
    price: 200,
    category: "fish-recipes",
  },
  {
    id: "fish-chhoila",
    name: "Fish Choila",
    price: 200,
    category: "fish-recipes",
    description: "Smoky grilled fish flaked with mustard oil, garlic & herbs.",
    image: "/images/gallery-chhoila.png",
  },
  {
    id: "fish-sukuti-achar",
    name: "Fish Sukuti",
    price: 200,
    category: "fish-recipes",
  },
  {
    id: "fish-sadeko",
    name: "Fish Sadeko",
    price: 200,
    category: "fish-recipes",
    description: "Tossed fish with onion, garlic, ginger & mustard oil.",
  },
  {
    id: "fish-momo-steam",
    name: "Fish Steam Mo",
    price: 180,
    category: "mo-items",
    description: "Steamed hand-folded dumplings filled with spiced fish.",
    featured: true,
    image: "/images/dish-momo.png",
    badges: ["Signature"],
  },
  {
    id: "fish-momo-fry",
    name: "Fry Fish Mo",
    price: 200,
    category: "mo-items",
    description: "Pan-fried momo with a golden, crisp base.",
  },
  {
    id: "fish-momo-chilly",
    name: "Chilly Mo",
    price: 220,
    category: "mo-items",
    description: "Tossed in a fiery Indo-Chinese chilly sauce.",
    badges: ["Spicy"],
  },
  {
    id: "kothey-mo",
    name: "Kothey Mo",
    price: 220,
    category: "mo-items",
  },
  {
    id: "mo-platter",
    name: "Mo Platter",
    price: 500,
    category: "mo-items",
    description: "4 pieces each of Mo, fries, noodles and fish soup.",
  },
  {
    id: "fish-khana-set",
    name: "MACHA GHAR Fish Khana Set",
    price: 450,
    category: "special",
    description:
      "A complete Nepali thali: rice, fish curry, tawa fry, achar, salad & more.",
    featured: true,
    image: "/images/dish-thali.png",
    badges: ["Signature"],
  },
  {
    id: "fish-thali",
    name: "Fish Thali",
    price: 350,
    category: "special",
  },
  {
    id: "fish-curry",
    name: "Fish Curry",
    price: 200,
    category: "special",
  },
  {
    id: "fish-finger",
    name: "Fish Fingers",
    price: 180,
    category: "boneless",
    description: "Tender fish strips in a crisp crumb coating.",
  },
  {
    id: "fish-balls",
    name: "Fish Balls",
    price: 200,
    category: "boneless",
    description: "Minced fish rolled into savoury, bite-sized balls.",
  },
  {
    id: "fish-cheese-balls",
    name: "Fish Cheese Balls",
    price: 240,
    category: "boneless",
    description: "Molten cheese and minced fish, rolled into crisp bites.",
  },
  {
    id: "fish-lollipop",
    name: "Fish Lollipop",
    price: 200,
    category: "boneless",
    description: "Spiced fish lollipops, fried crisp and saucy.",
  },
  {
    id: "fish-cutlet",
    name: "Fish Cutlet",
    price: 200,
    category: "boneless",
    description: "Spiced fish patties, crumb-fried to a crunchy golden finish.",
    image: "/images/gallery-cutlet.png",
  },
  {
    id: "fish-and-chips",
    name: "Fish and Chips",
    price: 250,
    category: "boneless",
  },
  {
    id: "fish-boneless-platter",
    name: "Fish Boneless Platter",
    price: 990,
    category: "boneless",
    description:
      "4 pieces each of fish balls, cheese balls, cutlet and lollipop, plus 2 pieces of fish and chips and fries.",
  },
  {
    id: "veg-choila",
    name: "Veg Choila",
    price: 150,
    category: "veg",
  },
  {
    id: "veg-pakoda",
    name: "Veg Pakoda",
    price: 100,
    category: "veg",
  },
  {
    id: "veg-mo",
    name: "Veg Mo",
    price: 120,
    category: "veg",
  },
  {
    id: "mustang-aaloo",
    name: "Mustang Aaloo",
    price: 200,
    category: "veg",
  },
  {
    id: "piro-aaloo-thicheko",
    name: "Piro Aaloo-Thicheko",
    price: 150,
    category: "veg",
  },
  {
    id: "piro-aaloo-sadeko",
    name: "Piro Aaloo Sadeko",
    price: 150,
    category: "veg",
  },
  {
    id: "mushroom-chilly",
    name: "Mushroom Chilly",
    price: 200,
    category: "veg",
  },
  {
    id: "potato-chilly",
    name: "Potato Chilly",
    price: 200,
    category: "veg",
  },
  {
    id: "paneer-chilly",
    name: "Paneer Chilly",
    price: 200,
    category: "veg",
  },
  {
    id: "poppadum",
    name: "Papad (Fry/Dry)",
    price: 30,
    category: "extras",
    description: "Crisp, light poppadum — an ideal crunchy side.",
  },
  {
    id: "prawn-crackers",
    name: "Prawn Crackers",
    price: 50,
    category: "extras",
  },
  {
    id: "salad",
    name: "Nepali Salad",
    price: 100,
    category: "extras",
    description: "Garden-fresh cucumber, onion, tomato & lemon.",
  },
  {
    id: "fruit-salad",
    name: "Fruit Salad",
    price: 150,
    category: "extras",
  },
];

/** Featured / signature dishes shown in the Specialties section. */
export const featuredDishes: MenuItem[] = menu.filter((m) => m.featured);

/** Quick lookup by id. */
export const menuById: Record<string, MenuItem> = Object.fromEntries(
  menu.map((m) => [m.id, m]),
);
