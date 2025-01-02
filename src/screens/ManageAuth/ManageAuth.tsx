import React from "react";
import { Outlet } from "react-router-dom";

const ManageAuth = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ManageAuth;
