import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function FarmerUpdate() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    // birth_date: "",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/farmers/${id}`).then((res) => {
      setFormData(res.data[0]);
      console.log(res.data[0]);
    });
  }, [id, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/farmers/update/${id}`,
        formData
      );
      navigate("/landAdminDashboard/manageFarmers");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 mt-16 gap-5 bg-gray-100">
      <div className="text-black text-[25px] leading-6">
        <h2>Farmers Modification form</h2>
      </div>
      <form className="bg-white" onSubmit={handleSubmit}>
        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8 lg:p-[8px] ">
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8 lg:p-[8px]">
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="id">ID No</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8 lg:p-[8px]">
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="phone_number">Tel phone</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="lg:flex gap-5 px-[10px] lg:justify-center lg:items-center lg:gap-8 lg:p-[8px]">
          <div className="flex items-left flex-col justify-left mt-4">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[280px] h-10 outline-none border-2 bg-slate-100 text-gray-400 mt-[5px] pl-5 rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-4 px-4">
        <div className="h-10 flex items-center justify-center my-1 w-[150px]  hover:bg-green-400 bg-green-600 rounded-md">
            <button
              className=" text-center text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerUpdate;
