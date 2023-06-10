import React, { useEffect, useState } from "react";
import axios from "axios"; 

function AddingKebele  () {
  const [formData, setFormData] = useState({
    kebele_name: "",
    id: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const [admin, setAdmin] = useState([]);

  const { id, kebele_name } = formData;

  // fetch admin detail
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/kebele/${user.rep_id}`
        );
        setAdmin(response.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAdmins();
  }, [user.rep_id]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
       axios.post("http://localhost:5001/api/v1/addkebele", {
        id,
        kebele_name,
        woreda_id: admin.woreda_id,
      });
      window.alert("kebele successfully registered.");
    } catch (error) {
      console.log(error);
    }

    setFormData({
      kebele_name: " ",
      id: "",
    });
  };

  return (
    <div className="flex justify-center items-center bg-white gap-5 p-0 flex-col px-16">
      <h2 className="text-black font-extrabold leading-10 py-[25px]">
        Kebele Registration Form
      </h2>
      <form
        action="farmer-registration-form"
        className="flex flex-col bg-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-center gap-5  p-[15px] ">
          <div className="flex justify-left flex-col">
            <label htmlFor="kebele_name">Kebele Name</label>
            <input
              type="text"
              name="kebele_name"
              id="kebele_name"
              onChange={handleChange}
              value={formData.kebele_name}
              required
              className="w-[350px] h-10 pl-5 rounded-sm outline-none"
            />
          </div>
          <div className="flex justify-left flex-col">
            <label htmlFor="id">Id</label>
            <input
              type="number"
              name="id"
              id="id"
              onChange={handleChange}
              value={formData.id}
              required
              className="w-[350px] h-10 pl-5 rounded-sm outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className=" h-10 flex items-center justify-center my-6 w-[200px] bg-48px bg-green-400 rounded-md">
            <button className="text-center bg-green-400" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddingKebele;
