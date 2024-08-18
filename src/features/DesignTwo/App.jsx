import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <span>
        basado en el tutorial de https://www.youtube.com/watch?v=ZpIel9cv4Jk
      </span>
    </>
   )
}

export default App