import React, { useEffect, useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaTachometerAlt, FaRegEdit, FaChevronRight, FaRegCreditCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FiMenu, FiX } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { logout } from "../redux/reducers/auth";
import {SiQzone  } from "react-icons/si";
import { MdOutlineHorizontalDistribute } from "react-icons/md";

const RegionSideBar = () => {
  const [admin, setAdmin] = useState([]);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const user = JSON.parse(localStorage.getItem("user"));
  const [openLink, setOpenLink] = useState("");
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  // fetch region admin details
  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/admin/${user.rep_id}`
        );
        console.log(response.data, "admin info");
        setAdmin(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdminDetails();
  }, [user.rep_id]);

  useEffect(() => {
    if (admin && admin.length > 0) {
      const region_id = admin[0].region_id;
      console.log(region_id);
      const fetchPendingOrderCount = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/v1/order/countRegion/${region_id}`
          );
          setPendingOrderCount(response.data.count);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPendingOrderCount();
    }
  }, [admin]);

  const handleLinkClick = (link) => {
    setOpenLink((prevLink) => (prevLink === link ? "" : link));
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
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const dispatch = useDispatch();
  return (
    <>
      {isLogin && (
        <>
          <div className="hidden lg:flex bg-green-400 h-screen w-[18%] justify-top items-start gap-5 flex-col fixed top-0 left-0">
            <div className="flex gap-[15px] items-center pb-5 border-b-[1px] border-[#EDEDED]/[0.3]">
              <FaTachometerAlt className="text-white" fontSize={32} />
              <p className="text-white text-[18px] font-bold leading-5">
                Region Admin
              </p>
            </div>
            <div className="pt-5 border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col justify-start items-start gap-6">
              <div
                className={`flex cursor-pointer items-center hover:bg-green-300 pl-[15px] pr-[45px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "zone" ? "bg-green-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("zone")}
              >
                <div className="flex items-center gap-2">
                  <SiQzone color="white" fontSize={32} />
                  <span className="text-[16px] font-bold">Zone</span>
                </div>
                <span className="shrink-0 transition duration-300">
                  <FaChevronRight
                    color="white"
                    className={openLink === "zone" ? "transform rotate-90" : ""}
                  />
                </span>
              </div>
              {openLink === "zone" && (
                <nav
                  aria-label="Farmers Nav"
                  className="mt-2 gap-4 items-center flex flex-col"
                >
                  <Link
                    to="/regionDashboard/zoneAdd"
                    className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Add Zone</span>
                  </Link>
                  <Link
                    to="/regionDashboard/manageZone"
                    className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Zone</span>
                  </Link>
                </nav>
              )}
              <div
                className={`flex cursor-pointer items-center hover:bg-green-300 pl-[15px] pr-[45px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "zonerep" ? "bg-green-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("zonerep")}
              >
                <div className="flex items-center gap-2">
                  <GrUserAdmin color="white" fontSize={32} />
                  <span className="text-[16px] font-bold">Zones Admin</span>
                </div>
                <span className="shrink-0 transition duration-300">
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "zonerep" ? "transform rotate-90" : ""
                    }
                  />
                </span>
              </div>
              {openLink === "zonerep" && (
                <nav
                  aria-label="Farmers Nav"
                  className="mt-2 gap-4 items-center flex flex-col"
                >
                  <Link
                    to="/regionDashboard/zoneAdminRegister"
                    className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Register Admin</span>
                  </Link>
                  <Link
                    to="/regionDashboard/manageZoneAdmin"
                    className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Admin</span>
                  </Link>
                </nav>
              )}

              <div
                className={`flex cursor-pointer  items-center hover:bg-green-300 pl-[15px] pr-[23px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "distributor" ? "bg-green-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("distributor")}
              >
                <div className="flex items-center gap-2">
                  <MdOutlineHorizontalDistribute color="white" fontSize={32} />
                  <span className="text-[16px] font-bold">Distributor</span>
                </div>
                <span className="shrink-0 transition duration-300">
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "distributor" ? "transform rotate-90" : ""
                    }
                  />
                </span>
              </div>
              {openLink === "distributor" && (
                <nav
                  aria-label="Farmers Nav"
                  className="mt-2 gap-4 items-center flex flex-col"
                >
                  <Link
                    to="/regionDashboard/registerDistributor"
                    className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Register Admin</span>
                  </Link>
                  <Link
                    to="/regionDashboard/manageDistributor"
                    className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Manage Admin</span>
                  </Link>
                </nav>
              )}

              <div
                className={`flex cursor-pointer  items-center hover:bg-green-300 pr-[20px] pl-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                  openLink === "orders" ? "bg-green-300 rounded-md" : ""
                }`}
                onClick={() => handleLinkClick("orders")}
              >
                <Link to="/regionDashboard/orders">
                  <div className="flex items-center gap-2">
                    <GrUserAdmin color="white" fontSize={32} />
                    <span className="text-[16px] font-bold">Orders</span>
                  </div>
                </Link>
                <div className="bg-blue-500 text-white rounded-full w-12 justify-center items-center flex h-6">
                  <span>{pendingOrderCount}</span>
                </div>
              </div>
              <div
                className={`flex cursor-pointer  items-center justify-between gap-10 py-1 hover:bg-green-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
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
                    to="/regionDashboard/create"
                    className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                    onClick={handleLinkItemClick}
                  >
                    <FaChevronRight className="text-green-800" fontSize={22} />
                    <span className="text-md font-medium">Add Report</span>
                  </Link>
                  <Link
                    to="/regionDashboard/manageReport"
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
              className={`flex cursor-pointer  items-center justify-between gap-10 py-1 hover:bg-green-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
                openLink === "posts" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("posts")}
            >
              <div className="flex items-center gap-2">
                <FaRegEdit color="gray-400" fontSize={32} />
                <span className="text-[18px] font-bold">Posts</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={openLink === "posts" ? "transform rotate-90" : ""}
                />
              </span>
            </div>
            {openLink === "posts" && (
              <nav
                aria-label="Reports Nav"
                className="mt-2 flex flex-col gap-4"
              >
                <Link
                  to="/regionDashboard/createpost"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Add Post</span>
                </Link>
                <Link
                  to="/regionDashboard/managepost"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Post</span>
                </Link>
              </nav>
            )}
          </div>

          {/* side content menu bar */}
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
            <div className="lg:hidden bg-green-300 h-[95%] w-[30%] flex flex-col fixed top-[70px] left-0 z-50">
              <div className="flex flex-col justify-center gap-5 py-5">
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "zone" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("zone")}
                >
                  <SiQzone color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">zone</span>
                  <FaChevronRight
                    color="white"
                    className={openLink === "zone" ? "transform rotate-90" : ""}
                  />
                </div>
                {openLink === "zone" && (
                  <nav
                    aria-label="zone Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/regionDashboard/ZoneAdd"
                      className="flex gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add woreda</span>
                    </Link>
                    <Link
                      to="/regionDashboard/manageZone"
                      className="flex items-center gap-2 py-1 hover:bg-green-300 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Manage woreda</span>
                    </Link>
                  </nav>
                )}
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 px-3 py-1 rounded-md gap-2 text-white ${
                    openLink === "zonerep" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("zonerep")}
                >
                  <GrUserAdmin color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">Representative</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "zonerep" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "zonerep" && (
                  <nav
                    aria-label="zonerep Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/regionDashboard/zoneAdminRegister"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Add Representative
                      </span>
                    </Link>
                    <Link
                      to="/regionDashboard/manageZoneAdmin"
                      className="flex items-center gap-2 py-1 hover:bg-green-300 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Manage Representative
                      </span>
                    </Link>
                  </nav>
                )}
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "distributor" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("distributor")}
                >
                  <MdOutlineHorizontalDistribute color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">Distributor</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "distributor" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "distributor" && (
                  <nav
                    aria-label="distributor Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/regionDashboard/registerDistributor"
                      className="flex gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Add Distributor
                      </span>
                    </Link>
                    <Link
                      to="/regionDashboard/manageDistributor"
                      className="flex items-center gap-2 py-1 hover:bg-green-300 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Manage Distribitor
                      </span>
                    </Link>
                  </nav>
                )}

                <div
                  className={`flex cursor-pointer  hover:bg-green-300 pr-[105px] pl-[15px] hover:rounded-md  py-1 text-white ${
                    openLink === "orders" ? "bg-green-300 rounded-md" : ""
                  }`}
                  onClick={() => handleLinkClick("orders")}
                >
                  <Link to="/regionDashboard/orders">
                    <div className="flex items-center gap-2">
                      <AiOutlineBorderOuter color="white" fontSize={32} />
                      <span className="text-[16px] font-bold">Orders</span>
                    </div>
                  </Link>
                </div>
                <div
                  className={`flex cursor-pointer hover:bg-green-300 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "reports" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("reports")}
                >
                  <FaRegCreditCard color="gray-400" fontSize={24} />
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
                      to="/regionDashboard/create"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add Report</span>
                    </Link>
                    <Link
                      to="/regionDashboard/manageReport"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
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

                <div
                  className={`flex cursor-pointer  items-center justify-between gap-10 py-1 hover:bg-green-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
                    openLink === "posts" ? "bg-green-300 rounded-md" : ""
                  }`}
                  onClick={() => handleLinkClick("posts")}
                >
                  <div className="flex items-center gap-2">
                    <FaRegEdit color="gray-400" fontSize={32} />
                    <span className="text-[18px] font-bold">Posts</span>
                  </div>
                  <span className="shrink-0 transition duration-300">
                    <FaChevronRight
                      color="white"
                      className={
                        openLink === "posts" ? "transform rotate-90" : ""
                      }
                    />
                  </span>
                </div>
                {openLink === "posts" && (
                  <nav
                    aria-label="Reports Nav"
                    className="mt-2 flex flex-col gap-4"
                  >
                    <Link
                      to="/regionDashboard/createpost"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={22}
                      />
                      <span className="text-md font-medium">Add Post</span>
                    </Link>
                    <Link
                      to="/regionDashboard/managepost"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={22}
                      />
                      <span className="text-md font-medium">Manage Post</span>
                    </Link>
                  </nav>
                )}
              </div>
              <div
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-200 h-10 px-5 mt-[auto] rounded-md cursor-pointer"
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

export default RegionSideBar;
