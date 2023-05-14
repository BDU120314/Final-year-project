import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdateLandAdmin() {
  const [formData, setFormData] = useState({
    kebele_name: "",
    rep_fname: "",
    rep_mname: "",
    rep_lname: "",
    email: "",
    password: "",
    user_name: "",
    rep_phone_number: "",
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
      navigate("/dashboard/manageland");
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
    <div className="flex flex-col justify-center items-center p-5 bg-gray-100 ">
      <div className="text-black text-[18px] leading-6">
        <h2>Land Admin Modification Form</h2>
      </div>
      <form className=" bg-gray-200" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="kebele_name">Kebele Name</label>
            <input
              type="text"
              id="kebele_name"
              name="kebele_name"
              value={formData.kebele_name}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="rep_fname"
              value={formData.rep_fname}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              id="mname"
              name="rep_mname"
              value={formData.rep_mname}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none "
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="rep_lname">Last Name</label>
            <input
              type="text"
              id="rep_lname"
              name="rep_lname"
              value={formData.rep_lname}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>

          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="phone_number">Tel phone</label>
            <input
              type="tel"
              id="phone_number"
              name="rep_phone_number"
              value={formData.rep_phone_number}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="id">ID No</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-[350px] h-10 bg-green-400 rounded-md"
              type="submit"
            >
              update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateLandAdmin;
