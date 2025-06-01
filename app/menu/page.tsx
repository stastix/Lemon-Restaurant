import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu - Authentic Mediterranean Dishes",
  description:
    "Explore our extensive menu of authentic Mediterranean dishes, featuring fresh ingredients, traditional recipes, and modern presentation.",
  openGraph: {
    title: "Menu - Lemon Restaurant",
    description: "Explore our extensive menu of authentic Mediterranean dishes",
    images: ["/menu-og-image.jpg"],
  },
};

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      {
        name: "Fresh Mezze Platter",
        description:
          "Hummus, tzatziki, olives, feta cheese, and warm pita bread",
        price: "$18",
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2022/08/mezze-platter-480x270.jpg",
      },
      {
        name: "Grilled Halloumi",
        description: "Traditional Cypriot cheese grilled with herbs and lemon",
        price: "$14",
        image:
          "https://cdn.loveandlemons.com/wp-content/uploads/2022/07/halloumi-500x500.jpg",
      },
      {
        name: "Stuffed Grape Leaves",
        description: "Rice and herb stuffed grape leaves with yogurt sauce",
        price: "$12",
        image:
          "https://i0.wp.com/veryveganval.com/wp-content/uploads/2022/07/IMG_6695-scaled.jpg?fit=2560%2C1707&ssl=1",
      },
    ],
  },
  {
    name: "Main Courses",
    items: [
      {
        name: "Mediterranean Grilled Salmon",
        description:
          "Fresh Atlantic salmon with lemon, herbs, quinoa and vegetables",
        price: "$28",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      },
      {
        name: "Authentic Greek Moussaka",
        description: "Layered eggplant, ground lamb, and béchamel sauce",
        price: "$24",
        image:
          "https://media.istockphoto.com/id/1649030858/photo/moussaka-a-traditional-greek-dish.jpg?s=612x612&w=0&k=20&c=4Yu23AnEjgyfrNug_9pk6ST8sPFYWWgkZSUN966LQMQ=",
      },
      {
        name: "Lamb Souvlaki",
        description: "Grilled lamb skewers with tzatziki and Greek salad",
        price: "$26",
        image:
          "https://www.eatloveeats.com/wp-content/uploads/2016/05/Lamb-Souvlaki-Featured.jpg",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main>
      <Navigation />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted Mediterranean dishes made with the
              finest ingredients
            </p>
          </div>

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-bold text-yellow-600">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
