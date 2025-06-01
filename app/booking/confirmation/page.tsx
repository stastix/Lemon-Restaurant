import type { Metadata } from "next";
import { Suspense } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BookingConfirmation from "@/components/booking-confirmation";

export const metadata: Metadata = {
  title: "Booking Confirmation - Your Table is Reserved",
  description:
    "Your table reservation at Lemon Restaurant has been confirmed. View your booking details and add the reservation to your calendar.",
  keywords: [
    "booking confirmation",
    "reservation confirmed",
    "table reserved",
    "lemon restaurant booking",
    "dining reservation",
  ],
  openGraph: {
    title: "Booking Confirmation - Lemon Restaurant",
    description:
      "Your table reservation at Lemon Restaurant has been confirmed.",
    images: ["/confirmation-og-image.jpg"],
    type: "website",
    url: "https://lemonrestaurant.com/booking/confirmation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booking Confirmation - Lemon Restaurant",
    description:
      "Your table reservation at Lemon Restaurant has been confirmed.",
    images: ["/confirmation-og-image.jpg"],
  },
  robots: {
    index: false, // Don't index confirmation pages
    follow: true,
  },
};

export default function BookingConfirmationPage() {
  return (
    <>
      <Navigation />
      <main role="main">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <BookingConfirmation />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
