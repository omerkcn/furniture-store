import React from 'react';

import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "../styles.css";


const ImageCarousel = ( { firstImage, secondImage, thirdImage } ) =>
{
  return (
    <div className="rounded">


      <Swiper
        className='rounded'
        modules={ [ Navigation, Pagination, Scrollbar, A11y ] }
        onSwiper={ ( swiper ) => ( window.swiper = swiper ) }
        slidesPerView={ 1 }
        spaceBetween={ 1 }
        navigation={ {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        } }
        // loop     //reşat abiye sor swiper button ve autoslide
        // autoplay={ { delay: 3000, disableOnInteraction: false } }

        scrollbar={ { draggable: true } }
        pagination={ { clickable: true } }
      >
        <SwiperSlide><img src={ firstImage } alt="" /></SwiperSlide>
        <SwiperSlide><img src={ secondImage } alt="" /></SwiperSlide>
        <SwiperSlide><img src={ thirdImage } alt="" /></SwiperSlide>

      </Swiper>
    </div>
  )

}
export default ImageCarousel