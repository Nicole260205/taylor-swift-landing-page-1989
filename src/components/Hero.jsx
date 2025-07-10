import taylor from "../assets/taylor.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <h1 className="hero-title">Taylor Swift</h1>
      <img src={taylor} alt="Taylor Swift" className="hero-img" />
    </div>
  );
}

export default Hero;
