import React from "react";
import "../styles/footer.css";
import logo from "../images/coding logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Logo Image */}
            <img src={logo} alt="Kumaran Dev Logo" className="footer-logo" />

            <p className="footer-text">
              We provide the best services to satisfy our customers. Stay connected with us.
            </p>

            <div className="footer-socials">
              <a href="#!" className="social-link">FB</a>
              <a href="#!" className="social-link">TW</a>
              <a href="#!" className="social-link">IG</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
