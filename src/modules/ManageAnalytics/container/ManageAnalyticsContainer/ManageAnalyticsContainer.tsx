import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";

const ManageAnalyticsContainer = () => {
  return (
    <AppLayout title="Analytics" path="Home">
      <Box component={Paper} sx={{height:300}}>
        <h1>Analtyics.........</h1>
      </Box>
    </AppLayout>
  );
};

export default ManageAnalyticsContainer;
