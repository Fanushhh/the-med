

import { Perks } from "@/components/Perks/Perks";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Locations } from "@/components/Locations/Locations";
import { Testimonials } from "@/components/Testimonials/Testimonials";
export default function Home() {

  
  return (
    <main>
      
      <Hero hasButtons={true} heroHeading="Nimic imposibil
" heroSubHead="pentru zâmbetul tau" hasUpper={false}/>
      <Perks />
      <Services />
      <Locations />
      <Testimonials />
      
    </main>
  );
}
