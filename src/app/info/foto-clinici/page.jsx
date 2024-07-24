import { Gallery } from "@/components/Gallery/Gallery";
import { Help } from "@/components/Help/Help";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Fotografii Clinici The Med - Vizitează-ne Virtual",
  description: "Explorează clinica The Med prin galeria noastră de fotografii. Vezi mediul modern și confortabil în care oferim tratamente stomatologice de top. Vizitează-ne și descoperă cum putem avea grijă de zâmbetul tău.",
};

const bucurestiClinic = {
  id: "clinica-bucuresti-1",
  name: "Clinica THE MED București",
  imgs: [
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-thumb-1.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-thumb-2.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-thumb-3.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-thumb-4.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-thumb-5.jpg",
  ],
  fullSize:[
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-1.jpeg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-2.jpeg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-3.jpeg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-4.jpeg",
    "https://newsite.themed.ro/uploads/galerie-foto/galerie-buc-5.jpeg",
  ],
  address:["Str. Verzisori, nr. 74, Tineretului", "Luni - Vineri: 9AM–21PM", "40 743 754 125"]
};

const slatinaClinic = {
  id: "clinica-slatina-1",
  name: "Clinica THE MED Slatina",
  imgs: [
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-thumb-1.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-thumb-2.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-thumb-3.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-thumb-4.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-thumb-5.jpg",
  ],
  fullSize:[
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-img-1.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-img-2.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-img-3.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-img-4.jpg",
    "https://newsite.themed.ro/uploads/galerie-foto/slatina/slatina-img-5.jpg",
  ],
  address:["Strada Prelungirea Pitesti, nr.1B", "Luni - Vineri: 9AM–21PM", "+40 749 381 050"]
};

export default function ClinicsPage() {
  return (
    <main className="">
      <div className="bg-[var(--primary)] md:py-20">
        <div className="max-w-[1700px] w-full mx-auto p-4 ">
          <h1 className="my-4 mb-6 md:mb-20 pt-24 text-3xl md:text-5xl">
            Atmosfera din{" "}
            <span className="text-[var(--accent)]">clinicile THE MED</span> în
            imagini
          </h1>
        </div>
        <Gallery clinic={bucurestiClinic} />
        </div>
        <div className="my-10">
          <Gallery clinic={slatinaClinic} />
        </div>
      
      <Help />
      <Testimonials />
    </main>
  );
}
