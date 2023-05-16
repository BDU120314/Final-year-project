import React from 'react'
import { FaRegCalendarMinus } from "react-icons/fa";
const Main = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className=" text-[28px] leading-8 cursor-pointer ">Dashboard</h1>
        <button className="bg-blue-400 h-8 flex cursor-pointer px-[30px] items-center text-white rounded-[5px]">
          Genrate Report
        </button>
      </div>
      <div className="grid grid-col-4 gap-[30px] mt-6 pb-[14px]">
        <div className='flex justify-between items-center w-full h-24 bg-red-300'>
          <div>
            <h2>EARNINGS</h2>
            <h2>$40,000</h2>
          </div>
          <div>
            <FaRegCalendarMinus fontSize={18} color='black' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main