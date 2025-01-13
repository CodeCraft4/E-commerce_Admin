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
  onClose: () => void;
  openLogoutModal?: () => void;
  openAccountModal?: () => void;
};

const DropdownModal = (props: ModalProps) => {
  const { open, onClose, openLogoutModal, openAccountModal } = props || {};

  const handleLogoutClick = () => {
    if (openLogoutModal) {
      openLogoutModal();
    }
    onClose();
  };

  const handleAccountClick = () => {
    if (openAccountModal) {
      openAccountModal();
    }
    onClose();
  };

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
            onClick={handleAccountClick}
          >
            MANAGE MY ACCOUNT
            <ArrowForwardIos fontSize="small" />
          </Typography>
          <Typography
            variant="h6"
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              cursor: "pointer",
              color:'red'
            }}
            onClick={handleLogoutClick}
          >
            LOG OUT <LogoutOutlined fontSize="small" />
          </Typography>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DropdownModal;
