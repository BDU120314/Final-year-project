import React, { useState } from "react";
import profile from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";


const FarmerDashboard = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const handleClicked = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <nav className="fixed top-0 left-0 w-screen flex flex-wrap items-center justify-between bg-[#f7f7f7] shadow-lg mb-1 z-[1]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              exact
              to="/farmerDashboard/manageAccount"
              className={`text-lg font-bold flex justify-center items-center mr-4 py-2 whitespace-nowrap uppercase text-center text-blue-500 brand ${
                location.pathname === "/profile" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-5">
                <img
                  className="w-[80px] h-[60px] object-cover rounded-xl p-2"
                  src={profile}
                  alt="equb_logo"
                />
                {user && user.user_name}
              </div>
            </NavLink>
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
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex text-black flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <NavLink
                  onClick={handleClicked}
                  exact
                  to="/farmerDashboard/manageAccount"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/farmerDashboard/manageAccount"
                      ? "text-gray-400"
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
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/farmerDashboard/order"
                      ? "text-gray-400"
                      : ""
                  }`}
                >
                  order
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <button
                    onClick={handleLogout}
                    className="w-[100px] h-[35px] text-white bg-blue-500 items-center hover:bg-blue-300 hover:text-black"
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mt-[80px] overflow-x-hidden overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default FarmerDashboard;
