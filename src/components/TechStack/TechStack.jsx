import Image from "next/image";
import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";
import Link from "next/link";
const techStackData = [
  {
    id:'EMSProp',
    name: "EMS Prophylaxis<br />Master - GBT",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-1.png",
  },
  {
    id:'LaserulDentarElexxionNano',
    name: "Laserul dentar<br /> Elexxion Nano",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-2.png",
  },
  {
    id:'ScanerulIntraoralMediti700',
    name: "Scanerul intraoral<br /> Medit i700",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-3.png",
  },
  {
    id:'MicroscopulDentarCJOptikAdvancedOptomic5',
    name: "Microscopul dentar CJ<br /> Optik Advanced, Optomic 5",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-4.png",
  },
  {
    id:'DigitalSmileDesign',
    name: "Digital Smile<br /> Design",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-5.png",
  },
  {
    id:'GhidulChirurgicalDigital',
    name: "Ghidul chirurgical<br /> digital",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-6.png",
  },
  {
    id:'Cadiax4',
    name: "Cadiax 4 – sistem de<br /> înregistrare a dinamicii<br /> mandibulare",
    icon: "https://newsite.themed.ro/uploads/tehnologii-digitale/icon-7.png",
  },
];

export const TechStack = () => {
  return (
    <section className=" max-w-[1320px] w-full my-10 p-4 mx-auto">
      <div className="*:my-4">
        <p>
          Într-o lume care evoluează rapid, în special, prin inovațiile
          tehnologice, stomatologia se numără și ea printre industriile marcată
          de progresele incredibile din ultimele două decenii.
        </p>
        <p>
          Tehnologia din clinica stomatologică The Med este utilizată pentru a
          îmbunătăți sănătatea orală, a diagnostica cu precizie problemele
          dentare, bazându-ne pe date reale și concrete, dar și pentru a
          îmbunătăți experiența generală a pacientului în clinică.
        </p>
        <p>
          În clinica noastră, pacienții beneficiază de o experiență inedită în
          abordarea clinică a cazurilor prin experiența vastă a medicilor
          coordonatori, dar și prin tehnologii precum:
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-center my-20">
        {techStackData.map((tech, index) => {
          return (
            <AnimatedDiv
              key={index}
              className="flex flex-col items-center gap-4 my-4 w-[300px] md:h-[150px] "
            >
            <Link href={`#${tech.id}`} className="hover:border-transparent flex flex-col items-center gap-4 my-4 w-[300px] md:h-[150px] ">
              <Image width={100} height={100} src={tech.icon} alt={tech.name} />
              <p dangerouslySetInnerHTML={{ __html: tech.name }}></p>
              </Link>
            </AnimatedDiv>
          );
        })}
      </div>
    </section>
  );
};
