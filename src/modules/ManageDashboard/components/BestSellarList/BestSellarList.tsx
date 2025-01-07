import { CustomButton } from "@muc/components";
import { COLORS, SELLER_DATA } from "@muc/constants";
import { MoreVert } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const BestSellersList = () => {
  return (
    <Box my={{ md: 0, sm: 0, xs: 2 }}>
      <Box
        sx={{
          bgcolor: COLORS.white.main,
          width: { md: "360px", sm: "530px", xs: "100%" },
          height: "390px",
          padding: "28px 16px 24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, fontSize: "16px" }}
          >
            Best Sallers
          </Typography>
          <MoreVert />
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            paddingRight: "8px",
            gap: "8px",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: COLORS.primary.main,
              borderRadius: "50px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          }}
        >
          {SELLER_DATA.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: COLORS.gray.main,
                    width: "64px",
                    height: "64px",
                    borderRadius: 1,
                  }}
                ></Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", fontSize: "16px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "600", opacity: "60%" }}
                  >
                    ${item.price}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", fontSize: "16px" }}
                >
                  ${item.totalPrice}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "600", opacity: "60%" }}
                >
                  {item.sale} sales
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <CustomButton title="Report" variant="contained" width="85px" />
      </Box>
    </Box>
  );
};

export default BestSellersList;
