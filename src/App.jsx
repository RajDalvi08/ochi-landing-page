import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true,
    })

    return () => {
      scrollRef.current?.destroy()
    }
  }, [])

  return (
    <div
      id="main"
      data-scroll-container
      className="w-full min-h-screen text-white bg-zinc-900"
    >
      <Navbar />
      <LandingPage />
      <Marque />

      <div id="insights">
        <About />
      </div>
      <Eyes />
      <div id='work'>
        <Featured />
      </div>
      <Cards />
           <div id="about">
  <Footer />
</div>
      
    </div>
  )
}

export default App
