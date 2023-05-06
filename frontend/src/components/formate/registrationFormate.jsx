import React, { useState } from "react";
import "./formate.css";
import axios from "axios";
const RegistrationFormate = ({ typeName }) => {
  const [formData, setFormData] = useState({
    type_name: "",
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
    await  axios.post("url", formData);
      alert("user succssfully register");
      setFormData({
        type_name: "",
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
            name="typename"
            id="typeName"
            onChange={handleChange}
            value={type_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="fname">Firstname</label>
          <input type="text" name="fname" id="fname" value={rep_fname} />
        </div>
        <div className="formate_input_label">
          <label htmlFor="mname"> Middlename</label>
          <input type="text" name="mName" id="mname" value={rep_mname} />
        </div>
        <div className="formate_input_label">
          <label htmlFor="lname">Lastname</label>
          <input type="text" name="lName" id="lname"  value={rep_lname}/>
        </div>
        <div className="formate_input_label">
          <label htmlFor="email">{email}</label>
          <input type="text" name="email" id="email"  value={eamil}/>
        </div>
        <div className="formate_input_label">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleChange}
            value={rep_password}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="userName"
            id="username"
            onChange={handleChange}
            value={rep_user_name}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="text"
            name="phone"
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
