import React from "react";
import { Outlet } from "react-router-dom";
import ZoneSideBar from "./ZoneSideBar";
import ZoneHeader from "./ZoneHeader";

const ZoneDashboard = () => {
  return (
    <div className="flex ">
      <div className="basis-[17%] h-[100vh] border">
        <ZoneSideBar />
      </div>
      <div className="basis-[83%] border">
        <ZoneHeader />
        <div className="mt-[70px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ZoneDashboard;
