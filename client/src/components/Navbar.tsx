import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-24 items-center justify-between">
      <div className="flex w-3/5 items-center gap-12">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold transition-all duration-300 hover:scale-105"
        >
          <img src="" alt="" />
          <span>Homek</span>
        </a>
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
      </div>
      <div className="flex h-full w-2/5 items-center justify-end gap-12">
        <a href="" className="transition-all duration-300 hover:scale-105">
          Sign in
        </a>
        <a
          href=""
          className="bg-yellow-300 px-3 py-1 transition-all duration-300 hover:scale-105"
        >
          Sign uo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
