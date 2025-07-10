import logo from "../assets/logo-taylor.png";

function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-left">
        <img src={logo} alt="Logo da Taylor Swift" className="logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Home</li>
          <li>Events</li>
          <li>About</li>
        </ul>
        <button className="botao">Subscribe</button>
      </div>
    </nav>
  );
}

export default Navbar;
