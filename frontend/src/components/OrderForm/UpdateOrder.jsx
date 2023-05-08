import React, { useState } from "react";
import "./order.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function UpdateOrder() {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    woreda_name: "",
    cluster_name: "",
    farmer_id: "", 
    input_type: "",
    amount: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/order/${id}`).then((res) => {
      setFormData(res.data[0]);
      console.log(res.data[0]);
    });
  }, [id, setFormData]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/order/update/${id}`,
        formData
      );
      navigate("/OrderDisplayForm");
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
    <div className="orders">
      <div>
        <h2>Order Modification Form</h2>
      </div>
      <form className="farmer-registration-form" onSubmit={handleSubmit}>
        <div className="label_input">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
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
            value={formData.mname}
            onChange={handleChange}
          />
        </div>
        <div className="label_input">
          <label htmlFor="woreda_name">Woreda Name</label>
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
          <label htmlFor="birth_date">Cluster Name</label>
          <input
            type="text"
            id="cluster_name"
            name="cluster_name"
            value={formData.cluster_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="farmer_id">Farmer Id</label>
          <input
            type="text"
            id="farmer_id"
            name="farmer_id"
            value={formData.farmer_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label_input">
          <label htmlFor="inputs">Input Type</label>
          <input list="input_type" id="inputs" name="input_type" />
          <datalist id="input_type" value={formData.input_type}>
            <option value="Seed"></option>
            <option value="DAP"></option>
            <option value="UREA"></option>
            <option value="Chemical"></option>
          </datalist>
        </div>
        <div className="label_input">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div> 
        <button type="submit">update</button>
      </form>
    </div>
  );
}
export default UpdateOrder;
