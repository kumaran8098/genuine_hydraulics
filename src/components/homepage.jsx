import React from "react";
import "../styles/homepage.css"; // import css file

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to Genuine Hydraulics</h1>
      <p className="home-text">
        Since 2023, we’ve specialized in hydraulic manufacturing and engineering,
        delivering trusted and efficient solutions. Explore our range of products
        including Power Packs, Cylinders, Presses, Seals, Pumps, Valves, and more.
      </p>

      <button className="home-btn">View Products</button>
    </div>
  );
};

export default Home;

