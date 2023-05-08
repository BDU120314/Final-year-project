import React from 'react'
import './App.css'
import {  Router, Route, Routes} from "react-router-dom";
import LandAdminForm1 from './components/DisplayData/displayLandAdmin/LandAdminForm';
import UpdateLandAdmin from './components/DisplayData/displayLandAdmin/UpdateLandAdmin';
import SingleLandAdmin from './components/DisplayData/displayLandAdmin/SingleLandAdmin';
import Home from './pages/Home';
 
 

const App = () => {
  return (
    <div className="App"> 
    <Home />
      </div>
  );
 
}

export default App
