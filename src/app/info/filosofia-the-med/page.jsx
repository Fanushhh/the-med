import { Differences } from "@/components/Differences/Differences";
import { GoodToKnow } from "@/components/GoodToKnow/Good-to-know";
import { Help } from "@/components/Help/Help";
import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TwoColumn } from "@/components/Philosophy/two-column";

export const metadata = {
  title: "Filosofia The Med - Angajamentul Nostru pentru Sănătatea Ta Orală",
  description: "Află despre filosofia și valorile care ghidează The Med în oferirea de servicii stomatologice de excelență. Descoperă angajamentul nostru pentru îngrijirea pacientului și inovația continuă în stomatologie.",
};


export default async function FilosofiaTheMedPage() {
  return (
   <main>
    <Hero heroImg="https://newsite.themed.ro/uploads/home-hero.jpg" hasButtons={false} heroHeading="Filosofia" heroSubHead="The med" hasUpper={true}/>
    <TwoColumn />
    <Differences />
    <GoodToKnow />
    <Help />
    <Testimonials />
   </main>
  );
}