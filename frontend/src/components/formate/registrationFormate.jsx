import React, { useState } from "react";
import axios from "axios";

const RegistrationFormate = ({ typeName, dataBaseColumn }) => {
  const [formData, setFormData] = useState({
    [dataBaseColumn]: "",
    fname: "",
    mname: "",
    lname: "",
    gender: " ",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
    id: "",
  });

  const {
    [dataBaseColumn]: columnValue,
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
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
      fname: "",
      mname: "",
      lname: "",
      gender: " ",
      email: "",
      phone_number: "",
      user_name: "",
      password: "",
      id: "",
    });
  };

  // const validateName = (e) => {
  //   if (!/^[A-Z][a-z]*$/.test(e.target.value)) {
  //     e.target.setCustomValidity("እባክዎ ስምዎን በትክክል ያስገቡ");
  //   } else {
  //     e.target.setCustomValidity("");
  //   }
  // };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-0 flex-col">
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
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
          <div className="flex items-start  justify-lefft flex-col">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              // onBlur={validateName}
              value={fname}
              required
              className=" outline-none w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="mname">Mid_Name</label>
            <input
              type="text"
              name="mname"
              id="mname"
              onChange={handleChange}
              // onBlur={validateName}
              value={mname}
              required
              className=" outline-none w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              // onBlur={validateName}
              value={lname}
              required
              className=" outline-none w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              onChange={handleChange}
              value={gender}
              required
              className=" outline-none w-[350px] h-10 pl-5 rounded-lg"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10  py-[15px]">
          <div className="flex justify-left flex-col">
            <label htmlFor="tel">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="tel"
              onChange={handleChange}
              value={phone_number}
              required
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              onChange={handleChange}
              value={user_name}
              required
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
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
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
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
              className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className=" h-10 flex items-center justify-center my-6 w-[200px] bg-48px bg-green-400 rounded-2xl">
            <button className="text-center bg-green-400" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormate;
