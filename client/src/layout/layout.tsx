import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="m-auto h-screen max-w-[1366px] px-5 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Navbar />
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;