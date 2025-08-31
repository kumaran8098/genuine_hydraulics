import React from "react";
import "../styles/contact.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subtext">
        We're here to assist you! Reach us through phone, email, or WhatsApp.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p><FaEnvelope className="icon" /> pranavchandran2770@gmail.com</p>

          <div className="phone-list">
            <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43211</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43212</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43213</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43214</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43215</p>
          </div>

          <p><FaMapMarkerAlt className="icon" /> 123 Industrial Area, Chennai, India</p>

          <a
            href="https://wa.me/919751611870"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp className="whatsapp-icon" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;