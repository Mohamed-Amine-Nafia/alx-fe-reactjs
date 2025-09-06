import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
