"use client";

import * as React from "react";

/**
 * Desktop breakpoint — matches Tailwind's `lg` (1024px).
 * Below this the site uses the app-like mobile/tablet layout.
 */
const DESKTOP_BREAKPOINT = 1024;

/**
 * Returns `true` when the viewport is desktop-width (lg / 1024px+).
 * Returns `false` for phones and tablets (where the app-like layout is used).
 *
 * SSR-safe: starts as `undefined` (treated as not-desktop → app layout) and
 * settles after mount, so the first client paint matches the server render
 * for the app-like shell without hydration warnings.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Treat `undefined` (pre-hydration) as desktop = false so the mobile/app
  // shell renders first (mobile-first). Desktop hydration is handled by the
  // `lg:` breakpoint utilities in markup, so there is no visual mismatch.
  return isDesktop === true;
}
