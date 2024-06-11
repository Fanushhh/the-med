"use client";
import React from "react";
const doctorData = [
  {
    id: 1,
    name: "Dr. Diana Duțu",
    role: "Coordonator Medical/Specialist Protetică dentară",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6906-jpg_UQ6C.webp",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur praesentium veniam obcaecati tempora natus ullam sunt, saepe deserunt aut illo possimus, laborum, recusandae modi enim nulla quae nobis corrupti ex incidunt explicabo! Ipsa quam doloribus deserunt tempora dicta facere quisquam ab earum asperiores, ad, dolore obcaecati sequi optio nemo minus ut aliquam magnam quibusdam architecto ipsum soluta. Error, magnam.",
  },
  {
    id: 2,
    name: "Dr. Flavia Fugel",
    role: "Specialist chirurgie dento-alveolară",
    img: "https://site.themed.ro/uploads/images/10-26-2023-themed6897-jpg_VM0N.webp",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur praesentium veniam obcaecati tempora natus ullam sunt, saepe deserunt aut illo possimus, laborum, recusandae modi enim nulla quae nobis corrupti ex incidunt explicabo! Ipsa quam doloribus deserunt tempora dicta facere quisquam ab earum asperiores, ad, dolore obcaecati sequi optio nemo minus ut aliquam magnam quibusdam architecto ipsum soluta. Error, magnam.",
  },
];


export const TeamHero = () => {
  const [selected, setSelected] = React.useState(null);
  const handleClick = (id) => {
    const currentDoctor = doctorData.filter((data) => data.id === id);
    setSelected(currentDoctor);
  };
  console.log(selected);
  return (
    <section className="min-h-[60vh] py-10 bg-[var(--primary)]">
      <h1 className="py-10 md:py-20 text-center text-5xl">
        Cunoaste echipa <span className="uppercase">the med</span>
      </h1>
      {selected && (
        <div className="text-center">
          <h2 className="text-3xl">{selected[0].name}</h2>
          <div className=" p-4 my-4 md:my-6 flex-col text-center md:text-left md:flex-row flex md:justify-between items-center md:items-start  gap-4 md:max-w-full md:w-[1320px] max-w-[500px] mx-auto">
            <img
              className="max-w-[500px] w-full "
              src={selected[0].img}
              alt={selected.name}
            />
            <div className="*:mb-6 ">
              <p className="text-2xl text-[var(--accent)]">
                {selected[0].role}
              </p>
              <p>{selected[0].description}</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center gap-3 p-4">
        {doctorData.map((doctor) => {
          return (
            <div key={doctor.id} className=" w-[500px] max-w-full *:mb-2">
              <img
                src={doctor.img}
                alt="Poza profil Dr. Diana Duțu"
                onClick={() => handleClick(doctor.id)}
                className="cursor-pointer"
              />
              <div className="text-center ">
                <p className="text-2xl font-bold">{doctor.name}</p>
                <p className="text-[var(--accent)]">{doctor.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};
