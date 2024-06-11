"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import React from "react";
export const Locations = () => {
  const locationsRef = React.useRef(null);
  const isInView = useInView(locationsRef, { margin: "-100px 0px -100px 0px" });
  return (
    <motion.section  className="my-10 overflow-clip p-4">
      <h2 className="text-4xl text-[var(--accent)] text-center mt-6 mb-10 md:max-w-[900px] md:mx-auto">
        Te așteptăm în clinicile dentare The Med
        pentru a-ți reda zâmbetul pierdut!
      </h2>
      <motion.div initial={{y:150, opacity:0}} transition={{duration:1}} animate={isInView ? {y:0, opacity:1}: {}} ref={locationsRef} className="flex flex-col items-center md:flex-row md:just justify-center gap-8">
        <div className="  grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-4 w-[580px] max-w-full px-50px">
          <Image
            src="https://site.themed.ro/images/m1.jpg"
            width={280}
            height={392}
            alt="Imagine care prezinta locattile noastre"
          />
          <Image
            src="https://site.themed.ro/images/m2.jpg"
            className=" sm:rounded-tr-[24px]"
            width={280}
            height={392}
            alt="Imagine care prezinta locattile noastre"
          />
          <Image
            src="https://site.themed.ro/images/m3.jpg"
            width={280}
            height={200}
            alt="Imagine care prezinta locattile noastre"
          />
          <Image
            src="https://site.themed.ro/images/m4.jpg"
            width={280}
            height={200}
            alt="Imagine care prezinta locattile noastre"
          />
        </div>
        <aside className="w-[580px] max-w-full flex flex-col justify-between font-bold">
          <p className="">
            The Med București este locul în care o echipă medicală cu experiență
            vastă în tratarea cazurilor dentare cu afecțiuni complexe, te
            așteaptă pentru a-ți reda sănătatea și frumusețea zâmbetului. În
            clinicile noastre pacienții beneficiază de toate serviciile
            stomatologice în același loc, inclusiv de un laborator dentar
            digital in-house.
          </p>
          <div className="p-4 border-b-2 border-[var(--accent)]">
            <p className=" ml-6 text-[var(--accent)]  text-xl mb-2">
              Bucuresti
            </p>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>Str. Verzișori, nr. 20, Tineretului</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p>Luni - Vineri: 7AM–3PM</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p>0720 00 00 00</p>
            </div>
            <Link
              className="ml-auto block text-xl !font-Body text-[var(--accent)]"
              href="#"
            >
              Vezi locatia
            </Link>
          </div>
          <div className="p-4 border-b-2 border-[var(--accent)]">
            <p className=" ml-6 text-[var(--accent)] text-xl mb-2">Slatina</p>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>Bd. Unirii, nr. 7, Slatina</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p>Luni - Vineri: 7AM–3PM</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="var(--accent)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p>0720 00 00 00</p>
            </div>
            <Link
              className="ml-auto block text-xl !font-Body text-[var(--accent)]"
              href="#"
            >
              Vezi locatia
            </Link>
          </div>
        </aside>
      </motion.div>
    </motion.section>
  );
};
