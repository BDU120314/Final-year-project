import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function FarmerRegistrationForm() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    birth_date: "",
    gender: " ",
    land_by_ha: " ",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
  });

  const [landAdmin, setLandAdmin] = useState([]);
  // const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const LandAdmin_id = user.rep_id;
  console.log(LandAdmin_id);
  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/kebele/${LandAdmin_id}`
      );
      setLandAdmin(response.data);
    };
    fetchedData();
  }, [LandAdmin_id]);

  const kebele_id = landAdmin.length > 0 ? landAdmin[0].kebele_id : "";
  console.log(kebele_id);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:5001/api/v1/farmers", {
        ...formData,
        kebele_id,
      });
      console.log(response.data);
      window.alert("Farmer successfully registered.");
      setFormData({
        fname: "",
        mname: "",
        lname: "",
        birth_date: "",
        gender: " ",
        land_by_ha: " ",
        email: "",
        phone_number: "",
        user_name: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 gap-5   flex-col">
      <div>
        <h2 className="text-black font-extrabold leading-10 py-25">
          Farmers Registration Form
        </h2>
      </div>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-white gap-5 p-8"
        onSubmit={handleSubmit}
      >
        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-4  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="id">ID No:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="mname">Middle Name:</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="birth_date">Birth Date:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="land_by_ha">Land Amount in Hectar:</label>
            <input
              type="number"
              id="land_by_ha"
              name="land_by_ha"
              value={formData.land_by_ha}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="phone_number">Telephone:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8  ]">
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[280px] h-8 outline-none border-2 bg-slate-100 text-gray-400 pl-5 rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center py-4 px-4">
          <div className="h-8 flex items-center justify-center my-1 w-[150px]  hover:bg-green-400 bg-green-600 rounded-md">
            <button className="text-center text-white" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerRegistrationForm;
