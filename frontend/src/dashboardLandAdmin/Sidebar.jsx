import React, { useState, useEffect } from "react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleScreenResize = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleScreenResize);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-green-400 px-[33px] fixed top-0 left-0
     ${isSmallScreen && !isSidebarOpen ? 'w-24' : 'w-[220px]'}
    ${isSmallScreen && !isSidebarOpen ? 'h-[60px]' : 'h-screen'}
    `}>
      {isSmallScreen && (
        <div className="flex items-center justify-between py-[15px] border-b-[1px] border-[#EDEDED]/[0.3] rounded-2xl">
          {/* <h1 className="text-white text-[15px] leading-5 font-extrabold cursor-pointer">
            Land Admin
          </h1> */}
          {!isSidebarOpen ? (
            <FiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={toggleSidebar}
            />
          ):(
            <FiX
              className="text-white text-3xl cursor-pointer"
              onClick={toggleSidebar}
            />
          ) }
        </div>
      )}
      {!isSmallScreen || (isSmallScreen && isSidebarOpen) ? (
        <div>
          <div className="px-[10px] py-[35px] flex justify-center items-center border-b-[1px] border-[#EDEDED]/[0.3]">
            <h1 className="text-white text-[15px] leading-5 font-extrabold cursor-pointer">
              Land Admin
            </h1>
          </div>
          <div className="py-5">
            <Link
              to="/landAdminDashboard"
              className="block text-white text-[14px] py-2 px-4 hover:bg-green-800 rounded-lg"
            >
              Dashboard
            </Link>
            <div className="py-2">
              <p className="text-white/[0.4] text-[10px] font-extrabold leading-4">
                INTERFACE
              </p>
              <nav aria-label="Teams Nav" className="mt-2">
                <Link
                  to="/landAdminDashboard/register"
                  className="block text-white text-[14px] py-2 px-4 hover:bg-green-800 rounded-lg"
                >
                  Register Farmer
                </Link>
                <Link
                  to="/landAdminDashboard"
                  className="block text-white text-[14px] py-2 px-4 hover:bg-green-800 rounded-lg"
                >
                  Manage Farmer
                </Link>
              </nav>
            </div>
            <div className="py-2">
              <p className="text-white/[0.4] text-[10px] font-extrabold leading-4">
                REPORT
              </p>
              <nav aria-label="Teams Nav" className="mt-2">
                <Link
                  to="/landAdminDashboard/create"
                  className="block text-white text-[14px] py-2 px-4 hover:bg-green-800 rounded-lg"
                >
                  Add Report
                </Link>
                <Link
                  to="/landAdminDashboard/manage_report"
                  className="block text-white text-[14px] py-2 px-4 hover:bg-green-800 rounded-lg"
                >
                  Manage Report
                </Link>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
