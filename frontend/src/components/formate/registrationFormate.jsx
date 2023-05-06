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
     type_name,
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    await axios.post(
      "http://localhost:5000/api/v1/woreda",
      formData
    );
    alert("user successfully register")
  } catch (error) {
    console.log(error);
  }
 
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
   };
  

  return (
   
    <div className="formate">
      <h2>Registration Form</h2>
      <form action="farmer-registration-form" className="formate_form" onSubmit={handleSubmit}>
        <div className="formate_input_label">
          <label htmlFor="typeName">{typeName}</label>
          <input
            type="text"
            name="woreda_name"
            id="typeName"
            onChange={handleChange}
            value={type_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={handleChange}
            value={rep_fname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            name="mName"
            id="mname"
            onChange={handleChange}
            value={rep_mname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lName"
            id="lname"
            onChange={handleChange}
            value={rep_lname}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"  value={formData.email}/>
        </div>
        <div className="formate_input_label">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="rep_password"
            id="password"
            onChange={handleChange}
            value={formData.rep_password}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="rep_user_name"
            id="username"
            onChange={handleChange}
            value={formData.rep_user_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="text"
            name="rep_phone_number"
            id="tel"
            onChange={handleChange}
            value={ formData.rep_phone_number}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            onChange={handleChange}
            value={formData.id}
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
