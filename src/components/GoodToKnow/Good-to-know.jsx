import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";

export const GoodToKnow = () => {
  return (
    <section className="bg-[var(--primary)]">
      <div className="w-full max-w-[1320px] p-4 mx-auto py-20">
        <div className="flex flex-col gap-6 text-center md:items-start md:text-left ">
          <div className="flex md:gap-8 flex-col md:flex-row md:items-center">
            <AnimatedDiv element="svg"
              className="w-20 h-20 fill-[var(--accent)] mx-auto mb-7 md:mb-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z" />
            </AnimatedDiv>
            <p className="w-full">
              Atunci când ne alegi, nu este nevoie să sacrifici calitatea
              actului medical în favoarea accesibilității tratamentelor.
            </p>
          </div>
          <div className="flex md:gap-8 flex-col md:flex-row md:items-center">
            <AnimatedDiv element="svg"
              className="w-20 h-20 fill-[var(--accent)] mx-auto mb-7 md:mb-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </AnimatedDiv>
            <p className="w-full">
              Misiunea noastră este să dezvoltăm relații pe termen lung cu
              pacienții noștri și să asigurăm servicii de înaltă calitate
              printr-un act medical ireproșabil, soluții personalizate distinse
              prin îngrijire individualizată, onestă, etică și transparentă.
            </p>
          </div>
          <div className="flex md:gap-8 flex-col md:flex-row md:items-center">
            <AnimatedDiv element="svg"
              className="w-20 h-20 fill-[var(--accent)] mx-auto mb-7 md:mb-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
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
