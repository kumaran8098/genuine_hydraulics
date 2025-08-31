
import ProductCard from "../components/productcard";
import "../styles/products.css";
import hydraulicsylinder from "../images/hydraulic sylinders.jpg";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";
import image9 from "../images/9.jpg";


// Sample product data (you can replace with images from your project)
const products = [
  {
    title: "Hydraulic Power Packs",
    description: "DC & AC power packs customizable with motors, tanks, and pumps.",
    image: image6,
  },
  {
    title: "Hydraulic Cylinders",
    description: "Tie-rod, welded, telescopic, and mill-duty cylinders.",
    image: hydraulicsylinder,
  },
  {
    title: "Hydraulic Press",
    description: "C-frame, H-frame, PET baling & four pillar presses.",
    image: image1,
  },
  {
    title: "Hydraulic Seals & O-rings",
    description: "Durable sealing solutions for industrial applications.",
    image: image2,
  },
  {
    title: "Hydraulic Pumps",
    description: "Gear, vane, variable displacement & piston pumps.",
    image: image3,
  },
  {
    title: "Hydraulic Valves",
    description: "Directional, relief, modular & control valves.",
    image: image4,
  },
  {
    title: "Hydraulic Motors",
    description: "Low-speed, high torque orbital motors.",
    image: image5,
  },
  {
    title: "Accessories",
    description: "Coolers, hoses, fittings, gauges & manifolds.",
    image: image7,
  },
  {
    title: "Pneumatics",
    description: "FRL, tubes, fittings, valves, and cylinders.",
    image: image8,
  },
  {
    title: "Accessories",
    description: "Coolers, hoses, fittings, gauges & manifolds.",
    image: image9,
  }
];

const Products = () => {
  return (
    <div className="products-page">
      <h2 className="products-heading"> Our Product </h2>
      <div className="products-grid">
        {products.map((item, index) => (
          <ProductCard
            key={index}
             image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
