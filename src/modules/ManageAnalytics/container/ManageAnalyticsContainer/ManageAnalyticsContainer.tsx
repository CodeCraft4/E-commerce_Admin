import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { OrderGraph, SaleGraph } from "../../components/components";

const ManageAnalyticsContainer = () => {
  return (
    <AppLayout title="Analytics" path="Home">
      <Box component={Paper}>
        <SaleGraph/>
        <OrderGraph/>
      </Box>
    </AppLayout>
  );
};

export default ManageAnalyticsContainer;
