import React from "react";
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-green-400 h-screen px-[25px] fixed top-0 left-0 ">
      <div className="px-[10px] py-[30px] flex justify-center items-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className=" text-white text-[15px] leading-5 font-extrabold cursor-pointer">
          Woreda Panel
        </h1>
      </div>
      <div className=" flex gap-[15px] items-center py-5 border-b-[1px] border-[#EDEDED]/[0.3]  hover:bg-gray-900 rounded-lg">
        <FaTachometerAlt className="text-white" />
        <p className="text-white text-[14px] font-bold leading-5">Dashboard</p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ">
        <p className="text-white/[0.4] text-[10px] font-extrabold leading-4">
          INTERFACE
        </p>
        <details>
          <summary class="flex cursor-pointer items-center justify-between py-2 text-white hover:bg-green-500 rounded-lg w-40">
            <div class="flex items-center gap-2 ml-4 mr-2">
              <GrUserAdmin color="white" />
              <span class="text-sm font-bold "> land Admin </span>
            </div>
            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <FaChevronRight color="white" />
            </span>
          </summary>
          <nav aria-label="Teams Nav" class="mt-2 flex flex-col ">
            <Link
              to="/dashboard_woreda/register"
              class="flex items-center gap-2 px-4 py-2 text-white  hover:bg-green-500 rounded-lg"
            >
              <span class="text-sm font-medium"> Register Admin</span>
            </Link>
            <Link
              to="/dashboard_woreda/manageland"
              class="flex items-center gap-2 px-4 py-2 text-white  hover:bg-green-500 rounded-lg"
            >
              <span class="text-sm font-medium"> Manage admin </span>
            </Link>
          </nav>
        </details>

        <div className="flex justify-between items-center gap-[10px] py-2 cursor-pointer  hover:bg-green-500 rounded-lg ">
          <div className="flex items-center gap-[10px]  ml-4 mr-2" >
            <FaRegSun color="white" />
            <Link to="/dashboard_woreda/orders">
              <p className="text-white text-[14px] leading-5 font-bold ">
                Order's
              </p>
            </Link>
          </div>
        </div>

        <details>
          <summary class="flex cursor-pointer items-center justify-between py-2 text-white  hover:bg-green-500 rounded-lg">
            <div class="flex items-center gap-2 ml-4 mr-2">
              <GrUserAdmin color="white" />
              <span class="text-sm font-bold">Report</span>
            </div>
            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <FaChevronRight color="white" />
            </span>
          </summary>
          <nav aria-label="Teams Nav" class="mt-2 flex flex-col ">
            <a
              href="sd#"
              class="flex items-center gap-2 px-4 py-2 text-white  hover:bg-green-500 rounded-lg"
            >
              <span class="text-sm font-medium">Add report </span>
            </a>
            <a
              href="sd#"
              class="flex items-center gap-2 px-4 py-2 text-white  hover:bg-green-500 rounded-lg"
            >
              <span class="text-sm font-medium"> Manage report </span>
            </a>
          </nav>
        </details>
      </div>
      <div className="flex items-center justify-center gap-3 bg-red-200 h-12 mt-[100px] hover:bg-green-500 rounded-lg cursor-pointer" >
        <FiLogOut color="white" fontSize={28} />
        <p className="text-white text-[18px] leading-5">LogOut</p>
      </div>
    </div>
  );
};
export default Sidebar;
