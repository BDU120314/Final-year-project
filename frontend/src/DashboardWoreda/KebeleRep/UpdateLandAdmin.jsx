import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdateLandAdmin() {
  const [formData, setFormData] = useState({
    kebele_id: "",
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
    axios.get(`http://localhost:5001/api/v1/kebele/${id}`).then((res) => {
      setFormData(res.data[0]);
      console.log(res.data[0]);
    });
  }, [id, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/kebele/update/${id}`,
        formData
      );
      navigate("/woredaDashboard/manageland");
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
      <div className="text-black text-[18px] leading-6">
        <h2>Land Admin Modification Form</h2>
      </div>
      <form className="bg-gray-200" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="kebele_id">Kebele ID</label>
            <input
              type="text"
              id="kebele_id"
              name="kebele_id"
              value={formData.kebele_id}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              id="mname"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              className="w-full h-8 pl-5 rounded-lg outline-none"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="phone_number">Tel phone</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="id">ID No</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-[350px] h-8 bg-blue-400 rounded-3xl mt-[20px]"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateLandAdmin;
