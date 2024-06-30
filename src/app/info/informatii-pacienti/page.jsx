import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { faq } from "@/components/InfoAccordion/accordionData";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Informații pentru Pacienți - The Med",
  description: "Găsește toate informațiile necesare pentru vizita ta la The Med. De la ghiduri pre- și post-tratament până la detalii administrative, suntem aici pentru a-ți oferi suportul necesar.",
};


export default function InfoPage() {
  return (
    <main>
      <div className="mt-40 text-center">
        <h1>Informatii pacienti</h1>
        <p>Intrebarile tale, raspunsurile noastre</p>
      </div>
      <InfoAccordion data={faq} isSteps={false}/>
      <Testimonials />
    </main>
  );
}
