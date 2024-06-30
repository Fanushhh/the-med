import { Hero } from "@/components/Hero/Hero";
import { ThreeBoxLayout } from "@/components/ThreeBoxLayout/ThreeBoxLayout";
import Image from "next/image";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { implantData, implantSteps, faq } from "./implantData";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";

export const metadata = {
  title: "Implant Dentar Imediat la The Med - Soluții Rapide și Fiabile",
  description: "Recuperează-ți zâmbetul cu implanturile dentare imediate de la The Med. Oferim soluții rapide și durabile pentru înlocuirea dinților pierduți, cu rezultate estetice și funcționale excelente. Programează o consultație astăzi.",
};
export default function ImplantDentarPage() {
  return (
    <main>
      <Hero
      heroImg="https://newsite.themed.ro/uploads/implant/implant-hero.jpg"
        center={true}
        heroHeading="Implant dentar"
        heroSubHead="imediat"
        subTitle="Reabilitare avansată a zâmbetului cu implant dentar"
      />
      <section className="bg-[var(--primary)] flex items-center">
        <div className=" p-4 lg:p-0 max-w-[1320px] my-10 md:mx-auto flex flex-col md:flex-row md:*:w-1/2 gap-8">
          <div className="*:mb-8">
            <AnimatedDiv
              element="h2"
              className="text-3xl md:text-5xl text-white md:max-w-[450px]"
            >
              Experți{" "}
              <span className="text-black">în reabilitare orală complexă</span>
            </AnimatedDiv>
            <p>
              Ești aici pentru că, probabil, îți lipsește încrederea de a zâmbi
              larg din cauza pierderii unuia sau a mai multor dinți de pe
              arcadă. Când îți pierzi dinții, nu numai că observi schimbări în
              felul în care arăți, dar poți întâmpina probleme inclusiv în
              alimentația zilnică, împiedicându-te să mănânci alimentele tale
              preferate.
            </p>
            <p>
              Și chiar dacă există soluții clasice de înlocuire a dinților
              lipsă, precum punțile dentare sau chiar protezele mobile,
              implantul dentar rămâne soluția cea mai bună, funcțională, stabilă
              și estetică de a-ți reîntregi dantura. e cele mai multe ori,
              atunci când este prea târziu.
            </p>
          </div>
          <AnimatedDiv className="">
            <Image
              src="https://newsite.themed.ro/uploads/protetica/protetica-1.png"
              width={600}
              height={400}
              alt="image of a person looking at the camera"
              className="w-full object-cover"
            />
          </AnimatedDiv>
        </div>
      </section>
      <section className="bg-[var(--primary)]  flex items-center md:px-10">
        <div
          className={`p-4 md:px-0 md:py-10 items-center justify-between max-w-[1320px] two-col-layout md:*:w-1/2  flex $ flex-col md:flex-row gap-8 mx-auto`}
        >
          <AnimatedDiv className="md:max-w-[1000px] h-[250px] md:h-full overflow-hidden">
            <Image
              width={600}
              height={500}
              src="https://newsite.themed.ro/uploads/implant/implant-2.png"
              alt="imagine protetica dentara"
              className=" w-full object-cover "
            />
          </AnimatedDiv>
          <div className="*:mb-4 self-start">
            <AnimatedDiv  element="h2" className="md:text-[46px] leading-[1] text-3xl md:!mb-10 ">
              <span className="text-white">Tratamentul cu implant dentar</span>,
              face parte din gama tratamentelor stomatologice de top
            </AnimatedDiv>
            <p>
              Implantul dentar înlocuiește rădăcina dintelui, ancorând dintele
              de osul maxilarului și oferind o fundație stabilă prin stimularea
              țesutului osos de susținere pentru a-l menține sănătos.
            </p>
            <p>
              Cu ajutorul implanturilor dentare, noii dinți vor arăta, se vor
              simți și vor funcționa ca dinții naturali, permițându-ți să
              mănânci și să zâmbești oricând cu încredere.
            </p>
            <p className="">
              Echipa The Med este specializată în reabilitări orale complexe,
              adică, în baza unui protocol medical extrem de precis și complet,
              putem rezolva chiar și cele mai complicate cazuri. Ne angajăm să
              oferim pacienților noștri îngrijire dentară la cel mai înalt
              nivel, asigurând rezultate cu aspect natural și de lungă durată.
            </p>
            <p>
              În clinica stomatologică The Med oferim pacienților tratament
              personalizat cu implanturi dentare de cea mai bună calitate,
              folosind materiale inovatoare cu proprietăți excelente de
              osteointegrare, funcționalitate și o estetică vizibil
              îmbunătățită.
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
          src="https://newsite.themed.ro/uploads/implant/implant-bg.jpg"
          className="absolute top-0 left-0 h-full z-[-1] w-full object-top object-cover"
          width={1920}
          height={1080}
          alt="poza de fundal cu implant dentar"
        />
        <div className=" p-4 md:p-20 pink bg-[rgba(255,255,255,0.7)] max-w-[1320px] mx-auto">
          <div className="pb-6 ">
            <AnimatedDiv element="h2" className=" text-3xl md:text-5xl pb-8 md:max-w-[480px]">
              <span className="text-black">
                Probabil te întrebi… de ce implant dentar?
              </span>
            </AnimatedDiv>
            <p>
              Chiar dacă nu conștientizăm imediat, pierderea unui dinte poate
              impacta nu doar felul in care arăți, ci și digestia, felul în care
              vorbești (dicția), poate conduce și la alte probleme fizice care
              îți pot afecta sănătatea și stima de sine. Cu cât trece mai mult
              timp de la pierderea dinților, cu atât sunt mai evidente
              consecințele. De aceea, recomandarea medicilor noștri chirurgi
              este de a înlocui imediat, sau când mai curând, dinții lipsă cu
              implanturi dentare pentru a preveni:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:p-10 check-list pink">
            <ul className="*:pb-4">
              <li>Pierderea osoasă și micșorarea maxilarului</li>
              <li>Alterarea mușcăturii ca urmare a mișcării dinților</li>
              <li>Dificultate în a mesteca mâncarea corect</li>
              <li>
                Dificultăți în igienizarea corectă zilnică și instalarea
                halitozei (respirația neplăcută)
              </li>
            </ul>
            <ul className="*:pb-4">
              <li>Deplasarea și mobilitatea dinților de pe arcada dentară</li>
              <li>Probleme ale articulației temporo-mandibulare</li>
              <li>Presiune adițională asupra dinților rămași</li>
              <li>
                Aspectul îmbătrânit al feței cauzat de pierderea structurii
                osoase a etajului inferior al feței
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" relative p-4 md:p-20 flex items-center">
        <div className="  check-list pink bg-[rgba(255,255,255,0.7)] max-w-[1320px] mx-auto">
          <div className="pb-6">
            <AnimatedDiv element="h2" className=" text-3xl md:text-5xl pb-8 md:max-w-[750px]">
              <span className="text-black">
                Care sunt{" "}
                <span className="text-[var(--primary)]">beneficiile</span> unui
                tratament cu implant dentar?
              </span>
            </AnimatedDiv>
            <p>
              Tehnic, un implant dentar este un șurub din titan care este plasat
              în osul maxilarului unde lipsește dintele și preia rolul unei
              rădăcini dentare, o ancoră pentru plasarea unuia sau a mai multor
              dinți artificiali. Așadar, noul dinte are două componente
              principale, șurubul (implantul) și dintele pe care îl vedem (
              poate consta dintr-o singură coroană dentară pe implant, o punte
              dentară sau o proteză dentară fixă).
            </p>
            <p>
              Înlocuirea dinților lipsă cu implanturi dentare are numeroase
              beneficii, printre care:
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between bg-no-repeat bg-contain bg-center md:p-10 bg-implant-img md:*:max-w-[400px]">
            <ul className="*:pb-4">
              <li>
                Menține integritatea structurii osoase după pierderea dinților
              </li>
              <li>
                Protejează sănătatea dinților adiacenți, nefiind nevoie de
                lucrări tip punte dentară, păstrând continuitatea arcadelor și
                permițând masticația normală
              </li>
              <li>
                Înlocuiește proteza dentară mobilă și elimină grija deteriorării
                sau pierderii acesteia
              </li>
              <li>Distribuie forțele masticatorii uniform în toată gura</li>
            </ul>
            <ul className="*:pb-4">
              <li>
                Redă naturalețea arcadelor atât estetic, cât și funcțional
              </li>
              <li>Este îmbunătățită capacitatea de a vorbi</li>
              <li>
                Prin evitarea pierderii osoase, se menține simetria facială,
                fără a da chipului un aspect de îmbătrânire prematură
              </li>
              <li>
                Sunt eliminate problemele de digestie sau alte probleme
                sistemice, dar și de sănătate emoțională cauzate de pierderea
                dinților
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white flex items-center">
        <div className=" p-4 md:px-10 lg:px-0 max-w-[1320px] my-4  mx-auto flex flex-col md:flex-row md:items-center md:*:w-1/2 gap-8">
          <div className="*:mb-8 check-list pink">
            <AnimatedDiv  element="h2" className="text-3xl md:text-5xl text-black md:max-w-[450px]">
              <span className="text-[var(--primary)]">Tipuri</span> de implant
              dentar la clinica The Med
            </AnimatedDiv>
            <p>
              Așa cum fiecare dintre noi este unic, în același mod și
              implanturile dentare sunt recomandate de către medicul chirurg în
              funcție de particularitățile identificate la pacient prin
              investigațiile clinice și radiologice de diagnostic.
            </p>
            <p>Astfel, implantul dentar poate fi:</p>
            <ul className="">
              <li>
                imediat, atunci când este inserat în aceeași ședință cu
                extracția dentară
              </li>
              <li>
                delayed (implantare tardivă), atunci când este inserat într-o
                zonă edentată, o zonă în care dintele a fost extras dinainte
              </li>
            </ul>
          </div>
          <AnimatedDiv>
            <Image
              src="https://newsite.themed.ro/uploads/implant/implant-4.png"
              width={600}
              height={400}
              alt="image of a person looking at the camera"
              className="w-full"
            />
          </AnimatedDiv>
        </div>
      </section>
      <section className=" my-4 md:my-10">
        {implantData.map((section, index) => {
          return <ThreeBoxLayout key={index} {...section} />;
        })}
      </section>
      <section className="max-w-[1320px] w-full mx-auto my-4 md:my-10 flex-col gap-4 md:flex-col flex p-4 lg:p-0  justify-between">
        <h2 className="text-3xl md:text-5xl md:mb-8 text-center">Care sunt etapele tratamentului cu <span className="text-[var(--primary)]">implant dentar?</span></h2>
        <div className="flex justify-between flex-col-reverse gap-4 md:flex-row">
          <div className="md:w-[600px] max-w-full">
            <InfoAccordion data={implantSteps.steps} isSteps={true} primaryFirst={"odd:bg-[var(--primary)] even:bg-[var(--accent)]"}/>
          </div>
          <div>
            <Image
              className="w-full md:w-[650px]"
              src="https://newsite.themed.ro/uploads/implant/implant-5.png"
              width={600}
              height={500}
              alt="Protetic Plan"
            />
          </div>
        </div>
      </section>
      <section className="bg-[var(--primary)] flex items-center p-4 md:p-10">
        <div className=" max-w-[1320px] my-4 md:mx-auto flex flex-col md:flex-row gap-8">
          <div className="*:mb-8 md:w-2/3">
            <h2 className="text-3xl text-center sm:text-start md:text-start md:text-5xl text-black">
              Chirurgie ghidată computerizat pentru înlocuirea dinților lipsă
            </h2>
            <p>
              Grație tehnologiilor moderne, te poți bucura de un zâmbet complet
              fără a fi nevoie să aștepți luni întregi. Inserarea imediată a
              implantului a devenit o realitate folosind cea mai avansată
              procedură minim invazivă pentru a prezerva calitatea osului și a
              oferi stabilitate suficientă implantului astfel încât să fie
              susținută o coroană dentară, o punte sau o lucrare de tip proteză
              fixă pe implanturi. Reabilitarea orală estetică și funcțională în
              aceeași zi este o practică uzuală în clinica The Med.
            </p>
            <p>
              Implantul dentar ghidat digital are la bază planificarea digitală
              în care amprenta dentară digitală preluată cu scannerul intraoral
              și imaginea 3D a osului rezultată după CT scan se combină pentru a
              identifica cea mai favorabilă poziție în os și pe arcadă a
              implantului pentru a asigura o biomecanică desăvârșită a acestuia
              și longevitatea lui pe arcadă.
            </p>
            <p>
              Această tehnologie digitală avansată permite abordarea
              chirurgicală minim invazivă, cu vindecare mai ușoară și mai
              rapidă, dureri și edeme postoperatorii minime.
            </p>
          </div>
          <div className="max-w-[550px] w-full">
            <Image
              src="https://newsite.themed.ro/uploads/implant/implant-6.png"
              width={600}
              height={400}
              alt="image of a person looking at the camera"
              className=" h-[300px] w-full object-cover object-bottom sm:h-full"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] w-full mx-auto my-20 flex-col gap-4 flex p-4 md:p-0  justify-between items-center">
        <h2 className="text-3xl md:text-5xl md:mb-8 text-center">
          Întrebări frecvente <br /> despre implantul dentar
        </h2>
        <div className=" max-w-full w-[800px]">
          <InfoAccordion data={faq.steps} isSteps={true} oneColor="bg-[var(--primary)]"/>
        </div>
      </section>
      <Testimonials />
      <Form />
    </main>
  );
}
