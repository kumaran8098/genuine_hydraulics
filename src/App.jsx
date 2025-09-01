
import Navbar from "./components/navbar";
import Home from "./components/homepage";
import Products from "./components/products";
import About from "./components/about_us";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
