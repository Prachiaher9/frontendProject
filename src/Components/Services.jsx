import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../asset/3.jpg";
import img2 from "../asset/4.jpg";
const Services = () => {
  return (
    <div>
       <Carousel infiniteLoop autoPlay showStatus={false} showIndicators={false} showArrows={false} showThumbs={false} interval={1000}>
           <div>
            <img src={img1} alt="Item1"/>
            <p className='legend'>Full stack</p>
           </div>
           <div>
            <img src={img2} alt="Item1"/>
            <p  className='legend'>Peer to Peer to Support</p>
           </div>
       </Carousel>
    </div>
  )
}

export default Services
