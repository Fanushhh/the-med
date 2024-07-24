import ImageDifferenceSlider from "@/components/Diff/Diff";
import { Help } from "@/components/Help/Help";
import { Hero } from "@/components/Hero/Hero";
import { Testimonials } from "@/components/Testimonials/Testimonials";

// const cazuriData = [
//   {
//     image1: "https://site.themed.ro/images/c1.jpg",
//     image2: "https://site.themed.ro/images/c2.jpg",
//   },
//   {
//     image1: "https://site.themed.ro/images/c1.jpg",
//     image2: "https://site.themed.ro/images/c2.jpg",
//   },
//   {
//     image1: "https://site.themed.ro/images/c1.jpg",
//     image2: "https://site.themed.ro/images/c2.jpg",
//   },
//   {
//     image1: "https://site.themed.ro/images/c1.jpg",
//     image2: "https://site.themed.ro/images/c2.jpg",
//   },
// ];

export default function CazuriPage() {
  return (
    <main>
      <Hero
        center={true}
        heroHeading="Zâmbete"
        heroSubHead="recâștigate"
        subTitle="Află povestea din spatele zâmbetelor
noi ale pacienților noștri
"
      />
      {/* <section className="max-w-[1900px] w-full p-4 mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center my-20 gap-8">
        {cazuriData.map((item, index) => (
          <ImageDifferenceSlider
            key={index}
            image1={item.image1}
            image2={item.image2}
          />
        ))}
      </section> */}
      <Help />
      <Testimonials />
    </main>
  );
}
