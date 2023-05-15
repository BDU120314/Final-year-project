import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "../dashboard/Dash";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import AdminRegistrationForm from "../components/registrationForm/admin_form/admin_form";
import Orders from "../dashboard/WoredaAdmin/Orders";
import LandAdminForm1 from "../components/DisplayData/displayLandAdmin/LandAdminForm";
import UpdateLandAdmin from "../components/DisplayData/displayLandAdmin/UpdateLandAdmin";
import SingleLandAdmin from "../components/DisplayData/displayLandAdmin/SingleLandAdmin";
import axios from "axios";


  const Router = () => {

 const [kebeleData, setKebeleData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

 useEffect(() => {
   axios
     .get("http://localhost:5001/api/v1/kebele")
     .then((response) => {
       setKebeleData(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, [kebeleData]);

  const handleSearch = (searchQuery) => {
    if (searchQuery === "") {
      setFilteredData([]);
    } else {
    const filteredData = kebeleData.filter((admin) => {
      // Modify the following conditions based on your data structure and desired properties
      return (
        admin.rep_fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.rep_lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.id.toString().includes(searchQuery) // Example: filtering based on an age property
      );
    });
    setFilteredData(filteredData);
  }
}
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dash onSearch={handleSearch} />}>
            <Route index element={<Orders />} />
            <Route
              path="/dashboard/manageland"
              element={
                <LandAdminForm1
                  kebeleData={
                    filteredData.length > 0 ? filteredData : kebeleData
                  }
                  setKebeleData={setKebeleData}
                />
              }
            ></Route>
            <Route
              path={"/dashboard/manageland/update/:id"}
              element={<UpdateLandAdmin />}
            />
            <Route
              path="/dashboard/manageland/view/:id"
              element={<SingleLandAdmin />}
            />
            <Route
              path="/dashboard/register"
              element={<AdminRegistrationForm />}
            />
            <Route path="/dashboard/orders" element={<Orders />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
