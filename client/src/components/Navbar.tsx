import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex h-24 items-center justify-between">
      <div className="flex w-3/5 items-center gap-12">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold transition-all duration-300 hover:scale-105"
        >
          <img src="" alt="" />
          <span className="md:hidden lg:block">Homek</span>
        </a>
        <a
          href=""
          className="hidden transition-all duration-300 hover:scale-105 md:block"
        >
          Home
        </a>
        <a
          href=""
          className="hidden transition-all duration-300 hover:scale-105 md:block"
        >
          About
        </a>
        <a
          href=""
          className="hidden transition-all duration-300 hover:scale-105 md:block"
        >
          Contact
        </a>
        <a
          href=""
          className="hidden transition-all duration-300 hover:scale-105 md:block"
        >
          Agents
        </a>
      </div>
      <div className="flex h-full w-2/5 items-center justify-end gap-12">
        <a
          href=""
          className="hidden transition-all duration-300 hover:scale-105 md:block"
        >
          Sign in
        </a>
        <a
          href=""
          className="hidden bg-yellow-300 px-3 py-1 transition-all duration-300 hover:scale-105 md:block"
        >
          Sign up
        </a>
      </div>
      {/* SIDEBAR */}
      <div className="z-50 md:hidden">
        <img
          src="/menu.png"
          alt=""
          className="z-auto h-8 w-8 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>
      <div
        className={`absolute top-0 flex h-full w-1/2 flex-col items-center justify-center bg-black text-lg text-white transition-all duration-1000 md:hidden ${
          open ? "-right-1/2" : "-right-0"
        }`}
      >
        <a href="" className="transition-all duration-300 hover:scale-105">
          Home
        </a>
        <a href="" className="transition-all duration-300 hover:scale-105">
          About
        </a>
        <a href="" className="transition-all duration-300 hover:scale-105">
          Contact
        </a>
        <a href="" className="transition-all duration-300 hover:scale-105">
          Agents
        </a>
        <a href="" className="transition-all duration-300 hover:scale-105">
          Sign in
        </a>
        <a
          href=""
          className="bg-yellow-300 px-3 py-1 transition-all duration-300 hover:scale-105"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
