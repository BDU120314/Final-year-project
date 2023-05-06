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
    rep_password: "",
    rep_user_name: "",
    rep_phone_number: "",
    id: "",
  });
   
 
  const {
    [dataBaseColumn]: columnValue,
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
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      await axios.post(
        `http://localhost:5000/api/v1/${typeName.toLowerCase()}`,
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
      rep_password: "",
      rep_user_name: "",
      rep_phone_number: "",
      id: "",
    });
  };

  const validateName = (e) => {
    if (!/^[A-Z][a-z]*$/.test(e.target.value)) {
      e.target.setCustomValidity(
        "እባክዎ ስምዎን በትክክል ያስገቡ"
      );
    } else {
      e.target.setCustomValidity("");
    }
  };
  
  return (
    <div className="formate">
      <h2>Registration Form</h2>
      <form
        action="farmer-registration-form"
        className="formate_form"
        onSubmit={handleSubmit}
      >
        <div className="formate_input_label">
          <label htmlFor={dataBaseColumn}>{typeName}</label>
          <input
            type="text"
            name={dataBaseColumn}
            id={dataBaseColumn}
            onChange={handleChange}
 
            value={columnValue}
           />
        </div>
        <div className="formate_input_label">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="rep_fname"
            id="fname"
            onChange={handleChange}
            onBlur={validateName} // added onBlur event to validate rep_fname
            value={rep_fname}
            required
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            name="rep_mname"
            id="mname"
            onChange={handleChange}
            onBlur={validateName} 
            value={rep_mname}
            required
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="rep_lname"
            id="lname"
            onChange={handleChange}
            onBlur={validateName} 
            value={rep_lname}
            required
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
 
            value={email}
             onChange={handleChange}
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="rep_password">Password</label>
          <input
            type="text"
            name="rep_password"
            id="password"
            onChange={handleChange}
            value={formData.rep_password}
            required

          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="rep_user_name"
            id="rep_user_name"
            onChange={handleChange}
            value={formData.rep_user_name}
            required
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="tel">Phone Number</label>
          <input
            type="text"
            name="rep_phone_number"
            id="tel"
            onChange={handleChange}
            value={formData.rep_phone_number}
            required

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
            required

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
