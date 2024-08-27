import React from "react";
import Slider from "../components/Slider";
import { singlePostData, userData } from "../lib/dummydata";
import Map from "../components/Map";

const Main = () => {
  return (
    <div className="flex h-full">
      {/* LEFT SECTION */}
      <div className="w-3/5">
        <div className="pr-12">
          <Slider images={singlePostData.images} />
          <div className="mt-12">
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
              <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-yellow-100 px-12 font-semibold">
                <img
                  src={userData.img}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="mt-12 leading-5 text-gray-800">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex h-full w-2/5 overflow-y-auto bg-secondary">
        <div className="flex w-full flex-col gap-5 px-5">
          <p className="mb-2 text-lg font-bold">General</p>
          <div className="flex flex-col gap-5 rounded-lg bg-white px-2 py-5">
            <div className="flex items-center gap-2">
              <img src="/utility.png" alt="" className="icon" />
              <div>
                <span className="font-bold">Utilities</span>
                <p className="text-sm">Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/pet.png" alt="" className="icon" />
              <div>
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">Pets allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/fee.png" alt="" className="icon" />
              <div>
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">
                  Must have 3x rent in total household income
                </p>
              </div>
            </div>
          </div>
          <p className="mb-2 text-lg font-bold">Sizes</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 rounded-lg bg-white p-2">
              <img src="/size.png" alt="" className="icon" />
              <span className="font-bold"> 80sqft</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-2">
              <img src="/bed.png" alt="" className="icon" />
              <span className="font-bold"> 2 beds</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-2">
              <img src="/bath.png" alt="" className="icon" />
              <span className="font-bold"> 1 bathroom</span>
            </div>
          </div>
          <p className="mb-2 text-lg font-bold">Nearby Places</p>
          <div className="flex justify-between rounded-lg bg-white px-2 py-5">
            <div>
              <img src="/school.png" alt="" className="icon" />
              <div>
                <span className="font-bold">School</span>
                <p className="text-sm">250m away</p>
              </div>
            </div>
            <div>
              <img src="/pet.png" alt="" className="icon" />
              <div>
                <span className="font-bold">Bus Stop</span>
                <p className="text-sm">100m away</p>
              </div>
            </div>
            <div>
              <img src="/fee.png" alt="" className="icon" />
              <div>
                <span className="font-bold">Restaurant</span>
                <p className="text-sm">200m away</p>
              </div>
            </div>
          </div>
          <p className="mb-2 text-lg font-bold">Location</p>
          <div className="h-[200px] w-full">
            <Map items={[singlePostData]} />
          </div>
          <div className="flex justify-between">
            <button className="flex cursor-pointer items-center gap-1 rounded-xl border bg-white p-5">
              <img src="/chat.png" alt="" className="icon" />
              Send a message
            </button>
            <button className="flex cursor-pointer items-center gap-1 rounded-xl border bg-white p-5">
              <img src="/save.png" alt="" className="icon" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
