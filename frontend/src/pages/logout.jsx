import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const LogoutButton = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    // Perform logout operation
    fetch("/logout")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoggedOut(true);
        }
      });
  };

  if (loggedOut) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
