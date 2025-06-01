import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Background Image */}
      <figure className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Lemon Restaurant interior with Mediterranean ambiance"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          aria-hidden="true"
        ></div>
      </figure>

      {/* Content */}
      <header className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <hgroup>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Authentic Mediterranean
            <span className="block text-yellow-400">Cuisine</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience the finest flavors of the Mediterranean with fresh
            ingredients, traditional recipes, and modern presentation
          </p>
        </hgroup>

        {/* Rating and Info */}
        <aside
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8"
          role="complementary"
        >
          <div
            className="flex items-center space-x-2"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <div
              className="flex space-x-1"
              role="img"
              aria-label="5 star rating"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-lg">
              <span itemProp="ratingValue">4.8</span> (
              <span itemProp="reviewCount">127</span> reviews)
            </span>
          </div>

          <address
            className="flex items-center space-x-2 not-italic"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <MapPin className="w-5 h-5 text-yellow-400" aria-hidden="true" />
            <span itemProp="streetAddress">123 Mediterranean Ave</span>
          </address>

          <div
            className="flex items-center space-x-2"
            itemScope
            itemType="https://schema.org/OpeningHours"
          >
            <Clock className="w-5 h-5 text-yellow-400" aria-hidden="true" />
            <time itemProp="opens" content="11:00">
              Open 11AM
            </time>{" "}
            -{" "}
            <time itemProp="closes" content="22:00">
              10PM
            </time>
          </div>
        </aside>

        {/* CTA Buttons */}
        <nav
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
          role="navigation"
          aria-label="Primary actions"
        >
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg"
              type="button"
            >
              Reserve a Table
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-gray-500 px-8 py-3 text-lg"
              type="button"
            >
              View Menu
            </Button>
          </Link>
        </nav>
      </header>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        role="presentation"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
