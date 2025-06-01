import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lemon Restaurant - Authentic Mediterranean Cuisine",
    template: "%s | Lemon Restaurant",
  },
  description:
    "Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation in the heart of the city.",
  keywords: [
    "restaurant",
    "mediterranean",
    "fine dining",
    "fresh ingredients",
    "lemon restaurant",
    "authentic cuisine",
    "greek food",
    "italian food",
    "middle eastern cuisine",
    "healthy dining",
    "family restaurant",
  ],
  authors: [{ name: "Lemon Restaurant" }],
  creator: "Lemon Restaurant",
  publisher: "Lemon Restaurant",
  category: "Restaurant",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lemonrestaurant.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
    },
  },
  openGraph: {
    title: "Lemon Restaurant - Authentic Mediterranean Cuisine",
    description:
      "Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation in the heart of the city.",
    url: "https://lemonrestaurant.com",
    siteName: "Lemon Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lemon Restaurant - Mediterranean Cuisine",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 400,
        height: 400,
        alt: "Lemon Restaurant Logo",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
    emails: ["info@lemonrestaurant.com"],
    phoneNumbers: ["+1-555-123-4567"],
    faxNumbers: ["+1-555-123-4568"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemon Restaurant - Authentic Mediterranean Cuisine",
    description:
      "Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation.",
    images: ["/og-image.jpg"],
    creator: "@lemonrestaurant",
    site: "@lemonrestaurant",
  },
  facebook: {
    appId: "your-facebook-app-id",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  generator: "v0.dev",
  applicationName: "Lemon Restaurant",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#f59e0b",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "@id": "https://lemonrestaurant.com/#restaurant",
              name: "Lemon Restaurant",
              alternateName: "Lemon Mediterranean Restaurant",
              description:
                "Authentic Mediterranean cuisine with fresh ingredients and traditional recipes",
              url: "https://lemonrestaurant.com",
              logo: "https://lemonrestaurant.com/logo.png",
              image: [
                "https://lemonrestaurant.com/og-image.jpg",
                "https://lemonrestaurant.com/restaurant-interior.jpg",
                "https://lemonrestaurant.com/signature-dishes.jpg",
              ],
              telephone: "+1-555-123-4567",
              email: "info@lemonrestaurant.com",
              faxNumber: "+1-555-123-4568",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Mediterranean Ave",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              hasMap:
                "https://maps.google.com/?q=123+Mediterranean+Ave,+City,+State+12345",
              servesCuisine: [
                "Mediterranean",
                "Greek",
                "Italian",
                "Middle Eastern",
              ],
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
              openingHours: [
                "Mo-Th 11:00-22:00",
                "Fr-Sa 11:00-23:00",
                "Su 12:00-21:00",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "11:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "11:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "21:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  datePublished: "2024-01-15",
                  reviewBody:
                    "Amazing Mediterranean food! The salmon was perfectly grilled and the atmosphere is wonderful.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
              ],
              menu: "https://lemonrestaurant.com/menu",
              acceptsReservations: true,
              hasMenu: {
                "@type": "Menu",
                "@id": "https://lemonrestaurant.com/menu",
                name: "Lemon Restaurant Menu",
              },
              founder: {
                "@type": "Person",
                name: "Maria Konstantinos",
              },
              foundingDate: "1995",
              sameAs: [
                "https://www.facebook.com/lemonrestaurant",
                "https://www.instagram.com/lemonrestaurant",
                "https://twitter.com/lemonrestaurant",
                "https://www.yelp.com/biz/lemon-restaurant",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
