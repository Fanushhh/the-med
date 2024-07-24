import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { ProteticPlan } from "@/components/ProteticPlan/ProteticPlan";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
import { TabComponent } from "@/components/TabComponent/TabComponent";
import { threeBoxLayoutData } from "./data";

export const metadata = {
  title:
    "Protetica și Estetica Dentară la The Med - Zâmbetul Perfect pentru Tine",
  description:
    "Obține zâmbetul visurilor tale cu serviciile de protetică și estetică dentară de la The Med. Oferim soluții personalizate pentru restaurări dentare de înaltă calitate și estetică superioară. Programează o consultație astăzi.",
};

const proteticaBenefits = {
  left: [
    "tehnicile mai noi sunt mai puțin invazive",
    "oferă predictibilitate tratamentelor",
    "crește calitatea lucrărilor printr-o comunicare mult mai bună între pacient, medic și tehnicianul dentar",
    "tehnologiile moderne permit realizarea unor lucrări protetice cu o estetică deosebită, similară dinților naturali și cu o rezistență foarte mare",
  ],
  right: [
    "scurtează numărul de vizite la cabinet",
    "asigură un grad de adaptare și precizie maximă viitoarelor lucrări protetice",
    "dispare riscul de apariție a unor reacții alergice, întrucât sunt utilizate materiale biocompatibile, cu un grad de puritate ridicat",
  ],
};

