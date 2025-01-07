import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";


const SellerGraph = () => {
  return (
    <>
      <Box
        sx={{
          width: "734px",
          height: "392px",
          bgcolor: COLORS.white.main,
          padding: "24px 16px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px" }}>
            Sale Graph
          </Typography>
          <Box sx={{ display: "flex", gap: "14px" }}>
            <CustomButton variant="outlined" title="Weekly" width="87px" />
            <CustomButton variant="contained" title="Monthly" />
            <CustomButton variant="outlined" title="Yearly" />
          </Box>
        </Box>
      </Box>
    </>
  );
};


export default SellerGraph;
