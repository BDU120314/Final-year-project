import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/auth";
import profile from "../assets/logo.jpg";
import axios from "axios";
const RegionHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const user = JSON.parse(localStorage.getItem("user"));
  const [image, setImage] = useState(null);
  const location = useLocation();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isUploadDisabled, setUploadDisabled] = useState(true);
  const [regionAdmin, setRegionAdmin] = useState([]);

  //fetch zoneAdmin details
  useEffect(() => {
    const fetchFarmerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/admin/${user.rep_id}`
        );
        setRegionAdmin(response.data);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchFarmerData();
  }, [user.rep_id]);

  //for photo selection event handler
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setUploadDisabled(false);
  };

  //for sending request to backend including image
  const updateUserProfileImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      await axios.put(
        `http://localhost:5001/api/v1/admin/profile/${user.rep_id}`,
        formData
      );
    } catch (error) {
      console.error("Error updating profile image:", error);
    }
  };

  //for open and close profile image update
  function toggleUserMenu() {
    setUserMenuOpen((prevState) => !prevState);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex justify-end items-center bg-[#f7f7f7] shadow-md h-[70px] top-0 right-0 left-[18%]">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-1">
          <Link
            to="/regionDashboard/zoneadd"
            className="bg-blue-600 hover:bg-blue-400 flex justify-center items-centerh-[30px] px-4 text-white rounded-md"
          >
            Add Zone
          </Link>
        </div>
        <div
          className={`text-lg cursor-pointer font-bold flex justify-center items-center mr-1 py-1 whitespace-nowrap capitalize text-center text-green-500  ${
            location.pathname === "/profile" ? "text-gray-400" : ""
          }`}
        >
          <div className="flex justify-center items-center gap-[10px]">
            <img
              onClick={toggleUserMenu}
              className="w-[64px] h-[64px] object-cover rounded-full "
              src={
                regionAdmin[0]?.profile
                  ? `http://localhost:5001/backend/uploads/${regionAdmin[0]?.profile}`
                  : profile
              }
              alt=""
            />
          </div>
        </div>
        {isLogin && (
          <div
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 mr-5 hover:bg-red-300 bg-red-600 h-8 w-[80px] rounded-md cursor-pointer"
          >
            <p className="text-white text-18px leading-5">Logout</p>
          </div>
        )}
      </div>
      {isUserMenuOpen && (
        <div
          className="z-1 absolute right-10 top-[70px] py-1  flex flex-col items-center justify-center gap-4 bg-[#f7f7f6]  rounded shadow dark:bg-gray-200 "
          id="dropdown-user"
        >
          <span className="italic text-lg text-gray-900">
            {user && user.user_name}
          </span>
          <div
            className=" flex items-center justify-center flex-col gap-5 px-3 py-4"
            role="none"
          >
            <label
              htmlFor="image-input"
              className="bg-gray-500 text-white  px-3 h-8 flex items-center  rounded-md cursor-pointer"
            >
              Choose photo
              <input
                type="file"
                id="image-input"
                className="hidden"
                onChange={handleImageSelect}
              />
            </label>
            <button
              className="bg-green-400 rounded-md text-white px-3 h-8 cursor-pointer"
              onClick={() => {
                updateUserProfileImage();
                toggleUserMenu();
              }}
              disabled={isUploadDisabled}
            >
              Upload Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionHeader;
