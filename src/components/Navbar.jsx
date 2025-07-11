import { useState } from "react";
import logo from "../assets/logo-taylor.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo da Taylor Swift" className="logo" />
      </div>

      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>About</li>
        </ul>
        <button className="botao">Subscribe</button>
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
