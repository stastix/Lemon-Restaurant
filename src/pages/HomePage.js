import { Helmet } from "react-helmet"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Features from "../components/Features"
import MenuPreview from "../components/MenuPreview"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Lemon Restaurant - Authentic Mediterranean Cuisine</title>
        <meta
          name="description"
          content="Experience the finest Mediterranean cuisine at Lemon Restaurant. Fresh ingredients, traditional recipes, and modern presentation in the heart of the city."
        />
        <link rel="canonical" href="https://lemonrestaurant.com/" />
      </Helmet>

      <Navigation />
      <Hero />
      <Features />
      <MenuPreview />
      <Footer />
    </main>
  )
}

export default HomePage
