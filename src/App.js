import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import ContactPage from "./pages/ContactPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Lemon Restaurant - Authentic Mediterranean Cuisine</title>
          <meta
            name="description"
            content="Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation in the heart of the city."
          />
          <meta
            name="keywords"
            content="restaurant, mediterranean, fine dining, fresh ingredients, lemon restaurant, authentic cuisine"
          />
          <meta name="author" content="Lemon Restaurant" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Lemon Restaurant - Authentic Mediterranean Cuisine" />
          <meta
            property="og:description"
            content="Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation."
          />
          <meta property="og:image" content="/og-image.jpg" />
          <meta property="og:url" content="https://lemonrestaurant.com" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Lemon Restaurant" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Lemon Restaurant - Authentic Mediterranean Cuisine" />
          <meta name="twitter:description" content="Experience the finest Mediterranean cuisine at Lemon Restaurant." />
          <meta name="twitter:image" content="/og-image.jpg" />
          <meta name="twitter:creator" content="@lemonrestaurant" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Lemon Restaurant",
              image: "https://lemonrestaurant.com/og-image.jpg",
              description: "Authentic Mediterranean cuisine with fresh ingredients and traditional recipes",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Mediterranean Ave",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              telephone: "+1-555-123-4567",
              url: "https://lemonrestaurant.com",
              servesCuisine: "Mediterranean",
              priceRange: "$$",
              openingHours: ["Mo-Su 11:00-22:00"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            })}
          </script>
        </Helmet>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
