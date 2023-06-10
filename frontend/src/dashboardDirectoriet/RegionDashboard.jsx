import React from "react";
import { Outlet } from "react-router-dom";
import RegionSideBar from "./RegionSideBar";
import RegionHeader from "./RegionHeader";

const RegionDashboard = () => {
  return (
    <div className="flex ">
      <div className="lg:basis-[18%] basis-0 h-[100vh] border w-full">
        <RegionSideBar />
      </div>
      <div className="basis-[100%] lg:basis-[82%] border">
        <RegionHeader />
        <div className="mt-[70px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default RegionDashboard;
