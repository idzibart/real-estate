import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex h-24 items-center justify-between">
      {/* LEFT SECTION */}
      <div className="flex w-3/5 items-center gap-12">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold transition-all duration-300 hover:scale-105"
        >
          <img src="" alt="" />
          <span className="md:hidden lg:block">Homek</span>
        </a>
        <a href="" className="nav-link">
          Home
        </a>
        <a href="" className="nav-link">
          About
        </a>
        <a href="" className="nav-link">
          Contact
        </a>
        <a href="" className="nav-link">
          Agents
        </a>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex h-full w-2/5 items-center bg-secondary justify-end gap-12">
        <a href="" className="nav-link">
          Sign in
        </a>
        <a href="" className="nav-link hidden bg-yellow-300 px-3 py-1">
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
        <a href="" className="sidebar-link">
          Home
        </a>
        <a href="" className="sidebar-link">
          About
        </a>
        <a href="" className="sidebar-link">
          Contact
        </a>
        <a href="" className="sidebar-link">
          Agents
        </a>
        <a href="" className="sidebar-link">
          Sign in
        </a>
        <a href="" className="sidebar-link bg-yellow-300">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
