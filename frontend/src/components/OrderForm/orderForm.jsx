import React, { useState } from "react";
 import Foooter from "../HomePart/footer";
import axios from "axios";
function OrderForm() {
  const [formData, setFormData] = useState({
    farmer_fname: " ",
    farmer_mname: " ",
    input_type: " ",
    amount: " ",
    kebele_id: " ",
    farmer_id: " ",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/v1/order", formData);
      alert("user successfully register");
    } catch (error) {
      console.log(error);
    }
    setFormData({
      farmer_fname: " ",
      farmer_mname: " ",
      input_type: " ",
      amount: " ",
     kebele_id: " ",
      farmer_id: " ",
    });
  };
  return (
    <div> 
    <div className="flex justify-center items-center bg-gray-100 p-0 flex-col mb-0 mt-0">
      <div className="mt-0">
        <h2 className="text-black font-extrabold leading-10 py-25">Order form for farmers</h2>
      </div>
      <form 
     action="farmer-registration-form"
     className="flex flex-col items-cente bg-gray-200 w-[800px]"
     onSubmit={handleSubmit}
   >
        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="farmer_fname">First name </label>
          <input
            type="text"
            name="farmer_fname"
            id="farmer_fname"
            value={formData.farmer_fname}
            onChange={handleChange}
             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            required
          />
        </div>

        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="farmer_mname">Father name </label>
          <input
            type="text"
            name="farmer_mname"
            id="farmer_mname"
            value={formData.farmer_mname}
            onChange={handleChange}
             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            required
          />
        </div>

        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="input_type">Input Type</label>
          <input list="input_type" id="inputs" name="input_type"
           className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
          />
          <datalist id="input_type">
            <option value="Seed"></option>
            <option value="DAP"></option>
            <option value="UREA"></option>
            <option value="Chemical"></option>
          </datalist>
        </div>

        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            required
          />
        </div>


        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="kebele_id">Kebele Id</label>
          <input
            type="number"
            id="kebele_id"
            name="kebele_id"
            value={formData.kebele_id}
            onChange={handleChange}
             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
             
          />
        </div>

        <div className="flex items-start justify-left flex-col ml-56 ">
          <label htmlFor="farmer_id">ID </label>
          <input
            type="text"
            id="farmer_id"
            name="farmer_id"
            value={formData.farmer_id}
            onChange={handleChange}
             className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            
          />
        </div>

        <div className=" ">
        <button className="ml-72 h-10 flex items-center justify-center my-6 w-[150px] bg-48px  rounded-2xl text-center bg-green-400 " type="submit">
              እዘዝ
            </button>
        </div>
      </form>
      
    </div>
    <Foooter />
    </div>
  );
}

export default OrderForm;
