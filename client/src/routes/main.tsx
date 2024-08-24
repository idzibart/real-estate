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
              <div className="rounde flex flex-col items-center justify-center gap-5 bg-yellow-100 px-12 font-semibold">
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
      <div className="flex w-2/5 bg-secondary">
        <div className="flex flex-col gap-5 py-5">
          <p className="text-lg font-bold mb-2">General</p>
          <div>
            <div>
              <img src="/utility.png" alt="" className="icon" />
              <div>
                <span>Uyilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div>
              <img src="/pet.png" alt="" className="icon" />
              <div>
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div>
              <img src="/fee.png" alt="" className="icon" />
              <div>
                <span>Property Fees</span>
                <p>Must have 3x rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-bold mb-2">Sizes</p>
          <div>
            <div>
              <img src="/size.png" alt="" className="icon" />
              <span>80sqft</span>
            </div>
            <div>
              <img src="/bed.png" alt="" className="icon" />
              <span>2 beds</span>
            </div>
            <div>
              <img src="/bath.png" alt="" className="icon" />
              <span>1 bathroom</span>
            </div>
            <p className="text-lg font-bold mb-2">Nearby Places</p>
            <div>
              <div>
                <img src="/school.png" alt="" className="icon" />
                <div>
                  <span>School</span>
                  <p>250m away</p>
                </div>
              </div>
              <div>
                <img src="/pet.png" alt="" className="icon" />
                <div>
                  <span>Bus Stop</span>
                  <p>100m away</p>
                </div>
              </div>
              <div>
                <img src="/fee.png" alt="" className="icon" />
                <div>
                  <span>Restaurant</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
            <p className="text-lg font-bold mb-2">Location</p>
            <div>
              <Map items={[singlePostData]} />
            </div>
            <div>
              <button>
                <img src="/chat.png" alt="" className="icon" />
              </button>
              <button>
                <img src="/save.png" alt="" className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
