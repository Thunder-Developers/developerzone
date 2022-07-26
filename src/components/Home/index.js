import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import SpicesSection from './SpicesSection';
import SeedsSection from './SeedsSection';
import GrainsSection from './GrainsSection';
import HerbsSection from './HerbsSection';
import PulsesSection from './PulsesSection';
import Categories from './Categories';
import Review from './Review';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
import SaltsSection from './SaltsSection';
import FlourSection from './FlourSection';
import SquashsSection from './SquashsSection';

const index = () => {
    return (
      <>
        <Navbar brandName="2Pahadi" />
        <Categories />
        <Banner />
        <GrainsSection product="Grains" />
        <SpicesSection product="Spices" />
        <SeedsSection product="Seeds" />
        <HerbsSection product="Herbs" />
        <PulsesSection product="Pulses" />
        <SaltsSection product="Salts"/>
        <FlourSection product="Flour"/>
        <SquashsSection product="Squash"/>
        <Review />
        <SocialMedia />
        <Footer />
      </>
    )
  }
  
  export default index
