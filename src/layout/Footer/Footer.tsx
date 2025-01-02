import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">2025 - Admin Dashboard</Typography>
      <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <Link to={""} style={linkStyle}>
          About
        </Link>
        <Link to={""} style={linkStyle}>
          Careers
        </Link>
        <Link to={""} style={linkStyle}>
          Policy
        </Link>
        <Link to={""} style={linkStyle}>
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

const linkStyle = {
  textDecoration: "none",
  color: COLORS.dark.main,
  fontWeight: 400,
  fontSize: 12,
};
