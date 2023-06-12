import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModifyWoreda() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

useEffect(() => {
  axios
    .get(`http://localhost:5001/api/v1/addworeda/select/${id}`)
    .then((res) => {
      console.log(res.data); // Log the response data
      if (res.data && res.data.name && res.data.id) {
        console.log(res.data);
        setFormData({
          name: res.data.name,
          id: res.data.id,
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
}, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5001/api/v1/addworeda/update/${id}`,
        formData
      );
      navigate("/zoneDashboard/manageWoreda");
      console.log(response);
    } catch (error) {
      console.error(error);
      alert("Error updating woreda.");
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 bg-white">
      <div className="text-black text-[18px] leading-6">
        <h2>Woreda Modification form</h2>
      </div>
      <form className="bg-gray-200" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5  p-[15px]">
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="name">Woreda Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={ formData.name}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="id">Woreda Id</label>
            <input
              type="text"
              id="id"
              name="id"
              value={ formData.id}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 p-[15px]">
          <div className="flex justify-center items-center">
            <button
              className="w-[200px] text-white h-10 bg-green-600 hover:bg-green-400 rounded-md mt-[20px]"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModifyWoreda;
