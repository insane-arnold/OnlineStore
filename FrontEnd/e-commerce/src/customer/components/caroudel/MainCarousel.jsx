import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <img src="https://static.vecteezy.com/system/resources/previews/000/662/994/original/vector-colorful-fashion-sale-banner.jpg" className="sliderimg" alt="" width="100%" height="535"/>,
    <img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/_/1_12.jpg" width="100%" height="535"></img>,
];

const MainCarousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default MainCarousel;