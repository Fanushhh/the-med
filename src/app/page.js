

import { Navbar } from "@/components/Navbar/Navbar";
import { Perks } from "@/components/Perks/Perks";
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Locations } from "@/components/Locations/Locations";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Footer } from "@/components/Footer/Footer";
export default function Home() {

  
  return (
    <main>
      <Navbar />
      <Hero />
      <Perks />
      <Services />
      <Locations />
      <Testimonials />
      <Footer />
    </main>
  );
}
