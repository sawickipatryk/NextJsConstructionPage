'use client'

import Achievements from './components/Achievements'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import WhyUs from './components/WhyUs'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Achievements/>
      <OurServices/>
      <WhyUs/>
    </>
  )
}
export default Home
