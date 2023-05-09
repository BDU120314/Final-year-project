import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <form action="">
          <div className="label_input">
            <label htmlFor="username">User Name / Email</label>
            <input type="text" name="user_name" id="username" />
          </div>
          <div className="label_input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
        <div>
          <h3>
            don't have account ? <span>SignUp</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
