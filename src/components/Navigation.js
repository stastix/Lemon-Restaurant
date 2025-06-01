"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">🍋</div>
            <span className="logo-text">Lemon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="nav-cta desktop-nav">
            <div className="contact-info">
              <span className="phone-icon">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <button className="btn btn-primary">Reserve Table</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mobile-contact">
              <div className="contact-info">
                <span className="phone-icon">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <button className="btn btn-primary mobile-cta">Reserve Table</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
