import React from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import { useNotification } from "@muc/context";
import { COLORS } from "@muc/constants";

const SnackBar: React.FC = () => {
  const { alert, setAlert } = useNotification();

  return (
    <Snackbar
      open={alert.show}
      anchorOrigin={
        alert.variant === "success"
          ? { vertical: "bottom", horizontal: "center" }
          : alert.variant === "warning"
          ? { vertical: "bottom", horizontal: "right" }
          : { vertical: "top", horizontal: "center" }
      }
      autoHideDuration={1000}
      onClose={() => setAlert((prev) => ({ ...prev, show: false }))}
    >
      <Alert
        severity={alert.variant}
        sx={{
          bgcolor:
            alert.variant === "error"
              ? " #880808"
              : alert.variant === "warning"
              ? COLORS.secondary.main
              : COLORS.primary.main,
          color:
            alert.variant === "warning"
              ? COLORS.dark.darBlack
              : COLORS.white.main,
          textAlign: "center",
          borderRadius: "8px",
          p: "8px 12px",
        }}
        icon={true}
      >
        <Typography
          variant="h5"
          fontSize={"14px"}
          color={
            alert.variant === "success"
              ? COLORS?.white.main
              : COLORS?.secondary.main
          }
        >
          {alert?.message.title}
        </Typography>
        <Typography variant="body1" fontSize={"14px"}>
          {alert?.message.subTitle}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
