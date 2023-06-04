import React from 'react';
import { useState } from 'react';
import { FaSearch, FaRegBell, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DashView = ({ onSearch, username, links }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow-lg h-[70px] px-[25px]">
      <div className="flex items-center rounded-[5px] mb-4 md:mb-0">
        <form
          action=""
          onSubmit={handleSearch}
          className="flex items-center justify-center"
        >
          <input
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            type="text"
            className="bg-gray-100 outline-none pl-3 w-full md:w-[250px] h-10 rounded-[5px] placeholder:text-[13px] leading-4 font-normal"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="bg-blue-500 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer"
          >
            <FaSearch color="white" />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-6">
          <Link
            to="/farmerorder"
            className="bg-blue-400 justify-center items-center h-[30px] px-4 mr-10 rounded-md hidden md:flex"
          >
            Add Order
          </Link>
          
          <FaRegBell />
          <FaEnvelope />
        
        </div>
        <div className="flex items-center gap-3 relative">
          <p className="text-white">{username}</p>
          <div className="w-[50px] h-[50px] rounded-full bg-[#4E73DF]  ">
            <img src="logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashView;
