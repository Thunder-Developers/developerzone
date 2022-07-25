import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import OilSection from './OilSection';
import JuiceSection from './JuiceSection';
import GrainsSection from './GrainsSection';
import HerbsSection from './HerbsSection';
import PulsesSection from './PulsesSection';
import Categories from './Categories';
import Review from './Review';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

const index = () => {
    return (
      <>
        <Navbar brandName="2Pahadi" />
        <Categories />
        <Banner />
        <GrainsSection product="Grains" />
        <OilSection product="Oil" />
        <JuiceSection product="Juice" />
        <HerbsSection product="Herbs" />
        <PulsesSection product="Pulses" />
        <Review />
        <SocialMedia />
        <Footer />
  
      </>
    )
  }
  
  export default index