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

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const response =  axios.post(
        "http://localhost:5001/api/v1/farmers",
        {
          ...formData,
          kebele_id,
        }
      );
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
    <div className="flex justify-center items-center bg-gray-100 gap-5 pt-10 flex-col">
      <div>
        <h2 className="text-black font-extrabold leading-10 py-25">
          Farmers Registration Form
        </h2>
      </div>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-white gap-5"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-10">
          <div>
            <label htmlFor="id">ID No:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-full h-8 pl-5  rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="mname">Middle Name:</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none"
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="birth_date">Birth Date:</label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange }
              required
              className="outline-none w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="land_by_ha">Land Amount:</label>
            <input
              type="number"
              id="land_by_ha"
              name="land_by_ha"
              value={formData.land_by_ha}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="phone_number">Telephone:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-sm mt-[5px] border-2 bg-slate-100 text-gray-400 outline-none "
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
