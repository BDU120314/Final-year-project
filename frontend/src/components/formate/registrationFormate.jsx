import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationFormate = ({ typeName, dataBaseColumn }) => {
  const [formData, setFormData] = useState({
    [dataBaseColumn]: "",
    fname: "",
    mname: "",
    lname: "",
    gender: "",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
  });

  const {
    [dataBaseColumn]: columnValue,
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
  } = formData;

  const [zones, setZones] = useState([]);
  const [woreda, setWoreda] = useState([]);
  const [kebeles, setKebeles] = useState([]);
  const [admin, setAdmin] =useState([])
  const user = JSON.parse(localStorage.getItem("user"));

   useEffect(() => {
     const adminData = async () => {
       const response = await axios.get(
         `http://localhost:5001/api/v1/woreda/${user.rep_id}`
       );
       setAdmin(response.data.rows[0]);
     };
     adminData();
   }, [user.rep_id]);
   useEffect(() => {
     const adminData = async () => {
       const response = await axios.get(
         `http://localhost:5001/api/v1/zone/${user.rep_id}`
       );
       setAdmin(response.data.rows[0]);
     };
     adminData();
   }, [user.rep_id]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const handleZoneData = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/addzone");
      setZones(response.data);
    };
    handleZoneData();
  }, []);

  useEffect(() => {
    const handleWoredaData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/addworeda/fetch/${admin.zone_id}`
      );
      setWoreda(response.data);
    };
    handleWoredaData();
  }, [admin]);

  useEffect(() => {
    const handleKebeleData = async () => {
      const response = await axios.get(
        `http://localhost:5001/api/v1/addkebele/fetch/${admin.woreda_id}`
      );
      console.log(response.data);
      setKebeles(response.data);
    };
    handleKebeleData();
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(
        `http://localhost:5001/api/v1/${typeName.toLowerCase()}`,
        formData
      );
      alert("User successfully registered");
      setFormData({
        [dataBaseColumn]: "",
        fname: "",
        mname: "",
        lname: "",
        gender: "",
        email: "",
        phone_number: "",
        user_name: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white p-0 flex-col min-h-full">
      <h2 className="text-black font-extrabold leading-10 py-[10px]">
        Registration Form
      </h2>
      <form
        className="flex flex-col overflow-auto md:overflow-scroll bg-gray-200 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap justify-center items-center gap-5  py-[1px] px-[15px] ">
          {(() => {
            switch (typeName) {
              case "Zone":
                return (
                  <div className="flex items-left flex-col justify-left ">
                    <label htmlFor={dataBaseColumn}>{typeName}</label>
                    <select
                      name={dataBaseColumn}
                      id={dataBaseColumn}
                      onChange={handleChange}
                      value={columnValue}
                      className="w-[350px] h-8 pl-5 rounded-sm outline-none"
                      required
                    >
                      <option value="">Select {typeName}</option>
                      {zones.map((zone) => (
                        <option key={zone.id} value={zone.id}>
                          {zone.name}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              case "Woreda":
                return (
                  <div className="flex items-left flex-col justify-left ">
                    <label htmlFor={dataBaseColumn}>{typeName}</label>
                    <select
                      name={dataBaseColumn}
                      id={dataBaseColumn}
                      onChange={handleChange}
                      value={columnValue}
                      className="w-[350px] h-8 pl-5 rounded-sm outline-none"
                      required
                    >
                      <option value="">Select {typeName}</option>
                      {woreda.map((woreda) => (
                        <option key={woreda.id} value={woreda.id}>
                          {woreda.name}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              case "Kebele":
                return (
                  <div className="flex items-left flex-col justify-left ">
                    <label htmlFor={dataBaseColumn}>{typeName}</label>
                    <select
                      name={dataBaseColumn}
                      id={dataBaseColumn}
                      onChange={handleChange}
                      value={columnValue}
                      className="w-[350px] h-8 pl-5 rounded-sm outline-none"
                      required
                    >
                      <option value="">Select {typeName}</option>
                      {kebeles.map((kebele) => (
                        <option key={kebele.id} value={kebele.id}>
                          {kebele.kebele_name}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              default:
                return null;
            }
          })()}
          <div className="flex items-start justify-left  flex-col">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              value={fname}
              required
              className="outline-none w-[350px] h-8 pl-5 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6  py-[10px]">
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="mname">Mid_Name</label>
            <input
              type="text"
              name="mname"
              id="mname"
              onChange={handleChange}
              value={mname}
              required
              className="outline-none w-[350px] h-8 pl-5 rounded-sm"
            />
          </div>
          <div className="flex items-left flex-col justify-left ">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              value={lname}
              required
              className="outline-none w-[350px] h-8 pl-5 rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6  py-[10px]">
          <div className="flex justify-left  flex-col">
            <label htmlFor="gender">gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={handleChange}
              className="w-[350px] h-8 pl-5 rounded-sm outline-none"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex justify-left  flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-[350px] h-8 pl-5 rounded-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6  py-[10px]">
          <div className="flex justify-left  flex-col">
            <label htmlFor="tel">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="tel"
              onChange={handleChange}
              value={phone_number}
              required
              className="w-[350px] h-8 pl-5 rounded-sm outline-none"
            />
          </div>
          <div className="flex justify-left  flex-col">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              onChange={handleChange}
              value={user_name}
              required
              className="w-[350px] h-8 pl-5 rounded-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 py-[10px]">
          <div className="flex justify-left  flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={password}
              required
              className="w-[350px] h-8 pl-5 rounded-sm outline-none mb-5"
            />
          </div>
          <div className="flex justify-left  flex-col">
            <button
              type="submit"
              className="bg-green-500 w-[350px] hover:bg-green-700  h-10 text-white rounded-sm outline-none"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormate;