export default function Page() {
  return (
    <main>
      <Hero
        heroImg="https://newsite.themed.ro/uploads/protetica/protetica-hero.jpg"
        heroHeading="Protetică și"
        heroSubHead="estetică dentară"
        subTitle="Estetică, funcționalitate și încredere într-un singur zâmbet"
      />
      <section className=" flex items-center bg-[var(--accent)]">
        <div
          className={`p-4 md:p-10 max-w-[1320px]  justify-center  check-list flex w-full flex-col-reverse md:flex-row gap-4 mx-auto`}
        >
          <div className="*:mb-4 w-full mx-auto">
            <p>
              Zâmbetul de revistă care respectă raportul de aur din lucrările
              lui Leonardo DaVinci este un deziderat în rândul oamenilor din
              întreaga lume.{" "}
            </p>
            <p>
              Iar prin tratamentele de protetică dentară, medicii dentiști pot
              proiecta pe chipul pacienților cel mai armonios și estetic zâmbet
              care respectă simetria și trăsăturile faciale ale acestora.
            </p>
            <p>Protetica dentară contribuie la îmbunătățirea:</p>
            <ul>
              <li>
                Esteticii dentare și faciale: prin soluțiile protetice pe care
                le oferim redăm zâmbetul natural, îmbunătățind forma și culoarea
                dinților. Reabilitările orale complexe modifică aspectul feței
                prin rejuvenarea instantanee odată cu refacerea integrității
                dinților
              </li>
              <li>Fonației (pronunție și vorbit) </li>
              <li>Masticației – prin înlocuirea dinților lipsă </li>
            </ul>
            <p className="font-bold">
              Tratamentul cu lucrările protetice îți poate schimba viata,
              deoarece îți asigură încrederea de a zâmbi nestingherit, confortul
              de a vorbi și mesteca și îmbunătățește calitatea vieții.
            </p>
          </div>

          <AnimatedDiv className="max-w-[1000px] w-full h-full">
            <Image
              width={1000}
              height={500}
              src="https://newsite.themed.ro/uploads/protetica/protetica-1.png"
              alt="imagine protetica dentara"
              className="max-w-[1000px] w-full h-full object-cover"
            />
          </AnimatedDiv>
        </div>
      </section>
      <section className="bg-white  flex items-center md:p-10">
        <div
          className={`p-4 md:px-0  items-center justify-between max-w-[1320px] md:*:w-1/2 flex flex-col md:flex-row gap-8 mx-auto`}
        >
          <AnimatedDiv className="md:max-w-[1000px]">
            <Image
              width={600}
              height={500}
              src="https://newsite.themed.ro/uploads/protetica/protetica-2.png"
              alt="imagine protetica dentara"
              className=" w-full object-cover"
            />
          </AnimatedDiv>
          <div className="*:mb-4 self-start">
            <AnimatedDiv
              element="h2"
              className="md:text-5xl text-2xl md:!mb-10 "
            >
              <span className="text-[var(--accent)]">Protetica dentară</span>,
              mai mult decât estetică și frumusețe
            </AnimatedDiv>
            <p>
              Stomatologia estetică este acea ramură a stomatologiei care redă
              și estetica și funcționalitatea zâmbetului, preocupându-se nu doar
              de înfrumusețarea dinților, ci și de estetică facială si a
              gingiilor.
            </p>
            <p>
              Acest lucru se extinde inclusiv la gingiile sănătoase care pot fi
              modificate chirurgical pentru a estompa, spre exemplu, un gummy
              smile, dar și la structura maxilarului.
            </p>
            <p className="font-bold">
              În clinica dentară The Med, scopul echipei medicale este de a
              recrea un zâmbet ca acela în care dinții și gingiile sunt în stare
              ideală.
            </p>
            <p>
              Și cum fiecare persoană este unică, la fel este și zâmbetul.
              Așadar, estetica dentară este despre tratament individualizat în
              baza căruia medicul protetician oferă pacientului cel mai bun
              rezultat posibil estetic și funcțional.
            </p>

            <p>
              Fluxul de lucru în tratamentele de protetică și estetică dentară
              din clinica The Med este unul extrem de riguros pentru a obține
              lucrări protetice impecabile, indiferent de complexitatea
              acestora.
            </p>
          </div>
        </div>
      </section>
      <section className=" relative p-4 md:p-20 flex items-center">
        <Image
          src="https://newsite.themed.ro/uploads/protetica/diferit.jpg"
          className="absolute top-0 left-0 h-full z-[-1] w-full object-cover object-[0%_25%] bg-[rgba(255,255,255,0.7)]"
          width={1920}
          height={1080}
          alt="poza principala cu echipa The Med"
        />
        <div className=" p-4 md:p-10 check-list pink bg-[rgba(255,255,255,0.7)] max-w-[1320px] mx-auto">
          <AnimatedDiv element="h2" className=" text-xl md:text-5xl pb-8 ">
            <span className="text-[var(--accent)]">
              Ce facem diferit la The Med
            </span>{" "}
            este modul în care abordăm experiența pacientului, deopotrivă
            clinică și personală:
          </AnimatedDiv>
          <ul className="*:pb-4">
            <li>
              Un zâmbet nou începe cu etapa de PLANIFICARE - planificarea este
              asemenea unui proiect de construcție a unei case
            </li>
            <li>
              Asigurăm un diagnostic corect stabilit în baza unui dosar complet
              al pacientului având o abordare bazată pe date exacte atât despre
              dinți și sănătatea acestora, cât și despre modul în care vorbește,
              mănâncă și zâmbește un pacient
            </li>
            <li>
              Planul de tratament al pacientului se stabilește împreună cu
              tehnicianul dentar încă de la început, pentru a asigura
              pacientului cea mai bună opțiune de lucrare protetică (fie că
              vorbim despre lucrări totale pe implant, fațete dentare, coroane
              dentare etc.) și materialele optime pentru cazul său
            </li>
            <li>
              Pacientul beneficiază de abordare integrată a tratamentelor:
              fiecare medic specialist stabilește diagnosticul asupra patologiei
              în care are expertiză (chirurgie, endodonție, parodontologie și
              protetică), iar ulterior, medicul coordonator integrează acest
              diagnostic și stabilește planul de tratament complet
            </li>
            <li>
              Cazurile de care ne ocupăm noi sunt 90% reabilitări orale globale,
              cazuri complexe de reabilitare orală
            </li>
          </ul>
        </div>
      </section>
      <section className=" flex items-center">
        <div className="max-w-[1320px] p-4 md:p-20 lg:px-0  mx-auto relative bg-protetica-bg-tooth bg-cover bg-no-repeat bg-bottom">
          <AnimatedDiv element="h2" className="text-2xl md:text-5xl mb-6">
            <span className="text-[var(--accent)] ">Protetica dentară</span> nu
            este doar despre dinți albi
          </AnimatedDiv>
          <p>
            Tratamentul protetic oferă estetică, funcționalitate și durabilitate
            unui dinte artificial pe suport dentar sau pe implant, care arată,
            se simte și se comportă ca dintele natural pierdut
          </p>
          <p>
            Iar când vorbim despre reabilitări orale protetice, confortul și
            știința creează un mix perfect cu arta, deoarece restaurările
            dentare sunt personalizate integral datorită tehnologiei dentare
            avansate utilizată în protetica dentară modernă.
          </p>
          <p className="mt-4">
            Atât dentistul, cât și pacientul beneficiază de progresele
            tehnologice dentare, deoarece:
          </p>
          <div className="flex my-6 md:my-10 flex-col md:flex-row">
            <div className="*:mb-4">
              {proteticaBenefits.left.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-4 items-center justify-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      fill="var(--accent)"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                    <p className="w-full">{benefit}</p>
                  </div>
                );
              })}
            </div>
            <div className="*:mb-4">
              {proteticaBenefits.right.map((benefit, index) => {
                return (
                  <div key={index} className="flex gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10"
                      fill="var(--accent)"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                    <p className="w-full">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white flex items-center">
        <div className=" p-4 max-w-[1320px] my-4 lg:py-20 lg:px-0 mx-auto flex flex-col md:flex-row md:*:w-1/2 gap-8">
          <div className="*:mb-4">
            <AnimatedDiv
              element="h2"
              addedDelay={0.5}
              className="text-2xl md:text-5xl "
            >
              Protetica dentara{" "}
              <span className="text-[var(--accent)]">digitala</span>
            </AnimatedDiv>
            <p>
              Progresele în tehnologia dentară permit realizarea mult mai
              rapidă, cu un grad de estetică naturală mult superior a
              restaurărilor dentare (de la implanturi, la punți dentare, arcade
              întregi, fațete sau coroane dentare).
            </p>
            <p>
              <strong>
                În clinica dentară The Med lucrările protetice sunt realizate de
                la început până la final, digital.
              </strong>{" "}
              Acest lucru permite individualizarea completă a noului zâmbet atât
              din punct de vedere al esteticii, cât și funcțional.
            </p>
            <p>
              Amprentele sunt realizate prin scanarea digitală a cavității
              orale, iar lucrările protetice sunt proiectate, pe baza acestor
              scanări, într-un computer și apoi tipărite folosind tehnologia de
              imprimare 3D, o tehnică aditivă de creare a dinților provizorii
              (la momentul actual). Tehnica de realizare a lucrărilor finale,
              ceramica emax sau zirconiu, este substractivă, fiind realizată
              prin „sculptarea” materialelor în blocuri sau discuri de către
              mașina de frezat.
            </p>
            <p>
              Un avantaj al digitalizării proteticii îl reprezintă și faptul că
              toate{" "}
              <strong>
                informațiile despre istoricul dinților tăi și a procedurilor
                realizate, cât și fotografii, mușcătura și particularitățile
                vechilor și noilor dinți sunt stocate digital.
              </strong>
            </p>
            <p>
              O reabilitare protetică, indiferent dacă este susținută pe dinți
              naturali, sau pe implanturi trebuie să fie adecvată din punct de
              vedere funcțional și estetic, de aceea este esențial ca
              structurile din cavitatea bucală să fie reproduse cât mai exact
              posibil, iar prin scanarea intraorală digitală acesta este
              beneficiu incontestabil pentru pacienți.
            </p>
          </div>
          <AnimatedDiv>
            <Image
              src="https://newsite.themed.ro/uploads/protetica/protetica-3.png"
              width={600}
              height={400}
              alt="image of a person looking at the camera"
              className="mx-auto object-cover"
            />
          </AnimatedDiv>
        </div>
      </section>
      <section className="max-w-[1320px] w-full mx-auto">
        <h1 className="text-5xl text-[var(--accent)] text-center mb-10">Tipuri de lucrări protetice</h1>
        <TabComponent tabs={threeBoxLayoutData}/>
      </section>
      <section className="mx-auto my-10 max-w-[1320px] flex flex-col md:flex-row md:*:w-1/2">
                <div>
                  <Image src="https://newsite.themed.ro/uploads/protetica/protetica-three-5.png" alt="Estetica gingivala" width={700} height={1000} className="w-full h-full"/>
                </div>
                <div className="bg-[var(--accent)] p-10 check-list">
                <h2 className="text-3xl md:text-5xl mb-6">Estetica gingivală</h2>
                  <p className="mb-4">Pe lângă lucrările estetice realizate la nivelul dinților, pot fi realizate și alte intervenții în scop estetic în cabinetul stomatologic:</p>
                  <ul>
                    <li>alungiri coronare în scop estetic, pentru dinții prea scurți sau abrazați, cu scopul de a reintegra dinții  pe arcadă</li>
                    <li>gingivoplastii pentru remodelarea conturului  gingival prin excizia țesutului în exces (gummy smile)</li>
                    <li>remodelare gingivală estetică pentru a restabili proporția ideală dintre vizibilitatea dinților și a gingiei</li>
                    <li>refacerea simetriei gingivale prin alungiri coronare sau grefe gingivale ( pentru dinții cu retracții gingivale, sau care au suferit un tratament parodontal)</li>
                  </ul>
                  <p className="font-bold">Cu aplicabilitate extinsă în stomatologie, obiectivul de bază al esteticii dentare rămâne sănătatea îndelungată a dinților și gingiilor, astfel încât pacienții să poată zâmbi fără restricții, să poată mânca și comunica fără probleme.</p>
                </div>
      </section>
      <ProteticPlan />
      <Testimonials />
      <Form />
    </main>
  );
}
