import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { endoData } from "./data";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
export const metadata = {
  title: "Endodonție la Microscop la The Med",
  description: "Beneficiază de tratamente endodontice precise și eficiente la The Med. Folosim tehnologie de microscopie pentru a trata canalele radiculare cu cea mai mare acuratețe. Programează o consultație acum.",
};

export default function EndodontiePage() {
  return (
    <main>
      <Hero
      heroImg="https://newsite.themed.ro/uploads/endodontie/endo-hero.jpg"
        heroHeading="Endodonție"
        heroSubHead="la microscop"
        subTitle="Salvăm dinții de la extracție prin proceduri dentare moderne"
        center="true"
      />
      <section className="max-w-[1320px] w-full mx-auto flex flex-col md:p-10 lg:px-0 lg:py-10 md:flex-row-reverse md:gap-6 justify-between items-center md:*:w-1/2 md:my-10">
        <div className="p-4 *:pb-4 ">
          <AnimatedDiv
            element="h2"
            
            className="text-3xl md:text-5xl md:my-10 md:max-w-[500px]"
          >
            Lucrăm conservator pentru
            <span className="text-[var(--accent)]">
              {" "}
              integritatea dinților tăi
            </span>{" "}
          </AnimatedDiv>
          <p>
            Terapia endodontică are un rol extrem de important deoarece este
            realizată pentru a salva un dinte care altfel ar trebui extras. Ceea
            ce înseamnă că, în endodonția modernă lucrăm conservator, astfel
            încât tu să îți păstrezi cât mai mult dinții naturali pe arcadă,
            acolo unde situația clinică o permite.
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full">
          <Image
            src="https://newsite.themed.ro/uploads/endodontie/endodontie-1.jpg"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className=" relative p-4 md:px-10 lg:px-0 lg:py-10 flex items-center max-w-[1320px] mx-auto">
        <div className="check-list x-button  bg-[var(--primary)] px-10 pt-10  ">
          <div className="pb-6">
            <p>
              Infecțiile endodontice pot cauza dureri variind de la ușoare până
              la chinuitoare. Acest lucru poate fi provocat de o serie de
              factori, inclusiv alimentele și băuturile calde și reci atunci
              când sunt consumate. Pulpa dentară, aflată în interiorul dintelui,
              se poate deteriora, de asemenea, din cauza bolii parodontale sau
              ca urmare a unei leziuni traumatice.
            </p>
            <p>
              Cu toate acestea, cele mai frecvente motive pentru deteriorarea
              pulpei sunt cariile dentare extinse sau fracturile care expun
              pulpa la bacteriile din cavitatea orală, ce stimulează infecția.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between bg-no-repeat bg-contain bg-center md:p-10 md:bg-tooth-img md:*:max-w-[400px]">
            <ul className="*:pb-4">
              <li>Carii profunde care au afectat pulpa dentară</li>
              <li>Fracturi dentare sau traumatisme care expun pulpa</li>
              <li>
                Proceduri dentare repetate, traumatizante pentru dinte, care
                provoacă iritarea sau chiar “moartea” pulpei
              </li>
            </ul>
            <ul className="*:pb-4">
              <li>
                Lucrări protetice nepotrivite, neadaptate care au afectat
                structura dintelui
              </li>
              <li>
                Un stil de viață nesănătos, cu un consum bogat de zahăruri,
                băuturi și alimente acide sau alimente foarte dure
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-4 md:px-20 lg:px-0 lg:py-10 flex flex-col md:flex-row max-w-[1320px] md:items-center mx-auto md:gap-8">
        <div>
          <AnimatedDiv
            element="h2"
            className="text-3xl md:text-4xl max-w-[400px] mb-10"
          >
            Respectăm un protocol endodontic{" "}
            <span className="text-[var(--accent)]">riguros</span>
          </AnimatedDiv>
          <p>
            Știm că există mituri urbane care țin pacienții departe de medicul
            dentist atunci când, în mod evident, au nevoie de unul. Iar dacă
            frica de durere te oprește să ne vizitezi, află că pentru fiecare
            tratament endodontic avem soluții pentru a reduce la minimum orice
            durere.
          </p>
          <p className="mt-4">
            În plus, specialiștii endodonți din cadrul clinicii dentare The Med
            urmează un protocol strict în ceea ce privește tratamentele de canal
            (endodontice) prin:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="flex flex-col justify-center gap-6">
            <div className="border border-[var(--accent)] p-4">
              <h3 className="text-pink-500 font-bold mb-2 text-xl">
                Investigații radiologice
              </h3>
              <p>
                realizarea investigațiilor radiologice de diagnostic, în
                cazurile complexe fiind solicitată chiar și un CT în scop
                endodontic
              </p>
            </div>
            <div className="border border-[var(--accent)] p-4">
              <h3 className="text-pink-500 font-bold mb-2 text-xl">
                Igienizarea profesională
              </h3>
              <p>
                igienizarea dinților în cadrul ședinței de profilaxie realizată
                înaintea începerii oricărui tratament dentar
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-[var(--accent)] p-4">
              <h3 className="text-pink-500 font-bold mb-2 text-xl">
                Folosirea digăi
              </h3>
              <p>
                izolarea cu diga a dintelui pe care se lucrează pentru a-l
                proteja de bacteriile din cavitatea bucală
              </p>
            </div>
            <div className="border border-[var(--accent)] p-4">
              <h3 className="text-pink-500 font-bold mb-2 text-xl">
                Decontaminare cu laser
              </h3>
              <p>
                utilizarea laserului dentar Elexxion Nano în realizarea
                tratamentului de canal pentru a decontamina canalele radiculare
              </p>
            </div>
            <div className="border border-[var(--accent)] p-4">
              <h3 className="text-pink-500 font-bold mb-2 text-xl">
                Utilizarea microscopului
              </h3>
              <p>
                folosirea microscopului pentru curățarea și eliminarea infecției
                din canalele radiculare
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px]  w-full mx-auto flex flex-col md:flex-row justify-between md:*:w-1/2">
        <div className="p-4 bg-[var(--primary)]  md:p-14 *:pb-4 ">
          <AnimatedDiv
            
            element="h2"
            className="text-3xl md:text-5xl md:my-10"
          >
            Protejarea și rezistența dinților
            <span className="text-[var(--accent)]">
              {" "}
              post tratament de canal
            </span>
          </AnimatedDiv>
          <p>
            Odată realizat tratamentul de canal, dintele este pregătit pentru
            coroana dentară, denumită și capsulă de protecție a dintelui, iar în
            cazul dinților naturali sever afectați de procesul carios se aplică
            un pivot din fibră de sticlă sau din zirconiu, pentru susținerea
            eficientă a viitoarei coroane dentare.
          </p>
          <p>
            Acest protocol ne-a ajutat să putem oferi pacienților care ne-au
            ales, șansa de a-și păstra dinții naturali fără a fi nevoie de
            înlocuirea acestora cu implanturi dentare.
          </p>
          <p>
            Prin abordarea multidisciplinară a fiecărui caz, reușim să salvăm
            dinți cu un grad mare de deteriorare, dinți care au fost tratați
            anterior și care pot avea anumite obiecte rămase în canalele
            radiculare, cât și dinți cu procese periapicale (chisturi) foarte
            mari.
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full">
          <Image
            src="https://newsite.themed.ro/uploads/endodontie/dinti.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className="p-4  max-w-[1320px] mx-auto md:my-10 flex flex-col lg:px-0 lg:py-10">
        <AnimatedDiv
          element="h2"
          className="text-3xl mb-4 md:mb-6 md:text-5xl md:max-w-[600px] md:my-10"
        >
          Extracția dentară, chiar și în distrucții mari,{" "}
          <span className="text-[var(--accent)]">nu este mereu o soluție</span>
        </AnimatedDiv>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="*:mb-6">
            <p>
              Atunci când un dinte este extras și nu este înlocuit imediat,
              dinții din jurul lui se pot deplasa pentru a umple golul lăsat.
              Acest lucru poate îngreuna mușcatul și mestecatul și poate
              îngreuna curățarea zilnică a dinților acasă. Iar, evident, zonele
              care nu sunt curățate bine sunt mai susceptibile de a face boli
              parodontale si carii dentare.
            </p>
            <p>
              <span className="font-bold">
                Tratamentul de canal poate preveni aceste probleme prin salvarea
                dintelui natural.
              </span>{" "}
              De asemenea, tratamentul de canal este de obicei mai puțin
              costisitor decât costul unor tratamente cu grad mai mare de
              complexitate pentru înlocuirea dintelui pierdut.
            </p>
          </div>
          <div className="*:mb-6">
            <p className="font-bold">
              Pentru a realiza un tratament de canal la microscop, de obicei,
              este nevoie de 1 sau 2 vizite la cabinet.
            </p>
            <p>
              Toate intervențiile stomatologice necesită finețe și precizie
              pentru a fi finalizate cu succes. Cu ajutorul anesteziei locale,
              nu numai că pacientul nu simte disconfort și durere, dar permite
              și medicului endodont să lucreze în condiții optime, pe cu un
              pacient liniștit.
            </p>
            <p>
              Odată ce procedura este finalizată, durerea dispare complet sau,
              în unele situații, persistă o ușoară jenă suportabilă, o zi sau
              două după tratament.
            </p>
          </div>
        </div>
      </section>
      <section className=" max-w-[1320px] bg-[var(--primary)] w-full mx-auto flex flex-col md:flex-row-reverse gap-6 md:p-14 justify-between items-center my-10">
        <div className="p-4 check-list pink *:pb-4 md:max-w-[750px] w-full self-start">
          <AnimatedDiv element="h2"  className="text-3xl md:text-5xl md:mb-10">
            Endodonție la microscop,{" "}
            <span className="text-[var(--accent)]">
              peste 90% rată de succes
            </span>
          </AnimatedDiv>
          <p>
            Datorită magnificației, luminii și design-ului ergonomic
            îmbunătățite, microscoapele dentare permit endodonților să navigheze
            prin sistemul complicat al canalelor radiculare cu precizie ridicată
            și încredere, curățând optim infecția.
          </p>
          <p>
            Conform unui studiu realizat de American Association of Endodontics,
            rata de succes a tratamentului de canal realizat fără magnificație
            este de 59%, în timp ce folosind magnificația aceasta crește în
            cazul lupelor la 88%, iar în cazul microscopului dentar, <span className="text-[var(--accent)] font-bold">
               rata de reușită a tratamentului ajunge la 94%.
            </span>
          </p>
          <p>
            Mai mult decât atât, conform aceluiași studiu, medicii specialiști
            au putut identifica și alte probleme ale dintelui care urma a fi
            tratat, precum:
          </p>
          <ul>
            <li>
              Identificarea canalelor extra suplimentare în cazul molarilor,
              identificarea fisuri dar și a anumitor obiecte rămase în canalul
              radicular de la tratamente anterioare
            </li>
            <li>
              Au îmbunătățit prepararea canalului radicular pentru obturație
            </li>
            <li>Au îmbunătățit obturația propriu-zisă a canalului radicular</li>
          </ul>
        </div>
        <AnimatedDiv className="md:max-w-[600px] w-full">
          <Image
            src="https://newsite.themed.ro/uploads/endodontie/microscop-endo.png"
            alt="Chirurgie orala"
            width={600}
            height={500}
            className="w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto md:my-10 md:px-0 flex flex-col md:flex-row md:justify-between lg:px-0 lg:py-10">
        <div className="md:max-w-[680px] ">
          <AnimatedDiv
            element="h2"
            className="text-3xl md:text-5xl mb-4 md:mb-6"
          >
            <span className="text-[var(--accent)]">Top 5 avantaje </span>
            pe care le obțin endodonții noștri în practica zilnică
          </AnimatedDiv>
          <div className="*:mb-4">
            <p className="font-bold">
              Capacitățile de documentare oferite de microscop medicilor
              specialiști asigură un suport solid acestora în managementul
              cuprinzător al cazului, dar și în comunicarea cu pacientul.
            </p>
            <p>
              În clinica stomatologică The Med toate tratamentele endodontice
              sunt realizate exclusiv cu ajutorul celor 3 microscoape CJ Optik
              Basic, CJ Optik Advanced, Optomic 5
            </p>
          </div>
        </div>
        <div className="md:max-w-[550px]">
          <InfoAccordion data={endoData.steps} isSteps={true} accentFirst={"odd:bg-[var(--accent)] even:bg-[var(--primary)]"}/>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto md:my-10 my-6">
        <div className="w-full ">
          <Image
            className="w-full max-h-[300px] object-cover"
            src="https://newsite.themed.ro/uploads/endodontie/endo-team.jpg"
            alt="team of doctors"
            width={500}
            height={350}
          />
        </div>
        <div className="p-4 md:p-10 md:py-10 bg-[var(--primary)] flex flex-col md:flex-row md:*:w-1/2 md:gap-8 overflow-hidden">
          <AnimatedDiv>
            <p>
              Așadar, pentru a îmbunătăți șansele de succes, tratamentul de
              canal trebuie efectuat cât mai curând posibil după identificarea
              problemei.
            </p>
            <p>
              Prevenția este cea mai bună formă de tratament printr-un stil de
              viață sănătos, controale periodice clinice și radiologice,
              igienizări profesionale odată la 6 luni și neamânând vizita la
              medicul dentist pentru că nu te doare nimic.
            </p>
            <p>
              Dacă, totuși, tratamentul de canal este necesar, șansa de succes
              și de păstrare a dintelui pe arcadă este direct influențată de
              momentul intervenției, cât mai scurt de la depistarea problemei
              dentare.
            </p>
          </AnimatedDiv>
          <AnimatedDiv>
            <p>
              Reabilitarea estetică și funcțională finală a dintelui este foarte
              importantă. Dacă dintele nu este restaurat corespunzător,
              bacteriile pot pătrunde din nou și pot provoca o altă infecție sau
              dintele se poate fractura, mai ales în situația în care procesul
              carios a fost mare. De aceea, se recomandă reabilitarea protetică
              prin coroană dentară, pentru a întări și a sigila corect dintele.
            </p>
          </AnimatedDiv>
        </div>
      </section>
      <Testimonials />
      <Form />
    </main>
  );
}
