import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import FarmerEdit from './components/registrationForm/FarmerEdit';
//import RegistrationFormate from './components/formate/registrationFormate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < FarmerEdit />
  </React.StrictMode>
);

