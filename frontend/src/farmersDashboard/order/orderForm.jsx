import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const [formData, setFormData] = useState({
    input_type: "",
    amount: "",
  });
  const [farmer, setFarmer] = useState([]);
  const { amount } = formData;
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const farmers_id = user.farmers_id;
  const role = user.role
 
  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/farmers/${farmers_id}`
      );
      setFarmer(response.data);
    };
    fetchedData();
  }, [farmers_id]);

  const fname = farmer.length > 0 ? farmer[0].fname : "";
  const mname = farmer.length > 0 ? farmer[0].mname : "";
  const kebele_id = farmer.length > 0 ? farmer[0].kebele_id : "";
console.log(kebele_id)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/v1/order", {
        fname,
        mname,
        input_type: formData.input_type,
        amount,
        farmers_id,
        kebele_id,
        role,
      });
      if (response.status === 200) {
        alert("Order successfully placed");
        navigate("/farmerDashboard/manageAccount"); // Navigate after successful order
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center -mt-20 h-[100vh]  bg-gray-100  flex-col">
      <div className="mt-0 ">
        <h2 className="text-black font-extrabold leading-10 py-25">
          Order form for farmers
        </h2>
      </div>
      <form
        className="flex flex-col items-center bg-gray-200  p-10 gap-10 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-start justify-left flex-col ">
          <label htmlFor="input_type">Input Type</label>
          <input
            list="input_type"
            id="inputs"
            name="input_type"
            className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
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

        <div className="flex items-start justify-left flex-col ">
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleChange}
            className="w-[350px] h-10 pl-5 rounded-lg  outline-none"
            required
          />
        </div>
        <div className=" ">
          <button
            className="ml-72 h-10 flex items-center justify-center my-6 w-[100px] bg-48px  rounded-lg text-center bg-green-400 "
            type="submit"
          >
            እዘዝ
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
//remove async await