import Image from "next/image";
import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";
export const TwoColumn = () => {
  return (
    <section className="bg-[var(--primary)] flex justify-center">
      <div className=" overflow-clip my-8 md:my-14 max-w-[1320px] w-full flex *:w-full md:items-start flex-col-reverse md:flex-row items-center justify-center">
        <AnimatedDiv element="div">
          <Image
           className="mx-auto mb-4"
            src="https://site.themed.ro/images/filosofia_the_med.jpg"
            width={608}
            height={600}
            alt="Doua persoane una langa cealalta care zambesc la camera"
          />
        </AnimatedDiv>
        <div className="*:mb-4 md:ml-8 p-4">
          <p>
            Sunt numeroase motivele pentru care pacienții amână vizita la
            medicul dentist sau ajung prea târziu pe scaunul stomatologic.{" "}
            <span className="text-[var(--accent)] font-bold">
              Iar filosofia clinicii stomatologice The Med este centrată în
              jurul nevoilor clinice și emoționale ale pacientului.
            </span>
          </p>
          <p>
            Cu o echipă medicală cu experiență vastă în tratarea cazurilor
            dentare cu afecțiuni complexe, în clinica noastră pacienții
            beneficiază de toate serviciile stomatologice pentru a menține
            sănătatea optimă a danturii și pentru a transforma chiar și cele mai
            provocatoare probleme dentare în zâmbete încrezătoare și frumoase.
          </p>
          <p>
            Considerăm că lucrând cu mii de pacienți, frici și bucurii,{" "}
            <span className="text-[var(--accent)] font-bold">
              avem rolul de a educa, printr-o abordare comprehensivă și
              extensivă, cu privire la toate opțiunile de tratament și de a
              ghida pacienții în alegerea unui plan de tratament care este cel
              mai potrivit
            </span>{" "}
            pentru nevoile lor stomatologice, financiare și emoționale.
          </p>
        </div>
      </div>
    </section>
  );
};
