import React from "react";
import { Outlet } from "react-router-dom";

const ManageProducts = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ManageProducts;
