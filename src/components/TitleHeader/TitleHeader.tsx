import { CustomButton } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Add, ArrowForwardIos, CalendarMonth } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

type HeaderTypes = {
  title: string;
  path: string;
  isProduct?: boolean;
};

const TitleHeader = (props: HeaderTypes) => {
  const { title, path, isProduct } = props || {};
  const location = useLocation();
  const formattedPathname = location.pathname.slice(1);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h2">{title} </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "15px",
            alignItems: "center",
            display: { md: "flex", sm: "flex", xs: "none" },
            my: "8px",
          }}
        >
          {path}
          <ArrowForwardIos sx={{ fontSize: "15px" }} />
          {formattedPathname}
        </Typography>
      </Box>
      {isProduct ? (
        <CustomButton
          title="ADD NEW PRODUCT"
          variant="contained"
          width="200px"
          icon={<Add />}
        />
      ) : (
        <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <CalendarMonth
            fontSize="small"
            sx={{ color: COLORS.gray.darkGray }}
          />

          <Typography variant="body1" color={COLORS.dark.main} fontWeight={600}>
            Oct 11,2023 - Nov 11,2022
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TitleHeader;
