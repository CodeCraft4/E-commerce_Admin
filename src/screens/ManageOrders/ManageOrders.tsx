import React from "react";
import { Outlet } from "react-router-dom";

const ManageOrders = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default ManageOrders;
