import React from 'react'
import MobileFooter from '../components/mobil/common/MobileFooter'
import Offer from '../components/mobil/common/Offer'
import Coaching from '../components/mobil/home/Coaching'
import Featured from '../components/mobil/home/Featured'
import GetInTouch from '../components/mobil/home/GetInTouch'
import Hero from '../components/mobil/home/Hero'

function HomePage() {
  return (
    <>
      <Hero />
      <Offer />
      <Coaching />
      <GetInTouch />
      <Featured />
      <MobileFooter />
    </>
  )
}

export default HomePage
