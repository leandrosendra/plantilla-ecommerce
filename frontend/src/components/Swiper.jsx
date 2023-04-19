import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import burberry from '../assets/burberry.png'
import gucci from '../assets/gucci.png'
import louis from '../assets/louis.png'
import balenciaga from '../assets/balenciaga.png'
import React from 'react';

const SwiperC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 600 }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={gucci} alt="" /></SwiperSlide>
      <SwiperSlide><img src={louis} alt="" /></SwiperSlide>
      <SwiperSlide><img src={balenciaga} alt="" /></SwiperSlide>
      <SwiperSlide><img src={burberry} alt="" /></SwiperSlide>
      <SwiperSlide><img src={gucci} alt="" /></SwiperSlide>
      <SwiperSlide><img src={louis} alt="" /></SwiperSlide>
      <SwiperSlide><img src={balenciaga} alt="" /></SwiperSlide>
      <SwiperSlide><img src={burberry} alt="" /></SwiperSlide>
      <SwiperSlide><img src={gucci} alt="" /></SwiperSlide>
      <SwiperSlide><img src={louis} alt="" /></SwiperSlide>
      <SwiperSlide><img src={balenciaga} alt="" /></SwiperSlide>
      <SwiperSlide><img src={burberry} alt="" /></SwiperSlide>
    </Swiper>

  )
}

export default SwiperC