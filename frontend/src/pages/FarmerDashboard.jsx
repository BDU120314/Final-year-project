import React, { useEffect, useState } from "react";
import profile from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import axios from "axios";

const BASE_URL = `http://localhost:5001/api/v1/farmers`;

const FarmerDashboard = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isUploadDisabled, setUploadDisabled] = useState(true);
  const [farmer, setFarmer] = useState([]);

  const location = useLocation();
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  //fetch farmer details
  useEffect(() => {
    const fetchFarmerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/farmers/${storedUser.farmers_id}`
        );
        console.log(response.data);
        setFarmer(response.data);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchFarmerData();
  }, [storedUser.farmers_id]);

  //for navbar state
  const handleClicked = () => {
    setNavbarOpen(!navbarOpen);
  };

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

      await axios.put(`${BASE_URL}/profile/${storedUser.farmers_id}`, formData);

    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  //for open and close profile image update
  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="fixed top-0 left-0 w-screen flex flex-wrap items-center justify-between bg-[#e4dcdc] shadow-md mb-1 z-[1]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className={`text-lg cursor-pointer font-bold flex justify-center items-center mr-4 py-1 whitespace-nowrap capitalize text-center text-white  ${
                location.pathname === "/profile" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-[10px]">
                <img
                  onClick={toggleUserMenu}
                  className="w-[64px] h-[64px] object-cover rounded-full "
                  src={
                    farmer[0]?.profile
                      ? `http://localhost:5001/backend/uploads/${farmer[0]?.profile}`
                      : profile
                  }
                  alt=""
                />
                <span className="italic text-md text-white">
                  {storedUser && storedUser.user_name}
                </span>
              </div>
            </div>
            <button
              className="text-black cursor-pointer absolute top-[0px] right-[0px] text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
              type="button"
              onClick={handleClicked}
            >
              {navbarOpen ? (
                <AiOutlineClose className="closeIcon" />
              ) : (
                <GiHamburgerMenu className="menuBar" />
              )}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow justify-center items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex text-gray-600 flex-col  lg:flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <NavLink
                  onClick={handleClicked}
                  exact
                  to="/farmerDashboard/manageAccount"
                  className={`px-3 py-2 flex items-center capitalize font-bold leading-6 text-green-600 hover:text-green-400 hover:opacity-75 ${
                    location.pathname === "/farmerDashboard/manageAccount"
                      ? "text-white"
                      : ""
                  }`}
                >
                  manage account
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  onClick={handleClicked}
                  to="/farmerDashboard/order"
                  className={`px-3 py-2 flex items-center  capitalize font-bold leading-6 text-green-600 hover:text-green-400 hover:opacity-75 ${
                    location.pathname === "/farmerDashboard/order"
                      ? "text-white"
                      : ""
                  }`}
                >
                  order
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-66 text-black hover:opacity-75"
                >
                  <button
                    onClick={() => {
                      dispatch(logout());
                    }}
                    className="w-[80px] h-[32px] text-white bg-red-600 items-center rounded-md hover:bg-red-400 hover:text-black"
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-[80px] overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
      {isUserMenuOpen && (
        <div
          className="z-1 absolute left-0 top-[70px] py-1  flex flex-col items-center justify-center gap-5 bg-[#f7f7f6]  rounded shadow dark:bg-gray-200 "
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
              Upload Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;
