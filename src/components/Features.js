import "./Features.css"

const Features = () => {
  const features = [
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      description: "We source the finest Mediterranean ingredients daily from local farms and trusted suppliers.",
    },
    {
      icon: "⏰",
      title: "Quick Service",
      description: "Enjoy restaurant-quality meals prepared fresh and served promptly by our experienced team.",
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence in Mediterranean cuisine with multiple culinary awards and accolades.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Owned",
      description: "A family-owned restaurant bringing authentic Mediterranean traditions to your table since 1995.",
    },
  ]

  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose Lemon Restaurant?</h2>
        <p className="section-subtitle">
          Discover what makes our Mediterranean cuisine special and why customers keep coming back for more.
        </p>

        <div className="features-grid grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-content">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
