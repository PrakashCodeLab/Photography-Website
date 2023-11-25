"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SlideImage } from "./SliderData";

interface SliderProps {
  SliderData: SlideImage[];
}

const Silder = ({ SliderData }:SliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const NextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const preSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className="max-w-[1240px] mx-auto " id="gallery">
      <h1 className="text-4xl capitalize font-bold text-center ">gallery</h1>
      <div className="relative flex justify-center items-center p-4 border-blue-700">
        {SliderData.map((slide, index) => (
          <div
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000 "
                : "opacity-0"
            }
            key={index}
          >
          
              <FaArrowLeft onClick={preSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] bg-gray-950 rounded-full p-2"
                size={50}
              />
              <FaArrowRight 
              onClick={NextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] bg-gray-950 rounded-full p-2"
                size={50}
              />
              {index === current && (
                <div className="w-[100%] h-[400px] ">
                   <Image
                  src={slide.image}
                  className="max-w-[1200px]  rounded-xl h-[400px] object-cover"
                  width={1200}
                  height={400}
                  alt="img"
                />
                </div>
                
              )}
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default Silder;
