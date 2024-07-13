import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'; 
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); 

  const responsive = {
    0: { items: 1 },
    726: { items: 2 },
    1024: { items: 5 }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.map((item, index) => (
    <HomeSectionCard product={item} />
  ));

  return (
    <div className='px-2 lg:px-8'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5 text-left'>{sectionName}</h2>
      <div className='relative p-5 border'>
        <AliceCarousel
          ref={carouselRef} 
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant='contained'
            className='z-50'
            sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(90deg)', bgcolor: 'white' }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
          </Button>
        )}
        {activeIndex !== items.length - responsive[1024].items && (
          <Button
            onClick={slideNext}
            variant='contained'
            className='z-50'
            sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }}
            aria-label='next'
          >
            <KeyboardArrowRightIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

