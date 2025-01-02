import { ROUTES } from "@muc/constants";
import { SignInContainer, SignUpContainer } from "@muc/modules";
import {
  ManageAnalytics,
  ManageAuth,
  ManageDashboard,
  ManageOrders,
  ManageProducts,
} from "@muc/screens";
import { Routes as ReactRoutes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<ManageAuth />}>
        <Route path={"/"} element={<SignInContainer />} />
        <Route path={ROUTES.AUTH.SIGN_UP} element={<SignUpContainer />} />
      </Route>
      <Route path={ROUTES.ADMIN.DASHBOARD} element={<ManageDashboard />} />
      <Route path={ROUTES.ADMIN.PRODUCTS} element={<ManageProducts />} />
      <Route path={ROUTES.ADMIN.ORDERS} element={<ManageOrders />} />
      <Route path={ROUTES.ADMIN.ANALYTICS} element={<ManageAnalytics />} />
    </ReactRoutes>
  );
};

export default Routes;
