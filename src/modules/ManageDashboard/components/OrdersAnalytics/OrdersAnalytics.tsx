import { orderCardStyle, orderIconStyle } from "@muc/utils";
import { Box, Typography } from "@mui/material";

type OrderType = {
  title: string;
  percentage: number;
  price: number;
  icon: string;
  date: string;
};

const OrdersAnalytics = (props: OrderType) => {
  const { date, icon, percentage, price, title } = props || {};
  return (
    <>
      <Box sx={orderCardStyle}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            fontWeight={600}
          >
            {title}
          </Typography>
          <Box
            component="img"
            src={icon}
            sx={{ width: "3px", height: "16px" }}
            alt="ShowMore"
          />
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
              <Box
                component="img"
                src={icon}
                alt="shop"
                sx={{ width: "20px", height: "20px" }}
              />
            </Box>
            <Typography variant="h6" fontWeight={600} >
              ${price}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <Box
              component="img"
              src="assets/icons/arrowIcon.svg"
              alt="increase"
              height={12}
              width={11}
            />
            <Typography variant="h6" fontWeight={600} >
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
    </>
  );
};

export default OrdersAnalytics;
