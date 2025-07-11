import "./App.css";
import About from "./components/About";
import Album from "./components/Album";
import ErasTour from "./components/ErasTour";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Songs from "./components/Songs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Songs />
        <ErasTour id="eras-tour" />
        <Album />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

export default App;
