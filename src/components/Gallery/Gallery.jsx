"use client";
import React from "react";
import LightboxComponent from "@/components/Lightbox/Lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Gallery = ({ clinic }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [slides, setSlides] = React.useState(clinic.fullSize.map((img) => ({ src: img })));
  const [open, setOpen] = React.useState(false);
  const handleClick = (index) => {
    
    setCurrentIndex(index);
    setOpen(true);
  };
  
 

  return (
    <div className=" max-w-[1700px] mx-auto p-4 gallery">
      <h2 className="text-3xl md:text-4xl">{clinic.name}</h2>
      <Swiper
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Navigation]}
        draggable={false}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {clinic.imgs.map((image, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!h-[300px] md:max-w-[300px]"
              onClick={() => handleClick(index)}
            >
              <Image
                className="h-full object-cover z-10"
                src={image}
                width={500}
                height={500}
                alt={clinic.name}
                
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="text-[var(--accent)] text-2xl">
        {clinic.address.map((line, index) => (
          <p className="mb-2" key={index}>
            {line}
          </p>
        ))}
      </div>
      {
        <LightboxComponent
          plugins={[Slideshow, Fullscreen, Zoom, Thumbnails]}
          slides={slides}
          currentIndex={currentIndex}
          isOpen={open}
          setOpen={setOpen}
        />
      }
    </div>
  );
};
