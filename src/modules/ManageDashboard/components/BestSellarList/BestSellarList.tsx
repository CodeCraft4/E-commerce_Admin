import { CustomButton } from "@muc/components";
import { COLORS, Sallers_Data } from "@muc/constants";
import { MoreVert } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const BestSellersList = () => {


  return (
    <>
      <Box
        sx={{
          bgcolor: COLORS.white.main,
          width: "360px",
          height: "390px",
          padding: "28px 16px 24px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflow: "hidden",
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
          }}
        >
          {Sallers_Data.map((item) => (
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
    </>
  );
};


export default BestSellersList;
