import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ProductBox from './ProductBox';
const productSlide = (props) => {
  const{data, slidePerView, autoplay, url, detailData} = props
  
  return (
    <div>
      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={30}
        cssMode={false}
        navigation={true}
        pagination={false}
        mousewheel={false}
        keyboard={true}
        autoplay={
        autoplay ?
        {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        } : false
      }
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {
          data &&
          data.map((item,index)=>(
            <SwiperSlide><ProductBox title={item.title} desc={item.description} img={item.img[0]} url={url} data={data[index]}/></SwiperSlide>   
          ))
        }
         
      </Swiper>
    </div>
  )
}

export default productSlide