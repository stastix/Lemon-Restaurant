import { Leaf, Clock, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source the finest Mediterranean ingredients daily from local farms and trusted suppliers.",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Enjoy restaurant-quality meals prepared fresh and served promptly by our experienced team.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in Mediterranean cuisine with multiple culinary awards and accolades.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A family-owned restaurant bringing authentic Mediterranean traditions to your table since 1995.",
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Lemon Restaurant?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our Mediterranean cuisine special and why customers keep coming back for more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
