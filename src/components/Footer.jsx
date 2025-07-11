import logo from "../assets/logo-taylor.png"; // sua imagem da silhueta

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="Taylor silhouette" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
