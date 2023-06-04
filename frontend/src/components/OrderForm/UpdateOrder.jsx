import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DashView from "./DashView";

function UpdateOrder() {
  const [formData, setFormData] = useState({
    input_type: "",
    amount: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/v1/order/${id}`)
      .then((res) => {
        setFormData((prevState) => ({
          ...prevState,
          input_type: res.data[0].input_type,
          amount: res.data[0].amount,
        }));
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/order/update/${id}`,
        formData
      );
      navigate("/OrderDisplayForm");
      console.log(response);
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

  return (
    <div>
      <DashView />
      <div className="flex flex-col justify-center items-center p-16 bg-gray-100 ">
        <div className="text-black text-[18px] leading-6">
          <h2>Order Modification Form</h2>
        </div>
        <form className="bg-gray-200" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-10 py-[15px] px-[15px] h-[200px]">
            <label htmlFor="input_type">Input Type</label>
            <input
              list="input_type_options"
              id="input_type"
              name="input_type"
              value={formData.input_type}
              onChange={handleChange}
              required
            />
            <datalist id="input_type_options">
              <option value="Seed" />
              <option value="DAP" />
              <option value="UREA" />
              <option value="Chemical" />
            </datalist>
          </div>
          <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
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
          <div className="flex justify-center items-center">
            <button
              className="w-[150px] h-10 bg-blue-400 rounded-3xl mt-[20px]"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateOrder;
