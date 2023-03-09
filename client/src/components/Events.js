import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import '../scss/event.css'
import gofa from "../assets/images/gofa.jpg"
import Carousel from 'react-grid-carousel'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Events = () => {

  return (
    <section id='event'>
      <div class="card-list">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div class="card-event">
          <div class="card-image">
          <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                </Carousel>
          </div>

          <div class="card-header">
            <h1>مشاركة متطوعي الهلال الأحمر بغنوش في تنظيم تظاهرة رهان المطالعة تحت إشراف المكتبة العمومية بغنوش بدار الثقافة ..</h1>
            
          </div>
          <div class="card-footer">
            <div class="card-meta card-meta--views">
            {/* <EmojiPicker /> */}
            </div>
            <div class="card-meta card-meta--date">
              <h1>26 فيفري 2023</h1>
            </div>
          </div>
        </div></SwiperSlide>
      <SwiperSlide>
      <div class="card-event">
          <div class="card-image">
          <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                </Carousel>
          </div>

          <div class="card-header">
            <h1>مشاركة متطوعي الهلال الأحمر بغنوش في تنظيم تظاهرة رهان المطالعة تحت إشراف المكتبة العمومية بغنوش بدار الثقافة ..</h1>
            
          </div>
          <div class="card-footer">
            <div class="card-meta card-meta--views">
            {/* <EmojiPicker /> */}
            </div>
            <div class="card-meta card-meta--date">
              <h1>26 فيفري 2023</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        
        
        <div class="card-event">
          <div class="card-image">
          <Carousel dotColorActive showDots>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={gofa} />
                  </Carousel.Item>
                </Carousel>
          </div>

          <div class="card-header">
            <h1>مشاركة متطوعي الهلال الأحمر بغنوش في تنظيم تظاهرة رهان المطالعة تحت إشراف المكتبة العمومية بغنوش بدار الثقافة ..</h1>
            
          </div>
          <div class="card-footer">
            <div class="card-meta card-meta--views">
            {/* <EmojiPicker /> */}
            </div>
            <div class="card-meta card-meta--date">
              <h1>26 فيفري 2023</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events