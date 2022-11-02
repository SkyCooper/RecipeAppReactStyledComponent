import React from "react";
import { Navigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  setUser(false);
  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
};

export default Logout;
