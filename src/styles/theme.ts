import { COLORS } from "@muc/constants";
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
    h1: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "42px",
      marginBottom: "5px",
      color: COLORS.dark.darBlack,
    },
    h2: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.0015em",
      textAlign: "left",
    },
    h3: {
      fontWeight: 600,
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
      fontSize: "15px",
      lineHeight: "29px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "23px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "12px",
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
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: 600,
          borderRadius: 10,
          padding: "16px ",
          textTransform: "none",
          height: "48px",
          whiteSpace: "nowrap",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        },
        contained: {
          backgroundColor: COLORS.primary.main,
          boxShadow: "none",
          color: COLORS.white.main,
          "&:hover": {
            backgroundColor: COLORS.primary.main,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            backgroundColor: COLORS.gray.darkGray,
            color: COLORS.dark.main,
            opacity: 0.6,
          },
        },
        outlined: {
          border: `1.4px solid ${COLORS.dark.main}`,
          color: COLORS.dark.main,
          backgroundColor: "transparent",
          boxShadow: "none",
          "&:hover": {
            border: `1.4px solid ${COLORS.dark.main}`,
            backgroundColor: `transparent`,
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            borderColor: COLORS.gray.darkGray,
            color: COLORS.gray.darkGray,
            opacity: 0.6,
            backgroundColor: "transparent",
          },
        },
      },
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: 16,
          background: "transparent",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
          },
          "& fieldset": {
            border: `1.4px solid ${COLORS.dark.main}`,
            padding: "16px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1.4px solid ${COLORS.dark.main}`,
          },
          "&.Mui-focused fieldset": {
            border: `1.4px solid ${COLORS.gray.main}`,
          },

          "& input::placeholder": {
            color: COLORS.dark.main,
            opacity: 0.4,
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 100px transparent inset",
            borderColor: COLORS.primary.main,
          },
          "& input:hover": {
            borderColor: COLORS.dark.main,
          },
          "& input:focus": {
            borderColor: COLORS.dark.main,
          },
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0",
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: COLORS.dark.main,
          "&.Mui-checked": {
            color: COLORS.dark.main,
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-disabled": {
            color: COLORS.gray.lightGray,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          backgroundColor: COLORS.white.main,
          boxShadow: `2px 1px 3px ${COLORS.gray.lightGray}`,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 4,
          boxShadow: "none",
        },
      },
    },
  },
};
