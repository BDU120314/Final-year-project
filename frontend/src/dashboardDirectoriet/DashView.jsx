import React from 'react'
import { FaSearch, FaRegBell, FaEnvelope } from "react-icons/fa";
const DashView = () => {
  return (
    <div className="flex justify-between items-center bg-gray-600 shadow-lg h-[70px] px-[25px] fixed top-0 right-0 left-[178px]">
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-gray-100 outline-none pl-3 w-[350px] h-10 rounded-[5px] placeholder:text-[13px] leading-4 font-normal"
          placeholder="search here...."
        />
        <div className="bg-blue-500 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-4 relative ">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-6">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-3 relative">
          <p color='white'>Chachu</p>
          <div className="w-[50px] h-[50px] rounded-full bg-[#4E73DF]" >
            <img src="logo.jpg" alt="logo"  />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default DashView