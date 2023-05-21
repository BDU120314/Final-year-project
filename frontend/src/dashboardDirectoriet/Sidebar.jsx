import React from "react";
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import Foooter from "../components/HomePart/footer";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
    <div className="bg-blue-400 h-screen px-[20px] fixed top-0 left-0">
      <div className="px-[10px] py-[30px] flex justify-center items-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className=" text-white text-[15px] leading-5 font-extrabold cursor-pointer">
        Region Panel
        </h1>
      </div>
      <div className=" flex gap-[15px] items-center py-5 border-b-[1px] border-[#EDEDED]/[0.3]  hover:bg-gray-800 rounded-lg">
        <FaTachometerAlt className="text-white" />
        <p className="text-white text-[14px] font-bold leading-5 mr-16">Dashboard</p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-white/[0.4] text-[10px] font-extrabold leading-4">
          INTERFACE
        </p>
        <details>
          <summary class="flex cursor-pointer items-center justify-between py-2 text-white  hover:bg-blue-500 rounded-lg">
            <div class="flex items-center gap-2 mml-4 mr-2">
              <GrUserAdmin color="white" />
              <span class="text-sm font-bold">Zone </span>
            </div>
            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <FaChevronRight color="white" />
            </span>
          </summary>
          <nav aria-label="Teams Nav" class="mt-2 flex flex-col ">
            <Link
              to="/region_dashboard/register_zone"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white "
            >
              <span class="text-sm font-medium"> Register Zone</span>
            </Link>
            <Link
              to="/region_dashboard/manage_zone"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
            >
              <span class="text-sm font-medium"> Manage Zone </span>
            </Link>
          </nav>
        </details>
        <details>
          <summary class="flex cursor-pointer items-center justify-between py-2 text-white  hover:bg-blue-500 rounded-lg">
            <div class="flex items-center gap-2 mml-4 mr-2">
              <GrUserAdmin color="white" />
              <span class="text-sm font-bold">Disributor </span>
            </div>
            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <FaChevronRight color="white" />
            </span>
          </summary>
          <nav aria-label="Teams Nav" class="mt-2 flex flex-col ">
            <Link
              to="/region_dashboard/register_distributor"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
            >
              <span class="text-sm font-medium"> Register Distributor</span>
            </Link>
            <Link
              to="/region_dashboard/manage_distributor"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
            >
              <span class="text-sm font-medium"> Manage Distributor </span>
            </Link>
          </nav>
        </details>

        <div className="flex justify-between items-center gap-[10px] py-[8px] cursor-pointer  hover:bg-blue-500 rounded-lg">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="white" />
            <Link to="/region_dashboard/orders">
              <p className="text-white text-[14px] leading-5 font-normal">
                Order's
              </p>
            </Link>
          </div>
        </div>

        <details>
          <summary class="flex cursor-pointer items-center justify-between py-2 text-white hover:bg-blue-500 rounded-lg">
            <div class="flex items-center gap-2 mml-4 mr-2">
              <GrUserAdmin color="white" />
              <span class="text-sm font-bold">Report</span>
            </div>
            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <FaChevronRight color="white" />
            </span>
          </summary>
          <nav aria-label="Teams Nav" class="mt-2 flex flex-col ">
            <Link
              to="/region_dashboard/register"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
            >
              <span class="text-sm font-medium"> Add Report</span>
            </Link>
            <Link
              to="/region_dashboard/manage_distributor"
              class="flex items-center gap-2 mml-4 mr-2  hover:bg-blue-500 rounded-lg px-4 py-2 text-white"
            >
              <span class="text-sm font-medium"> Manage Report </span>
            </Link>
          </nav>
        </details>
        {/* <div className="flex justify-between items-center gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaWrench color="white" />
            <p className="text-white text-[14px] leading-5 font-normal">
              Report
            </p>
          </div>
          <FaChevronRight color="white" />
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-3 bg-red-200 h-12 mt-[100px] hover:bg-blue-500 rounded-lg cursor-pointer">
        <FiLogOut color="white" fontSize={28} />
        <p className="text-white text-[18px] leading-5">LogOut</p>
      </div>
    </div>
   
    </div>
    
  );
};
export default Sidebar;
