"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

export const Perks = () => {
  const perksRef = React.useRef(null);
  const isInView = useInView(perksRef, {margin:'500px 0px -250px 0px'});
  return (
    <motion.section className="p-4 ">
      <h2 ref={perksRef} className=" text-2xl md:text-5xl my-8 text-center font-bold">
        Cum ne mentinem promisiunea fata de pacienti
      </h2>
      <div className="overflow-clip min-h-[200px] flex flex-wrap md:flex-row justify-center item-center my-10 gap-8 *:w-56 text-center  *:flex *:flex-col *:items-center ">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.7 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0}}
          
        >
          <svg
            className="perkIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 128C0 75 43 32 96 32H480c53 0 96 43 96 96V384c0 53-43 96-96 96H96c-53 0-96-43-96-96V128zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48zM48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48V312c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24v24zm176 48c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H456c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48z" />
          </svg>
          <p>Avem 10 ani+ experiență în stomatologie digitală</p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        >
          <svg
            className="perkIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>
          <p>Abordăm integrat și multidisciplinar fiecare pacient</p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        >
          <svg
            className="perkIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
          </svg>
          <p>Tratăm peste 90% cazuri complexe</p>
        </motion.div>
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          transition={{ duration: 1 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
        >
          <svg
            className="perkIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
          </svg>
          <p>Atingem standardul de aur în tratamentul dentar</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
