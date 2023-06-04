import React, { useState } from "react";
import axios from "axios";
import DashView from "./DashView";
import Foooter from "../HomePart/footer";

function OrderForm() {
  const [formData, setFormData] = useState({
    input_type: "",
    amount: "",
    farmer_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/v1/order", formData);
      alert("User successfully registered");
    } catch (error) {
      console.log(error);
    }
    setFormData({
      input_type: "",
      amount: "",
      farmer_id: "",
    });
  };

  return (
    <div>
      <DashView />
      <div className="flex justify-center items-center bg-gray-100 p-0 flex-col mb-0 mt-20">
        <div className="mt-0">
          <h2 className="text-black font-extrabold leading-10 py-25">
            Order form for farmers
          </h2>
        </div>
        <form
          action="http://example.com" // Replace with the correct URL
          className="flex flex-col items-center bg-gray-200 w-[800px] mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex items-start justify-left flex-col ml-56">
            <label htmlFor="input_type">Input Type</label>
            <input
              list="input_type"
              id="input_type"
              name="input_type"
              className="w-[350px] h-10 pl-5 rounded-lg outline-none"
              onChange={handleChange}
            />
            <datalist id="input_type">
              <option value="Seed"></option>
              <option value="DAP"></option>
              <option value="UREA"></option>
              <option value="Chemical"></option>
            </datalist>
          </div>

          <div className="flex items-start justify-left flex-col ml-56">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg outline-none"
              required
            />
          </div>

          <div className="flex items-start justify-left flex-col ml-56">
            <label htmlFor="farmer_id">Farmer ID</label>
            <input
              type="text"
              id="farmer_id"
              name="farmer_id"
              value={formData.farmer_id}
              onChange={handleChange}
              className="w-[350px] h-10 pl-5 rounded-lg outline-none"
            />
          </div>

          <div className="">
            <button className="ml-72 h-10 flex items-center justify-center my-6 w-[150px] bg-48px rounded-2xl text-center bg-green-400" type="submit">
              እዘዝ
            </button>
          </div>
        </form>
      </div>
      <div className="fixed w-screen">
        <Foooter />
      </div>
    </div>
  );
}

export default OrderForm;
