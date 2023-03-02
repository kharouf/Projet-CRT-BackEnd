
import React from 'react';

import { Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../assets/images/slide5.jpg'
import image2 from '../assets/images/3.JPG'
import image3 from '../assets/images/slide3.JPG'




const fadeImages = [
  {
url: image1,
    
  },
  {
url: image2,
    
  },
  {
url:image3   
  },
];

const Carousel = () => {
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 100,
    infinite: true,
    autoplay: true,
    indicators: true,
    scale: 0.2,
    arrows: true
  };
  return (
    <div className="slide-container">
      <Zoom className='zoom-carousel' {...zoomOutProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' ,height:'760px'}} src={fadeImage.url} />
            
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Carousel