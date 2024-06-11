import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";

export const Help = () => {
  return (
    <section className="min-h-[70vh] bg-help-img bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
      <div className="min-h-[500px] flex flex-col justify-between items-center my-10">
          <div className="text-white text-center max-w-[1320px] *:mb-4 ">
            <AnimatedDiv element="h2" className="md:text-6xl text-3xl">Cum te putem ajuta?</AnimatedDiv>
            <p className="md:text-2xl text-lg">
              Orice problemă de sănătate dentară ai, echipa clinicilor stomatologice
              THE MED din București și Slatina are mereu o soluție pentru a-ți reda
              sănătatea și frumusețea zâmbetului.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center font-bold font-Body text-lg md:text-2xl">
            <button className="hover:bg-[var(--accent-hover)] rounded-lg bg-[var(--accent)] max-w-[350px] w-full px-8 py-2">Programeaza-te <br/>online</button>
            <button className="hover:bg-[var(--primary-hover)] rounded-lg bg-[var(--primary)] max-w-[350px] w-full px-8 py-2">Contacteaza-ne <br/>online</button>
            <button className="hover:bg-[var(--white-hover)] rounded-lg bg-white max-w-[350px] w-full px-8 py-2">Afla mai multe despre <br/>serviciile noastre</button>
          </div>
      </div>
    </section>
  );
};
