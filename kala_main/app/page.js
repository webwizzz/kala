import React from 'react'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'




function page() {
  return (
    <div>
      <div className="w-full min-h-screen bg-[#f5e9da]">

        <Navbar></Navbar>
        <LandingPage></LandingPage>
        <Marquee></Marquee>
        <About></About>
        <Eyes></Eyes>
        <Features></Features>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
