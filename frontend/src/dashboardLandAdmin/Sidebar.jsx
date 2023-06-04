import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import { FaTachometerAlt, FaRegEdit, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import logo from "../assets/logo.jpg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();
  const [openLink, setOpenLink] = useState(""); // State to track the open link

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLinkClick = (link) => {
    setOpenLink((prevLink) => (prevLink === link ? "" : link)); // Toggle open/close the link
  };

  const handleLinkItemClick = () => {
    setOpenLink(""); // Reset openLink state to close the dropdown
  };

  return (
    <>
      {isLogin && (
        <div className="bg-green-400 h-screen w-[17%] flex justify-top items-center flex-col fixed top-0 left-0">
          <div className="pt-10 flex justify-center items-center flex-col border-b-[5px] border-gray-200">
            <div className="flex  items-center gap-3 justify-center">
              <div className="w-[64px] h-[64px] rounded-full  bg-[#4E73DF]">
                <img
                  src={logo}
                  className="rounded-full object-cover"
                  alt="logo"
                />
              </div>
              <p color="white"> {user && user.user_name}</p>
            </div>
          </div>
          <div className=" flex gap-[15px] items-center py-5 border-b-[1px] border-[#EDEDED]/[0.3]">
            <FaTachometerAlt className="text-white" fontSize={32} />
            <p className="text-white text-[18px] font-bold leading-5">
              Dashboard
            </p>
          </div>
          <div className="pt-5 border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col justify-center items-center gap-5">
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 px-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "farmers" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("farmers")}
            >
              <div className="flex items-center gap-2">
                <GrUserAdmin color="white" fontSize={32} />
                <span className="text-[18px] font-bold">Farmers</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={
                    openLink === "farmers" ? "transform rotate-90" : ""
                  }
                />
              </span>
            </div>
            {openLink === "farmers" && (
              <nav
                aria-label="Farmers Nav"
                className="mt-2 gap-4 items-center flex flex-col"
              >
                <Link
                  to="/landAdminDashboard/register"
                  className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Register Farmer</span>
                </Link>
                <Link
                  to="/landAdminDashboard/manageFarmers"
                  className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Farmer</span>
                </Link>
              </nav>
            )}

            <div
              className={`flex cursor-pointer items-center justify-between gap-10 py-1 hover:bg-green-300 px-[15px] hover:rounded-md text-white ${
                openLink === "reports" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("reports")}
            >
              <div className="flex items-center gap-2">
                <FaRegEdit color="gray-400" fontSize={32} />
                <span className="text-[18px] font-bold">Reports</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={
                    openLink === "reports" ? "transform rotate-90" : ""
                  }
                />
              </span>
            </div>
            {openLink === "reports" && (
              <nav
                aria-label="Reports Nav"
                className="mt-2 flex flex-col gap-4"
              >
                <Link
                  to="/landAdminDashboard/create"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Add Report</span>
                </Link>
                <Link
                  to="/landAdminDashboard/manageReport"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Report</span>
                </Link>
              </nav>
            )}
          </div>
          <div
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 bg-red-200 h-10 px-5 mt-[70px] rounded-md cursor-pointer"
          >
            <FiLogOut color="white" fontSize={28} />
            <p className="text-white text-[18px] leading-5">LogOut</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
