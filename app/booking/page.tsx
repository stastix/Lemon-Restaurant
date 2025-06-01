import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BookingForm from "@/components/booking-form";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Table - Reserve Your Dining Experience",
  description:
    "Reserve your table at Lemon Restaurant. Choose your preferred date, time, and party size for an unforgettable Mediterranean dining experience.",
  keywords: [
    "table reservation",
    "book table",
    "restaurant booking",
    "dining reservation",
    "mediterranean restaurant",
    "lemon restaurant booking",
  ],
  openGraph: {
    title: "Book a Table - Lemon Restaurant",
    description:
      "Reserve your table at Lemon Restaurant for an unforgettable Mediterranean dining experience.",
    images: ["/booking-og-image.jpg"],
    type: "website",
    url: "https://lemonrestaurant.com/booking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Table - Lemon Restaurant",
    description:
      "Reserve your table at Lemon Restaurant for an unforgettable Mediterranean dining experience.",
    images: ["/booking-og-image.jpg"],
  },
};

const bookingFeatures = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description:
      "Choose your preferred date and time with our simple booking system",
  },
  {
    icon: Users,
    title: "Party Size",
    description:
      "Accommodate groups from 1 to 10 guests with flexible seating options",
  },
  {
    icon: Clock,
    title: "Flexible Times",
    description: "Multiple time slots available from 5:00 PM to 10:00 PM daily",
  },
  {
    icon: CheckCircle,
    title: "Instant Confirmation",
    description: "Receive immediate confirmation of your reservation",
  },
];

export default function BookingPage() {
  return (
    <>
      <Navigation />
      <main role="main">
        {/* Hero Section */}
        <section
          className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50"
          role="banner"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Reserve Your Table
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Secure your spot for an authentic Mediterranean dining
                experience. Book your table now and let us take care of the
                rest.
              </p>
            </header>
          </div>
        </section>

        {/* Booking Form Section */}
        <section
          className="py-16 bg-white"
          role="region"
          aria-labelledby="booking-form-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Booking Form */}
              <div>
                <h2
                  id="booking-form-heading"
                  className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left"
                >
                  Make a Reservation
                </h2>
                <BookingForm />
              </div>

              {/* Booking Information */}
              <aside className="space-y-8" role="complementary">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Book With Us?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {bookingFeatures.map((feature, index) => (
                      <Card
                        key={index}
                        className="border-l-4 border-l-yellow-500"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <feature.icon className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Restaurant Information */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Restaurant Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="font-semibold">Opening Hours</p>
                          <p className="text-sm text-gray-600">
                            Mon-Thu: 11AM-10PM | Fri-Sat: 11AM-11PM | Sun:
                            12PM-9PM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="font-semibold">Group Size</p>
                          <p className="text-sm text-gray-600">
                            We accommodate parties of 1-10 guests
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="font-semibold">Cancellation Policy</p>
                          <p className="text-sm text-gray-600">
                            Free cancellation up to 2 hours before your
                            reservation
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Need Help?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For special requests, large parties, or immediate
                      assistance, please contact us directly.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">
                        📞{" "}
                        <a
                          href="tel:+15551234567"
                          className="text-yellow-700 hover:text-yellow-800"
                        >
                          (555) 123-4567
                        </a>
                      </p>
                      <p className="font-semibold">
                        ✉️{" "}
                        <a
                          href="mailto:reservations@lemonrestaurant.com"
                          className="text-yellow-700 hover:text-yellow-800"
                        >
                          reservations@lemonrestaurant.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section
          className="py-16 bg-gray-50"
          role="region"
          aria-labelledby="additional-info-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="additional-info-heading"
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600">
                  Every dish is prepared with the freshest Mediterranean
                  ingredients, sourced daily from local suppliers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Warm Atmosphere
                </h3>
                <p className="text-gray-600">
                  Enjoy our cozy, family-friendly environment perfect for any
                  occasion, from intimate dinners to celebrations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Exceptional Service
                </h3>
                <p className="text-gray-600">
                  Our experienced staff is dedicated to making your dining
                  experience memorable and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
