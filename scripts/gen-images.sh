#!/bin/bash
# Generate premium fish-restaurant imagery for MACHA GHAR
# NOTE: dimensions must be multiples of 32 (512-2880px, <= 2^22 px)
OUT=/home/z/my-project/public/images
WIDE="1344x768"   # landscape
SQUARE="1024x1024"

gen() {
  local label="$1"; local prompt="$2"; local out="$3"; local size="${4:-$SQUARE}"
  echo "[$label] $out"
  timeout 150 z-ai image -p "$prompt" -o "$out" -s "$size" 2>&1 | tail -2
  if [ -f "$out" ]; then echo "  ✓ saved $(du -h "$out" | cut -f1)"; else echo "  ✗ FAILED"; fi
}

gen "Hero" "Premium food photography of a whole grilled fish on a rustic ceramic platter, garnished with fresh herbs, lemon wedges, chili and sliced onions, moody dark elegant restaurant background, warm amber lighting, steam rising, professional editorial seafood photography, ultra detailed, shallow depth of field" "$OUT/hero-grilled-fish.png" "$WIDE"

gen "About" "Atmospheric editorial photograph of a Nepali restaurant kitchen, chef hands plating a delicate fish dish with tweezers, warm golden light, dark moody premium restaurant interior, fresh fish and herbs on marble counter, professional food photography, cinematic" "$OUT/about-chef.png" "$WIDE"

gen "Grilled Fish" "Top-down premium food photography of a whole grilled fish, charred crispy skin, lemon and herb garnish, served on dark slate plate, warm restaurant lighting, professional seafood photography, ultra detailed" "$OUT/dish-grilled-fish.png" "$SQUARE"

gen "Thali" "Premium Nepali thali platter, brass plate with steamed rice, fish curry, fish tawa fry, salad, achar pickle, corn bread, lentil soup, authentic Nepali meal set, dark moody restaurant background, professional food photography, top-down" "$OUT/dish-thali.png" "$SQUARE"

gen "Momo" "Premium food photography of steamed Nepali fish momo dumplings on a traditional bamboo steamer, served with spicy tomato achar sauce, sesame garnish, dark slate background, warm lighting, professional editorial photography, ultra detailed" "$OUT/dish-momo.png" "$SQUARE"

gen "Tawa Fry" "Premium food photography of Nepali fish tawa fry, golden crispy marinated fish pieces on a black cast iron tawa pan, curry leaves, lemon wedges, sliced onions, dark moody background, warm lighting, professional editorial seafood photography" "$OUT/dish-tawa-fry.png" "$SQUARE"

gen "Tikka" "Premium food photography of fish tikka skewers, marinated cubes of fish with yogurt and spices, char-grilled, served on a black plate with mint chutney and lemon, warm restaurant lighting, professional editorial photography" "$OUT/gallery-tikka.png" "$SQUARE"

gen "Chhoila" "Premium food photography of Nepali fish chhoila, grilled flaked fish with mustard oil, green chilies, garlic, ginger and herbs, served on dark slate plate, warm moody lighting, professional editorial food photography" "$OUT/gallery-chhoila.png" "$SQUARE"

gen "Interior" "Warm atmospheric interior of an elegant premium Nepali fish restaurant, soft amber pendant lighting, wooden tables with linen, intimate dining ambiance, blurred background, cinematic editorial photography, no people" "$OUT/gallery-interior.png" "$SQUARE"

gen "Cutlet" "Premium food photography of crispy golden fish cutlets on a dark ceramic plate, served with ketchup and green chutney, fresh parsley garnish, warm restaurant lighting, professional editorial food photography, ultra detailed" "$OUT/gallery-cutlet.png" "$SQUARE"

echo "DONE"
ls -la "$OUT"
