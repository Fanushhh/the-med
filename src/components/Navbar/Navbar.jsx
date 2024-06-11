"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLink } from "../NavLink/NavLink";
let movingNavStyles = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0 10px 10px rgba(0,0,0,.1)",
}
let staticNavStyles = {
  backgroundColor: "transparent",
  color: "white",
}
const pagesWithWhiteNav = ["blog", "informatii-pacienti", "foto-clinici"];

export const Navbar = () => {
  const path = usePathname();
  let isWhiteNav = pagesWithWhiteNav.includes(path.split("/")[2]);
  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const [menuState, setMenuState] = React.useState("closed");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollYPosition(window.scrollY);
    });
  }, []);
  return (
    <motion.div
      className="navbar relative text-white px-4 py-2 font-Heading !text-2xl "
      style={isWhiteNav ? movingNavStyles : scrollYPosition > 75 ? movingNavStyles : staticNavStyles}
    >
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">Themed.ro</Link>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu items-center gap-4 menu-horizontal px-1 !text-2xl">
          <div className="dropdown dropdown-hover">
            <Link
              href="#"
              tabIndex={0}
              role="button"
              className="btn p-0 m-1"

            >
              Despre noi
              <svg className="w-4 ml-2" style={{fill: scrollYPosition > 75 || isWhiteNav ? "black" : "white",}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu gap-2 p-4 shadow bg-base-100 rounded-box w-64 !text-2xl"
            >
              <li>
                <Link  href="/info/filosofia-the-med">Filosofie The Med</Link>
              </li>
              <li>
                <Link  href="/info/echipa-the-med">Echipa</Link>
              </li>
              <li>
                <Link  href="/info/blog">Blog</Link>
              </li>
              <li>
                <Link  href="/info/informatii-pacienti">Informatii pacienti</Link>
              </li>
              <li>
                <Link  href="/info/foto-clinici">Foto clinici</Link>
              </li>
            </ul>
          </div>
          <li>
            <Link href="/tehnologii-digitale">Tehnologii Digitale</Link>
          </li>
          <div className="dropdown dropdown-hover !text-2xl">
            <Link
              href="#"
              tabIndex={0}
              role="button"
              className="btn p-0 m-1"
            >
              Servicii
              <svg className="w-4 ml-2" style={{fill: scrollYPosition > 75 || isWhiteNav ? "black" : "white",}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
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
          <button className="border-2 border-[var(--accent)] px-4 py-2 rounded hover:bg-[var(--accent)]">Programare</button>
        </ul>
      </div>
      <div>
        <button className="md:hidden" onClick={() => setMenuState('open')}>
          Meniu
        </button>
      </div>
      
        <motion.div initial={{x:350, opacity:0}} transition={{duration:.3}} animate={menuState === 'open' ? {x:0, opacity:1 } : {x:350, opacity:0}} className={` absolute flex-none overflow-y-scroll overflow-x-hidden w-[350px] right-0 top-0 bg-black h-screen items-start p-[1.5rem] flex justify-start md:hidden`}>
        <ul className=" menu items-start gap-4 menu-vertical px-1 !text-xl uppercase">
            <button className=" self-end px-4 py-2 text-white" onClick={() => setMenuState('closed')}>X</button>
          <div className=" text-white w-full">
            <NavLink
              href="#"
              tabIndex={0}
              role="button"
              className="btn px-0 text-[var(--primary)]"
              setMenuState={setMenuState}
            >
              Despre noi
              
            </NavLink>
            <ul
              tabIndex={0}
              className=" z-[1] menu gap-2 p-4 shadow rounded-box w-full !text-xl capitalize"
            >
              <li>
                <NavLink setMenuState={setMenuState} href="/info/filosofia-the-med">Filosofie The Med</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="/info/echipa-the-med">Echipa</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="/info/blog">Blog</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="/info/informatii-pacienti">Informatii pacienti</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="/info/foto-clinici">Foto clinici</NavLink>
              </li>
            </ul>
          </div>
          <li>
          <NavLink setMenuState={setMenuState} className="text-[var(--primary)] text-2xl" href="/tehnologii-digitale">Tehnologii Digitale</NavLink>
          </li>
          <div className="!text-2xl">
          <NavLink setMenuState={setMenuState}
              href="#"
              tabIndex={0}
              role="button"
              className="btn px-0 text-[var(--primary)]"
            >
              Servicii
              
            </NavLink>
            <ul
              tabIndex={0}
              className=" z-[1] menu p-4 shadow  rounded-box w-full gap-3 !text-xl capitalize text-white"
            >
              <li>
              <NavLink setMenuState={setMenuState} href="#">Protetică și estetică dentară</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="#">Implant dentar imediat</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="#">Chirurgie orală ghidată</NavLink>
              </li>
              <li>
              <NavLink setMenuState={setMenuState} href="#">Endodonție microscop</NavLink>
              </li>
              <li>
                <NavLink setMenuState={setMenuState} href="#">Parodontologie laser</NavLink>
              </li>
              <li>
                <NavLink setMenuState={setMenuState} href="#">Igienizare profesională EMS</NavLink>
              </li>
              <li>
                <NavLink setMenuState={setMenuState} href="#">Terapia cariei</NavLink>
              </li>
              <li>
                <NavLink setMenuState={setMenuState} href="#">Laborator dentar</NavLink>
              </li>
            </ul>
          </div>

          <li>
            <NavLink setMenuState={setMenuState} className="text-[var(--primary)]" href="#">Preturi</NavLink>
          </li>
          <li>
            <NavLink setMenuState={setMenuState} className="text-[var(--primary)]" href="#">Cazuri</NavLink>
          </li>
          <li>
            <NavLink setMenuState={setMenuState} className="text-[var(--primary)]" href="#">Contact</NavLink>
          </li>
          <button className="text-[var(--primary)] w-full py-2 rounded bg-[var(--accent)] hover:bg-[var(--accent-hover)]">Programare</button>
        </ul>
      </motion.div>
      
    </motion.div>
  );
};
