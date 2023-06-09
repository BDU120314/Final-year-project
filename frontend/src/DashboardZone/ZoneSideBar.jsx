import React, { useEffect, useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaTachometerAlt, FaRegEdit, FaChevronRight, FaRegCreditCard } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FiMenu, FiX } from "react-icons/fi";
import { GiVillage } from "react-icons/gi";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { logout } from "../redux/reducers/auth";
import { FiLogOut } from "react-icons/fi";


const ZoneSideBar = () => {
  const [admin, setAdmin] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const [openLink, setOpenLink] = useState("");
  const [pendingOrderCount, setPendingOrderCount] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const id = user.rep_id;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const dispatch = useDispatch();

  //fetch zone admin details
  useEffect(() => {
    const fetchAdminDetails = async () => {
      // localStorage.setItem(value :user.rep_id)
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/zone/${id}`
        );
        setAdmin(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdminDetails();
  }, [id]);

  useEffect(() => {
    if (admin && admin.length > 0) {
      const zone_id = admin[0].zone_id;

      const fetchPendingOrderCount = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/api/v1/order/countZone/${zone_id}`
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
  return (
    <>

      {isLogin && (
        <>

<div className="hidden lg:flex bg-green-400 h-screen w-[17%] flex-col fixed top-0 left-0">
          <div className="flex gap-[15px] items-center pb-5 border-b-[1px] border-[#EDEDED]/[0.3]">
            <FaTachometerAlt className="text-white" fontSize={32} />
            <p className="text-white text-[18px] font-bold leading-5">
              Zone Admin
            </p>
          </div>
          <div className="pt-5 border-b-[1px] border-[#EDEDED]/[0.3] flex flex-col justify-start items-start gap-6">
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 pl-[15px] pr-[45px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "woreda" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("woreda")}
            >
              <div className="flex items-center gap-2">
                <GrUserAdmin color="white" fontSize={32} />
                <span className="text-[16px] font-bold">Woreda</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={openLink === "woreda" ? "transform rotate-90" : ""}
                />
              </span>
            </div>
            {openLink === "woreda" && (
              <nav
                aria-label="Farmers Nav"
                className="mt-2 gap-4 items-center flex flex-col"
              >
                <Link
                  to="/zoneDashboard/addworeda"
                  className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Add Woreda</span>
                </Link>
                <Link
                  to="/zoneDashboard/manageWoreda"
                  className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Woreda</span>
                </Link>
              </nav>
            )}
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 pl-[15px] pr-[45px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "woredarep" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("woredarep")}
            >
              <div className="flex items-center gap-2">
                <GrUserAdmin color="white" fontSize={32} />
                <span className="text-[16px] font-bold">Woreda Admin</span>
              </div>
              <span className="shrink-0 transition duration-300">
                <FaChevronRight
                  color="white"
                  className={
                    openLink === "woredarep" ? "transform rotate-90" : ""
                  }
                />
              </span>
            </div>
            {openLink === "woredarep" && (
              <nav
                aria-label="Farmers Nav"
                className="mt-2 gap-4 items-center flex flex-col"
              >
                <Link
                  to="/zoneDashboard/register"
                  className="flex items-center gap-2 hover:bg-green-300 px-[25px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Register Admin</span>
                </Link>
                <Link
                  to="/zoneDashboard/manageworedaAdmin"
                  className="flex items-center gap-2 py-1 hover:bg-green-300 px-[25px] hover:rounded-md text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Manage Admin</span>
                </Link>
              </nav>
            )}
            <div
              className={`flex cursor-pointer items-center hover:bg-green-300 pr-[20px] pl-[15px] hover:rounded-md justify-between gap-10 py-1 text-white ${
                openLink === "orders" ? "bg-green-300 rounded-md" : ""
              }`}
              onClick={() => handleLinkClick("orders")}
            >
              <Link to="/zoneDashboard/orders">
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
              className={`flex cursor-pointer items-center justify-between gap-10 py-1 hover:bg-green-300 pl-[15px] pr-[35px] hover:rounded-md text-white ${
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
                  to="/zoneDashboard/create"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                  onClick={handleLinkItemClick}
                >
                  <FaChevronRight className="text-green-800" fontSize={22} />
                  <span className="text-md font-medium">Add Report</span>
                </Link>
                <Link
                  to="/zoneDashboard/manageReport"
                  className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
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
            <div className="lg:hidden bg-green-300 h-[95%] w-[30%] flex flex-col fixed top-[70px] left-0 z-50">
              <div className="flex flex-col justify-center gap-5 py-5">
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 px-3 py-1 rounded-md gap-5 text-white ${
                    openLink === "woreda" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("woreda")}
                >
                  <GiVillage color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">Woreda</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "woreda" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "woreda" && (
                  <nav
                    aria-label="woreda Nav"
                    className="mt-2 gap-4 flex flex-col"
                  >
                    <Link
                      to="/zoneDashboard/addworeda"
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
                      to="/zoneDashboard/manageWoreda"
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
                    openLink === "landadmin" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("landadmin")}
                >
                  <GrUserAdmin color="white" fontSize={24} />
                  <span className="text-[16px] font-bold">Representative</span>
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
                      to="/zoneDashboard/register"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Add Representative</span>
                    </Link>
                    <Link
                      to="/zoneDashboard/manageworedaAdmin"
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
                  className={`flex cursor-pointer  hover:bg-green-300 pr-[105px] pl-[15px] hover:rounded-md  py-1 text-white ${
                    openLink === "orders" ? "bg-green-300 rounded-md" : ""
                  }`}
                  onClick={() => handleLinkClick("orders")}
                >
                  <Link to="/zoneDashboard/orders">
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
                      to="/zoneDashboard/create"
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
                      to="/zoneDashboard/manageReport"
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

export default ZoneSideBar;
