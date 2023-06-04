import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ModifyWoreda() {
  const [formData, setFormData] = useState({
    woreda_name: "",
    id: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/addworeda/${id}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setFormData(res.data[0]);
          console.log(res.data[0]);
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
      navigate("/zone_dashboard/manage_woreda");
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
    <div className="flex flex-col justify-center items-center p-5 bg-gray-100">
      <div className="text-black text-[18px] leading-6">
        <h2>Woreda Modification form</h2>
      </div>
      <form className="bg-gray-200" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="woreda_name">Woreda Name</label>
            <input
              type="text"
              id="woreda_name"
              name="woreda_name"
              value={formData && formData.woreda_name}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
              required
            />
          </div>
          <div className="flex items-left flex-col justify-left">
            <label htmlFor="id">Woreda Id</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData && formData.id}
              onChange={handleChange}
              className="w-[350px] h-10 outline-none pl-5 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 py-[15px] px-[15px]">
          <div className="flex justify-center items-center">
            <button
              className="w-[350px] h-10 bg-blue-400 rounded-3xl mt-[20px]"
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
