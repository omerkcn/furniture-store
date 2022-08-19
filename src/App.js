// import { Navbar } from "./components/Navbar.jsx";
import "./App.css";
import WebsiteNav from "./components/WebsiteNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import SalonSets from "./pages/SalonSets";
import Lamps from "./pages/Lamps";
import Vases from "./pages/SalonSets";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WebsiteNav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/salonsets" element={<SalonSets />} />
        <Route path="/lamps" element={<Lamps />} />
        <Route path="/vases" element={<Vases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
