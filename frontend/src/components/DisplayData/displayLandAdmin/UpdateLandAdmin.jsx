import React, { useState } from "react";
import "../css/farmers.css";

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
    const {name, value} =e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="farmers">
      <div>
        <h2>Land Admin Modification Form</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="kebele_name">Kebele Name</label>
          <input
            type="text"
            id="kebele_name"
            name="kebele_name"
            value={formData.kebele_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="rep_fname"
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
            name="rep_mname"
            value={formData.rep_mname}
            onChange={handleChange}
          />
        </div>
        <div className="label_input">
          <label htmlFor="rep_lname">Last Name</label>
          <input
            type="text"
            id="rep_lname"
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
            name="rep_phone_number"
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
        <button type="submit">update</button>
      </form>
    </div>
  );
}

export default UpdateLandAdmin;
