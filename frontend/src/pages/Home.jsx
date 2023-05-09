import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen ">
      <header className="bg-gray-200 shadow-md text-black h-[80px] flex justify-between items-center px-5 max-w-full">
        <div className="flex justify-center items-center">
          <img
            className="w-[60px] h-[60px] object-cover rounded-full"
            src="logo.jpg"
            alt="ardmos"
          />
          <h2 className="ml-2 font-bold">ARMDOS</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <input
              className="w-full bg-white h-10 pl-12 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              name="query"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <FaSearch />
            </div>
            
          </div>
        </div>
        <div className="flex justify-between items-center flex-5 ">
          <ul className="flex justify-between items-center gap-10 ">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </header>

      {/* //main part */}
      <main>
        <div>
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae officiis perspiciatis aperiam, vel cum labore, corporis
            nihil quasi repellat id natus commodi ipsa voluptas distinctio
            blanditiis. Obcaecati a labore placeat.
          </p>
        </div>
      </main>
      {/* //footer */}
      <footer></footer>
    </div>
  );
};

export default Home;
