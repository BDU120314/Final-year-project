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
import Logout from "../pages/logout";

const Router = () => {

 const [loggedIn, setLoggedIn] = useState(false);

 const handleLogin = () => {
   setLoggedIn(true);
 };

 const handleLogout = () => {
   setLoggedIn(false);
 };

 const checkToken = async () => {
   const token = localStorage.getItem("token");
   if (token) {
     try {
       // Verify the token on the server side
       const response = await axios.get(
         "http://localhost:5001/api/v1/protected",
         {
           headers: { Authorization: token },
         }
       );

       // If the token is valid, set the logged in state to true
       if (response.status === 200) {
         setLoggedIn(true);
       }
     } catch (error) {
       console.error(error);
       // Handle token verification error
     }
   }
 };

 // Check token on app load
 useEffect(() => {
   checkToken();
 }, []);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dash />}>
            <Route index element={<Orders />} />
            <Route
              path="/dashboard/manageland"
              element={<LandAdminForm1 />}
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
