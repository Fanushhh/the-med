import Image from "next/image";

export const Hero = ({ heroHeading, heroSubHead, hasUpper }) => {
  return (
    <section className={`relative min-h-screen heroSection text-white flex items-center text-center md:text-left md:items-end p-4 md:py-[100px] md:px-[80px]`}>
    <Image src="https://newsite.themed.ro/uploads/home-hero.jpg" className="absolute top-0 left-0 h-full w-full object-cover brightness-50" width={1920} height={1080} alt="poza principala cu echipa The Med"/>
      <div className="w-full max-w-[950px] z-10">
        <h1 className="font-bold md:text-[80px] text-4xl md:leading-[90px]">
          {heroHeading}
          <br /> {hasUpper ? <span className="uppercase">{heroSubHead}</span> : heroSubHead}
        </h1>
        
        <div className="flex flex-col items-center justify-start gap-4 mt-4 md:flex-row">
          <button className="bg-[var(--accent)] px-4 py-2 font-bold hover:bg-[var(--accent-hover)] rounded text-xl">
            Programare online
          </button>
          <details className="cursor-pointer relative bg-[var(--primary)] px-4 py-2  font-bold w-[207px] max-w-full rounded text-xl">
            <summary className="flex items-center gap-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-4 h-4 fill-[var(--accent)]"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              0700000000
            </summary>
            
              <div className="w-full absolute rounded left-0 top-full mt-2 p-4 bg-[var(--primary)] *:block md:left-full md:mt-0 md:ml-2 md:top-0">
                <a href="tel:+0700000000">Bucuresti</a>
                <a href="tel:+0700000000">Slatina</a>
              </div>
            
          </details>
        </div>
      
      </div>
    </section>
  );
};
