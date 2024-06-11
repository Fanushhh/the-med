import { InfoAccordion } from "@/components/InfoAccordion/Accordion";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function InfoPage() {
  return (
    <main>
      <div className="mt-32 text-center">
        <h1>Informatii pacienti</h1>
        <p>Intrebarile tale, raspunsurile noastre</p>
      </div>
      <InfoAccordion />
      <Testimonials />
    </main>
  );
}
