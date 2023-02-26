import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import HeroSection from './Pages/Hero/Hero'
import Service from './Pages/Service/Service'
import MyApp from './Pages/Myapp/Download'

function View() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <MyApp />
    </div>
  )
}

export default View
