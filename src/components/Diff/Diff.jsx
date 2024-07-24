"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export const ImageDifferenceSlider = ({ image1, image2 }) => {
  const [hoverPosition, setHoverPosition] = useState(50);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const newPosition = (x / width) * 100;
    setHoverPosition(newPosition);
  };

  return (
    
        <div className="p-2 border-2 border-[var(--primary)] flex items-center w-full flex-col md:flex-row gap-4">
            <div
              className="relative w-full md:w-2/3 overflow-hidden h-[300px] "
              onMouseMove={handleMouseMove}
            >
              <Image
                src={image1}
                width={500}
                height={300}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              />
              <Image
                src={image2}
                width={500}
                height={300}
                alt="Foreground"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                style={{ clipPath: `inset(0 0 0 ${hoverPosition}%)` }}
              />
              <div
                className="absolute top-0 w-[2px] h-full bg-white"
                style={{ left: `${hoverPosition}%` }}
              />
            </div>
            
                {/* <Link href="#" className="py-2 px-6 mx-auto text-white hover:rounded-3xl hover:bg-[var(--accent-hover)] rounded-3xl bg-[var(--accent)]">Vezi povestea</Link> */}
            
        </div>
    
  );
};

export default ImageDifferenceSlider;
