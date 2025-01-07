import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { ORDER_RECORD, ORDERS_TABLE_DATA } from "@muc/constants";
import {
  BestSellersList,
  OrdersAnalytics,
  SellerGraph,
} from "../../components/components";
import { DataTable } from "@muc/components";

const ManageDashboardContainer = () => {
  return (
    <AppLayout title="Dashboard" path="Home">
      <Box
        sx={{
          display: "flex",
          gap: "14px",
          alignItems: "center",
          my: { md: 2 },
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {ORDER_RECORD.map((item) => (
          <OrdersAnalytics
            title={item.title}
            icon={item.img}
            percentage={item.percentage}
            price={item.price}
            date={"oct 20 2024"}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: { md: "flex", sm: "block", xs: "block" },
          gap: "16px",
          width: "100%",
        }}
      >
        <SellerGraph />
        <BestSellersList />
      </Box>
      <Box component={Paper} p={{ md: 1 }} my={2}>
        <DataTable data={ORDERS_TABLE_DATA || []} title="Recent Orders" />
      </Box>
    </AppLayout>
  );
};

export default ManageDashboardContainer;
