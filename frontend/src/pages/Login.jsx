import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    role: "",
  });
  const { user_name, password, role } = formData;
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const roleOptions = [
    { value: "Farmer", label: "Farmer" },
    { value: "Land_Admin", label: "Land_Admin" },
    { value: "Woreda_Admin", label: "Woreda_Admin" },
    { value: "Zone_Admin", label: "Zone_Admin" },
    { value: "Region_Admin", label: "Region_Admin" },
    { value: "Distributor", label: "Distributor" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // const handleUsernameChange = (e) => {
  //   const { value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     user_name: value,
  //   }));
  // };

  // const handlePasswordChange = (e) => {
  //   const { value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     password: value,

  //   }));
  // };
  // const handleRoleChange = (e) => {
  //   const { value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     role: value,
  //   }));
  // };

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
    } else if (user_name.length === 0) {
      setUsernameError("Please enter a user_name");
      setPasswordError("");
      setError("");
      return;
    }

    // Check password length
    if (password.length === 0) {
      setPasswordError("Please enter a password");
      setUsernameError("");
      setError("");
      return;
    } else if (password.length < 8 || password.length > 21) {
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
      // Assuming the backend sends a response with a status property indicating success
      if (statusCode === 200 && role === "Farmer") {
        console.log("logged in successfully");
        navigate("/dashboard");
      } else if (statusCode === 401) {
        // Unauthorized login
       setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
      //////admin of land
      if (statusCode === 200 && role === "Land_Admin") {
        console.log("logged in successfully");
        navigate("/contact");
      } else if (statusCode === 401) {
        // Unauthorized login
        setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
      /////admin of woreda
      if (statusCode === 200 && role === "Woreda_Admin") {
        console.log("logged in successfully");
        navigate("/about");
      } else if (statusCode === 401) {
        // Unauthorized login
        setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
      ////// zone admin

      if (statusCode === 200 && role === "Zone_Admin") {
        console.log("logged in successfully");
        navigate("/");
      } else if (statusCode === 401) {
        // Unauthorized login
        setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
      //////region admin

      if (statusCode === 200 && role === "Region_Admin") {
        console.log("logged in successfully");
        navigate("/");
      } else if (statusCode === 401) {
        // Unauthorized login
        setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
      //////distributor
      if (statusCode === 200 && role === "Distributor") {
        console.log("logged in successfully");
        navigate("/");
      } else if (statusCode === 401) {
        // Unauthorized login
        setError("Invalid email or password");
      } else {
        // Other status codes
        setError("An error occurred");
      }
    } catch (error) {
      // Handle error
      console.log("Error:", error);
    }
  };
  return (
    <div
      className="flex justify-center items-center h-[100vh] overflow-hidden w-[100vw]"
      style={{ backgroundImage: `url("login.jpg")`, backgroundSize:"cover", backgroundRepeat: "no-repeat", backgroundPosition:"center" }}
    >
      <div className="w-[400px] flex justify-center flex-col items-center  max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && <p className="text-red-400">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valuser_name "
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="role" className="block dark:text-gray-300">
              Role
            </label>
            <select
              value={role}
              onChange={handleChange}
              name="role"
              user_name="role"
              className="w-[350px] px-4 py-3 rounded-md bg-gray-50 text-black h-10 focus:dark:border-violet-400"
            >
              <option value="">Select a role</option>
              {roleOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="w-[370px]"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

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
            className="block text-center w-full  rounded-sm dark:text-gray-900 dark:bg-green-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;