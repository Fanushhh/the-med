'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function FateteSlider({slides}) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="bg-black text-white fateteSwiper">
        {
            slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index} className='relative  '>
                        <div className=' md:pl-20 md:py-6 max-w-[650px] flex flex-col-reverse'>
                            <div className='p-10'>
                                <h3 className='text-2xl md:text-4xl max-w-[400px] my-6 md:mb-10'>{slide.title}</h3>
                                {
                                    slide.description.map((desc, index) => {
                                        return (
                                            <p className='mb-4' key={index}>{desc}</p>
                                        )
                                    })
                                }
                            </div>
                            <Image className='md:absolute top-0 right-0 md:h-full h-[300px] object-cover' src={slide.slideImg} alt={slide.title} width={600} height={700} />
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}
