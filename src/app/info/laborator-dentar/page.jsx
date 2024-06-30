import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export const metadata = {
  title: "Laborator Dentar Intern la The Med - Calitate și Precizie în Protetică",
  description: "Descoperă avantajele laboratorului dentar intern la The Med. Realizăm lucrări protetice de înaltă calitate și cu precizie maximă, asigurându-ne că fiecare restaurare este perfect adaptată nevoilor tale.",
}

export default function Page() {
  return (
    <main>
      <Hero
      heroImg="https://newsite.themed.ro/uploads/laborator/laborator-hero.jpg"
        heroHeading="Laborator dentar digital"
        heroSubHead="in-house"
        center={true}
      />
      <section className="max-w-[1320px] my-6 md:my-10 mx-auto flex flex-col md:flex-row p-4 md:p-14 bg-[var(--primary)]">
        <div className="flex flex-col md:flex-row md:gap-14 ">
          <div className="md:w-[800px]">
            <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-6 md:mb-10">
              Tehnologie digitală avansată pentru lucrări dentare care schimbă
              vieți
            </AnimatedDiv>
            <AnimatedDiv className="w-full">
              <Image
                src="https://newsite.themed.ro/uploads/laborator-1.png"
                width={500}
                height={400}
                alt="laborator dentar digital"
                className="w-full mb-4"
              />
            </AnimatedDiv>
          </div>
          <div className="*:mb-4 md:max-w-[500px]">
            <p>
              Știm că în spatele fiecărui caz trimis la laboratorul nostru
              dentar se află un pacient real cu nevoi, griji și speranțe, ca
              atare tratăm cu maximă responsabilitate fiecare lucrare dentară,
              indiferent de complexitatea ei.
            </p>
            <p>
              Prin laboratorul de tehnică dentară in-house oferim pacienților
              posibilitatea de a beneficia de restaurări protetice care sa
              corespundă cu preferințele și nevoile lor particulare. Mai mult
              decât atât, putem controla fiecare pas al realizării lucrării
              protetice și putem asigura cea mai bună calitate, utilizând
              materiale inovatoare.
            </p>
            <p>
              Laboratorul nostru digital oferă servicii complete de la coroane
              dentare simple, fațete dentare sau alte elemente protetice
              (incrustații, bonturi personalizate etc.) cu scop estetic și
              funcțional, până la lucrări complexe de tip proteze fixe full arch
              pentru tratamente de reabilitare cu sisteme All on 4, Fast &
              Fixed, pentru a răspunde tuturor cerințelor pacienților
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-14 bg-laborator-bg-1 bg-contain bg-right bg-no-repeat">
        <div className="check-list pink">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-6 md:mb-10 max-w-[800px]">
            Care este protocolul digital de lucru în laboratorul nostru dentar
          </AnimatedDiv>
          <p className="mb-6 md:mb-10">
            Cu un workflow complet digitalizat, oferim toate avantajele
            stomatologiei CAD-CAM și imprimării 3D. Digitalizarea ne oferă
            beneficiul de a putea lucra extraordinar cu medicii dentiști care
            utilizează în cabinet tehnologii precum 3Shape Trios®, Digital Smile
            Design, SmileCloud, Medit inclusiv 3M™ True Definition, iTero®,
            Planmeca Plan Scan, Cerec etc.
          </p>
          <ul>
            <li>
              Primim pentru evaluare amprenta dentară digitală a pacientului/
              Digital Smile Design, alături de alte mențiuni particulare făcute
              de către medic pentru realizarea lucrării
            </li>
            <li>
              Realizăm, cu ajutorul imprimantei 3D, modele de studiu și
              wax-up-ul în funcție de documentele primite de la clinician,
              inclusiv fotografii digitale cu fața pacientului și simulări DSD
              cu zâmbetul final dorit de aceste
            </li>
            <li>
              Odată ce wax-up-ul a trecut proba pacientului, tehnicienii noștri
              dentari, folosind măiestria și viziunea artistică combinate cu
              tehnologiile din laborator CAD-CAM, încep crearea lucrării,
              realizată din materialele cele mai bune din piață pentru a obține
              lucrări cu aspect cât mai natural și cu durabilitate ridicată
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto md:my-10 my-6 flex flex-col-reverse">
        <div className="w-full ">
          <Image
            className="w-full max-h-[300px]p"
            src="https://newsite.themed.ro/uploads/laborator02.png"
            alt="team of doctors"
            width={500}
            height={350}
          />
        </div>
        <div className="p-4 md:p-14 md:py-10 bg-[var(--primary)] flex flex-col md:flex-row md:*:w-1/2 md:gap-20">
          <div className="*:mb-4">
            <p>
              <span className="font-bold">
                Comunicarea dintre tehnician și medicul protetician este,
                astfel, foarte eficientă, se adresează tuturor detaliilor
                lucrării protetice și cazului unic al pacientului.
              </span>{" "}
              Deoarece se realizează în timp real, asigură rezultate estetice și
              funcționale mult mai bune pacienților noștri.
            </p>
            <p>
              Iar pentru a îmbunătăți comunicarea dintre medic și pacient, medic
              și tehnician dentar, în practica zilnică din laborator am integrat
              cele mai recente inovații tehnologice alături de experiența
              profesională a echipei de tehnicieni dentari, pentru a oferi
              soluții dentare digitale fiabile și restaurări de cea mai înaltă
              calitate.
            </p>
          </div>
          <div>
            <p>
              Una dintre particularitățile laboratorului nostru dentar în
              realizarea lucrărilor protetice cu un nivel înalt de estetică este
              aceea că tehnicienii noștri utilizează trăsăturile faciale și ale
              zâmbetului pacientului, vârsta și sexul pentru a produce fațete și
              coroane dentare cu aspect natural care redau aspectul fizic,
              estetica și funcționalitatea optime, iar din punct de vedere
              funcțional oferă susținere țesuturilor și confort pentru pacient,
              medic și însuși tehnicianul dentar.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto md:my-10 my-6 flex flex-col p-4 md:p-14">
        <AnimatedDiv element="p" className="mb-4 md:mb-10 font-bold">
          De asemenea, având un laborator dentar digitalizat, clinica
          stomatologică și medicul dentist îi pot oferi pacientului și alte
          beneficii precum:
        </AnimatedDiv>
        <div className="check-list pink flex flex-col md:flex-row gap-4 md:gap-14 md:*:w-1/2">
          <ul>
            <li>
              îmbunătățirea comunicării dintre medic și pacient, dar și dintre
              medic și tehnician
            </li>
            <li>
              eliminarea erorii umane în realizarea lucrării pentru că există
              măsurători precise
            </li>
            <li>
              eliminarea timpului mare de așteptare a finalizării lucrării prin
              prioritizarea pacientului
            </li>
            <li>
              precizie în realizarea restaurărilor, astfel încât sunt eliminate
              probele suplimentare și vizitele multiple la cabinet
            </li>
            <li>
              lucrările pot fi realizat de către tehnicieni inițial într-un
              spațiu virtual și pot și previzualizate și modificate, după caz,
              înainte de a fi produse
            </li>
          </ul>
          <ul>
            <li>
              datele lucrării sunt stocate și arhivate digital, astfel încât
              pentru orice refacere deja există datele pacientului,
              eficientizând fluxul nou de lucru atât ca timp, cât și comunicarea
              medic - tehnician - pacient
            </li>
            <li>
              siguranța calității materialelor, în laboratorul nostru dentar
              lucrăm doar cu materiale de calitate superioară, adică materiale
              ce reprezintă vârful de gamă al marilor producători mondiali
            </li>
            <li>
              estetica deosebită a lucrărilor protetice realizare din ceramică
              și zirconiu
            </li>
            <li>
              flexibilitatea și adaptabilitatea la orice tip de lucrare,
              indiferent de gradul de personalizare
            </li>
          </ul>
        </div>
      </section>
      <section className="md:py-10 relative p-4 flex items-center">
        <Image
          src="https://newsite.themed.ro/uploads/laborator/laborator-bg-2.jpg"
          className="absolute top-0 left-0 h-full z-[-1] w-full object-cover object-top"
          width={1920}
          height={1080}
          alt="poza principala cu echipa The Med"
        />
        <div className=" p-4 md:p-14  pink bg-[rgba(255,255,255,0.7)] max-w-[1320px] mx-auto">
          <div className="pb-6 ">
            <AnimatedDiv element="h2" className=" text-3xl md:text-5xl pb-8 ">
              <span className="text-black">Echipamente și tehnologii</span>
            </AnimatedDiv>
            <p className="font-bold">
              Echipamentele și tehnologiile care dotează laboratorul nostru
              digital sunt de ultimă generație și indispensabile pentru a
              realiza lucrări dentare la standarde înalte de calitate și
              estetică:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:*:w-[450px] md:justify-evenly md:p-10 check-list pink">
            <ul className="*:pb-4">
              <li>Digital Scanning & Design</li>
              <li>Tehnologie CAD-CAM</li>
              <li>Imprimantă 3D</li>
              <li>Mașină de frezat</li>
            </ul>
            <ul className="*:pb-4">
              <li>Program Exocad 3D</li>
              <li>Softuri de inteligență artificială</li>
              <li>
                Articulatoare programabile – individualizabile conform fiecărei
                trăsături a pacientului
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
