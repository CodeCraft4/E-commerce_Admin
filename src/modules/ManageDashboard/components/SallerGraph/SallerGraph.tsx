import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

const SellerGraph = () => {
  return (
    <Box my={{ md: 0, sm: 2, xs: 2 }}>
      <Box
        sx={{
          width: { md: "834px", sm: "530px", xs: "100%" },
          height: "392px",
          bgcolor: COLORS.white.main,
          padding: "24px 16px",
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px" }}>
            Sale Graph
          </Typography>
          <Box
            sx={{
              display: { md: "flex", sm: "flex", xs: "none" },
              gap: "14px",
            }}
          >
            <CustomButton variant="outlined" title="Weekly" width="87px" />
            <CustomButton variant="contained" title="Monthly" />
            <CustomButton variant="outlined" title="Yearly" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SellerGraph;
