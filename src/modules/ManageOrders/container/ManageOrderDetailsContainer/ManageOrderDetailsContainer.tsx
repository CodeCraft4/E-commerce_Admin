import { DataTable } from "@muc/components";
import { ORDERS_TABLE_DATA } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { OrderDetailsCard, PaymentMethods } from "../../components/components";
import { useLocation } from "react-router-dom";
import { TableData } from "@muc/types";

const ManageOrderDetailsContainer = () => {
  const location = useLocation();
  const userOrders: TableData[] = location.state?.order;
  console.log(userOrders, "------------");
  
  return (
    <AppLayout title="Order Details" path="Order">
      <Box component={Paper} p={2}>
        <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {userOrders?.map((data) => (
            <OrderDetailsCard item={data}/>
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
