import { Differences } from "@/components/Differences/Differences";
import { GoodToKnow } from "@/components/GoodToKnow/Good-to-know";
import { Help } from "@/components/Help/Help";
import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TwoColumn } from "@/components/Two-Column/two-column";

export default async function FilosofiaTheMedPage() {
  return (
   <main>
    <Hero hasButtons={false} heroHeading="Filosofia" heroSubHead="The med" hasUpper={true}/>
    <TwoColumn />
    <Differences />
    <GoodToKnow />
    <Help />
    <Testimonials />
   </main>
  );
}