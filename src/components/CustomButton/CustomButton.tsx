import { COLORS } from "@muc/constants";
import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

interface ButtonProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant: "contained" | "outlined";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const {
    title,
    type,
    width,
    onClick,
    disabled,
    variant,
    icon,
    isLoading = false,
  } = props || {};

  return (
      <Button
        type={type ? type : "button"}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          width: {
            md: width ? width : "auto",
            sm: width ? width : "auto",
            xs: "100%",
          },
          textTransform: "none",
          "&:hover": {
            bgcolor:
              variant === "outlined" ? "transparent" : COLORS.primary.main,
            boxShadow: "none",
          },
        }}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color:
                variant === "outlined"
                  ? COLORS.primary.main
                  : COLORS.white.main,
            }}
            size={25}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: title ? "space-between" : "center",
              alignItems: "center",
              width: title ? "100%" : "auto",
              gap: title ? "8px" : "0",
            }}
          >
            {title}
            {icon}
          </Box>
        )}
      </Button>
  );
};

export default CustomButton;
