import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Lemon Restaurant for reservations, inquiries, or feedback. Find our location, hours, and contact information. Call (555) 123-4567 or visit us at 123 Mediterranean Ave.",
  keywords: [
    "contact",
    "reservations",
    "location",
    "phone number",
    "address",
    "hours",
    "mediterranean restaurant contact",
  ],
  openGraph: {
    title: "Contact Us - Lemon Restaurant",
    description:
      "Contact Lemon Restaurant for reservations, inquiries, or feedback. Find our location, hours, and contact information.",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Lemon Restaurant - Location and Contact Information",
        type: "image/jpeg",
      },
    ],
    type: "website",
    url: "https://lemonrestaurant.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Lemon Restaurant",
    description:
      "Contact Lemon Restaurant for reservations, inquiries, or feedback.",
    images: ["/contact-og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main role="main">
        <section
          className="py-16 bg-gray-50"
          role="region"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
              <h1
                id="contact-heading"
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We'd love to hear from you. Get in touch for reservations,
                inquiries, or feedback.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section aria-labelledby="contact-form-heading">
                <Card>
                  <CardHeader>
                    <CardTitle id="contact-form-heading" className="text-2xl">
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      className="space-y-6"
                      role="form"
                      aria-label="Contact form"
                    >
                      <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <legend className="sr-only">
                          Personal Information
                        </legend>
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            First Name <span aria-label="required">*</span>
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Last Name <span aria-label="required">*</span>
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            aria-required="true"
                          />
                        </div>
                      </fieldset>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email <span aria-label="required">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          aria-describedby="email-help"
                        />
                        <p id="email-help" className="sr-only">
                          We'll use this email to respond to your message
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          aria-describedby="phone-help"
                        />
                        <p id="phone-help" className="sr-only">
                          Optional phone number for faster response
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message <span aria-label="required">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          aria-required="true"
                          aria-describedby="message-help"
                        />
                        <p id="message-help" className="sr-only">
                          Please provide details about your inquiry or
                          reservation request
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </section>

              {/* Contact Information */}
              <aside
                className="space-y-8"
                role="complementary"
                aria-labelledby="contact-info-heading"
              >
                <h2 id="contact-info-heading" className="sr-only">
                  Contact Information
                </h2>

                <article itemScope itemType="https://schema.org/PostalAddress">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <MapPin
                          className="w-6 h-6 text-yellow-500"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">Address</h3>
                          <address className="text-gray-600 not-italic">
                            <span itemProp="streetAddress">
                              123 Mediterranean Ave
                            </span>
                            <br />
                            <span itemProp="addressLocality">City</span>,{" "}
                            <span itemProp="addressRegion">State</span>{" "}
                            <span itemProp="postalCode">12345</span>
                          </address>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>

                <article>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Phone
                          className="w-6 h-6 text-yellow-500"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">Phone</h3>
                          <a href="tel:+15551234567" className="text-gray-600">
                            (555) 123-4567
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>

                <article>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Mail
                          className="w-6 h-6 text-yellow-500"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">Email</h3>
                          <a
                            href="mailto:info@lemonrestaurant.com"
                            className="text-gray-600"
                          >
                            info@lemonrestaurant.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>

                <article>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Clock
                          className="w-6 h-6 text-yellow-500"
                          aria-hidden="true"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>
                              <time>Monday - Thursday: 11AM - 10PM</time>
                            </p>
                            <p>
                              <time>Friday - Saturday: 11AM - 11PM</time>
                            </p>
                            <p>
                              <time>Sunday: 12PM - 9PM</time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
