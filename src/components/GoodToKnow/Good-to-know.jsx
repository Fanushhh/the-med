import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";
import Image from "next/image";
export const GoodToKnow = () => {
  return (
    <section className="bg-[var(--primary)]">
      <div className="w-full max-w-[1320px] p-4 mx-auto py-20">
        <div className="flex flex-col gap-6 text-center md:items-start md:text-left ">
          <div className="flex md:gap-8 flex-col md:flex-row items-center">
            <AnimatedDiv element="div">
              <Image src="https://newsite.themed.ro/uploads/filosofia/icon-1.png" width="100" height="130" alt="icon"  className="mb-6"/>
            </AnimatedDiv>
            <p className="w-full">
              Atunci când ne alegi, nu este nevoie să sacrifici calitatea
              actului medical în favoarea accesibilității tratamentelor.
            </p>
          </div>
          <div className="flex md:gap-8 flex-col md:flex-row items-center">
          <AnimatedDiv element="div">
              <Image src="https://newsite.themed.ro/uploads/filosofia/icon-2.png" width="100" height="130" alt="icon" className="mb-6"/>
            </AnimatedDiv>
            <p className="w-full">
              Misiunea noastră este să dezvoltăm relații pe termen lung cu
              pacienții noștri și să asigurăm servicii de înaltă calitate
              printr-un act medical ireproșabil, soluții personalizate distinse
              prin îngrijire individualizată, onestă, etică și transparentă.
            </p>
          </div>
          <div className="flex md:gap-8 flex-col md:flex-row items-center">
          <AnimatedDiv element="div">
              <Image src="https://newsite.themed.ro/uploads/filosofia/icon-3.png" width="100" height="130" alt="icon" className="mb-6"/>
            </AnimatedDiv>
            <p className="w-full">
              Pentru a ne menține promisiunea față de pacienți, utilizăm cele
              mai performante tehnologii digitale, ne specializăm continuu prin
              cursuri de referință în domeniu și folosim materiale
              biocompatibile cu organismul de la cei mai mari producători
              mondiali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
