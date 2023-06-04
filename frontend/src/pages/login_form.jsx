// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginSuccess, loginFailure } from './authSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username) {
//       setUsernameError('Please enter a username');
//       return;
//     }

//     if (!password) {
//       setPasswordError('Please enter a password');
//       return;
//     }

//     try {
//       // Send login request
//       const response = await axios.post('/api/login', {
//         username,
//         password,
//       });

//       // Dispatch login success action
//       dispatch(loginSuccess(response.data.user));

//       // Navigate to dashboard or desired route
//       navigate('/dashboard');
//     } catch (error) {
//       // Dispatch login failure action
//       dispatch(loginFailure('Invalid username or password'));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'username') {
//       setUsername(value);
//       setUsernameError('');
//     } else if (name === 'password') {
//       setPassword(value);
//       setPasswordError('');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-[100vh] overflow-hidden w-[100vw]">
//       <div className="w-[400px] flex justify-center flex-col items-center  max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-white">
//         <h1 className="text-2xl font-bold text-center">Login</h1>
//         {error && <p className="text-red-400">{error}</p>}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 ng-untouched ng-pristine ng-valid"
//         >
//           <div className="space-y-1 text-sm">
//             <label htmlFor="username" className="block dark:text-gray-300">
//               Username
//             </label>
//             <input
//               value={username}
//               onChange={handleChange}
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Username"
//               autoComplete="off"
//               className="w-[350px] px-4 py-3 rounded-md bg-gray-50 text-black h-10 focus:dark:border-violet-400"
//             />
//           </div>
//           {usernameError && <p className="text-red-400">{usernameError}</p>}
//           <div className="space-y-1 text-sm">
//             <label htmlFor="password" className="block dark:text-gray-300">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={handleChange}
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Password"
//               autoComplete="off"
//               className="w-[350px] h-10 px-4 py-3 rounded-md bg-gray-50 text-black focus:dark:border-violet-400"
//             />
//           </div>
//           {passwordError && <p className="text-red-400">{passwordError}</p>}
//           <div className="flex justify-end text-xs dark:text-gray-400">
//             <Link to="/forgot" className="mt-3">
//               Forgot Password?
//             </Link>
//           </div>
//           <button
//             type="submit"
//             className="block text-center w-full h-10 rounded-sm dark:text-gray-900 bg-green-400"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
