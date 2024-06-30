import Image from "next/image";
import Link from "next/link";
export const Hero = ({
  heroHeading,
  heroSubHead,
  hasUpper,
  subTitle,
  center,
  heroImg,
}) => {
  return (
    <section
      className={`relative heroSection text-black md:text-white flex flex-col text-center md:text-left`}
    >
      <Image
        src={heroImg}
        className="relative h-full md:relative top-0 left-0 object-cover brightness-75"
        width={3840}
        height={2160}
        priority={true}
        alt="poza principala cu echipa The Med"
      />
      <div
        className={`md:absolute sm:left-[100px] md:left-[50px] md:bottom-[180px] lg:bottom-[500px] p-4  w-full max-w-[950px] z-10 my-10`}
      >
        <h1 className="font-bold text-3xl mb-10 md:text-5xl lg:text-7xl">
          {heroHeading}
          <br />{" "}
          {hasUpper ? (
            <span className="uppercase">{heroSubHead}</span>
          ) : (
            heroSubHead
          )}
        </h1>
        <p className="md:text-2xl my-4">{subTitle}</p>
        <div className="flex flex-col items-center *:max-w-[250x] justify-start gap-4 mt-4 md:flex-row font-bold">
          <Link href="/info/programare" className="bg-[var(--accent)] px-4 py-2  hover:bg-[var(--accent-hover)] rounded text-xl">
            Programare online
          </Link>
          <div className="dropdown bg-[var(--primary)] rounded-md *:!text-xl">
            <div tabIndex={0} role="button" className="btn px-4 ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-4 mr-2 h-4 fill-[var(--accent)]"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              40 726 034 900
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content flex flex-col gap-4 bg-[var(--primary)] z-[1]  menu p-2 mt-2 shadow w-full"
            >
              <li>
                <a href="tel:+40726034900">Bucuresti</a>
              </li>
              <li>
                <a href="tel:+40726034900">Slatina</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
