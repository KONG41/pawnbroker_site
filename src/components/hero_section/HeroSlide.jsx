import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from "swiper";
const HeroSlide = (props) => {
  const {slideShow} = props
  return (
    <div className="w-full">
        <Swiper
        autoHeight={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          slideShow && slideShow.map((item,index)=>(
          
              <SwiperSlide key={`hero-${index}`}>
               <img src={item} />
              </SwiperSlide>
       
            )
          )
        }
      </Swiper>
    </div>
  )
}

export default HeroSlide