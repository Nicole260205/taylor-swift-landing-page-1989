import './App.css'
import About from './components/About'
import Album from './components/Album'
import ErasTour from './components/ErasTour'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Songs from './components/Songs'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Songs />
      <ErasTour />
      <Album />
      <Newsletter />
    </>
  )
}

export default App
