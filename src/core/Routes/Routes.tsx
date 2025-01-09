import { ROUTES } from "@muc/constants";
import { SecureRoute } from "@muc/hoc";
import {
  AddNewProductsContainer,
  ManageOrderDetailsContainer,
  ManageOrdersContainer,
  ManageProductsContainer,
  SignInContainer,
} from "@muc/modules";
import {
  ManageAccount,
  ManageAnalytics,
  ManageAuth,
  ManageDashboard,
  ManageOrders,
  ManageProducts,
} from "@muc/screens";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

const Routes = () => {

  return (
    <ReactRoutes>
      <Route element={<SecureRoute />}>
        <Route path={ROUTES.ADMIN.DASHBOARD} element={<ManageDashboard />} />
        <Route element={<ManageProducts />}>
          <Route
            path={ROUTES.ADMIN.PRODUCTS}
            element={<ManageProductsContainer />}
          />
          <Route
            path={ROUTES.ADMIN.ADD_NEW_PRODUCT}
            element={<AddNewProductsContainer />}
          />
        </Route>
        <Route element={<ManageOrders />}>
          <Route
            path={ROUTES.ADMIN.ORDERS}
            element={<ManageOrdersContainer />}
          />
          <Route
            path={ROUTES.ADMIN.ORDERS_DETAILS}
            element={<ManageOrderDetailsContainer />}
          />
        </Route>
        <Route path={ROUTES.ADMIN.ANALYTICS} element={<ManageAnalytics />} />
        <Route path={ROUTES.ADMIN.ACCOUNTS} element={<ManageAccount />} />
      </Route>

      <Route element={<ManageAuth />}>
        <Route path="/" element={<Navigate to={ROUTES.AUTH.SIGN_IN} />} />
        <Route path={ROUTES.AUTH.SIGN_IN} element={<SignInContainer />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
