import React from 'react'
import './App.css'
import FarmersData from './components/displayData/farmers_data';
//import FarmerUpdate from './components/registrationForm/FarmerUpdate';
//import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
import { Route, Routes } from 'react-router-dom';
import DisplaySingleData from './components/displayData/displaySingleData';
import FarmerUpdate from './components/registrationForm/FarmerUpdate';
 
//import RegistrationFormate from './components/formate/registrationFormate';
// import OrderFOrm from './components/OrderForm/order';
// import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
const App = () => {
  return (
 
    
    <div className="App">
      {/* <FarmerRegistrationForm /> */}
      <Routes>
        <Route path='/' element= {<FarmersData />}/>
        <Route path="/view/:id" element={<DisplaySingleData />} />
        <Route  path='/update/:id' element={<FarmerUpdate />}/>
      </Routes>

      {/* <OrderFOrm /> */}
      {/* <RegistrationFormate typeName="Woreda" fname="First name" mname="Father name" lname="grand father name" email="Email" password
  ="Password" user_name="User Name" phone_number="phone number" id="Id"/> */}
    </div>
  );
 
}

export default App
