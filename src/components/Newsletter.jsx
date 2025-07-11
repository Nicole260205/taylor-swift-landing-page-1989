import seta from "../assets/seta.png";

function Newsletter() {
  return (
    <div className="newsletter">
      <h1 className="newsletter-title">
        KEEP UP TO DATE <br /> NEWSLETTER
      </h1>
      <div className="newsletter-input-wrapper">
        <input type="email" placeholder="Email" className="newsletter-input" />
        <button className="newsletter-button">
          <img src={seta} alt="Seta" />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
