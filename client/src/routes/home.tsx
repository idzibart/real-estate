import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex h-full">
      {/* LEFT SECTION*/}
      <div className="w-full lg:w-3/5">
        <div className="flex h-full flex-col justify-start gap-12 lg:justify-center lg:pr-24">
          <h1 className="text-2xl font-bold md:text-4xl xl:text-5xl">
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

      {/* RIGHT SECTION*/}
      <div className="relative hidden w-2/5 items-center bg-secondary lg:block">
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
