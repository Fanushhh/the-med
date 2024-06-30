import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export const metadata = {
  title: "Igienizare Profesională EMS la The Med",
  description: "Experimentează igienizarea profesională cu tehnologia EMS la The Med. Îndepărtează placa bacteriană și tartrul eficient, pentru un zâmbet sănătos și strălucitor. Programează o ședință de igienizare acum.",
}

export default function Page() {
  return (
    <main>
      <Hero
      heroImg="https://newsite.themed.ro/uploads/igienizare/igienizare-hero.png"
        heroHeading="Igienizare"
        heroSubHead="profesională"
        subTitle="Profilaxie dentară realizată cu tehnologia EMS, pentru confort sporit"
        center={true}
      />
      <section className="bg-white  flex items-center">
        <div
          className={`p-4 md:px-0 md:py-10 items-center justify-between max-w-[1320px] md:*:w-1/2 flex flex-col md:flex-row-reverse md:justify-between w-full gap-8 mx-auto`}
        >
          <AnimatedDiv className="md:max-w-[1000px]">
            <Image
              width={600}
              height={500}
              src="https://newsite.themed.ro/uploads/igiena-1.png"
              alt="imagine protetica dentara"
              className=" w-full object-cover "
            />
          </AnimatedDiv>
          <div className="*:mb-4 max-w-[500px]">
            <AnimatedDiv element="h2"  className="md:text-5xl text-2xl md:!mb-10 text-[var(--accent)] ">
              Ce este biofilmul dentar și cum ne afectează dinții?
            </AnimatedDiv>
            <p>
              Biofilmul, cunoscut sub numele de placă bacteriană, este stratul
              gălbui și lipicios format pe suprafața dinților în timp, fiind
              format din miliarde de bacterii care pot provoca apariția cariei
              dentare,a gingivitei, parodontitei și a periimplantitei.
            </p>
            <p>
              Menținerea plăcii bacteriene sub control este o parte importantă a
              îngrijirii orale. Putem controla depunerea plăcii bacteriene prin
              stilul de viață, tipul de alimente consumate, prin periajul dentar
              repetat și riguros, alături de folosirea aței dentare și a dușului
              bucal.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] w-full mx-auto flex flex-col-reverse md:flex-row-reverse gap-6 justify-between items-center lg:py-10">
        <div className="p-4 lg:p-0 *:pb-4  md:max-w-[600px]">
          <AnimatedDiv element="h2"  className="text-2xl text-[var(--accent)] md:mb-6">
            Terapia ghidată de îndepărtare a biofilmului (GBT) folosind sistemul
            EMS Air Flow® este o nouă abordare a îngrijirii preventive a
            sănătății orale.
          </AnimatedDiv>
          <p>
            O bună igienă orală realizată zilnic acasă poate împiedica formarea
            biofilmului extins și consistent, dar chiar și cu periajul și
            curățarea regulată interdentară, este posibil să rămână o parte
            neeliminată. În timp, placa bacteriană se întărește și se transformă
            în tartru, care poate fi îndepărtat numai în cabinet de către
            medicul stomatolog.
          </p>
          <p>
            Pentru că știm că simplul gând la următoare vizită în cabinetul
            stomatologic poate provoca disconfort și anxietate, echipa clinicii
            The Med s-a gândit la o soluție și pentru această ședință.
          </p>
          <p>
            Cu ajutorul terapiei{" "}
            <span className="font-bold">EMS Guided Biofilm Therapy,</span>{" "}
            ședința de igienizare profesională în cabinet este de-a dreptul
            relaxantă, eficientă și fără durere.
          </p>
          <p>
            Terapia ghidată de îndepărtare a biofilmului constă în protocoale de
            tratament bazate pe diagnosticarea individuală a pacientului și
            evaluarea riscurilor de dezvoltare a unor afecțiuni dentare care ar
            putea pune în pericol sănătatea orală și generală a pacientului.
            Tratamentul se face minim invaziv, în siguranță și cu eficiență
            maximă.
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full md:max-w-[700px]">
          <Image
            src="https://newsite.themed.ro/uploads/igiena-2.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover object-left"
          />
        </AnimatedDiv>
      </section>
      <section className="p-4 lg:p-0 lg:py-10 max-w-[1320px] mx-auto flex flex-col md:flex-row gap-10 ">
        <div className="w-full md:max-w-[700px] *:mb-4 md:p-7 lg:px-0">
          <p>
            Air Flow ul -ul folosește un spray fin de apă încălzită și pudră
            pentru a curăța delicat, dar în profunzime, suprafața dintelui de
            deasupra și de sub gingie. Această tehnologie minim invazivă este
            indicată pe toate suprafețele dintelui și în locuri greu accesibile:
            smalț, dentină, țesuturi moi, restaurări protetice, aparate
            ortodontice și implanturi.
          </p>
          <p>
            Experiența utilizării Air Flow-ului este asemanatoare unui tratament
            spa pentru dinții tăi (eventual).Acest tratament este excelent
            pentru îndepărtarea petelor cauzate de alimente și băuturi bogate în
            coloranți naturali, cum ar fi ceai, cafea, tutun și vin roșu.
          </p>
          <p>
            <span className="text-[var(--accent)] font-bold">
              EMS Guided Biofilm Therapy și îngrijirea implanturilor dentare
            </span>{" "}
            - terapie cunoscută ca fiind „standardul de aur” pentru întreținerea
            implanturilor dentare deoarece curăță ușor, eficient și fără durere
            inclusiv zonele din jurul implantului dentar, atât la nivelul
            coroanei cât și subgingival.
          </p>
          <p>
            <span className="text-[var(--accent)] font-bold">
              EMS Guided Biofilm Therapy și aparatele dentare
            </span>{" "}
            - previne demineralizarea, petele albe, apariția cariilor și a
            afecțiunilor parodontale, formarea tartrului și respirația neplăcută
            în cazul purtătorilor de aparate dentare
          </p>
        </div>
        <div className="bg-[var(--primary)] p-7 arrow-list-primary">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl">
            Cine poate beneficia de terapia ghidată EMS?
          </AnimatedDiv>
          <ul className="my-10">
            <li>Pacienți cu dinți foarte sensibili</li>
            <li>Pacienți cu implanturi dentare</li>
            <li>Pacienți cu aparat dentar/brackeți ortodontici</li>
            <li>
              Toți pacienții care își doresc experiență de curățare mai blândă a
              dinților, mai confortabilă și mai eficientă la dentist
            </li>
            <li>Pacienții cu teamă de dentist</li>
          </ul>
          <p className="font-bold">
            Toți pacienții ar trebui să o folosească pentru prevenție!
          </p>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row my-10 md:p-10 lg:p-0">
        <div className="p-4 md:p-8 bg-[var(--primary)] flex flex-col  gap-4 *:max-w-[500px] items-center *:w-full *:border *:border-black text-center *:p-2 md:max-w-[600px]">
          <p>Fără durere</p>
          <p>Mai confortabil</p>
          <p>Fără zgomot</p>
          <p>Sensibilitate dentară redusă sau eliminată</p>
          <p>Contact minim între dinți, gingii și instrumentele dentare</p>
          <p>Îndepărtează complet tartrul</p>
          <p>Timp mai redus decât la detartrajul clasic cu ultrasunete</p>
          <p>
            Eficiență crescută în îndepărtarea plăcii bacteriene decât metodele
            tradiționale de igienizare
          </p>
          <p>
            Îndepărtarea eficientă a petelor de suprafață (cum ar fi cele de
            ceai, cafea, vin roșu și tutun)
          </p>
          <p>
            Mai confortabil pentru pacienții care suferă de dinți sensibili,
            deoarece apa este încălzită la 40 de grade Celsius
          </p>
          <p className="border-none text-[var(--accent)] text-sm font-bold !max-w-full">
            Dacă au trecut mai mult de 6 luni de la ultimul detartraj, te
            așteptăm la The Med pentru o experiență confortabilă în timp ce
            dinții tăi strălucesc de sănătate.
          </p>
        </div>
        <AnimatedDiv className="w-full ">
          <Image
            src="https://newsite.themed.ro/uploads/igiena-3.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full h-full object-cover object-left"
          />
        </AnimatedDiv>
      </section>
    <Testimonials />
    <Form />
    </main>
  );
}
