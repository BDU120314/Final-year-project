// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
 
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Contact from "../pages/Contact";
// import About from "../pages/About";
// import Dash from "../DashboardWoreda/Dash";
// import DashZone from "../DashboardZone/Dash";
//  import Orders from "../DashboardWoreda/WoredaAdmin/Orders"
  
// import AdminRegistrationForm from "../components/registrationForm/admin_form/admin_form";
// import SingleLandAdmin from "../components/DisplayData/displayLandAdmin/SingleLandAdmin";
// import UpdateLandAdmin from "../components/DisplayData/displayLandAdmin/UpdateLandAdmin"
// import LandAdminForm1 from "../components/DisplayData/displayLandAdmin/LandAdminForm"
// import WoredaRegistration_form from "../components/registrationForm/woreda_form/woreda_form";
// import DisplaySingleWoreda from "../components/DisplayData/displayWoredaData/displaySingleWoreda";
// import WoredaUpdate from "../components/DisplayData/displayWoredaData/updateWoreda";
// import WoredaData from "../components/DisplayData/displayWoredaData/woreda_formData";
 
// import ZoneData from "../components/DisplayData/displayZoneData/zone_formData";
// import DisplaySingleZone from "../components/DisplayData/displayZoneData/displaySingleZone";
// import ZoneUpdate from "../components/DisplayData/displayZoneData/updateZone";
// import ZoneRegistrationForm from "../components/registrationForm/zone_form/zone_form";
 
// import FarmersData from "../components/DisplayData/displayFarmersData/farmers_data";
// import FarmerUpdate from "../components/DisplayData/displayFarmersData/farmerUpdate";
// import DisplaySingleData from "../components/DisplayData/displayFarmersData/displaySingleData";
// import FarmerRegistrationForm from "../components/registrationForm/farmers_form/FarmersForm";
// import DistributorForm from "../components/DisplayData/displayDistributer/distributor_form";
// import DistributorUpdate from "../components/DisplayData/displayDistributer/distributorUpdate";
// import DisplaySingleDistributor from "../components/DisplayData/displayFarmersData/displaySingleData";
// import DistributorRegistrationForm from "../components/registrationForm/distributor_form/distributor_form";
// import OrderForm from "../components/OrderForm/orderForm";
// import DashRegion from "../DashboardDirectoriet/DashRegion";
// import DashLandAdmin from "../dashboardLandAdmin/DashLandAdmin";
 

//   const Router = () => {
 
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
           
//           <Route path="/" element={<Home />} />
 
//           <Route path="/dashboard_woreda" element={<Dash />}>
//             <Route index element={< Orders />} />
//             <Route path="/dashboard_woreda/manageland" element={<LandAdminForm1 />} />
//               <Route
//                 path={"/dashboard_woreda/manageland/update/:id"}
//                 element={<UpdateLandAdmin />}
//               />
//             <Route
//               path="/dashboard_woreda/manageland/view/:id"
 
//               element={<SingleLandAdmin />}
//             />

//             <Route
//               path="/dashboard_woreda/register"
//               element={<AdminRegistrationForm />}
//             />
//             <Route path="/dashboard_woreda/orders" element={<Orders />} />
//           </Route>


// //routes to zone
//           <Route path="/zone_dashboard" element={<DashZone />}>
//             <Route index element={<Orders />} />
//             <Route path="/zone_dashboard/manageland" element={<WoredaData />} />
//               <Route
//                 path={"/zone_dashboard/manageland/update/:id"}
//                 element={<WoredaUpdate />}
//               />
//             <Route
//               path="/zone_dashboard/manageland/view/:id"
//               element={<DisplaySingleWoreda />}
//             />

//             <Route
//               path="/zone_dashboard/register"
//               element={<WoredaRegistration_form />}
//             />
//             <Route path="/zone_dashboard/orders" element={<Orders />} />
//           </Route>

//           //Region Route
//           <Route path="/region_dashboard" element={<DashRegion />}>
//             <Route index element={<Orders />} />
//             <Route path="/region_dashboard/manage_zone" element={<ZoneData />} />
//               <Route
//                 path={"/region_dashboard/manage_zone/update/:id"}
//                 element={<ZoneUpdate />}
//               />
//             <Route
//               path="/region_dashboard/manage_zone/view/:id"
//               element={<DisplaySingleZone />}
//             />

//             <Route
//               path="/region_dashboard/register_zone"
//               element={<ZoneRegistrationForm />}
//             />
//             <Route path="/region_dashboard/manage_distributor" element={<DistributorForm />} />
//               <Route
//                 path={"/region_dashboard/manage_distributor/update/:id"}
//                 element={<DistributorUpdate />}
//               />
//             <Route
//               path="/region_dashboard/manage_distributor/view/:id"
//               element={<DisplaySingleDistributor />}
//             />

//             <Route
//               path="/region_dashboard/register_distributor"
//               element={<DistributorRegistrationForm />}
//             />
            
//             <Route path="/region_dashboard/orders" element={<Orders />} />
//           </Route>

//           //land admin routes
//           <Route path="/landadmin_dashboard" element={<DashLandAdmin />}>
//             <Route index element={<Orders />} />
//             <Route path="/landadmin_dashboard/manage_farmers" element={<FarmersData />} />
//               <Route
//                 path={"/landadmin_dashboard/manage_farmers/update/:id"}
//                 element={<FarmerUpdate />}
//               />
//             <Route
//               path="/landadmin_dashboard/manage_farmers/view/:id"
//               element={<DisplaySingleData />}
//             />

//             <Route
//               path="/landadmin_dashboard/register"
//               element={<FarmerRegistrationForm />}
//             />
//             <Route path="/landadmin_dashboard/FarmersData" element={<FarmersData />} />
//           </Route>

//           <Route path="/login" element={<Login />} />

//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Router;
