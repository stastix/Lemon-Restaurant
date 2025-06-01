import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-4">
          {/* Restaurant Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">🍋</div>
              <span className="logo-text">Lemon</span>
            </div>
            <p className="footer-description">
              Authentic Mediterranean cuisine with fresh ingredients and traditional recipes, bringing the flavors of
              the Mediterranean to your table.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>
                123 Mediterranean Ave
                <br />
                City, State 12345
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@lemonrestaurant.com</span>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-section">
            <h3 className="footer-title">Opening Hours</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span>Monday - Thursday</span>
                <span>11AM - 10PM</span>
              </div>
              <div className="hours-item">
                <span>Friday - Saturday</span>
                <span>11AM - 11PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>12PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Lemon Restaurant. All rights reserved. |<a href="/privacy"> Privacy Policy</a> |
            <a href="/terms"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
