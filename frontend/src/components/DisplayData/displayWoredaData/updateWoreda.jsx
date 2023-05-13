import React, { useState } from "react";
import "../css/farmers.css";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function WoredaUpdate() {
  const [formData, setFormData] = useState({
    woreda_name: "",
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
    axios.get(`http://localhost:5001/api/v1/woreda/${id}`).then((res) => {
      setFormData(res.data[0]);
      console.log(res.data[0]);
    });
  }, [id, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/woreda/update/${id}`,
        formData
      );
      navigate("/zone_dashboard/manageland");
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="farmers">
      <div>
        <h2>Woreda Modification Form</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="woredaName">First Name</label>
          <input
            type="text"
            id="woreda_name"
            name="woreda_name"
            value={formData.woreda_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.rep_fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            id="mname"
            name="mname"
            value={formData.rep_mname}
            onChange={handleChange}
          />
        </div>
        <div className="label_input">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="rep_lname"
            value={formData.rep_lname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="label_input">
          <label htmlFor="phone_number">Tel phone</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.rep_phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="user_name">Username</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="id">ID No</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default WoredaUpdate;
