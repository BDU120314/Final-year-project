import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
 
  const handleNavBar = () => setNavbarOpen(!navbarOpen);

    const location = useLocation();
  return (
    <>
      <nav className="fixed w-screen shadow-md flex flex-wrap items-center  justify-between bg-[#f7f7f7] mb-1 z-[1]">
        <div className="px-4 w-screen flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className={`text-lg font-bold flex justify-center items-center mr-4 py-2 whitespace-nowrap uppercase text-center text-blue-500 brand ${
                location.pathname === "/" ? "text-gray-400" : ""
              }`}
            >
              <div className="flex justify-center items-center gap-5">
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  src="logo.jpg"
                  alt="ardmos"
                />
                <h1> ARMDOS</h1>
              </div>
            </Link>
            <button
              className="text-black cursor-pointer absolute  top-[0px] right-[0px] text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
              type="button"
              onClick={handleNavBar}
            >
              {navbarOpen ? (
                <AiOutlineClose className="closeIcon" />
              ) : (
                <GiHamburgerMenu className="menuBar" />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-black flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li onClick={handleNavBar} className="nav-item">
                <Link
                  to="/"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/" ? "text-gray-400" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li onClick={handleNavBar} className="nav-item">
                <Link
                  to="/about"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/about" ? "text-gray-400" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li onClick={handleNavBar} className="nav-item">
                <Link
                  to="/contact"
                  className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-gray-400 hover:opacity-75 ${
                    location.pathname === "/contact" ? "text-gray-400" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li onClick={handleNavBar} className="nav-item">
                <NavLink
                  to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <button className="w-[90px] h-[30px] text-white bg-blue-500 items-center hover:bg-blue-300 hover:text-black">
                    Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
