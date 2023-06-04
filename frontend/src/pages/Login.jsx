import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import axios from "axios";
import LoginForm from "./login_form";

const Login = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });
  const { user_name, password } = formData;
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user_name and password fields are filled
    if (!user_name || !password) {
      setError("Please fill in all fields");
      setPasswordError("");
      setUsernameError("");
      return;
    }

    // Checking user_name
    if (user_name.length < 2 || user_name.length > 30) {
      setUsernameError("Username must be between 2 and 30 characters");
      setPasswordError("");
      setError("");
      return;
    }
    // Check password length
    if (password.length < 8 || password.length > 21) {
      setPasswordError("Password must be between 8 and 21 characters");
      setUsernameError("");
      setError("");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/login",
        formData
      );
      const statusCode = response.status;
      const Role_id = response.data.role;

      if (statusCode === 200) {
        console.log(response.message);
        // const token = response.data.token;
        // localStorage.setItem("token", token);

        switch (Role_id) {
          case "Farmer":
            navigate("/farmerorder");

            break;
          case "Land_Admin":
            navigate("/landadmin_dashboard");
            break;
          case "Woreda_Admin":
            navigate("/dashboard_woreda");
            break;
          case "Zone_Admin":
            navigate("/zone_dashboard");
            break;
          case "Region_Admin":
            navigate("/region_dashboard");
            break;
          case "Distributor":
            navigate("/");
            break;
          default:
            setError("Invalid role");
            break;
        }
      } else if (statusCode === 401) {
        setError("Invalid email or password");
      } else {
        setError("An error occurred");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] overflow-hidden w-[100vw]"
     >
      <div className="w-[400px] flex justify-center flex-col items-center  max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="text-red-400">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valuser_name "
        >

          <div className="space-y-1 text-sm">
            <label htmlFor="user_name" className="block dark:text-gray-300">
              Username
            </label>
            <input
              value={user_name}
              onChange={handleChange}
              type="text"
              name="user_name"
              user_name="user_name"
              placeholder="User name"
              autoComplete="off"
              className="w-[350px] px-4 py-3 rounded-md bg-gray-50 text-black h-10 focus:dark:border-violet-400"
            />
          </div>
          {usernameError && <p className="text-red-400">{usernameError}</p>}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-300">
              Password
            </label>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              user_name="password"
              name="password"
              autoComplete="off"
              className="w-[350px] h-10 px-4 py-3 rounded-md bg-gray-50 text-black focus:dark:border-violet-400"
            />
          </div>
          {passwordError && <p className="text-red-400">{passwordError}</p>}
          <div className="flex  justify-end text-xs dark:text-gray-400">
            <Link to="/forgot" className="mt-3">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="block text-center w-full h-10  rounded-sm dark:text-gray-900b bg-green-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
// const Login = () => {
//   return <LoginForm />;
// };
export default Login;
