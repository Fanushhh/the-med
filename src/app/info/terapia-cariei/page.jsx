import { Hero } from "@/components/Hero/Hero";
import Image from "next/image";
import { carieData } from "./data";
import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import FlipBox from "@/components/FlipBox/FlipBox";
import { flipBoxData } from "./data";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Form } from "@/components/Form/Form";
import { AnimatedDiv } from "@/components/AnimatedDiv/AnimatedDiv";

export const metadata = {
  title: "Terapia Cariilor la The Med - Tratament Eficient și Nedureros",
  description: "Scapă de carii cu tratamente eficiente și nedureroase la The Med. Utilizăm tehnici moderne pentru a asigura confortul și sănătatea dinților tăi. Programează o consultație pentru o evaluare completă.",
}

export default function Page() {
  return (
    <main>
      <Hero
        heroImg="https://newsite.themed.ro/uploads/terapie/terapie-hero.jpg"
        heroHeading="Terapia cariei"
        heroSubHead="dentare"
        center={true}
        subTitle="Soluții moderne și rapide de tratament pentru caria dentară"
      />
      <section className="bg-white  flex items-center">
        <div
          className={`p-4 md:px-0 md:py-10 justify-between max-w-[1320px] md:*:w-1/2 flex flex-col md:flex-row-reverse md:justify-between w-full gap-8 mx-auto`}
        >
          <AnimatedDiv className="md:max-w-[1000px]">
            <Image
              width={600}
              height={500}
              src="https://newsite.themed.ro/uploads/terapie/terapie-1.jpg"
              alt="imagine protetica dentara"
              className=" w-full object-cover h-full"
            />
          </AnimatedDiv>
          <div className="*:mb-4 max-w-[500px]">
            <AnimatedDiv element="h2" className="md:text-5xl text-2xl md:!mb-10 ">
              Caria dentară, cea mai răspândită afecțiune orală
            </AnimatedDiv>
            <p>
              Conform unui studiu realizat de Organizația Mondială a Sănătății
              mai bine de 2 miliarde de oameni la nivel global suferă de carii
              dentare, iar peste 26% dintre aceștia nu își tratează aceste
              patologii dentare transformând caria dentară întruna dintre cele
              mai răspândite afecțiuni la nivel global.
            </p>
            <p>
              Ca incidență, caria dentară apare cel mai frecvent la copii,
              urmați de adolescenți și adulți și în unele cazuri chiar și la
              sugari.
            </p>
            <p>
              De cele mai multe ori, cariile dentare apar din cauza lipsei de
              consecvență in igiena orala care favorizează acumularea de placă
              bacteriană, dar și din cauza consumul excesiv de alimente sau
              băuturi ce conțin mult zahăr, lipicioase, foarte acide.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto p-4 lg:px-0 lg:py-10 flex flex-col">
        <div className="mb-10">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl max-w-[600px] mb-6 md:mb-10">
            Stadiile de dezvoltare ale cariei dentare
          </AnimatedDiv>
          <p>
            Caria dentară are 5 etape în care se dezvoltă, iar fiecare dintre
            aceste etape afectează câte un strat al dintelu
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between">
          <div className="max-w-[400px] w-full">
            <Image
              src="https://newsite.themed.ro/uploads/terapie/terapie-2.png"
              width={600}
              height={500}
              alt="stadiile cariei dentare"
              className="w-full object-cover"
            />
          </div>
          <div className="md:max-w-[650px] w-full">
            <InfoAccordion
              data={carieData.steps}
              oneColor="bg-[var(--primary)]"
              isSteps={true}
              
            />
          </div>
        </div>
      </section>
      <section className="p-4 max-w-[1320px] mx-auto flex flex-col md:flex-row gap-6 lg:px-0 lg:py-10">
        <div className="w-full md:max-w-[700px] *:mb-4 md:p-7 lg:px-0 lg:py-10">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-6 md:mb-10">
            Care sunt simptomele cariilor dentare?
          </AnimatedDiv>
          <p>
            Lăsate netratate, cariile se extind pe suprafața dintelui, erodează
            smalțul și pătrund în interiorul dintelui, afectând pulpa dentară.
          </p>
          <p>
            Pentru că atunci când procesul carios este în fază incipientă este
            posibil ca nici măcar să nu sesizezi că ai vreo problema dentară,
            echipa de medici stomatologi ai clinicii The Med recomandă
            controalele regulate de două ori pe an, precum și ședințele de
            profilaxie bianuale pentru igienizarea profesională a cavității
            bucale.
          </p>
          <p>
            Simptomele cariilor dentare variază, în funcție de numărul acestora
            și de localizarea lor. Dacă vorbim despre o carie incipientă, este
            posibil să nu aveți niciun simptom.
          </p>
          <p>
            Pe măsură ce degradarea devine mai mare, aceasta poate provoca
            simptome precum:
          </p>
        </div>
        <div className="bg-[var(--primary)] p-7 arrow-list-primary md:h-auto">
          <ul className="my-10">
            <li>
              Dureri ale dinților afectați, dar și dureri la nivelul dinților
              aflați în proximitatea cariei
            </li>
            <li>
              Sensibilitate dentară ce poate crește de la o durere ușoară la una
              foarte puternică atunci când consumi alimente sau lichide dulci,
              fierbinți sau reci
            </li>
            <li>
              Pete maro, negre sau alb gălbui pe suprafața dintelui care, rămase
              netratate, se pot transforma în cavități care se pot simți cu
              limba și observa cu ochiul liber
            </li>
            <li>Durere resimțită în procesul de masticație</li>
            <li>Respirație neplăcută persistentă</li>
          </ul>
        </div>
      </section>
      <section className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="max-w-[800px] w-full grid md:grid-cols-[repeat(2,400px)] grid-cols-1">
          {flipBoxData.map((item, index) => {
            return <FlipBox key={index} front={item.front}  back={item.back} frontColor={item.frontColor} backColor={item.backColor}/>;
          })}
          <div className="bg-[var(--primary)] flex items-center justify-center p-4">
            {/* <Image
            width={160}
            height={160}
              src="https://newsite.themed.ro/uploads/s4.svg"
              alt="smiley face"
            /> */}
          </div>
        </div>
        <div className="md:max-w-[500px] p-4 md:p-8 *:mb-4">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-6 md:mb-10 ">
            Soluții de tratament pentru caria dentară
          </AnimatedDiv>
          <p>
            În cazul în care resimți durere la nivelul unui dinte îți recomandăm
            să nu mai aștepți și să te prezinți în cel mai scurt timp posibil la
            medicul dentist.
          </p>

          <p>
            Vestea bună este că dacă te prezinți la timp la control, caria
            dentară poate fi tratată folosind:
          </p>
        </div>
      </section>
      <section className="max-w-[1320px] w-full mx-auto flex flex-col-reverse md:flex-row md:gap-6 justify-between items-center md:my-10">
        <div className="p-4 *:pb-4  md:max-w-[600px] lg:px-0">
          <AnimatedDiv element="h2" className="text-3xl md:text-5xl mb-6 md:mb-10">
            Este mai important să prevenim decât să tratăm
          </AnimatedDiv>
          <p>
            Este mai important să prevenim decât să tratăm, așadar rolul
            pacientului în menținerea unei bune sănătăți orale este crucial. Și
            este atât de simplu să ai grijă de gura ta acasă de două ori pe zi
            și să vii la medicul dentist de două ori pe an ca să te asiguri că
            ai dinți sănătoși!
          </p>
          <p>
            În plus, în clinica dentară The Med utilizăm cele mai noi tehnologii
            în igienizarea profesională, respectiv terapia ghidată a biofilmului
            EMS care ajută la curățarea optimă, nedureroasă și confortabilă a
            dinților în baza unui protocol personalizat in funcție de nivelul de
            tartru și placă bacteriană de pe dinții tăi.
          </p>
        </div>
        <AnimatedDiv className="overflow-hidden w-full p-4 md:max-w-[700px]">
          <Image
            src="https://newsite.themed.ro/uploads/terapie/terapie-3.png"
            alt="Chirurgie orala"
            width={600}
            height={400}
            className=" w-full object-cover object-left"
          />
        </AnimatedDiv>
      </section>
      <Testimonials />
      <Form />
    </main>
  );
}
