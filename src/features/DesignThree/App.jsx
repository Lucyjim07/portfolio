import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import MyWork from "./components/MyWork/MyWork"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />

      <span>Basado en el tutorial de https://www.youtube.com/watch?v=hkHHwA-vEyQ</span>
    </div>
  )
}

export default App