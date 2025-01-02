import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={"20px"}>
        <Grid item md={7} sm={6} xs={12}>
          <Box
            component={"img"}
            src="/assets/images/authImg.svg"
            sx={{
              width: "100%",
              objectFit: { md: "cover", sm: "cover", xs: "auto" },
              height: { md: "100vh", sm: "100vh", xs: "auto" },
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: { md: "100vh", sm: "100vh", xs: "auto" },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
