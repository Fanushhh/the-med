import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { parodontologyPersk, paroAccordionData } from "./data";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";

export const metadata = {
  title: "Parodontologie Laser la The Med",
  description: "Tratează afecțiunile gingivale cu tehnologia laser de ultimă generație la The Med. Beneficiază de tratamente minim invazive, rapide și eficiente pentru o sănătate gingivală optimă.",
}
export default function Page() {
  return (
    <main>
      <Hero
      heroImg="https://newsite.themed.ro/uploads/parodontologie/paro-hero.jpg"
        heroHeading="Parodontologie"
        heroSubHead="laser"
        center={true}
        subTitle="Tratăm dinții și gingiile pacienților în mod minim invaziv"
      />
      <section className="max-w-[1320px] bg-[var(--primary)] w-full mx-auto flex flex-col md:flex-row gap-6 justify-between md:*:w-1/2 p-4 my-6 md:my-10 md:p-10 ">
        <div className=" *:pb-4  md:self-start md:max-w-[550px]">
          <AnimatedDiv  element="h2" className="text-3xl md:text-5xl md:mb-10">
            <span className="text-white">Boala parodontală,</span> ucigașul
            tăcut al zâmbetului
          </AnimatedDiv>
          <p>
            Boala parodontală este o infecție a parodonțiului (sistemul de
            susținere a dintelui), cauzată frecvent de bacterii. Aceasta apare
            întro formă inițială denumită gingivita (boala parodontală ușoară),
            sau poate deveni severă sub forma bine cunoscutei parodontite
            (parodontoza), o infecție gravă ce poate provoca distrugerea
            ligamentului parodontal și a osului alveolar, elementele de
            susținere ale dintelui.
          </p>
          <p>
            Mulți pacienți nu știu că boala parodontală este una dintre
            afecțiunile dentare care nu se simte, nu este vizibilă inițial și nu
            doare, tocmai de aceea mulți pacienți ajung în tratament, de cele
            mai multe ori, atunci când este prea târziu
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full">
          <Image
            src="https://newsite.themed.ro/uploads/parodontologie/parodontologie-1.jpg"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover !h-full"
          />
        </AnimatedDiv>
      </section>
      <section className="max-w-[1320px] mx-auto p-4 md:p-10 lg:p-0 my-6 md:my-10">
        <div className=" *:pb-4  md:self-start check-list x-button primary">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-8 md:max-w-[600px]">
            <span className="text-[var(--primary)]">Factori de risc</span>{" "}
            pentru apariția bolii parodontale
          </AnimatedDiv>
          <p>
            Gingivita, forma ușoară a bolii parodontale, este extrem de
            frecventă și poate fi ușor tratată printr-o igienă orală corectă, în
            timp ce parodontopatiile necesită, în funcție de severitate, o
            abordare personalizată deoarece pot duce la pierderea dinților.
            Tratamentul parodontal poate face diferența și poate ajuta la
            stoparea progresiei bolii parodontale.
          </p>
          <div className="flex justify-between flex-col md:flex-row items-center">
            <ul className="font-bold md:max-w-[400px] my-10 flex flex-col gap-6">
              <li>
                Fumatul slăbește capacitatea organismului de a lupta împotriva
                infecțiilor.
              </li>
              <li>
                Persoanele cu diabet au un risc mai mare de a dezvolta infecții
                în organism
              </li>
              <li>
                Genetica și istoricul familial vă pot expune unui risc mai mare
              </li>
              <li>Modificările hormonale, de exemplu, în timpul sarcinii</li>
              <li>
                Afecțiuni inflamatorii precum artrita, COVID-19, bolile
                cardiovasculare si medicația aferentă
              </li>
            </ul>
            <Image
              src="https://newsite.themed.ro/uploads/parodontologie/parodontologie-2.png"
              alt="Chirurgie orala"
              width={400}
              height={200}
              className="object-contain object-left"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto  my-6 md:my-10 flex flex-col md:flex-row  md:*:w-1/2">
        <div className=" *:pb-4  md:self-start  p-4 md:p-10 bg-[var(--primary)]">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl md:my-10 ">
            Din fericire, boala parodontală poate fi{" "}
            <span className="text-white">prevenită și tratată</span>
          </AnimatedDiv>
          <p>
            Deoarece principala cauză a apariției bolilor parodontale o
            reprezintă igiena orală zilnică deficitară sau absentă, pentru a te
            putea proteja de această afecțiune sau pentru a-ți îmbunătăți
            șansele de reușită a tratamentului parodontal trebuie să îți periezi
            dinții de cel puțin două ori pe zi, să folosești obligatoriu ața
            dentară și/sau dușul bucal.
          </p>
          <p>
            De asemenea, nu uita să te programezi la medicul stomatolog de două
            ori pe an pentru efectuarea controalelor de rutină, cât și pentru
            realizarea igienizării profesionale în cabinet pentru îndepărtarea
            completă a tartrului si a plăcii bacteriene acumulate pe dinți și la
            nivelul gingiilor.
          </p>
          <p>
            Gingiile sănătoase sunt rozalii, de diferite nuanțe sau spre
            maroniu, ferme și îmbracă perfect dinții.
          </p>
          <p>
            Astfel, pentru a putea identifica dacă este ceva este în neregulă cu
            gingiile noastre, putem urmări simptome precum:
          </p>
        </div>
        <div className=" bg-[var(--primary)]">
          <ul className="arrow-list pl-16 py-4 md:py-8 md:pr-16 bg-white">
            <li>Gingii inflamate (umflate)</li>
            <li>
              Schimbarea culorii gingiilor în roșu aprins, roșu închis sau
              violet închis
            </li>
            <li>Sângerarea gingiilor la periaj, în timpul masticației etc.</li>
            <li>Modificarea poziției dinților</li>
            <li>Respirație neplăcută persistentă</li>
            <li>Mobilitatea dinților pe arcadă</li>
            <li>Durere la mestecarea alimentelor</li>
            <li>
              Spații noi care apar între dinți și care arată ca niște
              triunghiuri negre
            </li>
            <li>
              Retragerea gingiilor de pe dinți, făcându-i pe aceștia să pară mai
              lungi
            </li>
            <li>Modificarea mușcăturii</li>
          </ul>
          <div className="bg-[var(--primary)] py-4 pr-4 flex items-center gap-4">
            <svg
              className="w-10 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 512"
              fill="#ffffff"
            >
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
            <p className="pl-6">
              Dacă identifici o parte din aceste simptome, specialiștii The Med
              te așteaptă cu soluții de tratament și de prevenție de ultimă
              generație în parodontologie.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] w-full mx-auto flex flex-col md:flex-row gap-6 justify-between items-center md:*:w-1/2">
        <div className="p-4 *:pb-4 lg:px-0 lg:py-10  md:self-start">
          <AnimatedDiv  element="h2" className="text-3xl md:text-5xl md:my-16">
            <span className="text-[var(--primary)]">
              Terapii și abordare personalizată
            </span>{" "}
            în tratamentul bolii parodontale
          </AnimatedDiv>
          <p>
            În abordarea clinică a pacientului parodontopat specialiștii The
            Med, în funcție de particularitățile fiecărui pacient, cu ajutorul
            instrumentarului specific și cu ajutorul tehnologiei, prin folosirea
            laserului Elexxion Nano, pot trata cu succes chiar și cele mai
            complexe cazuri.
          </p>
          <p>
            Terapia parodontală poate lua diferite forme, dar scopul este
            întotdeauna de a reda sănătatea țesuturilor gingivale. Boala
            parodontală se poate răspândi de la gingii la osul care susține
            dinții vecini și poate provoca chiar pierderea dinților în cazurile
            cele mai severe.
          </p>
          <p>
            În clinica dentară The Med utilizăm terapii foarte eficiente pentru
            a combate pierderea dinților afectați parodontal, aceste terapii
            variind de la detartraj subgingival (curățări profunde subgingivale)
            care îndepărtează placa și tartrul de sub gingie, până la repararea
            chirurgicală a gingiilor și a țesutului osos pierdut.
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full p-4">
          <Image
            src="https://newsite.themed.ro/uploads/parodontologie-3.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover object-left"
          />
        </AnimatedDiv>
      </section>
      <section className="max-w-[1320px] w-full mx-auto flex-col md:gap-6 flex md:flex-row md:*:w-1/2 my-10">
        <div className="md:p-10 *:mb-4 p-4 lg:px-0 lg:py-10">
          <AnimatedDiv  element="h3" className="text-[var(--primary)] font-bold text-2xl">
            Terapia parodontală non-chirurgicală
          </AnimatedDiv>
          <p>
            Tratamentul bolii parodontale se poate realiza nonchirugical prin
            chiuretaje în câmp închis, tratamente cu laser, imobilizări
            temporare ori de lungă durată ale dinților mobili sau prin
            regenerări parodontale cu Emdogain.
          </p>
          <AnimatedDiv element="h3" className="text-[var(--primary)] font-bold text-2xl">
            Terapia parodontală chirurgicală
          </AnimatedDiv>
          <p>
            De asemenea, în stadiile mai avansate ale bolii parodontale
            abordarea va fi una chirurgicală ce va cuprinde tratamentul de tipul
            chiuretajelor în câmp deschis (operații cu lambou gingival), grefe
            pentru acoperirea retracțiilor gingivale, precum și grefe de os în
            cazul in care, din cauza infecției, defectul osos este prea mare
            pentru a susține țesuturile peridentare.
          </p>
        </div>
        <div className="bg-[var(--primary)] md:p-10 font-bold p-4 *:mb-4">
        <AnimatedDiv element="h3" className="text-[var(--accent)] text-2xl">
            Terapia parodontală cu laserul stomatologic
          </AnimatedDiv>
          <p>
            Pentru a asigura un confort sporit în tratamentul parodontal, în
            clinica dentară The Med utilizăm laserul Elexxion Nano datorită
            numeroaselor beneficii pe care le are, inclusiv protejarea și
            stimularea creșterii oaselor și gingiilor posttratament.
          </p>
          <p>
            Terapia parodontală cu laser folosește un fascicul mic de lumină
            pentru a elimina bacteriile și țesutul infectat, fără a afecta
            țesutul sănătos, ceea ce înseamnă că este o procedură stomatologică
            minim invazivă, cu acțiune locală. De asemenea, nu există sângerare
            sau suturi deoarece nu se fac incizii.
          </p>
          <p>
            Chirurgia cu laser nu reprezintă un tratament complet și final,
            singular.
          </p>
          <p>
            Pentru a menține dinții și gingiile sănătoase timp îndelungat, dar
            și pentru a evita necesitatea unor proceduri suplimentare în timp,
            colaborarea dintre pacient și medicul parodontolog este esențială.
          </p>
        </div>
      </section>
      <section className="p-4 md:p-10 md:my-10 flex flex-col bg-chirurgie-bg-1 bg-no-repeat bg-cover">
        <div className="max-w-[1320px] mx-auto py-14">
          <AnimatedDiv element="h2" className="text-3xl mb-4 md:text-5xl md:mb-10 md:max-w-[750px]">
            <span className="text-[var(--primary)]">
              Beneficiile laserului stomatologic{" "}
            </span>
            în tratamentul parodontal:
          </AnimatedDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 p-4 md:p-20 bg-[rgba(255,255,255,.5)] fil font-bold">
            {parodontologyPersk.map((perk, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row text-center md:text-start items-center gap-4 my-4"
                >
                  <Image width={80} height={80} src={perk.icon} alt={perk.name} />
                  <p>{perk.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto md:my-10 flex flex-col md:flex-row md:justify-between lg:px-0 lg:py-10">
        <div className="md:max-w-[680px] ">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-4 md:mb-6">
            <span className="text-[var(--primary)]">Cum decurge </span>
            tratamentul parodontal
          </AnimatedDiv>
          <div className="*:mb-4">
            <p className="">
              Atunci când ai grijă de zâmbetul tău, ai grijă de sănătatea ta.
              Infecțiile cantonate la nivelul cavității orale pot contribui la
              intensificarea unor simptome ale unor afecțiuni preexistente, pot
              interfera cu tratamentul altor afecțiuni sau operații de chirurgie
              generală, care au nevoie, în prealabil, de asanarea cavității
              orale și eliminarea tuturor infecțiilor.
            </p>
            <p>
              Trebuie să știi că înainte de începerea oricărui tratament, va
              trebui să realizăm o consultație pentru a putea diagnostica corect
              dacă suferi de boala parodontală, precum și stadiul acesteia.
            </p>
            <p>
              Diagnosticarea corectă a bolii parodontale se realizează în
              clinica stomatologică The Med după cum urmează:
            </p>
          </div>
        </div>
        <div className="md:max-w-[500px]">
          <InfoAccordion data={paroAccordionData.steps} isSteps={true} primaryFirst={"odd:bg-[var(--primary)] even:bg-[var(--accent)]"}/>
        </div>
      </section>
      <section className=" max-w-[1320px] bg-[var(--primary)] w-full mx-auto flex flex-col md:flex-row-reverse gap-6 md:p-10 justify-between items-center my-10">
        <div className="p-4 md:p-0 check-list pink *:pb-4 md:max-w-[800px] w-full self-start">
          <AnimatedDiv element="h2"  className="text-3xl md:text-5xl md:mb-10">
            <span className="text-white">Importanța </span> terapiei de
            întreținere (post-tratament)
          </AnimatedDiv>
          <p>
            Sfârșitul tratamentului parodontal, nechirurgical sau chirurgical,
            nu reprezintă sfârșitul terapiei parodontale.
          </p>
          <p>
            Boala parodontală nu se vindecă efectiv, ci se stopează în evoluție,
            doar terapia de întreținere asigurând succesul pe termen lung al
            tratamentului parodontal, iar în această etapă pacientul are rolul
            vital care face diferența între pierderea sau păstrarea unor dinți
            afectați parodontal și tratați
          </p>
          <p>
            Efectul terapiei de mentenanță se va vedea în evaluările
            posttratament realizate de medicul parodontolog asupra poziției și
            consistenței gingiilor, stoparea evoluției afecțiunilor la nivel
            osos, lipsa sângerării la sondare, dar și în momentul periajului
            efectuat de pacient acasă.
          </p>
          <p className="font-bold">
            {" "}
            Pentru o eficiență cât mai bună a tratamentului avem și o componentă
            care ține exclusiv de pacient și anume ca acesta să respecte cu
            strictețe igiena orală zilnică sau renunțarea la anumite obiceiuri
            vicioase precum fumatul.{" "}
          </p>
        </div>
        <AnimatedDiv className="md:max-w-[600px] w-full">
          <Image
            src="https://newsite.themed.ro/uploads/parodontologie-5.png"
            alt="Parodontologie"
            width={600}
            height={800}
            className="w-full object-cover"
          />
        </AnimatedDiv>
      </section>
      <section className="max-w-[1320px] mx-auto md:my-10 ">
      <div className="p-4 md:p-10 lg:px-0 lg:py-10">
        <AnimatedDiv element="h2"  className=" text-3xl md:text-5xl max-w-[700px] mb-6">
          <span className="text-[var(--primary)]">Nu este doar despre dinți, </span>
          ci despre sănătatea generală
        </AnimatedDiv>
          <div className=" md:py-10 flex flex-col md:flex-row *:mb-4">
            <p>
            <span className="font-bold">Pacienții în tratament medical pentru diabet</span> au un regim de
        viață specific pentru a ține sub control glicemia. Astfel încât,
        având o alimentație preponderent proteică, au nevoie de o
        dantură puternică și sănătoasă pentru o dietă echilibrată.
            </p>
            <p>
            <span className="font-bold">Pacientele însărcinate,</span> fără un control al sănătății orale
        înainte de sarcină, au șanse și mai mari să dezvolte inflamații
        și infecții ale țesuturilor de susținere a dinților, deja
        modificate structural sub acțiunea hormonilor.
            </p>
          </div>
          <p className="text-[var(--primary)] mb-8 font-bold">În consecință, cunoscând importanța sănătății orale poți lua măsuri eficiente si rapide pentru a te proteja de boala parodontală
          cu toate implicațiile sale nefavorabile asupra bunăstării organismului.</p>
      </div>
        <AnimatedDiv className="w-full">
          <Image
            className="w-full max-h-[455px] object-contain object-top"
            src="https://newsite.themed.ro/uploads/parodontologie/parodontologie-4.jpg"
            alt="team of doctors"
            width={500}
            height={250}
          />
        </AnimatedDiv>
      </section>
      <Testimonials />
      <Form />
    </main>
  );
}
