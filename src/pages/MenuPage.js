import { Helmet } from "react-helmet"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import "./MenuPage.css"

const MenuPage = () => {
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Fresh Mezze Platter",
          description: "Hummus, tzatziki, olives, feta cheese, and warm pita bread",
          price: "$18",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Grilled Halloumi",
          description: "Traditional Cypriot cheese grilled with herbs and lemon",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Stuffed Grape Leaves",
          description: "Rice and herb stuffed grape leaves with yogurt sauce",
          price: "$12",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Mediterranean Grilled Salmon",
          description: "Fresh Atlantic salmon with lemon, herbs, quinoa and vegetables",
          price: "$28",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Authentic Greek Moussaka",
          description: "Layered eggplant, ground lamb, and béchamel sauce",
          price: "$24",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          name: "Lamb Souvlaki",
          description: "Grilled lamb skewers with tzatziki and Greek salad",
          price: "$26",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  return (
    <main>
      <Helmet>
        <title>Menu - Authentic Mediterranean Dishes | Lemon Restaurant</title>
        <meta
          name="description"
          content="Explore our extensive menu of authentic Mediterranean dishes, featuring fresh ingredients, traditional recipes, and modern presentation."
        />
        <link rel="canonical" href="https://lemonrestaurant.com/menu" />
        <meta property="og:title" content="Menu - Lemon Restaurant" />
        <meta property="og:description" content="Explore our extensive menu of authentic Mediterranean dishes" />
      </Helmet>

      <Navigation />

      <section className="menu-page section">
        <div className="container">
          <h1 className="section-title">Our Menu</h1>
          <p className="section-subtitle">
            Discover our carefully crafted Mediterranean dishes made with the finest ingredients
          </p>

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="menu-category">
              <h2 className="category-title">{category.name}</h2>

              <div className="menu-items grid grid-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item card">
                    <div className="menu-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    </div>
                    <div className="menu-content">
                      <div className="menu-header">
                        <h3 className="menu-name">{item.name}</h3>
                        <span className="menu-price">{item.price}</span>
                      </div>
                      <p className="menu-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default MenuPage
