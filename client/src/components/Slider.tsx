import React, { useState } from "react";
import { SliderProps } from "../lib/types";

const Slider = ({ images }: SliderProps) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: "left" | "right") => {
    if (imageIndex !== null) {
      if (direction === "left") {
        if (imageIndex === 0) {
          setImageIndex(images.length - 1);
        } else {
          setImageIndex(imageIndex - 1);
        }
      } else {
        if (imageIndex === images.length - 1) {
          setImageIndex(0);
        } else {
          setImageIndex(imageIndex + 1);
        }
      }
    }
  };

  return (
    <div className="flex h-[350px] w-full gap-5">
      {/* FULL SLIDER */}
      {imageIndex !== null && (
        <div className="absolute left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-between bg-black">
          <div
            className="flex w-1/12 cursor-pointer items-center justify-center"
            onClick={() => changeSlide("left")}
          >
            <img src="/arrow.png" alt="" className="w-[50px]" />
          </div>
          <div>
            <img
              src={images[imageIndex]}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="flex w-1/12 rotate-180 cursor-pointer items-center justify-center"
            onClick={() => changeSlide("right")}
          >
            <img src="/arrow.png" alt="" className="w-[50px]" />
          </div>
          <div
            className="absolute right-0 top-0 cursor-pointer p-12 text-4xl font-bold text-white"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}

      {/* ONPAGE IMAGES */}
      <div className="w-3/4">
        <img
          src={images[0]}
          alt=""
          className="h-full w-full cursor-pointer rounded-md object-cover"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="flex w-1/4 flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            className="h-[100px] w-full cursor-pointer rounded-md object-cover"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
