"use client"

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeaderSpacer from '../header/header-spacer';
import Image from 'next/image';
import { useState } from 'react';


export default function HomeSlider() {

  const movie_array=[
    {
      movietitle:"descipable me 4",
      movie_src:"/movies/descipable-me.jpg",
    },
    {
      movietitle:"Deadpool",
      movie_src:"/movies/deadpool.jpeg",
    },
    {
      movietitle:"dune",
      movie_src:"/movies/dune.jpg",
    },
    {
      movietitle: "inside out 2",
      movie_src:"/movies/inside-out.jpg"
    },
    {
      movietitle:"kung fu panda 4",
      movie_src:"/movies/kungfu-panda.jpg",
    }
    
  ]

  return (
    <div id="home_slider" className='banner-slider-wrap relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:z-[2] before:bg-gradient-banner-overlay'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          onSlideChange={(swiper) => handleSlideChange(swiper,document.getElementById('home_slider'))}
            // onSwiper={(swiper) => console.log(swiper)}
          className='h-[40rem] mobile-landscape:h-[48rem]'
          >
          {movie_array.map((movie, movieindex) =>
            <SwiperSlide key={movieindex}><Slides movie_image={movie.movie_src}/></SwiperSlide>
          )}
            </Swiper>
            {movie_array.map((movie, index) =>
                <div key={index} className='text-white absolute left-5 bottom-5 text-3xl mobile-landscape:text-5xl capitalize mov_title z-[2]'>{movie.movietitle}</div>
                )}    
      </div>
  );
};

function handleSlideChange( swiper:any , homeSlider:any ) {
  let sliderindex = swiper.activeIndex;
  const mov_title = homeSlider.querySelectorAll('.mov_title');
  mov_title.forEach((el:any)=>{
      el.classList.remove('active');  
  });
  mov_title[sliderindex].classList.add('active');
}

type PropsType ={
    movie_image:string
}

const Slides: React.FC<PropsType>= ({movie_image}) => {
    return (
            <div className='slide-wrapper relative w-full h-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${movie_image})`}}>
              <HeaderSpacer/>
            </div>
        

    )
}
export { Slides };