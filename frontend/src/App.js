import React from 'react'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
   
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    
  </Routes>
    

      
    </div>
  );
 
}

export default App
