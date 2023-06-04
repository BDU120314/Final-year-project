import React, { useState, useEffect } from 'react';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashView = ({ onSearch, username, links }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    fetchOrderCount();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const fetchOrderCount = () => {
    fetch('/api/orders/count')
      .then((response) => response.json())
      .then((data) => setOrderCount(data.orderCount))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-lg h-[70px] px-[25px] fixed top-0 right-0 left-60">
      <div className="flex items-center rounded-[5px]">
        <form action="" onSubmit={handleSearch} className="flex items-center justify-center">
          <input
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            type="text"
            className="bg-gray-100 outline-none pl-3 w-[350px] h-10 rounded-[5px] placeholder:text-[13px] leading-4 font-normal"
            placeholder="search here...."
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
            to={links}
            className="bg-blue-400 flex justify-center items-centerh-[30px] px-4 rounded-md"
          >
            Add Admin
          </Link>
          <FaRegBell />
            {orderCount > 0 && (
          <div className="flex items-center">
            <p>Order Count: {orderCount}</p>
          </div>
        )}
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-3 relative">
          <p color="white">{username}</p>
          <div className="w-[50px] h-[50px] rounded-full bg-[#4E73DF]">
            <img src="logo.jpg" alt="logo" />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default DashView;
