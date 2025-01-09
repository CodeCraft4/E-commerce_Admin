import { ROUTES } from "@muc/constants";
import { useAuth } from "@muc/context";
import { Box, CircularProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const { loading, isLoggedIn } = useAuth();

  if (loading) {
    return (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <CircularProgress color="warning"/>
      </Box>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.AUTH.SIGN_IN} />;
};

export default SecureRoute;
