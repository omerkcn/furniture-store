// import { Navbar } from "./components/Navbar.jsx";
import "./App.css";
import WebsiteNav from "./components/WebsiteNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WebsiteNav />
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
