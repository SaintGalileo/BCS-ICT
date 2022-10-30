import { useState } from "react";
import Customers from "./components/Customers";
import DevApi from "./components/DevApi";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Prodcuts from "./components/Prodcuts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(true);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Footer />
    </div>
  );
}

export default App;
