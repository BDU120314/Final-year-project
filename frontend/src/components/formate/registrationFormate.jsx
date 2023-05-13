import React, { useState } from "react";
import "./formate.css";
import axios from "axios";

const RegistrationFormate = ({ typeName, dataBaseColumn }) => {
  const [formData, setFormData] = useState({
    [dataBaseColumn]: "",
    rep_fname: "",
    rep_mname: "",
    rep_lname: "",
    email: "",
    password: "",

    user_name: "",
    rep_phone_number: "",
    id: "",
  });

  const {
    [dataBaseColumn]: columnValue,
    rep_fname,
    rep_mname,
    rep_lname,
    email,
    password,

    user_name,
    rep_phone_number,
    id,
  } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5001/api/v1/${typeName.toLowerCase()}`,
        formData
      );
      alert("User successfully registered");
    } catch (error) {
      console.log(error);
    }

    setFormData({
      [dataBaseColumn]: "",
      rep_fname: "",
      rep_mname: "",
      rep_lname: "",
      email: "",

      password: "",

      user_name: "",
      rep_phone_number: "",
      id: "",
    });
  };

  const validateName = (e) => {
    if (!/^[A-Z][a-z]*$/.test(e.target.value)) {
      e.target.setCustomValidity("እባክዎ ስምዎን በትክክል ያስገቡ");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-6 flex-col">
      <h2 className="text-black font-extrabold leading-10 py-[25px]">
        Registration Form
      </h2>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center gap-10  py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor={dataBaseColumn}>{typeName}</label>
            <input
              type="text"
              name={dataBaseColumn}
              id={dataBaseColumn}
              onChange={handleChange}
              value={columnValue}
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-start  justify-lefft flex-col">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="rep_fname"
              id="fname"
              onChange={handleChange}
              onBlur={validateName} // added onBlur event to validate rep_fname
              value={rep_fname}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="mname">Mid_Name</label>
            <input
              type="text"
              name="rep_mname"
              id="mname"
              onChange={handleChange}
              onBlur={validateName}
              value={rep_mname}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="rep_lname"
              id="lname"
              onChange={handleChange}
              onBlur={validateName}
              value={rep_lname}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex justify-left flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={password}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex justify-left flex-col">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              onChange={handleChange}
              value={user_name}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="tel">Phone Number</label>
            <input
              type="text"
              name="rep_phone_number"
              id="tel"
              onChange={handleChange}
              value={rep_phone_number}
              required
              className="w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-left flex-col">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              id="id"
              onChange={handleChange}
              value={id}
              required
              className="w-[350px] h-10 pl-5 rounded-lg "
            />
          </div>
          <div className=" h-10 flex items-center justify-center my-6 w-[350px] bg-48px bg-green-400 ">
            <button className="text-center" type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormate;
