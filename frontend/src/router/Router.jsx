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
import WoredaUpdate from "../components/DisplayData/displayWoredaData/updateWoreda";
import WoredaData from "../components/DisplayData/displayWoredaData/woreda_formData";
import DashRegion from "../DashboardDirectoriet/DashRegion";
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
import OrderForm from "../components/OrderForm/orderForm";
import OrderDisplayForm from "../components/OrderForm/orderDisplayForm";
import UpdateOrder from "../components/OrderForm/UpdateOrder";
import AddingWoredaForm from "../components/registrationForm/woreda_form/addworeda_form";
import AddingKebeleForm from "../components/registrationForm/admin_form/addKebele_form";
import AddingZone from "../components/registrationForm/zone_form/addzone_form";
import WoredaDisplay from "../components/registrationForm/woreda_form/woreda_display";
import ModifyWoreda from "../components/registrationForm/woreda_form/woreda_Update";
import AddingWoreda from "../components/registrationForm/woreda_form/addworeda_form";
import DisplaySingleWoreda from "../components/registrationForm/woreda_form/singleworeda";
import DisplaySingleWoredarep from "../components/DisplayData/displayWoredaData/displaySingleWoreda";
import ModifyKebele from "../components/registrationForm/admin_form/kebelemodify";
import DisplaySingleKebele from "../components/registrationForm/admin_form/singlekebele";
import AddingKebele from "../components/registrationForm/admin_form/addKebele_form";
import KebeleDisplay from "../components/registrationForm/admin_form/kebele_form";
import ZoneDisplay from "../components/registrationForm/zone_form/zonedisplay";
import ModifyZone from "../components/registrationForm/zone_form/zonemodify";
import SingleZone from "../components/registrationForm/zone_form/singlezone";
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
          {/* <Route path="/" element={<ModifyWoreda />} /> */}
           
          <Route path="/" element={<Home />} />
          <Route path="/woreda_dashboard" element={<Dash onSearch={handleSearch} />}>
            <Route index element={<Orders />} />
            <Route
              path="/woreda_dashboard/manage_kebelerep"
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
              path={"/woreda_dashboard/manage_kebelerep/update/:id"}
              element={<UpdateLandAdmin />}
            />
            <Route
              path="/woreda_dashboard/manage_kebelerep/view/:id"
 
              element={<SingleLandAdmin />}
            />
            <Route
              path="/woreda_dashboard/register_kebelerep"
              element={<AdminRegistrationForm />}
            />
            <Route
              path={"/woreda_dashboard/manage_kebele"}
              element={<KebeleDisplay />}
            />
            <Route
              path={"/woreda_dashboard/manage_kebele/update/:id"}
              element={<ModifyKebele />}
            />
            <Route
              path="/woreda_dashboard/manage_kebele/view/:id"
 
              element={<DisplaySingleKebele />}
            />
            <Route
              path="/woreda_dashboard/register_kebele"
              element={<AddingKebele />}
            />
            <Route path="/woreda_dashboard/orders" element={<Orders />} />
          </Route>





          <Route path="/zone_dashboard" element={<DashZone />}>
            <Route index element={<Orders />} />
            <Route path="/zone_dashboard/manage_woreda" element={<WoredaDisplay />} />
              <Route
                path={"/zone_dashboard/manage_woreda/update/:id"}
                element={<ModifyWoreda />}
              />
            <Route
              path="/zone_dashboard/manage_woreda/view/:id"
              element={<DisplaySingleWoreda />}
            />

            <Route
              path="/zone_dashboard/register_woreda"
              element={<AddingWoreda />}
            />
            <Route path="/zone_dashboard/manage_woredarep" element={<WoredaData />} />
              <Route
                path={"/zone_dashboard/manage_woredarep/update/:id"}
                element={<WoredaUpdate />}
              />
            <Route
              path="/zone_dashboard/manage_woredarep/view/:id"
              element={<DisplaySingleWoredarep />}
            />
            
            <Route
              path="/zone_dashboard/register_woredarep"
              element={<WoredaRegistrationForm />}
            />
            <Route path="/zone_dashboard/orders" element={<Orders />} />
          </Route>





          <Route path="/region_dashboard" element={<DashRegion />}>
            <Route index element={<Orders />} />
            <Route path="/region_dashboard/manage_zonerep" element={<ZoneData />} />
              <Route
                path={"/region_dashboard/manage_zonerep/update/:id"}
                element={<ZoneUpdate />}
              />
            <Route
              path="/region_dashboard/manage_zonerep/view/:id"
              element={<DisplaySingleZone />}
            />

            <Route
              path="/region_dashboard/register_zonerep"
              element={<ZoneRegistrationForm />}
            />
            <Route path="/region_dashboard/manage_zone" element={<ZoneDisplay />} />
              <Route
                path={"/region_dashboard/manage_zone/update/:id"}
                element={<ModifyZone />}
              />
            <Route
              path="/region_dashboard/manage_zone/view/:id"
              element={<SingleZone />}
            />

            <Route
              path="/region_dashboard/register_zone"
              element={<AddingZone />}
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
            <Route index element={<FarmersData />} />
            <Route path="/landadmin_dashboard" element={<FarmersData />} />
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

          <Route path="/farmerorder" element={<OrderForm />}/>
          <Route path="/farmerorderdisplay" element={<OrderDisplayForm />}/>
          <Route path="/farmerorderdisplay/update/:id" element={<UpdateOrder />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
