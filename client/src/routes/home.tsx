import React from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="w-full lg:w-3/5">
        <div className="flex h-full flex-col justify-center gap-12 pr-24">
          <h1 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p>
            Voluptate officia, ipsa enim explicabo animi dolore quibusdam ut,
            molestias cupiditate nesciunt iste alias commodi! Vel voluptatem
            fugit, sit praesentium dicta consequuntur.
          </p>
          <SearchBar />
          <div className="flex justify-between">
            <div>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div>
              <h1>+200</h1>
              <h2>Award Gained</h2>
            </div>
            <div>
              <h1>1200+</h1>
              <h2>Property Read</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary relative hidden w-2/5 items-center lg:block">
        <img
          src="/bg.png"
          alt=""
          className="absolute right-0 w-[115%] max-w-none"
        />
      </div>
    </div>
  );
};

export default Home;
