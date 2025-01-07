import { DataTable } from "@muc/components";
import { ORDERS_TABLE_DATA } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { OrderDetailsCard, PaymentMethods } from "../../components/components";
import { useLocation } from "react-router-dom";

const ManageOrderDetailsContainer = () => {
  const location = useLocation();
  const userOrders = location.state?.row;
  console.log(userOrders, "------------");

  return (
    <AppLayout title="Order Details" path="Order">
      <Box component={Paper} p={2}>
        <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {[1, 2, 3].map(() => (
            <OrderDetailsCard />
          ))}
        </Box>
        <Box my={{ md: 3, sm: 2, xs: 2 }}>
          <PaymentMethods />
        </Box>
      </Box>
      <Box component={Paper} mt={4}>
        <DataTable title="Products" data={ORDERS_TABLE_DATA} />
      </Box>
    </AppLayout>
  );
};

export default ManageOrderDetailsContainer;
