import React from 'react'
import './App.css'
import FarmersData from './components/displayData/farmers_data';
import FarmerUpdate from './components/registrationForm/FarmerUpdate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
//import RegistrationFormate from './components/formate/registrationFormate';
// import OrderFOrm from './components/OrderForm/order';
//import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
const App = () => {
  return (
    <BrowserRouter>
  <div className="App">
    
    
       <Routes>
        <Route path='/' element={<FarmersData />} />
        <Route path='/update/:id' element={<FarmerUpdate />} />

       </Routes>
    
    
  {/* <FarmerRegistrationForm /> */}
  {/* <OrderFOrm /> */}
  {/* <RegistrationFormate typeName="Woreda" fname="First name" mname="Father name" lname="grand father name" email="Email" password
  ="Password" user_name="User Name" phone_number="phone number" id="Id"/> */}
  </div>
  </BrowserRouter>)
  ;
}

export default App
