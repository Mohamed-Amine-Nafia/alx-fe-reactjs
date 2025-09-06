import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "white",
  };
  const navStyle = {
    padding: "10px",
    backgroundColor: "#333",
    display: "justify-content",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}
