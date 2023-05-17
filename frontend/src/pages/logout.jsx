import React from 'react';
import { navigate } from '@reach/router';
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const handleLogout = () => {
    // Perform any logout logic here, such as clearing tokens or session data

    // Redirect to the login page after logout
    navigate('/login');
  };

  return (
    <div>
    <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                >Logout</Link>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
