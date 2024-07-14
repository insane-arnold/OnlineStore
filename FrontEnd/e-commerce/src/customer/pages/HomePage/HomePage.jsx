import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mensTopwear} from '../../../data/mensTopwear.jsx'

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 px-5 lg:px-10'>
        <HomeSectionCarousel data={mensTopwear} sectionName={"Men's Top Wear"}/>
        <HomeSectionCarousel data={mensTopwear} sectionName={"Men's Top Wear"}/>
        <HomeSectionCarousel data={mensTopwear} sectionName={"Men's Top Wear"}/>
        <HomeSectionCarousel data={mensTopwear} sectionName={"Men's Top Wear"}/>
      </div>
    </div>
  );
};

export default HomePage;
