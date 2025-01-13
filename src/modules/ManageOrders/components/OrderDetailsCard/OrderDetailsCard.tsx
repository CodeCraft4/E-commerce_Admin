import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { TableData } from "@muc/types";
import { Box, Typography } from "@mui/material";

type OrderTypes = {
  item: TableData;
};

const OrderDetailsCard = (props: OrderTypes) => {
  const { item } = props || {};
  console.log(item, "-----");
  return (
    <>
      {item?.product?.map((e) => (
        <Box
          sx={{
            bgcolor: COLORS.white.main,
            width: { md: "380px", sm: "235px", xs: "100%" },
            borderRadius: "16px",
            padding: "16px 24px",
            gap: "16px",
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${COLORS.gray.darkGray}`,
          }}
        >
          <Box sx={{ display: "flex", gap: "16px" }}>
            <Box
              sx={{
                bgcolor: COLORS.dark.main,
                height: "56px",
                width: "56px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component={"img"} src="assets/icons/User.svg" />
            </Box>
            <Box>
              <Typography variant="h3" color="initial">
                {e}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: COLORS.dark.darBlack,
                }}
              >
                {" "}
                Full Name: {item?.customerName}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: COLORS.dark.darBlack,
                }}
              >
                Email: shristi@gmail.com
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: COLORS.dark.darBlack,
                }}
              >
                Phone: +91 904 231 1212
              </Typography>
            </Box>
          </Box>
          <CustomButton title="View profile" width="100%" variant="contained" />
        </Box>
      ))}
    </>
  );
};

export default OrderDetailsCard;
