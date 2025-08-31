import "../styles/about_us.css";
import aboutImg from "../images/genuine hydraulics logo.jpg"; 

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are a leading provider of hydraulic and pneumatic solutions, 
            specializing in custom-designed power packs, cylinders, pumps, 
            and industrial machinery. With years of experience and a 
            commitment to quality, we deliver reliable products for 
            industries worldwide.
          </p>
          <p>
            Our mission is to deliver innovative, durable, and efficient 
            engineering solutions that empower industries to perform better.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
