import React from "react";
import { Outlet } from "react-router-dom";
import RegionSideBar from "./RegionSideBar";
import RegionHeader from "./RegionHeader";

const RegionDashboard = () => {
  return (
    <div className="flex ">
      <div className="basis-[18%] h-[100vh] border">
        <RegionSideBar />
      </div>
      <div className="basis-[82%] border">
        <RegionHeader />
        <div className="mt-[70px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default RegionDashboard;
