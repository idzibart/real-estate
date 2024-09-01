import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Layout() {
  return (
    <div className="ml-auto mr-auto flex h-screen max-w-[1366px] flex-col px-5 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Navbar />
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="ml-auto mr-auto flex h-screen max-w-[1366px] flex-col px-5 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
        <Navbar />
        <div className="h-[calc(100vh-100px)]">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
