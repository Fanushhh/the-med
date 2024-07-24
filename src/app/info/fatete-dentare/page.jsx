import { Hero } from "@/components/Hero/Hero";
import FateteSlider from "@/components/FateteSlider/FateteSlider";
import { fateteData, fateteFaq, resultsData } from "./fateteData";
import FateteRezulateSlider from "@/components/FateteSlider/FateteRezulateSlider";
import Image from "next/image";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { Help } from "@/components/Help/Help";
import { Testimonials } from "@/components/Testimonials/Testimonials";
export default async function FatetePage() {
  return (
    <main>
      <Hero
        heroImg="https://newsite.themed.ro/uploads/home-hero.jpg"
        hasButtons={true}
        center={true}
        heroHeading="Zambetul tau perfect,"
        heroSubHead="semnatura noastra!"
      />
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 lg:p-0 my-10">
        <h2 className="text-3xl md:text-5xl text-[var(--accent)] max-w-[650px] mb-6 md:mb-10">
          Aspect natural incredibil cu fatetele dentare The Med!
        </h2>
        <div className="flex gap-10 flex-col md:flex-row md:*:w-1/2 ">
            <div className="*:mb-4">
              <p>
                Ți-e greu să zâmbești nestingherit din cauza neîncrederii în felul
                în care arată dantura ta?
              </p>
              <p>
                Nu trebuie să trăiești viața ascunzându-ți zâmbetul! La The Med îți
                oferim soluții premium de reabilitare estetică a zâmbetului pentru a
                îmbunătăți aspectul dinților tăi și a reda echilibrul aspectului
                facial.
              </p>
              <p>
                Datorită simplității lor uimitoare și versatilității, din ce în ce
                mai mulți pacienți aleg fațetele dentare ca tratament pentru
                ștergerea imperfecțiunilor zâmbetului.
              </p>
              <p>
                Fațetele dentare ne permit să schimbăm culoarea și forma dinților,
                oferind, în același timp, rezistență și estetică îndelungată.
              </p>
            </div>
            <div className="*:mb-4">
              <p>
                Tratamentul cu fațete dentare este minim invaziv deoarece implică o
                pregătire minimă a suprafeței dintelui, cea mai mare parte a
                structurii dentare existente fiind păstrată.
              </p>
              <p>
                Rezultatele cu adevărat extraordinare pot fi obținute numai dintr-un
                mix perfect dintre materiale de înaltă calitate și profesionalismul
                medicului protetician.
              </p>
              <p>
                Ceramica utilizată la The Med este extrem de rezistentă și oferă
                rezultate excepționale din punct de vedere estetic datorită
                fiabilității sale crescute și a translucenței obținute. Pacienții
                noștri care aleg fațetele dentare The Med apreciază îndeosebi
                aspectul natural pe care îl oferă zâmbetului lor și efectul de
                întinerire pe care îl resimt post tratament.
              </p>
            </div>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 lg:p-0 my-10">
            <h2 className="text-3xl md:text-5xl text-[var(--accent)] max-w-[650px] mb-6 md:mb-10">Tipuri de fatete dentare</h2>
            <FateteSlider slides={fateteData}/>            
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 my-10 bg-laborator-bg-1">
            <h2 className="text-3xl md:text-5xl text-[var(--accent)] max-w-[650px] mb-6 md:mb-10">Beneficiile fatetelor dentare</h2>
              <div className="check-list pink bg-[#f0f0f0dc] p-10">
                <ul className="*:!mb-6">
                    <li>Tratează problemele de estetică dentară precum dinți ciobiți, inegali, asimetrici, cu mici spații interdentare, cu pete sau
                    în nuanțe gălbui sau cenușii etc</li>
                    <li>Sunt realizate în laboratorul dentar din materiale solide și durabile, care rezistă la uzură, precum ceramica presată,
stratificată sau frezată E-max, Empress etc.
</li>
                    <li>Permit personalizarea în funcție de dorințele pacientului prin modificări ale dinților de formă, dimensiune și culoare
</li>
                    <li>Sunt elemente protetice extrem de subțiri, ca niște foițe, care imită perfect estetica dinților naturali și se montează cu
minimă preparare a dinților pe fețele vizibile ale acestora
</li>
                    <li>Au rezistență similară cu a smalțului natural, refăcând structura dentară pierdută prin abrazii, carii dentare etc.
</li>
                    <li>Igiena orală se menține ca și în cazul dinților naturali, cu rutina corectă de îngrijire orală acasă, completată de igienizări
profesionale la fiecare 6 luni
</li>
                    <li>Sunt gata pentru a fi arătate lumii în maxim 2-3 vizite la clinică</li>
                </ul>
              </div>          
      </section>
      <section className="max-w-[1320px] mx-auto md:p-10 lg:p-0 my-10">
            
            <FateteRezulateSlider results={resultsData}/>            
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 lg:p-0 my-10 md:bg-fatete-1 bg-no-repeat bg-right bg-contain">
      <div className="mb-10">
          <h2 className="text-3xl md:text-5xl text-[var(--accent)]">Digital Smile Design</h2>
          <h3 className="text-2xl md:text-4xl">Esti parte din designul noului tau zambet</h3>
      </div>
      <div className="md:hidden mb-6">
        <Image src="https://newsite.themed.ro/uploads/fatete-dentare/digital-smile.png" width={400} height={400} alt="digital smile design" />
      </div>
      <div className="*:mb-4 max-w-[500px]">
        <p>Designul digital al zâmbetului este o tehnologie de
ultimă oră în procesul de creare a unei danturi estetice.
</p>
        <p>Mai mult, reprezintă și o unealtă care eficientizează și
îmbunătățește comunicarea dintre medic și pacient, dar
și dintre medic și tehnicianul dentar.</p>
        <p>Astfel, pacientul știe dinainte de a începe tratamentul
cum va arăta zâmbetul său la final și este implicat, pas cu
pas, în alegerea formei, culorii și dimensiunii fațetelor.
</p>
        <p>Pe de altă parte, fiind parte dintr-un protocol digital,
medicul poate trimite laboratorului dentar, în mod
electronic, toate informațiile, reducând la 0 rata de
eroare umană atât la amprentare, cât și la detalii legate de
caracteristicile fațetelor.</p>
      </div>
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 lg:p-0 my-10">
      <h2 className="text-3xl md:text-5xl text-[var(--accent)] mb-10">Intrebari frecvente despre fatetele dentare</h2>
        <InfoAccordion isSteps={true} data={fateteFaq.steps} primaryFirst={"odd:bg-[var(--primary)] even:bg-[var(--accent)]"}/>
      </section>
      <Help />
      <Testimonials />
    </main>
  );
}
