import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-screen flex flex-wrap items-center lg:h-[60px] justify-between bg-white mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-lg font-bold  flex justify-center items-center  mr-4 py-2 whitespace-nowrap uppercase text-center text-green-500 brand"
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
              className="text-black cursor-pointer absolute  top-[-40px] right-[-75px] text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none h-full flex justify-center items-center"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose className="closeIcon" />
              ) : (
                <GiHamburgerMenu className="menuBar" />
              )}
            </button>
          </div>
          <div className=" hidden lg:flex-1 lg:flex lg:justify-center lg:items-center lg:ml-60">
            <div className="lg:relative lg:w-full lg:max-w-[500px]">
              <input
                className="lg:w-[450px] lg:bg-gray-200 lg:h-8 lg:pl-12 lg:pr-10 lg:rounded-lg flg:ocus:outline-none lg:focus:ring-2 lg:focus:ring-blue-500"
                type="search"
                name="query"
                placeholder="Search..."
              />
              <div className="lg:absolute lg:inset-y-0 lg:left-0 flex lg:items-center lg:pl-4">
                <FaSearch />
              </div>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-black flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
