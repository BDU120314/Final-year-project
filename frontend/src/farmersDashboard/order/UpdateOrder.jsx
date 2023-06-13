import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MAIN_TYPES = {
  Seed: {
    Teff: { amountLabel: "Amount (in kg)", defaultValue: 0 },
    Corn: { amountLabel: "Amount (in kg)", defaultValue: 0 },
    Barley: { amountLabel: "Amount (in kg)", defaultValue: 0 },
    Wheat: { amountLabel: "Amount (in kg)", defaultValue: 0 },
  },
  Fertilizer: {
    DAP: { amountLabel: "Amount (in bags)", defaultValue: 0 },
    UREA: { amountLabel: "Amount (in bags)", defaultValue: 0 },
  },
  Chemical: {
    Pesticide: { amountLabel: "Amount (in liters)", defaultValue: 0 },
    "Weed killer": { amountLabel: "Amount (in liters)", defaultValue: 0 },
  },
};

function UpdateOrder() {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const role = storedUser.role;

  const [formData, setFormData] = useState({
    input_type: "",
    subtype: "",
    amount: 0,
    role: role,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/order/${id}`)
      .then((res) => {
        console.log(res.data); // Check the response data structure
        if (res.data) {
          setFormData({
            input_type: res.data.input_type,
            subtype: res.data.subType,
            amount: res.data.amount,
            role: role,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { input_type, subtype, amount, role } = formData;
      await axios.put(`http://localhost:5001/api/v1/order/updates/${id}`, {
        input_type,
        subtype,
        amount,
        role,
      });
      navigate("/farmerDashboard/manageAccount");
    } catch (error) {
      console.error(error);
      alert("Failed to update the order.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderSubtypeOptions = () => {
    if (formData.input_type && MAIN_TYPES[formData.input_type]) {
      return Object.keys(MAIN_TYPES[formData.input_type]).map((subtype) => (
        <option key={subtype} value={subtype}>
          {subtype}
        </option>
      ));
    }
    return null;
  };

  const renderAmountLabel = () => {
    if (formData.input_type && formData.subtype && MAIN_TYPES[formData.input_type]) {
      return MAIN_TYPES[formData.input_type][formData.subtype].amountLabel;
    }
    return "Amount";
  };

  const renderDefaultAmountValue = () => {
    if (formData.input_type && formData.subtype && MAIN_TYPES[formData.input_type]) {
      return MAIN_TYPES[formData.input_type][formData.subtype].defaultValue;
    }
    return 0;
  };

  return (
    <div className="bg-gray-100 h-screen">
      <h1 className="flex justify-center items-center">Farmers Reorder Form</h1>
    <div className="flex justify-center items-center mt-8 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="flex items-start justify-left flex-col">
          <label htmlFor="input_type">Input Type</label>
          <select
            id="input_type"
            name="type"
            value={formData.input_type}
            onChange={handleChange}
            className="w-[350px] h-10 pl-2 pr-5 rounded-lg outline- border-2 bg-slate-100 text-gray-400"
            required
          >
            <option value="">Select input type</option>
            <option value="Seed">Seed</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Chemical">Chemical</option>
          </select>
        </div>

        {formData.input_type && (
          <div className="flex items-start justify-left flex-col">
            <label htmlFor="subtype">Subtype</label>
            <select
              id="subtype"
              name="subtype"
              value={formData.subtype}
              onChange={handleChange}
              className="w-[350px] h-10 pl-2 pr-5 rounded-lg outline-none border-2 bg-slate-100 text-gray-400"
              required
            >
              <option value="">Select subtype</option>
              {renderSubtypeOptions()}
            </select>
          </div>
        )}

        <div className="flex items-start justify-left flex-col">
          <label htmlFor="amount">{renderAmountLabel()}</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-[350px] h-10 pl-5 rounded-lg outline-none border-2 bg-slate-100 text-gray-400"
            defaultValue={renderDefaultAmountValue()}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-20 px-4 py-2 rounded-md flex items-center justify-center"
        >
          Update Order
        </button>
      </form>
    </div>
    </div>
  );
}

export default UpdateOrder;
