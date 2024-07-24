import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="flex flex-col bg-black text-white font-Body ">
      <div className="footer p-6 md:p-10 max-w-[1400px] mx-auto !md:grid-flow-col">
        <aside>
        <Image width={160} height={160} src="https://newsite.themed.ro/uploads/logo-white-v2.png" alt="The Med" className=" md:w-40  md:h-20" />
          <div className="my-4 *:mb-4">
            <p className=" ml-6 text-[var(--primary)]  text-xl">Bucuresti</p>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <a href="https://maps.app.goo.gl/aFoZdGX9ZU1yUtAq9" target="_blank">Str. Verzișori, nr. 74, Tineretului</a>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p>Luni - Vineri: 10AM–20PM</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <a href="tel:+40 743 754 125">+40 743 754 125</a>
            </div>
          </div>
          <div className="my-4 *:mb-4">
            <p className=" ml-6 text-[var(--primary)] text-xl ">Slatina</p>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <a href="https://maps.app.goo.gl/gvcm1gbh2pVCRjXy8" target="_blank">Strada Prelungirea Pitesti, nr.1B</a>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p>Luni - Vineri: 10AM–20PM</p>
            </div>
            <div className="flex gap-2">
              <svg
                className="w-4"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <Link href="tel:+40 749 381 050">+40 749 381 050</Link>
            </div>
          </div>
        </aside>
        <nav className="*:mb-2">
          <h3 className="text-2xl *:text-sm pb-4 mb-4 border-b-2 border-[var(--accent)]">Informatii utile</h3>
          <Link href="/info/filosofia-the-med">Filosofia The Med</Link>
          <Link href="/tehnologii-digitale">Tehnologii</Link>
          <Link href="/info/preturi">Preturi</Link>
          <Link href="/info/echipa-the-med">Echipa</Link>
        </nav>
        <nav className="*:mb-2">
          <h3 className="text-2xl pb-4 mb-4 border-b-2 border-[var(--accent)] ">Servicii</h3>
          <Link href="/info/protetica-si-estetica-dentara">Protetică dentară</Link>
          <Link href="/info/implant-dentar-imediat">Implant dentar imediat</Link>
          <Link href="/info/chirurgie-orala-ghidata">Chirurgie orală ghidată</Link>
          <Link href="/info/endodontie-la-microscop">Endodonție microscop</Link>
          <Link href="/info/parodontologie-laser">Parodontologie laser</Link>
          <Link href="/info/igienizare-profesionala-ems">Igienizare profesională EMS</Link>
          <Link href="/info/terapia-cariei">Terapia cariei</Link>
          <Link href="/info/laborator-dentar">Laborator dentar</Link>
        </nav>
        <nav className="*:mb-2">
          <h3 className="text-2xl pb-4 mb-4 border-b-2 border-[var(--accent)]">Legal</h3>
          <Link href="#" className="">Termeni și condiții</Link>
          <Link href="#" className="">Politica de confidențialitate</Link>
          <Link href="/info/politica-cookies" className="">Politica de cookies</Link>
        </nav>
      </div>
      <div className="p-10 w-full max-w-[1400px] mx-auto text-center">
        <div className="flex self-start gap-4 ">
        <a href="https://www.facebook.com" aria-label="Facebook link pentru afacerea The Med" target="_blank">
          <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram link pentru afacerea The Med">
          <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn link pentru afacerea The Med">
          <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
        </a>
        <a href="https://www.youtube.com" target="_blank" aria-label="Youtube link pentru afacerea The Med">
          <svg className="fill-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
        </a>
          
        </div>
        <p>© 2024 www.themed.ro </p>
      </div>
    </footer>
  );
};
