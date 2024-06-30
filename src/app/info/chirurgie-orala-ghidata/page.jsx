import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { surgeryPerks, surgeryAccordionData, surgeryScope } from "./data";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";
export const metadata = {
  title: "Chirurgie Orală Ghidată la The Med",
  description: "Descoperă avantajele chirurgiei orale ghidate la The Med. Utilizăm tehnologie avansată pentru a asigura tratamente precise, sigure și minim invazive.",
};

export default function SurgeryPage() {
  return (
    <main>
      <Hero
      heroImg={"https://newsite.themed.ro/uploads/chirurgie/chirurgie-hero.jpg"}
        heroHeading="Chirurgie orală"
        heroSubHead="ghidată digital"
        center={true}
      />
      <section className="max-w-[1320px] w-full mx-auto flex flex-col md:flex-row md:p-10 lg:py-10 lg:px-0 gap-6 justify-between items-center md:*:w-1/2">
        <div className="p-4 *:pb-4  md:self-start">
          <AnimatedDiv
            element="h2"
            
            className="text-3xl md:text-5xl md:my-16"
          >
            Calitate, <span className="text-[var(--primary)]">siguranță</span>{" "}
            și grijă
          </AnimatedDiv>
          <p>
            Problemele dentare pe care un pacient le poate avea pot necesita
            diferite abordări clinice, unele mai simple, și care pot fi
            rezolvate în cabinet de către medicul stomatolog generalist, iar
            altele care necesită o abordare multidisciplinară și expertiza altor
            specialiști.{" "}
          </p>
          <p>
            Așadar, atunci când complexitatea acestora este dincolo de
            igienizările periodice și terapia cariilor dentare și sunt afectate
            maxilarele, dinții, cavitatea bucală și alte structuri de la nivelul
            feței, este posibil ca pacientul să necesite expertiza unui chirurg
            oral.{" "}
          </p>
          <p>
            În clinica dentară The Med, tratamentul pacienților care necesită
            intervenții chirurgicale este coordonat de un chirurg oral
            certificat, cu experiență vastă în proceduri de chirurgie orală
            minim-invazivă, dar și în alte patologii orale, lifting de sinus și,
            reabilitări orale complexe cu implanturi dentare, extirpare
            chisturi, rezecții apicale, augmentări osoase la nivelul maxilarelor
            etc.{" "}
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full p-4">
          <Image
            src="https://newsite.themed.ro/uploads/screen.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className="max-w-[1320px] mx-auto md:my-10">
        <div className="p-4 md:py-10 md:p-10 lg:px-0">
          <p>
            Echipa noastră medicală oferă opțiuni de tratament complete,
            personalizate nevoilor pacienților care ne trec pragul clinicii. Un
            aspect extrem de important în reușita tratamentelor dentare,
            indiferent de complexitatea lor, îl reprezintă faptul că lucrăm în
            parteneriat strâns cu pacienții noștri pentru a ne asigura că
            aceștia beneficiază de cea mai bună experiență posibilă.
          </p>
          <p>
            Iar atunci când vorbim despre experiența confortabilă și
            netraumatică a pacientului, toate procedurile din clinica The Med
            sunt efectuate cu anestezie locală pentru a ajuta pacientul să
            rămână calm și relaxat pe durata intervenției, astfel încât medicul
            să poată lucra în liniște, concentrat pe realizarea unui act medical
            ireproșabil.{" "}
          </p>
        </div>
        <AnimatedDiv className="w-full">
          <Image
            className="w-full max-h-[455px] object-cover object-top"
            src="https://newsite.themed.ro/uploads/team.png"
            alt="team of doctors"
            width={500}
            height={250}
          />
        </AnimatedDiv>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto md:my-10 flex flex-col md:flex-row justify-between items-center md:p-10 lg:py-10 lg:px-0">
        <div className="md:max-w-[700px] ">
          <AnimatedDiv
            element="h2"
            
            className="text-3xl mb-4 md:mb-6 font-bold"
          >
            Scopul chirurgiei orale este de a{" "}
            <span className="text-[var(--primary)]">
              îmbunătăți funcția, sănătatea și estetica
            </span>
          </AnimatedDiv>
          <p>
            Pentru a asigura tratamente stomatologice de cea mai înaltă calitate
            și predictibilitatea rezultatelor, în clinica dentară The Med o bună
            parte dintre intervențiile de chirurgie orală sunt realizate sub
            controlul magnificației (microscop dentar, lupe speciale), precum
            adiții osoase, implant dentar, sinus lift, chirurgia țesutului
            moale.
          </p>
          <p>
            De asemenea, avantajele microchirurgiei orale, realizată la nivel de
            artă, în clinica noastră, pentru pacient sunt incontestabile:
          </p>
          <div className="flex flex-wrap gap-4 p-4">
            {surgeryPerks.map((perk, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 my-4 w-[300px]"
                >
                  <Image width={100} height={100} src={perk.icon} alt={perk.name} />
                  <p>{perk.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <AnimatedDiv className="max-w-[600px]">
          <Image
            src="https://newsite.themed.ro/uploads/man.png"
            width={600}
            height={400}
            alt="man with his hands under his chin"
          />
        </AnimatedDiv>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto md:my-10 flex flex-col md:flex-row md:justify-between md:p-10 lg:py-10 lg:px-0">
        <div className="md:max-w-[680px] ">
          <AnimatedDiv
            element="h2"
            className="text-3xl md:text-5xl mb-4 md:mb-6"
          >
            Tipuri de intervenții de{" "}
            <span className="text-[var(--primary)]">
              chirurgie orală minim invazivă
            </span>
            , prezervând integritatea țesuturilor, realizate în clinica
            stomatologică The Med
          </AnimatedDiv>
          <div className="*:mb-4">
            <p className="font-bold">
              Chirurgia orală în reabilitările orale complexe
            </p>
            <p>
              O reabilitare orală complexă pentru a reda funcționalitatea și
              estetica unei danturi se poate realiza cu ajutorul implanturilor
              dentare, dar și a unor intervenții cu rol de susținere a lucrării,
              în cazul pacientului cu resorbție osoasă, precum adiția osoasă,
              sau lifting de sinus, în alte contexte clinice
            </p>
            <p>
              În clinica The Med asigurăm predictibilitatea tratamentelor,
              indiferent de complexitate, cu ajutorul tehnologiei de ultimă
              generație în stomatologia modernă.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-[600px]">
          <InfoAccordion data={surgeryAccordionData.steps} isSteps={true} primaryFirst={"odd:bg-[var(--primary)] even:bg-[var(--accent)]"}/>
        </div>
      </section>
      <section className="p-4  max-w-[1320px] mx-auto md:my-10 flex flex-col md:p-10 lg:px-0 lg:py-10">
        <AnimatedDiv
          element="h2"
          className="text-3xl mb-4 md:mb-6 md:text-5xl md:max-w-[600px]"
        >
          <span className="text-[var(--primary)]">Chirurgia orală</span> în
          reabilitările orale complexe
        </AnimatedDiv>
        <div className="flex gap-8 flex-col md:flex-row bg-chirurgie-bg-3 bg-no-repeat bg-top bg-contain">
          <div className="*:mb-6">
            <p>
              O reabilitare orală complexă pentru a reda funcționalitatea și
              estetica unei danturi se poate realiza cu ajutorul implanturilor
              dentare, dar și a unor intervenții cu rol de susținere a lucrării,
              în cazul pacientului cu resorbție osoasă, precum adiția osoasă,
              sau lifting de sinus, în alte contexte clinice.{" "}
            </p>
            <p>
              În clinica The Med asigurăm predictibilitatea tratamentelor,
              indiferent de complexitate, cu ajutorul tehnologiei de ultimă
              generație în stomatologia modernă.
            </p>
            <p>
              <span className="text-[var(--primary)] font-bold">
                De aceea, am dezvoltat protocoale precise de chirurgie orală
                ghidată,
              </span>{" "}
              realizată cu ajutorul ghidurilor chirurgicale realizate în
              laboratorul de tehnică dentară propriu pentru:
            </p>
            <p>
              <span className="text-[var(--primary)] font-bold">
                Reabilitarea orală
              </span>{" "}
              prin planificare permite înlocuirea unuia sau a mai multor dinți,
              sau chiar a arcadelor edentate complet într-un mod predictibil în
              ceea ce privește rezultatul final. Astfel, prin planificare
              digitală avansată, medicul realizează, în avans, planificarea
              poziției implantului dentar și a coroanelor pe implant.
            </p>
          </div>
          <div className="*:mb-6">
            <p>
              Aceste ghiduri digitale, considerate{" "}
              <span className="text-[var(--primary)] font-bold">
                standardul de aur în implantologia modernă,
              </span>{" "}
              sunt elaborate prin strânsa colaborare dintre medicul protetician,
              tehnicianul dentar și medicul chirurg.
            </p>
            <p>
              Iar un alt avantaj major al acestor ghiduri este faptul că pot fi
              utilizate și în alte tipuri de intervenții, precum
              gingivectomiile, pentru a obține un rezultat estetic predictibil.{" "}
            </p>
            <p>
              Gingivectomiile ghidate presupun o planificare de la A la Z,
              printr-un flux complet care începe de la prima consultație, are
              incluse simulări ale rezultatului final,{" "}
              <span className="text-[var(--primary)] font-bold">
                Digital Smile Design,
              </span>
              wax-up, până la etapa post vindecare, atunci când rezultatul este
              cel previzionat.{" "}
            </p>
            <p>
              Tehnologiile și echipamentele pe care le utilizăm în clinica The
              Med sunt de ultimă generație pentru a oferi pacienților tratamente
              de înaltă calitate.
            </p>
          </div>
        </div>
      </section>
      <section className="p-4 md:my-10 flex flex-col bg-chirurgie-bg-1 bg-no-repeat bg-cover md:p-10">
        <div className="max-w-[1320px] mx-auto py-20">
          <AnimatedDiv
            element="h2"
            className="text-3xl mb-4 md:text-5xl md:mb-10 max-w-[700px]"
          >
            Investigații recomandate înainte de intervenția chirurgical
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[rgba(255,255,255,0.4)] p-4 md:p-20">
            {surgeryScope.map((perk, index) => {
              return (
                <div key={index} className="flex items-center gap-4 my-4">
                <img width={80} height={80} src={perk.icon} alt={perk.name} />
                  <p>{perk.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className=" max-w-[1320px] w-full mx-auto flex flex-col md:flex-row-reverse gap-4 justify-between items-center my-10 md:p-10 lg:px-0 lg:py-10">
        <div className="p-4 md:p-14 *:pb-4 max-w-[750px] w-full self-start">
          <AnimatedDiv
            
            element="h2"
            className="text-3xl md:text-5xl md:mb-10"
          >
            <span className="text-[var(--primary)]">
              Îngrijirea pacientului
            </span>{" "}
            după tratamentul chirurgical
          </AnimatedDiv>
          <p>
            După intervenția chirurgicală, medicul chirurg va oferi pacientului
            un set de recomandări astfel încât să contribuie la diminuarea
            efectelor post intervenție. Acest lucru este deosebit de important
            mai ales în primele zile când zona se poate umfla, tumefia.
          </p>
          <p>
            Sunt recomandate compresele reci și consumul de alimente moi, cele
            la temperatura mediului ambiant fiind cele mai bune. Respectarea
            acestor instrucțiuni va ajuta la menținerea unui rezultat favorabil
            al intervenției chirurgicale.
          </p>
        </div>
        <AnimatedDiv className="md:max-w-[600px] w-full">
          <Image
            src="https://newsite.themed.ro/uploads/tooth.png"
            alt="Chirurgie orala"
            width={600}
            height={500}
            className="w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto md:my-10 flex flex-col bg-chirurgie-bg-2 md:p-10 lg:px-0 lg:py-10">
        <AnimatedDiv
          element="h2"
          className="text-3xl mb-4 md:mb-6 md:text-5xl md:max-w-[600px]"
        >
          <span className="text-[var(--primary)]">Stomatologie laser</span> la
          standarde internaționale
        </AnimatedDiv>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="*:mb-6">
            <p>
              Stomatologia laser este una dintre ramurile inovatoare ale
              stomatologiei moderne, aducând ca beneficii principale deopotrivă
              pentru pacient, cât și pentru medic, durata scurtă tratamentelor,
              siguranța tratamentelor, o experiență mai confortabilă și
              nedureroasă inclusiv pentru pacienți anxioși. În plus, laserul
              dentar, fiind un dispozitiv multifuncțional cu un fascicul de
              lumină, mânuit de un medic experimentat, înlocuiește bisturiul și
              alte instrumente chirurgicale, medicale ce împiedică pacienții, de
              teamă, să vină la medicul dentist la timp.
            </p>
            <p>
              Unul dintre avantajele principale ale utilizării laserului în
              procedurile stomatologice îl reprezintă faptul că este minim
              invaziv, are acțiune locală, adică este tratat fix țesutul bolnav
              grație tehnologiei încorporat care permite laserului săfacă
              distincție între țesutul bolnav și cel sănătos după culoare.
              Astfel, lumina din laser este atrasă de pigmentul mai închis al
              zonei de tratat, din cauza caracteristicilor nenaturale, precum
              acumularea de sânge în boala parodontală și alte afecțiuni orale.
            </p>
            <p>
              Pentru tratamentul bolii parodontale, medicul parodontolog
              utilizează laserul dentar pentru a vaporiza țesutul gingival
              nesănătos și pentru a cauteriza incizia, în același timp
            </p>
          </div>
          <div className="*:mb-6">
            <p>
              Acest lucru se traduce prin lipsă de sângerare, fără suturi, fără
              inflamație, cu vindecare accelerată, recuperare mai rapidă și
              experiență excelentă pentru pacient pe scaunul stomatologic.
            </p>
            <p>
              În timp ce laserul este adesea folosit pentru gestionarea bolilor
              gingivale, fiind extrem de versatil, în clinica The Med utilizăm
              laserul în tratamente variate, de la decontaminări dentare, până
              la chirurgie laser în cazul pacienților cu parodontopatii pentru
              eliminarea pungilor infectate, în endodonție pentru decontaminarea
              canalelor radiculare, dar și înmanagementul durerii post
              intervenție cu implant dentar, modelarea gingiei etc.
            </p>
            <p>
              De asemenea, pacienții cu sensibilitate dentară care își doresc
              dinți mai albi, pot opta pentru albirea dentară cu laser, o
              procedură sigură, realizată în cabinetul stomatologic sub
              controlul medicului dentist.
            </p>
            <p>
              Dacă doriți să aflați mai multe despre laserul Elexxion Nano pe
              care medicii noștri în utilizează cu succes in numeroase
              tratamente dentare, puteți citi aici.
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
      <Form />
      
    </main>
  );
}
