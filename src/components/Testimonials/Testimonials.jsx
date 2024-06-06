"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import "swiper/css/pagination";


const testimonialData = [
  {
    name: "Remus B.",
    text: " Lucrarea mea dentară a fost complexă și eu, evident, am fost anxios si temator la început. Mă bucur că am ales echipa The Med, m-au ajutat să trec peste toate fricile și mi-au dat încrederea să continui și să finalizez tot tratamentul. Poate, dacă nu erau ei, renunțam pe moment. Apreciez îndeosebi profesionalismul și dedicarea dr. Flavia Fugel, care mi-a coordonat cazul, dar și întregii echipe The Med!",
    image: "https://site.themed.ro/images/p1.jpg",
  },
  {
    name: "Carina I.",
    text: "Am ajuns la clinica The Med după multe căutări pentru că îmi doream să mă simt în siguranță. Și asta s-întâmplat de la prima consultație. Modul profesionist în care s-a prezentat doamna doctor, răbdarea pe care a avut-o de a-mi explica problemele și tratamentul, dar și grija față de nevoile mele m-au făcut să mă simt pe mâini bune. Acum zâmbesc de voie, mulțumesc The Med!",
    image: "https://site.themed.ro/images/p2.jpg",
  },
  {
    name: "Rodica S.",
    text: " Recomand cu toată încrederea echipa The Med și pe dr. Diana Duțu. Este cu adevărat un mediu profesionist, cu medici empatici care țin cont de nevoile și dorințele pacientilor. Au tehnologii și aparatură modernă, nu am așteptat foarte mult timp până am finalizat lucrarea și am fost relaxat pe tot parcursul tratamentului, deși am avut un caz mai complex! Vă mulțumesc!",
    image: "https://site.themed.ro/images/p3.jpg",
  },
  {
    name: "Rodica S.",
    text: " Recomand cu toată încrederea echipa The Med și pe dr. Diana Duțu. Este cu adevărat un mediu profesionist, cu medici empatici care țin cont de nevoile și dorințele pacientilor. Au tehnologii și aparatură modernă, nu am așteptat foarte mult timp până am finalizat lucrarea și am fost relaxat pe tot parcursul tratamentului, deși am avut un caz mai complex! Vă mulțumesc!",
    image: "https://site.themed.ro/images/p3.jpg",
  },
  {
    name: "Rodica S.",
    text: " Recomand cu toată încrederea echipa The Med și pe dr. Diana Duțu. Este cu adevărat un mediu profesionist, cu medici empatici care țin cont de nevoile și dorințele pacientilor. Au tehnologii și aparatură modernă, nu am așteptat foarte mult timp până am finalizat lucrarea și am fost relaxat pe tot parcursul tratamentului, deși am avut un caz mai complex! Vă mulțumesc!",
    image: "https://site.themed.ro/images/p3.jpg",
  },
];
export const Testimonials = () => {
  return (
    <section className="my-20 w-[1300px] mx-auto max-w-full">
    
    <div className="text-4xl text-center">
        <h2 className="mb-4 text-[var(--accent)]">Ce spun pacienții noștri</h2>
        <p className="mb-4">⭐⭐⭐⭐⭐</p>
    </div>
      <Swiper
        modules={[Pagination,Scrollbar]}
        scrollbar={{ draggable: false }}
        pagination={{ clickable: true }}
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        
        
      >
        {testimonialData.map((testimonial, index) => {
          return (
            <SwiperSlide
              key={index}
              className="!flex !flex-col z-10 !items-center  text-center gap-4 !p-2 "
            >
              <Image
                src={testimonial.image}
                className=" rounded-full aspect-square"
                width={100}
                height={100}
                alt={testimonial.name}
              />
              <h3>{testimonial.name}</h3>
              <p className="pointer-events-auto ">{testimonial.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
