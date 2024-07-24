"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLink } from "../NavLink/NavLink";
import { SVGLogo } from "../SVGLogo/SVGLogo";

let movingNavStyles = {
  backgroundColor: "white",
  color: "black",
  boxShadow: "0 10px 10px rgba(0,0,0,.1)",
};
let staticNavStyles = {
  backgroundColor: "transparent",
  color: "white",
};

const pagesWithWhiteNav = ["blog", "informatii-pacienti", "contact", "programare", "preturi", "politica-cookies"];

export const Navbar = () => {
  const path = usePathname();
  let isWhiteNav = pagesWithWhiteNav.includes(path.split("/")[2]);
  const [scrollYProgress, setScrollYProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState({
    aboutUs: false,
    services: false,
  });
  const [menuState, setMenuState] = React.useState("closed");

  React.useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if(menuState === "open") {
      main.style.filter = "blur(12px)";
      // nav.style.filter = "blur(5px)";
      footer.style.filter = "blur(12px)";
    }else{
      main.style.filter = "none";
      // nav.style.filter = "none";
      footer.style.filter = "none";
    }
    window.addEventListener("scroll", () => {
      setScrollYProgress(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollYProgress(window.scrollY);
      });
    };
  });

  const toggleDropdown = (section) => {
    setIsVisible((prevState) => {
      return {
        ...prevState,
        [section]: !prevState[section],
      };
    });
  };

  const closeDropdown = (section) => {
    setIsVisible((prevState) => {
      return {
        ...prevState,
        [section]: false,
      };
    });
  };
  return (
    <motion.div
      className="navbar relative px-4 font-Heading !text-2xl bg-white text-black uppercase font-[600]"
      style={
        scrollYProgress > 0
          ? movingNavStyles
          : isWhiteNav
          ? movingNavStyles
          : staticNavStyles
      }
    >
    
      <div className="flex-1 block w-full">
        <Link href="/" className="btn btn-ghost hover:border-b-transparent relative">
          <SVGLogo  scrollYProgress={scrollYProgress} isWhiteNav={isWhiteNav}/>
        </Link>
      </div>
      <div className="flex-none hidden md:flex">
        <div className="menu items-center gap-4 menu-horizontal !text-xl">
          <div className={`dropdown dropdown-hover  ${isVisible.aboutUs ? 'dropdown-open' : ''}`} onMouseLeave={() => closeDropdown("aboutUs")} onMouseEnter={() => toggleDropdown("aboutUs")}>
            <Link
              href="#"
              tabIndex={0}
              role="button"
              className="btn !text-xl p-0 m-1"
              onClick={() => toggleDropdown("aboutUs")}
            >
              Despre noi
              <svg
                className="w-4 ml-2"
                style={{
                  fill: scrollYProgress > 0 || isWhiteNav ? "black" : "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul
              tabIndex={0}
              className={`dropdown-content z-[1] menu p-4 shadow bg-base-100 !gap-4 rounded-box w-[300px]  !text-xl ${isVisible.aboutUs ? 'flex' : 'hidden'}`}
            >
              <li>
                <Link href="/info/filosofia-the-med" onClick={() => closeDropdown("aboutUs")}>Filosofie The Med</Link>
              </li>
              <li>
                <Link href="/info/echipa-the-med" onClick={() => closeDropdown("aboutUs")}>Echipa</Link>
              </li>
              <li>
                <Link href="/info/blog" onClick={() => closeDropdown("aboutUs")}>Blog</Link>
              </li>
              <li>
                <Link href="/info/informatii-pacienti" onClick={() => closeDropdown("aboutUs")}>
                  Informatii pacienti
                </Link>
              </li>
              <li>
                <Link href="/info/foto-clinici" onClick={() => closeDropdown("aboutUs")}>Foto clinici</Link>
              </li>
            </ul>
          </div>
          
            <Link href="/tehnologii-digitale">Tehnologii Digitale</Link>
          
            <div className={`dropdown dropdown-hover  ${isVisible.services ? 'dropdown-open' : ''}`} onMouseLeave={() => closeDropdown("services")} onMouseEnter={() => toggleDropdown("services")}>
            <Link
              href="#"
              tabIndex={0}
              role="button"
              className="btn !text-xl p-0 m-1"
              onClick={() => toggleDropdown("services")}
            >
              Servicii
              <svg
                className="w-4 ml-2"
                style={{
                  fill: scrollYProgress > 0 || isWhiteNav ? "black" : "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </Link>
            <ul
              tabIndex={0}
              className={`dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-[450px] !gap-4 !text-xl ${isVisible.services ? 'flex' : 'hidden'}`}
            >
              <li>
                <Link href="/info/protetica-si-estetica-dentara" onClick={() => closeDropdown("services")}>
                  Protetică și estetică dentară
                </Link>
              </li>
              <li>
                <Link href="/info/implant-dentar-imediat" onClick={() => closeDropdown("services")}>
                  Implant dentar imediat
                </Link>
              </li>
              <li>
                <Link href="/info/chirurgie-orala-ghidata" onClick={() => closeDropdown("services")}>
                  Chirurgie orală ghidată
                </Link>
              </li>
              <li>
                <Link href="/info/endodontie-la-microscop" onClick={() => closeDropdown("services")}>
                  Endodonție microscop
                </Link>
              </li>
              <li>
                <Link href="/info/parodontologie-laser" onClick={() => closeDropdown("services")}>
                  Parodontologie laser
                </Link>
              </li>
              <li>
                <Link href="/info/igienizare-profesionala-ems" onClick={() => closeDropdown("services")}>
                  Igienizare profesională EMS
                </Link>
              </li>
              <li>
                <Link href="/info/terapia-cariei" onClick={() => closeDropdown("services")}>Terapia cariei</Link>
              </li>
              <li>
                <Link href="/info/laborator-dentar" onClick={() => closeDropdown("services")}>Laborator dentar</Link>
              </li>
              <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/fatete-dentare"
                  >
                    Fațete dentare
                  </NavLink>
                </li>
            </ul>
          </div>

          <Link href="/info/preturi">Preturi</Link>

          {/* <Link href="/cazuri">Cazuri</Link> */}

          <Link href="/info/contact">Contact</Link>

          <NavLink
            href="/info/programare"
            className="border-2 border-[var(--accent)] px-4 py-2 rounded hover:rounded hover:bg-[var(--accent)] hover:!text-white"
          >
            Programare
          </NavLink>
        </div>
      </div>
      <div>
        <button className="md:hidden" onClick={() => setMenuState("open")}>
          Meniu
        </button>
      </div>
      
      <motion.div
        initial={{ x: 350, opacity: 0 }}
        transition={{ duration: 0.3 }}
        animate={
          menuState === "open" ? { x: 0, opacity: 1 } : { x: -350, opacity: 0 }
        }
        className={` absolute flex-none overflow-y-auto overflow-x-hidden w-[350px] left-0 top-0 bg-[rgba(0,0,0,.6)] h-[500px] items-start p-[1.5rem] flex justify-start md:hidden pb-16`}
      >
      
        <div className=" menu items-start gap-4 menu-vertical px-1 !text-2xl uppercase">
          <button
            className=" px-4 py-2 text-white absolute right-4 top-4"
            onClick={() => setMenuState("closed")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-6 h-6" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
          <div className=" text-white w-full mt-10">
            <details>
              <summary role="button" className="btn px-0 text-[var(--primary)]">
                Despre noi
              </summary>
              <ul
                tabIndex={0}
                className=" z-[1] menu gap-2 p-4 rounded-box w-full !text-xl capitalize"
              >
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/filosofia-the-med"
                  >
                    Filosofie The Med
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/echipa-the-med"
                  >
                    Echipa
                  </NavLink>
                </li>
                <li>
                  <NavLink setMenuState={setMenuState} href="/info/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/informatii-pacienti"
                  >
                    Informatii pacienti
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/foto-clinici"
                  >
                    Foto clinici
                  </NavLink>
                </li>
              </ul>
            </details>
          </div>

          <NavLink
            setMenuState={setMenuState}
            className="text-[var(--primary)] text-2xl"
            href="/tehnologii-digitale"
          >
            Tehnologii Digitale
          </NavLink>

          <div className="!text-2xl">
            <details>
              <summary
                tabIndex={0}
                role="button"
                className="btn px-0 text-[var(--primary)]"
              >
                Servicii
              </summary>
              <ul
                tabIndex={0}
                className=" z-[1] menu p-4  rounded-box w-full gap-3 !text-xl capitalize text-white"
              >
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/protetica-si-estetica-dentara"
                  >
                    Protetică și estetică dentară
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/implant-dentar-imediat"
                  >
                    Implant dentar imediat
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/chirurgie-orala-ghidata"
                  >
                    Chirurgie orală ghidată
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/endodontie-la-microscop"
                  >
                    Endodonție microscop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/parodontologie-laser"
                  >
                    Parodontologie laser
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/igienizare-profesionala-ems"
                  >
                    Igienizare profesională EMS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/terapia-cariei"
                  >
                    Terapia cariei
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/laborator-dentar"
                  >
                    Laborator dentar
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    setMenuState={setMenuState}
                    href="/info/fatete-dentare"
                  >
                    Fațete dentare
                  </NavLink>
                </li>
              </ul>
            </details>
          </div>

          <NavLink
            setMenuState={setMenuState}
            className="text-[var(--primary)]"
            href="/info/preturi"
          >
            Preturi
          </NavLink>

          {/* <NavLink
            setMenuState={setMenuState}
            className="text-[var(--primary)]"
            href="/cazuri"
          >
            Cazuri
          </NavLink> */}

          <NavLink
            setMenuState={setMenuState}
            className="text-[var(--primary)]"
            href="/info/contact"
          >
            Contact
          </NavLink>

          <NavLink
            href="/info/programare"
            className="text-[var(--primary)] w-full py-2 px-4 rounded text-center text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)]"
          >
            Programare
          </NavLink>
        </div>
      </motion.div>
    </motion.div>
  );
};
