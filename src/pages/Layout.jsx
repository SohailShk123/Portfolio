import React from 'react'
import { About, Contact, Home, Projects } from '../pages'
import { Footer, Navbar } from '../components'
import { Element } from 'react-scroll';
const Layout = () => {
  return (
    <div className='bg-white'>
      {/* Home */}
      <Navbar />
      <Element name='section1'>
        <section>
          <Home />
        </section>
      </Element>

      {/* About */}
      <Element name='section2'>
        <section id='/about'>
          <About />
        </section>
      </Element>

      {/* Projects */}
      <Element name="section3">
        <section id='/projects'>
          <Projects />
        </section>
      </Element>

      {/* Contact */}
      <Element name='section4'>
        <section id='/contact' >
          <Contact />
        </section>
      </Element>
      <Footer />
    </div>
  )
}

export default Layout