"use client"

import { useState } from "react"
import { Helmet } from "react-helmet"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <main>
      <Helmet>
        <title>Contact Us - Get in Touch | Lemon Restaurant</title>
        <meta
          name="description"
          content="Contact Lemon Restaurant for reservations, inquiries, or feedback. Find our location, hours, and contact information."
        />
        <link rel="canonical" href="https://lemonrestaurant.com/contact" />
        <meta property="og:title" content="Contact Us - Lemon Restaurant" />
        <meta property="og:description" content="Contact Lemon Restaurant for reservations, inquiries, or feedback" />
      </Helmet>

      <Navigation />

      <section className="contact-page section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            We'd love to hear from you. Get in touch for reservations, inquiries, or feedback.
          </p>

          <div className="contact-content grid grid-2">
            {/* Contact Form */}
            <div className="contact-form card">
              <h2 className="form-title">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-input"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-input"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card card">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h3>Address</h3>
                    <p>
                      123 Mediterranean Ave
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="info-card card">
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="info-card card">
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <h3>Email</h3>
                    <p>info@lemonrestaurant.com</p>
                  </div>
                </div>
              </div>

              <div className="info-card card">
                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <h3>Hours</h3>
                    <div className="hours-list">
                      <p>Monday - Thursday: 11AM - 10PM</p>
                      <p>Friday - Saturday: 11AM - 11PM</p>
                      <p>Sunday: 12PM - 9PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage
