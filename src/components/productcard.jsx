import React from "react";
import "../styles/products.css";

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      {image && <img src={image} alt={title} />}
      <div className="product-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="learn-more-btn">Learn More</a>
      </div>
    </div>
  );
};

export default ProductCard;
