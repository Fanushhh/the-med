"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const ServicesData = [
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-implant-dentar-jpg_67DF.webp",
    title: "Implant Dentar",
    buttonUrl: "https://site.themed.ro/info/implant-dentar",
  },
  {
    imgSrc: "https://site.themed.ro/uploads/images/protetica-jpg_KTV4.webp",
    title: "Protetică dentară",
    buttonUrl: "https://site.themed.ro/info/protetica-si-estetica-dentara",
  },
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-endodontie-jpg_6ZKF.webp",
    title: "Endodonție ",
    buttonUrl: "https://site.themed.ro/info/endodontie-la-microscop",
  },
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-parodontologie-jpg_G9P7.webp",
    title: "Parodontologie",
    buttonUrl: "https://site.themed.ro/info/parodontologie-laser",
  },
];

export const Services = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className=" bg-[var(--primary)] py-14 px-4 flex flex-col items-center gap-8 justify-center">
      <h2 className="text-2xl md:text-4xl text-black ">Top servicii dentare</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {ServicesData.map((service, index) => (
          <div key={index}>
            <div className="relative overflow-clip">
              <motion.img
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered('')}
                loading="lazy"
                
                className="hover:cursor-pointer w-80 max-w-full"
                style={{
                  objectFit: "cover",
                  aspectRatio: "9/12",
                  filter: isHovered === index ? "brightness(.7)" : "",
                }}
                src={service.imgSrc}
                alt={service.title}
              />
              <motion.a
                initial={{ y: 100, opacity: 0,x:'-50%' }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered('')}
                animate={
                  isHovered === index
                    ? { y: 0,x:'-50%', opacity: 1 }
                    : { y: 100, x:'-50%', opacity: 0 }
                }
                className="font-Body absolute left-1/2 w-[250px] max-w-full py-2 px-4 hover:bg-[var(--accent)]  bottom-12 font-bold text-white text-2xl border-2 border-[var(--accent)] "
                href={service.buttonUrl}
              >
                Afla mai multe
              </motion.a>
            </div>
            <p className="text-2xl font-bold mt-2">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
