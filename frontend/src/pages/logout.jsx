// Logout.js

import React from "react";

const Logout = ({ handleLogout }) => {
  const handleLogoutClick = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Call the handleLogout function passed from the parent component
    handleLogout();
  };

  return (
    <div>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default Logout;
