"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import "swiper/css/pagination";
import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";

const testimonialData = [
  {
    name: "Remus B.",
    text: " Lucrarea mea dentară a fost complexă și eu, evident, am fost anxios si temator la început. Mă bucur că am ales echipa The Med, m-au ajutat să trec peste toate fricile și mi-au dat încrederea să continui și să finalizez tot tratamentul. Poate, dacă nu erau ei, renunțam pe moment. Apreciez îndeosebi profesionalismul și dedicarea dr. Flavia Fugel, care mi-a coordonat cazul, dar și întregii echipe The Med!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-1.jpg",
  },
  {
    name: "Carina I.",
    text: "Am ajuns la clinica The Med după multe căutări pentru că îmi doream să mă simt în siguranță. Și asta s-întâmplat de la prima consultație. Modul profesionist în care s-a prezentat doamna doctor, răbdarea pe care a avut-o de a-mi explica problemele și tratamentul, dar și grija față de nevoile mele m-au făcut să mă simt pe mâini bune. Acum zâmbesc de voie, mulțumesc The Med!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-2.jpg",
  },
  {
    name: "Rodica S.",
    text: " Recomand cu toată încrederea echipa The Med și pe dr. Diana Duțu. Este cu adevărat un mediu profesionist, cu medici empatici care țin cont de nevoile și dorințele pacientilor. Au tehnologii și aparatură modernă, nu am așteptat foarte mult timp până am finalizat lucrarea și am fost relaxat pe tot parcursul tratamentului, deși am avut un caz mai complex! Vă mulțumesc!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-3.jpg",
  },
  {
    name: "Remus B.",
    text: " Lucrarea mea dentară a fost complexă și eu, evident, am fost anxios si temator la început. Mă bucur că am ales echipa The Med, m-au ajutat să trec peste toate fricile și mi-au dat încrederea să continui și să finalizez tot tratamentul. Poate, dacă nu erau ei, renunțam pe moment. Apreciez îndeosebi profesionalismul și dedicarea dr. Flavia Fugel, care mi-a coordonat cazul, dar și întregii echipe The Med!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-1.jpg",
  },
  {
    name: "Carina I.",
    text: "Am ajuns la clinica The Med după multe căutări pentru că îmi doream să mă simt în siguranță. Și asta s-întâmplat de la prima consultație. Modul profesionist în care s-a prezentat doamna doctor, răbdarea pe care a avut-o de a-mi explica problemele și tratamentul, dar și grija față de nevoile mele m-au făcut să mă simt pe mâini bune. Acum zâmbesc de voie, mulțumesc The Med!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-2.jpg",
  },
  {
    name: "Rodica S.",
    text: " Recomand cu toată încrederea echipa The Med și pe dr. Diana Duțu. Este cu adevărat un mediu profesionist, cu medici empatici care țin cont de nevoile și dorințele pacientilor. Au tehnologii și aparatură modernă, nu am așteptat foarte mult timp până am finalizat lucrarea și am fost relaxat pe tot parcursul tratamentului, deși am avut un caz mai complex! Vă mulțumesc!",
    image: "https://newsite.themed.ro/uploads/protetica/testimonial-3.jpg",
  },
];
export const Testimonials = () => {
  return (
    <section className="my-10 md:my-20 w-[1300px] mx-auto max-w-full p-4 lg:px-0">
      <div className="text-4xl text-center">
        <h2 className="mb-4 text-[var(--accent)]">Ce spun pacienții noștri</h2>
        
      </div>
      <Swiper
        modules={[Pagination, Scrollbar, Autoplay]}
        scrollbar={{ draggable: false }}
        pagination={{ clickable: true }}
        autoplay={{delay:2000}}
        loop={true}
        speed={1000}
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
            <AnimatedDiv className="flex justify-center">
          {Array.from({ length: 5 }).map(( starIndex , index) => {
            return (
              <svg
                key={index}
                width="30"
                height="30"
                viewBox="0 0 512 512"
                version="1.1"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="#FFD700"
                  fillRule="evenodd"
                >
                  <g
                    id="add"
                   fill="#FFD700"
                    transform="translate(18.640071, 18.640071)"
                  >
                    <polygon
                      id="Star"
                      points="237.359929 344.171897 97.8432633 429.388145 135.775711 270.366642 11.6172218 164.011677 174.577429 150.947232 237.359929 3.90798505e-14 300.142429 150.947232 463.102636 164.011677 338.944147 270.366642 376.876595 429.388145"
                    ></polygon>
                  </g>
                </g>
              </svg>
            );
          })}
        </AnimatedDiv>
              <Image
                src={testimonial.image}
                className=" rounded-full w-[250px] h-[250px] object-center"
                width={300}
                height={300}
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
