import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModifyZone() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/addzone/select/${id}`)
      .then((res) => {
        if (res.data && res.data.name && res.data.id) {
          setFormData(res.data);
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
        `http://localhost:5001/api/v1/addzone/update/${id}`,
        formData
      );
      navigate("/regionDashboard/managezone");
      console.log(response);
    } catch (error) {
      console.error(error);
      alert("Error updating Zone.");
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
        <h2>Zone Modification form</h2>
      </div>
      <form className="bg-gray-200" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col items-center gap-5 p-[15px] ">
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="name">Zone Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-sm"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="id">Zone Id</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-sm"
            />
          </div>
        </div>

        <div className="flex justify-center items-center  px-[15px]">
          <div className="flex justify-center items-center">
            <button
              className="w-[350px] h-10 bg-blue-400 rounded-md m-[20px]"
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

export default ModifyZone;
