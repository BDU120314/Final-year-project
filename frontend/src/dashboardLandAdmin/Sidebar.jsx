import React, { useEffect, useState } from "react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { FaTachometerAlt, FaRegEdit, FaChevronRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import profile from "../assets/logo.jpg";
import axios from "axios";
import {GiFarmer } from "react-icons/gi"
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const isLogin =  JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  const location = useLocation();
  const [openLink, setOpenLink] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
   const [isUploadDisabled, setUploadDisabled] = useState(true);
   const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [landAdmin, setLandAdmin] = useState([]);
   const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchLandAdminData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/kebele/${user.rep_id}`
        );
        console.log(response.data);
        setLandAdmin(response.data);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchLandAdminData();
  }, [user.rep_id]);

  //for photo selection event handler
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setUploadDisabled(false);
  };

  //for sending request to backend including image
  const updateUserProfileImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      await axios.put(
        `http://localhost:5001/api/v1/kebele/profile/${user.rep_id}`,
        formData
      );
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  //for open and close profile image update
  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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
          <div className="hidden lg:flex bg-green-400 h-screen w-[18%] flex-col fixed top-0 left-0">
            <div className="pt-10 flex justify-center items-center flex-col border-b-[5px] border-gray-200">
              <div
                className={`text-lg cursor-pointer font-bold flex justify-center items-center mr-4 py-1 whitespace-nowrap capitalize text-center text-green-500  ${
                  location.pathname === "/profile" ? "text-gray-400" : ""
                }`}
              >
                <div className="flex justify-center items-center gap-[10px]">
                  <img
                    onClick={toggleUserMenu}
                    className="w-[64px] h-[64px] object-cover rounded-full "
                    src={
                      landAdmin[0]?.profile
                        ? `http://localhost:5001/backend/uploads/${landAdmin[0]?.profile}`
                        : profile
                    }
                    alt=""
                  />
                  <span className="italic text-md text-gray-600">
                    {user && user.user_name}
                  </span>
                </div>
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
                  <GiFarmer color="white" fontSize={32} />
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
              className="flex items-center justify-center gap-2 bg-red-200 h-10 px-5 mt-80 rounded-md cursor-pointer"
            >
              <FiLogOut color="white" fontSize={28} />
              <p className="text-white text-[18px] leading-5">LogOut</p>
            </div>
          </div>

          {/* Responsive sidebar */}
          <div className="lg:hidden bg-green-400 h-14 fixed top-0 left-0 right-0 flex items-center justify-between px-3">
            {showSidebar ? (
              <FiX
                className="text-white cursor-pointer"
                size={24}
                onClick={toggleSidebar}
              />
            ) : (
              <FiMenu
                className="text-white cursor-pointer"
                size={24}
                onClick={toggleSidebar}
              />
            )}
            <div
              className={`text-lg cursor-pointer font-bold flex justify-center items-center mr-4 py-1 whitespace-nowrap capitalize text-center text-green-500  ${
                location.pathname === "/profile" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-[10px]">
                <img
                  onClick={toggleUserMenu}
                  className="w-[64px] h-[64px] object-cover rounded-full "
                  src={
                    landAdmin[0]?.profile
                      ? `http://localhost:5001/backend/uploads/${landAdmin[0]?.profile}`
                      : profile
                  }
                  alt=""
                />
                <span className="italic text-md text-gray-600">
                  {user && user.user_name}
                </span>
              </div>
            </div>
          </div>

          {/* Responsive sidebar content */}
          {showSidebar && (
 
            <div className="lg:hidden bg-green-400 h-[95%] w-[30%] flex flex-col fixed top-10 left-0 z-50">
              <div className="flex flex-col justify-start gap-5 py-5">
 
                <div
                  className={`flex cursor-pointer  hover:bg-green-300 py-1 rounded-md gap-1 text-white ${
                    openLink === "farmers" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("farmers")}
                >
                  <GiFarmer color="white" fontSize={24} size={30}/>
                  <span className="text-[16px] font-bold">Farmers</span>
                  <FaChevronRight
                    color="white"
                    className={
                      openLink === "farmers" ? "transform rotate-90" : ""
                    }
                  />
                </div>
                {openLink === "farmers" && (
                  <nav
                    aria-label="Farmers Nav"
                    className="mt-2 gap-4 items-center flex flex-col"
                  >
                    <Link
                      to="/landAdminDashboard/register"
                      className="flex items-center gap-2 hover:bg-green-300 px-[15px] hover:rounded-md py-1 text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">
                        Register Farmer
                      </span>
                    </Link>
                    <Link
                      to="/landAdminDashboard/manageFarmers"
                      className="flex items-center gap-2 py-1 hover:bg-green-300 px-[15px] hover:rounded-md text-white"
                      onClick={handleLinkItemClick}
                    >
                      <FaChevronRight
                        className="text-green-800"
                        fontSize={20}
                      />
                      <span className="text-md font-medium">Manage Farmer</span>
                    </Link>
                  </nav>
                )}
                <div
                  className={`flex cursor-pointer items-center hover:bg-green-300 py-1 rounded-md gap-1 text-white ${
                    openLink === "reports" ? "bg-green-300" : ""
                  }`}
                  onClick={() => handleLinkClick("reports")}
                >
                  <FaRegEdit color="gray-400" fontSize={24} />
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
                      to="/landAdminDashboard/create"
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
                      to="/landAdminDashboard/manageReport"
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
                className="flex items-center justify-center gap-2 bg-red-200 h-10 px-5 mt-[150%] rounded-md cursor-pointer"
              >
                <FiLogOut color="white" fontSize={24} />
                <p className="text-white text-[16px]">Log Out</p>
              </div>
            </div>
          )}
        </>
      )}
      {isUserMenuOpen && (
        <div
          className={`z-1 absolute right-0 lg:left-0 top-[70px] py-1  flex flex-col items-center justify-center gap-5 bg-[#f7f7f6]  rounded shadow dark:bg-gray-200 `}
          id="dropdown-user"
        >
          <div
            className=" flex items-center justify-center flex-col gap-5 px-3 py-4"
            role="none"
          >
            <label
              htmlFor="image-input"
              className="bg-gray-500 text-white  px-3 h-8 flex items-center  rounded-md cursor-pointer"
            >
              Choose photo
              <input
                type="file"
                id="image-input"
                className="hidden"
                onChange={handleImageSelect}
              />
            </label>
            <button
              className="bg-green-400 rounded-md text-white px-3 h-8 cursor-pointer"
              onClick={() => {
                updateUserProfileImage();
                toggleUserMenu();
              }}
              disabled={isUploadDisabled}
            >
              Change photo
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
