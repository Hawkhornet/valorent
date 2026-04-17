import React from 'react'
import Hero from '../components/Hero'
import LatestListings from '../components/LatestListings'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestListings />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
