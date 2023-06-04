import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import logo from "../assets/logo.jpg"
const WoredaHeader = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.auth.isLogin);
const user = useSelector((state) => state.auth.user)
    const handleLogout = () => {
      dispatch(logout());
      navigate("/login");
    };


  return (
    <div className="flex justify-end items-center bg-[#f7f7f7] shadow-lg h-[70px] fixed top-0 right-0 left-[17%]">
      {/* <div className="flex pl-5 items-center rounded-[5px]">
        <input
          type="text"
          className="bg-white outline-none pl-3 w-[350px] h-10 border border-gray-200 rounded-[5px] placeholder:text-[13px] leading-4 font-normal"
          placeholder="search here...."
        />
        <div className="bg-blue-400 h-10 flex px-[14px] justify-center items-center rounded-tr-[5px] rounded-br-[5px] cursor-pointer">
          <FaSearch color="white" />
        </div>
      </div> */}
      <div className="flex items-center gap-4 relative ">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-6">
          <Link
            to="/woredaDashboard/register"
            className="bg-blue-400 flex justify-center items-centerh-[30px] px-4 rounded-md"
          >
            Add Admin
          </Link>
        </div>
        <div className="flex items-center gap-3 relative">
          <p color="white">{user && <span>{user.user_name}</span>}</p>
          <div className="w-[50px] h-[50px] rounded-full bg-[#4E73DF]">
            <img src={logo} alt="logo" />
          </div>
        </div>
        {isLogin && (
          <div
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 mr-5 bg-red-200 h-8 w-[80px] rounded-md cursor-pointer"
          >
            <p className="text-white text-18px leading-5">Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WoredaHeader;
