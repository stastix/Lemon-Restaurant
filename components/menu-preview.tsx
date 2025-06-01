import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "Mediterranean Grilled Salmon",
    description:
      "Fresh Atlantic salmon grilled with lemon, herbs, and olive oil, served with quinoa and roasted vegetables.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    category: "Main Course",
  },
  {
    name: "Authentic Greek Moussaka",
    description:
      "Traditional layered dish with eggplant, ground lamb, and béchamel sauce, baked to perfection.",
    price: "$24",
    image:
      "https://media.istockphoto.com/id/1649030858/photo/moussaka-a-traditional-greek-dish.jpg?s=612x612&w=0&k=20&c=4Yu23AnEjgyfrNug_9pk6ST8sPFYWWgkZSUN966LQMQ=",
    category: "Main Course",
  },
  {
    name: "Fresh Mezze Platter",
    description:
      "A selection of hummus, tzatziki, olives, feta cheese, and warm pita bread.",
    price: "$18",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2022/08/mezze-platter-480x270.jpg",
    category: "Appetizer",
  },
];
export default function MenuPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Taste the authentic flavors of the Mediterranean with our chef's
            carefully crafted signature dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
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

        <div className="text-center">
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
