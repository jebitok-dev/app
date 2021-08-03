import React from 'react';

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
