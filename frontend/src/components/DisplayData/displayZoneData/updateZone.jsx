import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ZoneUpdate() {
  const [formData, setFormData] = useState({
    zone_name: "",
    rep_fname: "",
    rep_mname: "",
    rep_lname: "",
    email: "",
    rep_password: "",
    rep_user_name: "",
    rep_phone_number: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/zone/${id}`).then((res) => {
      setFormData(res.data[0]);
      console.log(res.data[0]);
    });
  }, [id, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/zone/update/${id}`,
        formData
      );
      navigate("/");
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
        <h2>Zone Modification Form</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="zone_name">First Name</label>
          <input
            type="text"
            id="zonename"
            name="zone_name"
            value={formData.zone_name}
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
            value={formData.rep_user_name}
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
            value={formData.rep_password}
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

export default ZoneUpdate;
