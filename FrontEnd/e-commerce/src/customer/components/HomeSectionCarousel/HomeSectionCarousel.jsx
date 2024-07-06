import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'

const HomeSectionCarousel = () => {

    const responsive = {
        0: {items: 1},
        726: {items: 3},
        1024: {items: 4}
    }

    const items = [1,1,1,1,1,1,1].map((items)=><HomeSectionCard/>)

  return (
    <div>
      <AliceCarousel 
      items={items}
      disableButtonsControls
      responsive={responsive}
      />
    </div>
  )
}

export default HomeSectionCarousel
