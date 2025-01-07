import { DataTable } from "@muc/components";
import { ORDERS_TABLE_DATA } from "@muc/constants";
import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";

const ManageOrdersContainer = () => {
  return (
    <AppLayout title="Orders List" path="Home">
      <Box component={Paper} p={{ md: 1 }}>
        <DataTable data={ORDERS_TABLE_DATA || []} title={"Recent Purchase"} />
      </Box>
    </AppLayout>
  );
};

export default ManageOrdersContainer;
