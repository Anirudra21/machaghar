import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/lib/cart";
import { Navbar } from "@/components/macha-ghar/Navbar";
import { Footer } from "@/components/macha-ghar/Footer";
import { CartDrawer } from "@/components/macha-ghar/CartDrawer";
import { FloatingCart } from "@/components/macha-ghar/FloatingCart";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://machagharcafe.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Macha Ghar Cafe | Fish Restaurant in Butwal",
    template: "%s | Macha Ghar Cafe",
  },
  description:
    "Discover Macha Ghar Cafe in Naharpur, Butwal, Rupandehi. Explore delicious fish-based dishes, authentic Nepali flavours, and a unique natural dining concept.",
  keywords: [
    "Macha Ghar Cafe",
    "Fish Restaurant in Butwal",
    "Fish Food in Butwal",
    "Fish Cafe in Butwal",
    "Fish Dishes in Rupandehi",
    "Fish Restaurant in Rupandehi",
    "Nepali fish dishes",
    "whole grilled fish",
    "fish momo",
    "fish thali",
    "Butwal restaurant",
    "Naharpur cafe",
  ],
  authors: [{ name: "Macha Ghar Cafe" }],
  creator: "Macha Ghar Cafe",
  publisher: "Macha Ghar Cafe",
  alternates: {
    canonical: "/",
  },
  // Nepal national flag as the browser favicon (double-pennant shape).
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: ["/favicon.svg", "/favicon-32.png"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Macha Ghar Cafe | Fish Restaurant in Butwal",
    description:
      "Fresh Fish, the Taste of Home. Discover delicious fish-based dishes, authentic Nepali flavours, and a unique natural dining concept at Macha Ghar Cafe, Naharpur, Butwal.",
    url: SITE_URL,
    siteName: "Macha Ghar Cafe",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-grilled-fish.png",
        width: 1344,
        height: 768,
        alt: "Whole grilled fish platter at Macha Ghar Cafe",
      },
      {
        url: "/images/logo.png",
        width: 640,
        height: 640,
        alt: "Macha Ghar Cafe Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Macha Ghar Cafe | Fish Restaurant in Butwal",
    description:
      "Fresh Fish, the Taste of Home. Delicious fish-based dishes and authentic Nepali flavours at Macha Ghar Cafe, Butwal, Rupandehi.",
    images: ["/images/hero-grilled-fish.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "food",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F4EA" },
    { media: "(prefers-color-scheme: dark)", color: "#102126" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
          <FloatingCart />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
