import React, { useState } from "react";
import axios from "axios";

function FarmerRegistrationForm() {
  const [formData, setFormData] = useState({
    id: "",
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
    kebele_id: " ",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/v1/farmers", formData);
      alert("User successfully registered.");
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-0 flex-col">
      <div>
        <h2 className="text-black font-extrabold leading-10 py-25">
          Farmers Registration Form
        </h2>
      </div>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="id">ID No:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="mname">Middle Name:</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-15 px-15">
          <div className="flex items-start justify-left flex-col w-350">
            <label htmlFor="birth_date">Birth Date:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="gender">Gender:</label>
            <input
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-15 px-15">
        <div className="flex items-start justify-left flex-col">
            <label htmlFor="land_by_ha">Land Amount:</label>
            <input
              type="number"
              id="land_by_ha"
              name="land_by_ha"
              value={formData.land_by_ha}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        <div className="flex items-start justify-left flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="phone_number">Telephone:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
          
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="kebele_id">Kebele Id:</label>
            <input
              type="number"
              id="kebele_id"
              name="kebele_id"
              value={formData.kebele_id}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
              required
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className=" h-10 flex items-center justify-center my-6 w-[150px] bg-48px bg-green-400 rounded-2xl">
            <button className="text-center bg-green-400 " type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FarmerRegistrationForm;
