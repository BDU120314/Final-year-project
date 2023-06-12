import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin, GrUserWorker } from "react-icons/gr";
import { FaTachometerAlt, FaRegEdit, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";
import { logout } from "../redux/reducers/auth";
import { GiVillage } from "react-icons/gi";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { RiFolderReceivedFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  const [openLink, setOpenLink] = useState(""); // State to track the open link
  const [showSidebar, setShowSidebar] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLinkClick = (link) => {
    setOpenLink((prevLink) => (prevLink === link ? "" : link)); // Toggle open/close the link
  };

  const handleLinkItemClick = () => {
    setOpenLink("");
    if (showSidebar) {
      setShowSidebar(false);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {isLogin && (
        <>
          <div className="hidden lg:flex bg-[#3d3d75] h-full w-[18%] flex-col fixed top-0 left-0">
          <div className="flex gap-[15px] items-center pb-5 border-b-[1px] bg-slate-400 w-[100%] pt-5 border-[#EDEDED]/[0.3]">
             <FaTachometerAlt className="text-white" fontSize={32} />
              <p className="text-white text-[18px] font-bold leading-5">
                woreda Admin
              </p>
            </div>

            <div className="pt-5 border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col justify-start items-start gap-6">
              <div
                className={`flex cursor-pointer items-center hover:bg-gray-300 px-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "kebele" ? "bg-gray-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("kebele")}
              >
                <div className="flex items-center gap-2">
                  <GiVillage color="white" fontSize={32} />
                  <span className="text-[16px] font-bold">kebele</span>
                </div>
                <span className="shrink-0 transition duration-300">
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "kebele" ? "transform rotate-90" : ""
                    }
                  />
                </span>
              </div>
              {openLink === "kebele" && (
                <nav
                  aria-label="Farmers Nav"
                  className="mt-2 gap-4 items-center flex flex-col"
                >
                  <Link
                    to="/woredaDashboard/addkebele"
                    className="flex items-center gap-2 hover:bg-gray-300 px-[25px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Add Kebele</span>
                  </Link>
                  <Link
                    to="/woredaDashboard/managekebele"
                    className="flex items-center gap-2 py-1 hover:bg-gray-300 px-[25px] hover:rounded-md text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Kebele</span>
                  </Link>
                </nav>
              )}
              <div
                className={`flex cursor-pointer items-center hover:bg-gray-300 px-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "landAdmin" ? "bg-gray-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("landAdmin")}
              >
                <div className="flex items-center gap-2">
                <GrUserWorker className="white-icon" fontSize={22} />
                  <span className="text-[16px] font-bold">LandAdmin</span>
                </div>
                <span className="shrink-0 transition duration-300">
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "landAdmin" ? "transform rotate-90" : ""
                    }
                  />
                </span>
              </div>
              {openLink === "landAdmin" && (
                <nav
                  aria-label="landadmin Nav"
                  className="mt-2 gap-4 items-center flex flex-col"
                >
                  <Link
                    to="/woredaDashboard/register"
                    className="flex items-center gap-2 hover:bg-gray-300 px-[25px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Register Admin</span>
                  </Link>
                  <Link
                    to="/woredaDashboard/manageland"
                    className="flex items-center gap-2 py-1 hover:bg-gray-300 px-[25px] hover:rounded-md text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Admin</span>
                  </Link>
                </nav>
              )}
              <div
                className={`flex cursor-pointer items-center hover:bg-gray-300 pr-[105px] pl-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "orders" ? "bg-gray-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("orders")}
              >
                <Link to="/woredaDashboard/orders">
                  <div className="flex items-center gap-2">
                    <AiOutlineBorderOuter color="white" fontSize={32} />
                    <span className="text-[16px] font-bold">Orders</span>
                  </div>
                </Link>
              </div>
              <div
                className={`flex cursor-pointer items-center hover:bg-gray-300 pr-[105px] pl-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "coming" ? "bg-green-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("coming")}
              >
                <Link to="/woredaDashboard/comingReport">
                  <div className="flex items-center gap-2">
                    <RiFolderReceivedFill color="white" fontSize={24} />
                    <span className="text-[16px] font-bold">Received Report</span>
                  </div>
                </Link>
              </div>
              <div
                className={`flex cursor-pointer items-center justify-between gap-10 py-1 hover:bg-gray-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
                  openLink === "reports" ? "bg-gray-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("reports")}
              >
                <div className="flex items-center gap-2">
                  <TfiWrite color="gray-400" fontSize={32} />
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
                    to="/woredaDashboard/create"
                    className="flex items-center gap-2 hover:bg-gray-300 px-[15px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Add Report</span>
                  </Link>
                  <Link
                    to="/woredaDashboard/manageReport"
                    className="flex items-center gap-2 hover:bg-gray-300 px-[15px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Report</span>
                  </Link>
                </nav>
              )}
            </div>
          </div>
          {/* Responsive sidebar */}
          <div className="lg:hidden bg-gray-100 h-[70px] fixed top-0 left-0 right-0 flex items-center justify-between px-3">
            {showSidebar ? (
              <FiX
                className="text-gray-800 cursor-pointer"
                size={24}
                onClick={toggleSidebar}
              />
            ) : (
              <FiMenu
                className="text-gray-700 cursor-pointer"
                size={24}
                onClick={toggleSidebar}
              />
            )}
          </div>
          {/* Responsive sidebar content */}
          {showSidebar && (
            <div className="lg:hidden bg-[#3d3d75]  h-[95%] w-[30%] flex flex-col fixed top-[70px] left-0 z-50">
              <div className="flex flex-col justify-center gap-5 py-5">
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "kebele" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("kebele")}
                >
                  <GiVillage color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">kebele</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "kebele" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "kebele" && (
                  <nav
                    aria-label="kebele Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/woredaDashboard/addkebele"
                      className="flex gap-2 hover:bg-gray-400 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add Kebele</span>
                    </Link>
                    <Link
                      to="/woredaDashboard/managekebele"
                      className="flex items-center gap-2 py-1 hover:bg-gray-400 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Manage Kebele</span>
                    </Link>
                  </nav>
                )}
                <div
                  className={`flex cursor-pointer items-center hover:bg-gray-400 px-3 py-1 rounded-md gap-2 text-white ${
                    openLink === "landadmin" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("landadmin")}
                >
                  <GrUserAdmin color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">Land-Admin</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "landadmin" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "landadmin" && (
                  <nav
                    aria-label="landadmin Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/woredaDashboard/register"
                      className="flex items-center gap-2 hover:bg-gray-400 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add landAdmin</span>
                    </Link>
                    <Link
                      to="/woredaDashboard/manageland"
                      className="flex items-center gap-2 py-1 hover:bg-gray-400 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Manage landAdmin
                      </span>
                    </Link>
                  </nav>
                )}
                <div
                  className={`flex cursor-pointer  hover:bg-gray-400 pr-[105px] pl-[15px] hover:rounded-md  py-1 text-white ${
                    openLink === "orders" ? "bg-green-300 rounded-md" : ""
                  }`}
                  onClick={() => handleLinkClick("orders")}
                >
                  <Link to="/woredaDashboard/orders">
                    <div className="flex items-center gap-2">
                      <AiOutlineBorderOuter color="white" fontSize={32} />
                      <span className="text-[16px] font-bold">Orders</span>
                    </div>
                  </Link>
                </div>
                <div
                  className={`flex cursor-pointer  hover:bg-gray-400 pr-[105px] pl-[15px] hover:rounded-md  py-1 text-white ${
                    openLink === "orders" ? "bg-green-300 rounded-md" : ""
                  }`}
                  onClick={() => handleLinkClick("coming")}
                >
                  <Link to="/woredaDashboard/coming">
                    <div className="flex items-center gap-2">
                      <RiFolderReceivedFill color="white" fontSize={32} />
                      <span className="text-[16px] font-bold">Received Report</span>
                    </div>
                  </Link>
                </div>
                <div
                  className={`flex cursor-pointer hover:bg-gray-400 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "reports" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("reports")}
                >
                  <TfiWrite color="gray-400" fontSize={20} />
                  <span className="text-[16px] font-bold">Reports</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "reports" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "reports" && (
                  <nav
                    aria-label="Reports Nav"
                    className="mt-2 flex flex-col gap-4"
                  >
                    <Link
                      to="/woredaDashboard/create"
                      className="flex items-center gap-2 hover:bg-gray-400 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add Report</span>
                    </Link>
                    <Link
                      to="/woredaDashboard/manageReport"
                      className="flex items-center gap-2 hover:bg-gray-400 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Manage Report</span>
                    </Link>
                  </nav>
                )}
              </div>
              <div
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-600 h-10 px-5 mt-[auto] rounded-md cursor-pointer"
              >
                <FiLogOut color="white" fontSize={24} />
                <p className="text-white text-[16px]">Log Out</p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;
