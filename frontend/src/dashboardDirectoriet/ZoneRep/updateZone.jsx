import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ZoneUpdate() {
  const [formData, setFormData] = useState({
    zone_id: "",
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    user_name: "",
    phone_number: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/zone/${id}`).then((res) => {
      console.log(res.data);
      setFormData(res.data[0]);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/zone/update/${id}`,
        formData
      );
      navigate("/regionDashboard/manageZoneAdmin");
      console.log(response);
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
    <div className="flex flex-col justify-center items-center gap-5 p-5 bg-white">
      <div className="text-black text-[18px] leading-6">
        <h2>Zone Modification Form</h2>
      </div>
      <form className="bg-gray-200 w-[100%] " onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center w-full  gap-5 p-[15px]">
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="zonename">zone ID</label>
            <input
              type="number"
              id="zonename"
              name="zone_id"
              value={formData.zone_id}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="phone_number">Tel phone</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left w-[350px]">
            <label htmlFor="id">ID No</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[350px] h-8 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <button
            className="w-[350px] h-8 bg-blue-400 rounded-md mt-[20px]"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default ZoneUpdate;
