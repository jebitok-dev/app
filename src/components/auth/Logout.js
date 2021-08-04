import React from 'react';
import '../../styles/registration.css';

const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
      <button className="logoutButton" type="button" onClick={() => { handleLogout(); }}>LOGOUT</button>
    </div>
  );
};

export default Logout;
