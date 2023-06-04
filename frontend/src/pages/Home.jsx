import React from "react";
import Foooter from "../components/HomePart/footer";
import Navbar from "../components/HomePart/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen overflow-x-hidden w-[100vw]">
      <Navbar /> 
      <main className="mt-[100px] ">
        <Outlet />
      </main>
      <Foooter />
    </div>
  );
};

export default Home;
