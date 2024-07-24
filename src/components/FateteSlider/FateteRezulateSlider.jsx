'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import ImageDifferenceSlider from '../Diff/Diff';

export default function FateteRezulateSlider({results}) {
  return (
    <>
      <Swiper pagination={{clickable:true}} modules={[Pagination]} className="mySwiper">
        {
            results.map((result, index) => {
                return (
                    <SwiperSlide key={index} className='relative bg-black text-white'>
                        <div className='md:max-w-[650px] p-4 md:p-10'>
                            <h3 className='text-2xl md:text-4xl lg:max-w-[400px] text-[var(--accent)] my-6 md:mb-10'>{result.title}</h3>
                            <h4 className='text-xl md:text-2xl'>{result.subTitle}</h4>
                            {
                                result.description.map((desc, index) => {
                                    return (
                                        <p className='mb-4' key={index}>{desc}</p>
                                    )
                                })
                            }
                            <div className='flex flex-col min-[400px]:flex-row min-[400px]:*:w-1/2 min-[400px]:justify-center lg:justify-start'>
                              <Image className='lg:border-[5px] border-[var(--accent)] w-full object-cover sm:block md:w-[300px]' src={result.beforeImg} alt={result.title} width={300} height={300} />
                              <Image className='lg:absolute top-0 right-0 h-full object-cover object-top  sm:block' src={result.afterImg} alt={result.title} width={600} height={700} />
                            </div>
                            {/* <div className='sm:hidden'>
                                <ImageDifferenceSlider image1={result.beforeImg} image2={result.afterImg} />
                            </div> */}
                        </div>
                        
                    </SwiperSlide>
                )
             })
        }
      </Swiper>
    </>
  );
}
