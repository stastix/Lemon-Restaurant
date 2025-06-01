import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Lemon Restaurant interior with Mediterranean ambiance"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">
            Authentic Mediterranean
            <span className="hero-accent">Cuisine</span>
          </h1>

          <p className="hero-subtitle">
            Experience the finest flavors of the Mediterranean with fresh ingredients, traditional recipes, and modern
            presentation
          </p>

          {/* Rating and Info */}
          <div className="hero-info">
            <div className="rating">
              <div className="stars">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <span className="rating-text">4.8 (127 reviews)</span>
            </div>

            <div className="location">
              <span className="icon">📍</span>
              <span>123 Mediterranean Ave</span>
            </div>

            <div className="hours">
              <span className="icon">🕐</span>
              <span>Open 11AM - 10PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="btn btn-primary btn-large">Reserve a Table</button>
            <button className="btn btn-secondary btn-large">View Menu</button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
