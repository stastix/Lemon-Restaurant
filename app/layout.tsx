import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
  ],
  authors: [{ name: "Lemon Restaurant" }],
  creator: "Lemon Restaurant",
  publisher: "Lemon Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lemonrestaurant.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lemon Restaurant - Authentic Mediterranean Cuisine",
    description:
      "Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation.",
    url: "https://lemonrestaurant.com",
    siteName: "Lemon Restaurant",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lemon Restaurant - Mediterranean Cuisine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemon Restaurant - Authentic Mediterranean Cuisine",
    description: "Experience the finest Mediterranean cuisine at Lemon Restaurant.",
    images: ["/og-image.jpg"],
    creator: "@lemonrestaurant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
              name: "Lemon Restaurant",
              image: "https://lemonrestaurant.com/og-image.jpg",
              description: "Authentic Mediterranean cuisine with fresh ingredients and traditional recipes",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Mediterranean Ave",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              telephone: "+1-555-123-4567",
              url: "https://lemonrestaurant.com",
              servesCuisine: "Mediterranean",
              priceRange: "$$",
              openingHours: ["Mo-Su 11:00-22:00"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
