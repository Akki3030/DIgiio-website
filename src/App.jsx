import React, { use } from 'react'
import AnimationedBackground from './Components/AnimationedBackground'
import { useState, useEffect } from 'react'
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Client from './Components/Client'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'
import Stats from './Components/Stats'
import Testimonials from './Components/Testimonials'
import CTA from './Components/CTA'
import Contact from './Components/Contact'
function App() {

const [isDarkMode, setIsDarkMode] = useState(true)
const toggleTheme = () => {
  setIsDarkMode(!isDarkMode)
}

useEffect(() => {
 document.body.className = isDarkMode ? "dark-mode font-sans overflow-x-hidden" : "light-mode font-sans overflow-x-hidden "
}, [isDarkMode])

  return (
    <div className="font-sans overflow-x-hidden">
      <AnimationedBackground />
      <Headers isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
      <Hero />
      <Client />
      <About />
      <Services />
      <Work />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      </main>

    </div>
  )
}

export default App
