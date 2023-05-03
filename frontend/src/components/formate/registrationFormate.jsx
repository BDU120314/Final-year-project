import React from 'react'
import './formate.css'
const RegistrationFormate = ({typeName, fname, mname, lname, email, password, user_name, phone_number, id}) => {
  return (
    <div className="formate">
      <h2>Registration Form</h2>
      <form action="" className="formate_form">
        <div className="formate_input_label">
          <label htmlFor="typeName">{typeName}</label>
          <input type="text" name="typename" id="typeName" />
        </div>
        <div className="formate_input_label">
          <label htmlFor="fname">{fname}</label>
          <input type="text" name="fname" id="fname" 
            pattern="^[A-Z]\w*$"
            oninvalid="this.setCustomValidity
            ('please make first letter of your name as capital')"
            onchange="try{setCustomValidity('')} catch(e){}"
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="mname">{mname}</label>
          <input type="text" name="mName" id="mname" 
            pattern="^[A-Z]\w*$"
            oninvalid="this.setCustomValidity
            ('please make first letter of your name as capital')"
            onchange="try{setCustomValidity('')} catch(e){}"/>
        </div>
        <div className="formate_input_label">
          <label htmlFor="lname">{lname}</label>
          <input type="text" name="lName" id="lname" 
            pattern="^[A-Z]\w*$"
            oninvalid="this.setCustomValidity
            ('please make first letter of your name as capital')"
            onchange="try{setCustomValidity('')} catch(e){}"/>
        </div>
        <div className="formate_input_label">
          <label htmlFor="email">{email}</label>
          <input type="text" name="email" id="email" 
           oninvalid="this.setCustomValidity ('please inter the valid email')" onchange="try{setCustomValidity('')} catch(e){}"
          />
        </div>
        <div className="formate_input_label">
          <label htmlFor="password">{password}</label>
          <input type="text" name="password" id="password" />
        </div>
        <div className="formate_input_label">
          <label htmlFor="username">{user_name}</label>
          <input type="text" name="userName" id="username" />
        </div>
        <div className="formate_input_label">
          <label htmlFor="tel">{phone_number}</label>
          <input type="text" name="phone" id="tel" />
        </div>
        <div className="formate_input_label">
          <label htmlFor="id">{id}</label>
          <input type="text" name="id" id="id" />
        </div>
        <div className="buttons">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationFormate