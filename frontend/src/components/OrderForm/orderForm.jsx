import React, { useState } from "react";

import "./order.css";
import axios from "axios";
function OrderForm() {
  const [formData, setFormData] = useState({
    fname: " ",
    mname: " ",
    input_type: " ",
    amount: " ",
    cluster_name: " ",
    woreda_name: " ",
    farmers_id: " ",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/order", formData);
      alert("user successfully register");
    } catch (error) {
      console.log(error);
    }
    setFormData({
      fname: " ",
      mname: " ",
      input_type: " ",
      amount: " ",
      cluster_name: " ",
      woreda_name: " ",
      farmers_id: " ",
    });
  };
  return (
    <div className="orders">
      <div>
        <h2>Order form for farmers</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="firstName">First name </label>
          <input
            type="text"
            name="fname"
            id="firstName"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label_input">
          <label htmlFor="middle name">Father name </label>
          <input
            type="text"
            name="mname"
            id="middle name"
            value={formData.mname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label_input">
          <label htmlFor="inputs">Input Type</label>
          <input list="input_type" id="inputs" name="input_type" />
          <datalist id="input_type">
            <option value="Seed"></option>
            <option value="DAP"></option>
            <option value="UREA"></option>
            <option value="Chemical"></option>
          </datalist>
        </div>

        <div className="label_input">
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            id="id"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label_input">
          <label htmlFor="cluster_name">ጉድኝት</label>
          <input
            type="text"
            id="cluster"
            name="cluster_name"
            value={formData.cluster_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label_input">
          <label htmlFor="woreda_name">Woreda Name</label>
          <input
            type="text"
            id="woreda"
            name="woreda_name"
            value={formData.woreda_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="label_input">
          <label htmlFor="farmers_id">ID </label>
          <input
            type="number"
            id="id"
            name="farmers_id"
            value={formData.farmers_id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buttons">
          <button type="submit">Order</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
