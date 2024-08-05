import React from "react";
import Navbar from "./components/Navbar";
import Home from "./routes/home";

function App() {
  return (
    <div className="m-auto h-screen max-w-[1366px] px-5 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
