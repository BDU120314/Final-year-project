import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function WoredaUpdate() {
  const [formData, setFormData] = useState({
    woreda_id: "",
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
    axios.get(`http://localhost:5001/api/v1/woreda/${id}`).then((res) => {
      console.log(res.data.rows[0]); // Check the received data in the console
      const woredaData = res.data.rows[0];
      if (woredaData) {
        setFormData(woredaData);
      }
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/woreda/update/${id}`,
        formData
      );
      navigate("/zoneDashboard/manageworedaAdmin");
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
    <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
      <div className="text-black text-[18px] leading-6">
        <h2>Woreda Representative Modification Form</h2>
      </div>
      <form className="bg-white" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 py-2 px-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            <label htmlFor="woreda_Name">Woreda ID</label>
            <input
              type="text"
              id="woreda_name"
              name="woreda_id"
              value={formData.woreda_id}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-2 px-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-2 px-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone_number">Tel phone</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-2 px-4 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[350px] h-8 mt-2 border-2 bg-slate-100 text-gray-400 outline-none pl-5 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button
            className="w-[200px] text-white h-10 mt-2 border-2 hover:bg-green-400 bg-green-600 rounded-md"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default WoredaUpdate;
