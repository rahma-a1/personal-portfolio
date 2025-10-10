import Hero from './Hero.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Navbar from './Navbar.jsx'
import BackToTopButton from './BackToTopButton.jsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Navbar />
      <BackToTopButton />
    </div>
  )
}

export default App
