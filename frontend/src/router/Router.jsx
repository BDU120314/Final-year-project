import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dash from "../DashboardWoreda/Dash";
import DashZone from "../DashboardZone/Dash";
 import Orders from "../DashboardWoreda/WoredaAdmin/Orders"
  
import AdminRegistrationForm from "../components/registrationForm/admin_form/admin_form";
import SingleLandAdmin from "../components/DisplayData/displayLandAdmin/SingleLandAdmin";

import UpdateLandAdmin from "../components/DisplayData/displayLandAdmin/UpdateLandAdmin"
import LandAdminForm1 from "../components/DisplayData/displayLandAdmin/LandAdminForm"
import WoredaRegistrationForm from "../components/registrationForm/woreda_form/woreda_form";
import DisplaySingleWoreda from "../components/DisplayData/displayWoredaData/displaySingleWoreda";
import WoredaUpdate from "../components/DisplayData/displayWoredaData/updateWoreda";
import WoredaData from "../components/DisplayData/displayWoredaData/woreda_formData";
import DashRegion from "../dashboardDirectoriet/DashRegion";
import ZoneData from "../components/DisplayData/displayZoneData/zone_formData";
import DisplaySingleZone from "../components/DisplayData/displayZoneData/displaySingleZone";
import ZoneUpdate from "../components/DisplayData/displayZoneData/updateZone";
import ZoneRegistrationForm from "../components/registrationForm/zone_form/zone_form";
import DashLandAdmin from "../dashboardLandAdmin/DashLandAdmin";
import FarmersData from "../components/DisplayData/displayFarmersData/farmers_data";
import FarmerUpdate from "../components/DisplayData/displayFarmersData/farmerUpdate";
import DisplaySingleData from "../components/DisplayData/displayFarmersData/displaySingleData";
import FarmerRegistrationForm from "../components/registrationForm/farmers_form/FarmersForm";
import DistributorForm from "../components/DisplayData/displayDistributer/distributor_form";
import DistributorUpdate from "../components/DisplayData/displayDistributer/distributorUpdate";
import DisplaySingleDistributor from "../components/DisplayData/displayFarmersData/displaySingleData";
import DistributorRegistrationForm from "../components/registrationForm/distributor_form/distributor_form";
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
        admin.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
          <Route path="/dashboard_woreda" element={<Dash onSearch={handleSearch} />}>
            <Route index element={<Orders />} />
            <Route
              path="/dashboard_woreda/manageland"
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
              path={"/dashboard_woreda/manageland/update/:id"}
              element={<UpdateLandAdmin />}
            />
            <Route
              path="/dashboard_woreda/manageland/view/:id"
 
              element={<SingleLandAdmin />}
            />
            <Route
              path="/dashboard_woreda/register"
              element={<AdminRegistrationForm />}
            />
            <Route path="/dashboard_woreda/orders" element={<Orders />} />
          </Route>
          <Route path="/zone_dashboard" element={<DashZone />}>
            <Route index element={<Orders />} />
            <Route path="/zone_dashboard/manageland" element={<WoredaData />} />
              <Route
                path={"/zone_dashboard/manageland/update/:id"}
                element={<WoredaUpdate />}
              />
            <Route
              path="/zone_dashboard/manageland/view/:id"
              element={<DisplaySingleWoreda />}
            />

            <Route
              path="/zone_dashboard/register"
              element={<WoredaRegistrationForm />}
            />
            <Route path="/zone_dashboard/orders" element={<Orders />} />
          </Route>

          <Route path="/region_dashboard" element={<DashRegion />}>
            <Route index element={<Orders />} />
            <Route path="/region_dashboard/manage_zone" element={<ZoneData />} />
              <Route
                path={"/region_dashboard/manage_zone/update/:id"}
                element={<ZoneUpdate />}
              />
            <Route
              path="/region_dashboard/manage_zone/view/:id"
              element={<DisplaySingleZone />}
            />

            <Route
              path="/region_dashboard/register_zone"
              element={<ZoneRegistrationForm />}
            />
            <Route path="/region_dashboard/manage_distributor" element={<DistributorForm />} />
              <Route
                path={"/region_dashboard/manage_distributor/update/:id"}
                element={<DistributorUpdate />}
              />
            <Route
              path="/region_dashboard/manage_distributor/view/:id"
              element={<DisplaySingleDistributor />}
            />

            <Route
              path="/region_dashboard/register_distributor"
              element={<DistributorRegistrationForm />}
            />
            
            <Route path="/region_dashboard/orders" element={<Orders />} />
          </Route>

          <Route path="/landadmin_dashboard" element={<DashLandAdmin />}>
            <Route index element={<Orders />} />
            <Route path="/landadmin_dashboard/manage_farmers" element={<FarmersData />} />
              <Route
                path={"/landadmin_dashboard/manage_farmers/update/:id"}
                element={<FarmerUpdate />}
              />
            <Route
              path="/landadmin_dashboard/manage_farmers/view/:id"
              element={<DisplaySingleData />}
            />

            <Route
              path="/landadmin_dashboard/register"
              element={<FarmerRegistrationForm />}
            />
            <Route path="/landadmin_dashboard/FarmersData" element={<FarmersData />} />
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
