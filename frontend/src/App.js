import React from 'react'
import './App.css'
import FarmersData from './components/displayData/farmers_data';
//import FarmerUpdate from './components/registrationForm/FarmerUpdate';
//import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
import { Route, Routes } from 'react-router-dom';
import DisplaySingleData from './components/displayData/displaySingleData';
// import FarmerUpdate from './components/registrationForm/FarmerUpdate';
import FarmerUpdate from './components/displayData/farmerUpdate';
import RegistrationFormate from './components/formate/registrationFormate';
// import OrderFOrm from './components/OrderForm/order';
// import FarmerRegistrationForm from './components/registrationForm/FarmersForm';
const App = () => {
  return (
 
    
    <div className="App">
      {/* <FarmerRegistrationForm /> */}
      <Routes>
        <Route path="/" element={RegistrationFormate} />
        {/* <Route path="/" element={<FarmersData />} />
        <Route path="/view/:id" element={<DisplaySingleData />} />

        <Route  path='/update/:id' element={<FarmerUpdate />}/>
 
        <Route path="/update/:id" element={<FarmerUpdate />} /> */}
 
      </Routes>

      {/* <OrderFOrm /> */}
      <RegistrationFormate typeName="Woreda" />

    </div>
  );
 
}

export default App
