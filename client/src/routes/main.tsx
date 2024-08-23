import React from "react";
import Slider from "../components/Slider";
import { singlePostData, userData } from "../lib/dummydata";

const Main = () => {
  return (
    <div className="flex h-full">
      {/* LEFT SECTION */}
      <div className="w-3/5">
        <div className="pr-12">
          <Slider images={singlePostData.images} />
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="font-normal">{singlePostData.title}</h1>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <img src="/pin.png" alt="" className="h-4 w-4" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="w-fit rounded bg-yellow-200 p-1 text-xl font-light">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="rounde flex flex-col items-center justify-center gap-5 bg-yellow-100 px-12 font-semibold">
                <img
                  src={userData.img}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="mt-12 text-gray-800 leading-5">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-2/5">
        <div className="py-5"></div>
      </div>
    </div>
  );
};

export default Main;
