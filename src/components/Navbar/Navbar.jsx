"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
export const Navbar = () => {
  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const [menuState, setMenuState] = React.useState("closed");
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollYPosition(window.scrollY);
    });
  }, []);
  return (
    <motion.div
      className="navbar relative text-white px-4 py-2 font-Heading !text-2xl"
      style={{
        backgroundColor: scrollYPosition > 100 ? "white" : "transparent",
        color: scrollYPosition > 100 ? "black" : "white",
      }}
    >
      <div className="flex-1">
        <a className="btn  btn-ghost">Themed.ro</a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu items-center gap-4 menu-horizontal px-1 !text-2xl">
          <div className="dropdown dropdown-hover">
            <Link
              href="/despre-noi"
              tabIndex={0}
              role="button"
              className="btn p-0 m-1"
            >
              Despre noi
              <svg className="w-4 ml-2" style={{fill: scrollYPosition > 100 ? "black" : "white",}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu gap-2 p-4 shadow bg-base-100 rounded-box w-64 !text-2xl"
            >
              <li>
                <Link href="#">Filosofie The Med</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Informatii pacienti</Link>
              </li>
              <li>
                <Link href="#">Foto clinici</Link>
              </li>
            </ul>
          </div>
          <li>
            <Link href="#">Tehnologii Digitale</Link>
          </li>
          <div className="dropdown dropdown-hover !text-2xl">
            <Link
              href="/despre-noi"
              tabIndex={0}
              role="button"
              className="btn p-0 m-1"
            >
              Servicii
              <svg className="w-4 ml-2" style={{fill: scrollYPosition > 100 ? "black" : "white",}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-[400px] gap-3 !text-2xl "
            >
              <li>
                <Link href="#">Protetică și estetică dentară</Link>
              </li>
              <li>
                <Link href="#">Implant dentar imediat</Link>
              </li>
              <li>
                <Link href="#">Chirurgie orală ghidată</Link>
              </li>
              <li>
                <Link href="#">Endodonție microscop</Link>
              </li>
              <li>
                <Link href="#">Parodontologie laser</Link>
              </li>
              <li>
                <Link href="#">Igienizare profesională EMS</Link>
              </li>
              <li>
                <Link href="#">Terapia cariei</Link>
              </li>
              <li>
                <Link href="#">Laborator dentar</Link>
              </li>
            </ul>
          </div>

          <li>
            <Link href="#">Preturi</Link>
          </li>
          <li>
            <Link href="#">Cazuri</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <button className="border border-2 border-[var(--accent)] px-4 py-2 rounded hover:bg-[var(--accent)]">Programare</button>
        </ul>
      </div>
      <div>
        <button className="md:hidden" onClick={() => setMenuState('open')}>
          Meniu
        </button>
      </div>
      {menuState === "open" && (
        <div className={` absolute flex-none overflow-scroll w-[300px] right-0 top-0 bg-black h-screen items-start p-[1.5rem] flex justify-start md:hidden`}>
        <ul className=" menu items-start gap-4 menu-vertical px-1 !text-xl uppercase">
            <button className=" self-end px-4 py-2 text-white" onClick={() => setMenuState('closed')}>X</button>
          <div className=" text-white w-full">
            <Link
              href="/despre-noi"
              tabIndex={0}
              role="button"
              className="btn px-0 text-[var(--primary)]"
            >
              Despre noi
              
            </Link>
            <ul
              tabIndex={0}
              className=" z-[1] menu gap-2 p-4 shadow rounded-box w-full !text-xl capitalize"
            >
              <li>
                <Link href="#">Filosofie The Med</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Informatii pacienti</Link>
              </li>
              <li>
                <Link href="#">Foto clinici</Link>
              </li>
            </ul>
          </div>
          <li>
            <Link className="text-[var(--primary)] text-2xl" href="#">Tehnologii Digitale</Link>
          </li>
          <div className="!text-2xl">
            <Link
              href="/despre-noi"
              tabIndex={0}
              role="button"
              className="btn px-0 text-[var(--primary)]"
            >
              Servicii
              
            </Link>
            <ul
              tabIndex={0}
              className=" z-[1] menu p-4 shadow  rounded-box w-full gap-3 !text-xl capitalize text-white"
            >
              <li>
                <Link href="#">Protetică și estetică dentară</Link>
              </li>
              <li>
                <Link href="#">Implant dentar imediat</Link>
              </li>
              <li>
                <Link href="#">Chirurgie orală ghidată</Link>
              </li>
              <li>
                <Link href="#">Endodonție microscop</Link>
              </li>
              <li>
                <Link href="#">Parodontologie laser</Link>
              </li>
              <li>
                <Link href="#">Igienizare profesională EMS</Link>
              </li>
              <li>
                <Link href="#">Terapia cariei</Link>
              </li>
              <li>
                <Link href="#">Laborator dentar</Link>
              </li>
            </ul>
          </div>

          <li>
            <Link className="text-[var(--primary)]" href="#">Preturi</Link>
          </li>
          <li>
            <Link className="text-[var(--primary)]" href="#">Cazuri</Link>
          </li>
          <li>
            <Link className="text-[var(--primary)]" href="#">Contact</Link>
          </li>
          <button className="text-[var(--primary)] w-full py-2 rounded bg-[var(--accent)] hover:bg-[var(--accent-hover)]">Programare</button>
        </ul>
      </div>
      )}
    </motion.div>
  );
};
