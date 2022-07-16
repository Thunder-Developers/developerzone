import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import OilSection from './components/OilSection'
import JuiceSection from './components/JuiceSection'
import GrainsSection from './components/GrainsSection'
import HerbsSection from './components/HerbsSection'
import PulsesSection from './components/PulsesSection'
import Categories from './components/Categories'
const App = () => {
  return (
    <>
      <Navbar brandName="CompanyName3"/>
      <Categories/>
      <Banner/>
      <OilSection product="Oil" />
      <JuiceSection product="Juice"/>
      <GrainsSection product="Grains"/>
      <HerbsSection product="Herbs"/>
      <PulsesSection product="Pulses"/>

    </>
  )
}

export default App
