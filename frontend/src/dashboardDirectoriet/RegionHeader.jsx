import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import logo from "../assets/logo.jpg";
const RegionHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex justify-end items-center bg-[#f7f7f7] shadow-lg h-[70px] fixed top-0 right-0 left-[17%]">
      <div className="flex items-center gap-4 relative ">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-6">
          <Link
            to="/regionDashboard/zoneAdminRegister"
            className="bg-blue-400 flex justify-center items-centerh-[30px] px-4 rounded-md"
          >
            Add zone
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

export default RegionHeader;
