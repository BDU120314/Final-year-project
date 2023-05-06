import React, { useState } from "react";
import "./formate.css";
import axios from "axios";
const RegistrationFormate = ({ typeName }) => {
  const [formData, setFormData] = useState({
    woreda_name: "",
    rep_fname: "",
    rep_mname: "",
    rep_lname: "",
    email: "",
    rep_password: "",
    rep_user_name: "",
    rep_phone_number: "",
    id: "",
  });
   const {
     woreda_name,
     rep_fname,
     rep_mname,
     rep_lname,
     email,
     rep_password,
     rep_user_name,
     rep_phone_number,
     id,
   } = formData;

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevState) => ({
       ...prevState,
       [name]: value,
     }));
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    await  axios.post("url", formData);
      alert("user succssfully register");
      setFormData({
       woreda_name: "",
        rep_fname: "",
        rep_mname: "",
        rep_lname: "",
        email: "",
        rep_password: "",
        rep_user_name: "",
        rep_phone_number: "",
        id: "",
      });
   } catch (error) {
    console.log(error)
   }
  };

  return (
   
    <div className="formate">
      <h2>Registration Form</h2>
      <form action="" className="formate_form" onSubmit={handleSubmit}>
        <div className="formate_input_label">
          <label htmlFor="typeName">{typeName}</label>
          <input
            type="text"
            name="woreda_name"
            id="typeName"
            onChange={handleChange}
            value={woreda_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="rep_fname"
            id="fname"
            onChange={handleChange}
            value={rep_fname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            name="rep_mname"
            id="mname"
            onChange={handleChange}
            value={rep_mname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="rep_lname"
            id="lname"
            onChange={handleChange}
            value={rep_lname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="rep_password"
            id="password"
            onChange={handleChange}
            value={rep_password}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="rep_user_name"
            id="username"
            onChange={handleChange}
            value={rep_user_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="text"
            name="rep_phone_number"
            id="tel"
            onChange={handleChange}
            value={rep_phone_number}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            onChange={handleChange}
            value={id}
          />
        </div>
        <div className="buttons">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormate;
