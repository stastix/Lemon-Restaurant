import { Link } from "react-router-dom"
import "./MenuPreview.css"

const MenuPreview = () => {
  const menuItems = [
    {
      name: "Mediterranean Grilled Salmon",
      description:
        "Fresh Atlantic salmon grilled with lemon, herbs, and olive oil, served with quinoa and roasted vegetables.",
      price: "$28",
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Course",
    },
    {
      name: "Authentic Greek Moussaka",
      description: "Traditional layered dish with eggplant, ground lamb, and béchamel sauce, baked to perfection.",
      price: "$24",
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Course",
    },
    {
      name: "Fresh Mezze Platter",
      description: "A selection of hummus, tzatziki, olives, feta cheese, and warm pita bread.",
      price: "$18",
      image: "/placeholder.svg?height=300&width=400",
      category: "Appetizer",
    },
  ]

  return (
    <section className="menu-preview section">
      <div className="container">
        <h2 className="section-title">Signature Dishes</h2>
        <p className="section-subtitle">
          Taste the authentic flavors of the Mediterranean with our chef's carefully crafted signature dishes.
        </p>

        <div className="menu-grid grid grid-3">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item card">
              <div className="menu-image">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
                <div className="menu-category">{item.category}</div>
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

        <div className="menu-cta">
          <Link to="/menu" className="btn btn-primary btn-large">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
