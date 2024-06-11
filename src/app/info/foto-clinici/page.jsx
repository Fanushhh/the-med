"use client";
import React from "react";
import LightboxComponent from "@/components/Lightbox/Lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import Image from "next/image";

const clinics = [
  {
    id: "clinica-bucuresti-1",
    name: "Foto clinica Bucuresti",
    imgs: [
      "https://site.themed.ro/uploads/images/locatie-bucuresti-3-jpg_P0GV.webp",
      "https://site.themed.ro/uploads/images/locatie-bucuresti-2-jpg_KQ0Z.webp",
      "https://site.themed.ro/uploads/images/locatie-bucuresti-1-jpg_KGPN.webp",
    ],
  },
  {
    id: 'clinica-slatina-1',
    name: "Foto clinica Slatina",
    imgs: [
      "https://site.themed.ro/uploads/images/locatie-slatina-2-jpg_EO3S.webp",
      "https://site.themed.ro/uploads/images/locatie-slatina-3-jpg_BJ74.webp",
    ],
  },
];

export default function ClinicsPage() {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slides, setSlides] = React.useState([]);

  const handleClick = (index, clinic) => {
    setOpen(true);
    setCurrentIndex(index);
    setSlides(clinic.imgs.map((img) => ({ src: img })));
  };

  return (
    <main className="max-w-[1320px] w-full mx-auto p-4">
      <div className="mt-32 text-center">
        <h1 className="my-4">Foto clinici</h1>
        <p>
          The Med este locul în care o echipă medicală cu experiență vastă în
          tratarea cazurilor dentare cu afecțiuni complexe, te așteaptă pentru
          a-ți reda sănătatea și frumusețea zâmbetului. În clinicile noastre
          pacienții beneficiază de toate serviciile stomatologice în același
          loc, inclusiv de un laborator dentar digital in-house.
        </p>
      </div>
      <div className="my-6">
        {clinics.map((clinic) => {
          return (
            <div key={clinic.id}>
              <h2 className="my-6 text-2xl text-center">{clinic.name}</h2>
              <div className="flex gap-4 justify-center flex-wrap ">
                {clinic.imgs.map((img, index) => {
                  return (
                    <Image
                    className="cursor-pointer"
                      onClick={() => handleClick(index, clinic)}
                      key={index}
                      src={img}
                      alt={clinic.name}
                      width={390}
                      height={280}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {slides && (
        <LightboxComponent
          plugins={[Slideshow, Fullscreen, Zoom, Thumbnails]}
          slides={slides}
          currentIndex={currentIndex}
          isOpen={open}
          setOpen={setOpen}
        />
      )}
      <Testimonials />
    </main>
  );
}
