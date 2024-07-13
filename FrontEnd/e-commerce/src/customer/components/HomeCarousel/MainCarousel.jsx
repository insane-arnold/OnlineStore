import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const MainCarousel = () => {
    const items = mainCarouselData.map((item) =>
        <img className='cursor-pointer' src={item.image} role='presentation' alt='' />
    )

    return (
        <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType
            infinite
            touchTracking={false}
            disableButtonsControls
            items={items}
        />
    )
}

export default MainCarousel;