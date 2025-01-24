import React from 'react'
import './home.module.css'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import Hero from '../../Components/Hero/Hero'
import ServicesComponent from '../../Components/ServiceComponent/servicecomponent'
import AboutComponent from '../../Components/AboutComponent/aboutcomponent'
import Reviews from '../../Components/Reviews/reviews'
import SustainableGoals from '../../Components/SustainableGoals/SustainableGoals'
import MediaCarousel from '../../Components/Media/media'
import IndustryExperts from '../../Components/IndustryExperts/IndExperts'

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesComponent />
      <AboutComponent />
      <IndustryExperts /> 
      <Reviews />
      <SustainableGoals />
      <MediaCarousel />
      <Footer />
    </div>
  )
}

export default home
