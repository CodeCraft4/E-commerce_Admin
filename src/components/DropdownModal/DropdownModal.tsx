import { ArrowForwardIos, LogoutOutlined } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void | boolean;
};

const DropdownModal = (props: ModalProps) => {
  const { open, onClose } = props || {};
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "absolute",
          top: 70,
          right: 46,
          m: 0,
        },
      }}
    >
      <Box sx={{ width: { md: 233 } }}>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography variant="h3">Admin</Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: "16px" }}>
          <Typography
            variant="h6"
            sx={{
              pb: "8px",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            CHANGE PASSWORD <ArrowForwardIos fontSize="small" />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            LOG OUT <LogoutOutlined fontSize="small" />
          </Typography>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DropdownModal;
