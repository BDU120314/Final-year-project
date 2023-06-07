import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdateOrder() {
  const user = useSelector((state) => state.auth.user);
  const role = user.role;
  const [formData, setFormData] = useState({
    input_type: "",
    amount: "",
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
          setFormData((prevState) => ({
            ...prevState,
            input_type: res.data.input_type,
            amount: res.data.amount,
          }));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { input_type, amount, role } = formData;
      await axios.put(
        `http://localhost:5001/api/v1/order/farmer/update/${id}`,
        {
          input_type,
          amount,
          role,
        }
      );
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

  return (
    <div className="flex justify-center items-center -mt-20 h-[100vh] bg-gray-100 flex-col">
      <div className="mt-0">
        <h2 className="text-black font-extrabold leading-10 py-25">
          Order form for farmers
        </h2>
      </div>
      <form
        className="flex flex-col items-center bg-gray-200 p-10 gap-10 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-left flex-col">
          <label htmlFor="input_type">Input Type</label>
          <input
            list="input_type"
            id="input_type"
            name="input_type"
            className="w-[350px] h-10 pl-5 rounded-lg outline-none"
            onChange={handleChange}
            value={formData.input_type}
            required
          />
          <datalist id="input_type">
            <option value="Seed"></option>
            <option value="DAP"></option>
            <option value="UREA"></option>
            <option value="Chemical"></option>
          </datalist>
        </div>

        <div className="flex items-start justify-left flex-col">
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

        <div>
          <button
            className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px rounded-lg text-center bg-green-400"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateOrder;
