import React from "react";
import Slider from "../components/Slider";

const Main = () => {
  return (
    <div className="flex h-full">
      {/* LEFT SECTION */}
      <div className="w-3/5">
        <div className="pr-12">
          <Slider />
          <div>
            <div></div>
            <div></div>
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
