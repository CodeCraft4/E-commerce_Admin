// import { COLORS } from "@muc/constants";
import { createTheme } from "@mui/material";

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["regular", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "42px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.0015em",
      textAlign: "left",
    },
    h3: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.0015em",
    },
    h4: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "21px",
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "29px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "23px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
});

theme = {
  ...theme,
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "16px",
    //       fontWeight: 400,
    //       borderRadius: "4px",
    //       padding: "12px 16px ",
    //       textTransform: "none",
    //       height: "56px",
    //       whiteSpace: "nowrap",
    //       [theme.breakpoints.down("sm")]: {
    //         fontSize: "14px",
    //         height: "35px",
    //         width: "auto",
    //       },
    //     },
    //     contained: {
    //       backgroundColor: COLORS.primary.main,
    //       boxShadow: "none",
    //       height: "56px",
    //       color: COLORS.white.main,
    //       "&:hover": {
    //         backgroundColor: COLORS.primary.main,
    //         boxShadow: "none",
    //       },
    //       "&.Mui-disabled": {
    //         backgroundColor: COLORS.primary.lightBrown,
    //         color: "white",
    //         opacity: 0.6,
    //       },
    //     },
    //     outlined: {
    //       border: `1px solid ${COLORS.gray.main}`,
    //       color: COLORS.dark.main,
    //       backgroundColor: "transparent",
    //       boxShadow: "none",
    //       height: "56px",
    //       "&:hover": {
    //         border: `1px solid ${COLORS.gray.main}`,
    //         backgroundColor: `transparent`,
    //         boxShadow: "none",
    //       },
    //       "&.Mui-disabled": {
    //         borderColor: COLORS.gray.main,
    //         color: "black",
    //         opacity: 0.6,
    //         backgroundColor: "transparent",
    //       },
    //     },
    //   },
    //   defaultProps: {
    //     disableRipple: false,
    //   },
    // },

    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8,
    //       height: 44,
    //       color: COLORS.white.main,
    //       background: "transparent",
    //       "& fieldset": {
    //         border: `transparent`,
    //         padding: "12px 16px",
    //       },
    //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //         border: `transparent`,
    //       },
    //       "&.Mui-focused fieldset": {
    //         border: `transparent`,
    //       },
    //       "& input::placeholder": {
    //         color: COLORS.gray.lightGray,
    //         opacity: 0.4,
    //       },
    //       "& input:-webkit-autofill": {
    //         WebkitBoxShadow: "0 0 0 100px transparent inset",
    //         transition: "background-color 5000s ease-in-out 0s",
    //       },
    //       "& input:-webkit-autofill:focus": {
    //         WebkitBoxShadow: "0 0 0 100px transparent inset",
    //         borderColor: COLORS.primary.main,
    //       },
    //       "& input:hover": {
    //         border: `transparent`,
    //       },
    //       "& input:focus": {
    //         border: `transparent`,
    //       },
    //     },
    //   },
    // },
  },
};
