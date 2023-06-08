import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetails from "./components/ProductDetails";

// Images
import savon1 from "./images/savon canneberge et citron.webp";
import savon2 from "./images/savon cafe et romarin.webp";
import savon3 from "./images/savon chanvre et the vert.webp";
import shampoo1 from "./images/shampooing chaga et argile.webp";
import shampoo2 from "./images/shampooing solide calendule.webp";
import shampoo3 from "./images/shampooing solide ortie et prele.webp";

const App = () => {
  const products = [
    {
      name: "SAVON CANNEBERGE & CITRON",
      url: "savon-canneberge-citron",
      source: savon1,
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SAVON CAFÉ & ROMARIN",
      url: "savon-cafe-romarin",
      source: savon2,
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SAVON CHANVRE & THÉ VERT",
      url: "savon-chanvre-the-vert",
      source: savon3,
      price: 0,
      description: "",
      category: "soaps",
    },
    {
      name: "SHAMPOING ORTIE & PRÊLE",
      url: "shampoing-ortie-prele",
      source: shampoo1,
      price: 0,
      description: "",
      category: "shampoos",
    },
    {
      name: "SHAMPOING CALENDULE",
      url: "shampoing-calendule",
      source: shampoo2,
      price: 0,
      description: "",
      category: "shampoos",
    },
    {
      name: "SHAMPOING CHAGA & ARGILE",
      url: "shampoing-chage-argile",
      source: shampoo3,
      price: 0,
      description: "",
      category: "shampoos",
    },
  ];
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop products={products} />} />
          <Route path="contact" element={<Contact />} />
          {/* Nested Routes = Routes imbriquées */}
          <Route path="product">
            <Route
              path=":url"
              element={<ProductDetails products={products} />}
            />
          </Route>
          {/* Fin de la route imbriquée */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
