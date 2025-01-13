import { COLORS } from "@muc/constants";
import { OrdersType } from "@muc/types";
import { orderCardStyle, orderIconStyle } from "@muc/utils";
import { ArrowUpwardOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const OrdersAnalytics = (props: OrdersType) => {
  const { date, percentage, price, title, id } = props || {};
  return (
    <Box sx={orderCardStyle} key={id}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Box sx={orderIconStyle}>
            <ShoppingBagOutlined sx={{ color: COLORS.white.main }} />
          </Box>
          <Typography variant="h6" fontWeight={600}>
            ${price}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <ArrowUpwardOutlined fontSize="small" />
          <Typography variant="h6" fontWeight={600}>
            {percentage}%
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="initial"
        sx={{ fontWeight: "600", opacity: "70%", textAlign: "right" }}
      >
        Compared to {date}
      </Typography>
    </Box>
  );
};

export default OrdersAnalytics;
