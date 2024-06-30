"use client";
import React from "react";
import { AnimatedDiv } from "../AnimatedDiv/AnimatedDiv";
import Image from "next/image";
export default function TeamMember({doctors, gridContainer}) {

    const [selected, setSelected] = React.useState(null);
    const detailsRef = React.useRef(null);
    const handleClick = (id) => {
      
      const currentDoctor = doctors.filter((data) => data._id === id);
      setSelected(currentDoctor);
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  return (
    <div>
      {selected && (
        <div className="text-center" ref={detailsRef}>
          <h2 className="md:text-3xl">{selected.name}</h2>
          <div className=" p-4 my-4 md:my-6 flex-col text-center md:text-left md:flex-row flex md:justify-between items-center md:items-start  gap-4 md:max-w-full md:w-[1320px] max-w-[500px] mx-auto">
            <Image
              width={700}
              height={500}
              className="rounded-3xl"
              src={`https://dev.themed.ro/storage/uploads${selected[0].profilePhoto.path}`}
              alt={selected[0].name}
            />

            <div className="*:mb-6 ">
              <p className="text-2xl text-[var(--accent)]">
                {selected[0].title}
              </p>
              <p>{selected[0].Descriere}</p>
              {selected[0].cv && (
                <a
                  href={`https://dev.themed.ro/storage/uploads${selected[0].cv.path}`}
                  target="_blank"
                  className="bg-[var(--accent)] py-2 px-4 text-white cursor-pointer hover:bg-[var(--accent-hover)] hover:border-b-transparent"
                >
                  Vezi CV
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={`${gridContainer ? gridContainer : 'flex flex-col items-center md:flex-row md:justify-center md:items-center gap-3 p-4'}`}>
        {doctors.map((doctor) => {
          return (
            <AnimatedDiv
              key={doctor._id}
              className={`${gridContainer ? ' max-w-full grid-item' : ' w-[500px] max-w-full *:mb-2 relative '}`}
            >
              <Image
                width={500}
                height={500}
                src={`https://dev.themed.ro/storage/uploads${doctor.profilePhoto.path}`}
                alt={doctor.name}
                onClick={() => handleClick(doctor._id)}
                className="cursor-pointer"
              />
              <div className="text-center ">
                <p className="text-xl font-bold my-2">{doctor.name}</p>
                <p className="text-[var(--accent)] line-clamp-1">{doctor.title}</p>
              </div>
            </AnimatedDiv>
          );
        })}
      </div>
    </div>
  );
}
