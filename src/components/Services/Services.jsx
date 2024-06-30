"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const ServicesData = [
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-implant-dentar-jpg_67DF.webp",
    title: "Implant Dentar",
    buttonUrl: "/info/implant-dentar-imediat",
  },
  {
    imgSrc: "https://newsite.themed.ro/uploads/doctor-dutu.jpg",
    title: "Protetică dentară",
    buttonUrl: "/info/protetica-si-estetica-dentara",
    styling:"object-[65%_-50%]"
  },
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-endodontie-jpg_6ZKF.webp",
    title: "Endodonție ",
    buttonUrl: "/info/endodontie-la-microscop",
  },
  {
    imgSrc:
      "https://site.themed.ro/uploads/images/top-servicii-parodontologie-jpg_G9P7.webp",
    title: "Parodontologie",
    buttonUrl: "/info/parodontologie-laser",
  },
];

export const Services = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section className=" bg-[var(--primary)] py-14 px-4 flex flex-col items-center gap-8 justify-center">
      <h2 className="text-2xl md:text-4xl text-black ">Top servicii dentare</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        {ServicesData.map((service, index) => (
          <div key={index}>
            <div className="relative overflow-clip rounded-t-[30px] services-img">
              <motion.img
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered('')}
                loading="lazy"
                
                className={`hover:cursor-pointer w-80 max-w-full min-h-96 object-cover ${service.styling && service.styling}`}
                style={{
                  filter: isHovered === index ? "brightness(.7)" : "",
                }}
                src={service.imgSrc}
                alt={service.title}
              />
              <Link href={service.buttonUrl}>
              <motion.span
                initial={{ y: 100, opacity: 0,x:'-50%' }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered('')}
                animate={
                  isHovered === index
                    ? { y: 0,x:'-50%', opacity: 1 }
                    : { y: 100, x:'-50%', opacity: 0 }
                }
                className="font-Body absolute left-1/2 w-[250px] max-w-full py-2 px-4 hover:bg-[var(--accent)]  bottom-12 font-bold text-white text-2xl border-2 border-[var(--accent)] "
                
              >
                Afla mai multe
              </motion.span>
              </Link>
            </div>
            <p className="text-2xl font-bold mt-2">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
