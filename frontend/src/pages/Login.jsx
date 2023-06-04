import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/reducers/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import login from "../assets/login.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (isLogin && user) {
      // Navigate to the desired route based on the role_id
      // You can update the routes as per your application's routes
      const roleRoutes = {
        Farmer: "/farmerDashboard",
        Land_Admin: "/landAdminDashboard",
        Woreda_Admin: "/woredaDashboard",
        Zone_Admin: "/zoneDashboard",
        Region_Admin: "/regionDashboard",
        Distributor: "/distributorDashboard",
      };
      navigate(roleRoutes[role] || "/");
    }
  }, [isLogin, user, role, formData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/login",
        formData
      );
      console.log(response.data);
      dispatch(loginStart());
      const { token, role, rep_id, farmers_id, phone_number, user_name } =
        response.data;
      dispatch(
        loginSuccess({
          token,
          role,
          rep_id,
          farmers_id,
          phone_number,
          user_name,
          // Include the role in the payload
        })
      );
      toast.success("Login successful!");
    } catch (error) {
      dispatch(loginFailure(error.message));
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${login})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
      className="flex justify-center items-center h-[100vh] overflow-hidden w-[100vw]"
    >
      <div className="w-[400px] flex justify-center flex-col items-center  max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="phone" className="block dark:text-gray-300">
              Phone Number
            </label>
            <input
              value={formData.phone_number}
              onChange={handleChange}
              type="tel"
              name="phone_number"
              id="phone"
              placeholder="+25190000000"
              autoComplete="off"
              className="w-[350px] px-4 py-3 rounded-md bg-gray-50 text-black h-10 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-300">
              Password
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="off"
              className="w-[350px] h-10 px-4 py-3 rounded-md bg-gray-50 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="flex  justify-end text-xs dark:text-gray-400">
            <Link to="/forgot" className="mt-3">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="block text-center w-full h-10 rounded-sm dark:text-gray-900b bg-green-400"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
