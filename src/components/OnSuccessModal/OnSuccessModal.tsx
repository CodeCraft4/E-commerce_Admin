import { CustomButton } from "@muc/components";
import { Logout } from "@mui/icons-material";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void | boolean;
  onClick?: () => void;
};
const OnSuccessModal = (prop: ModalProps) => {
  const { open, onClose, onClick } = prop || {};
  
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ width: { md: 433 }, height: { md: 200 } }}>
        <DialogContent
          sx={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logout
            sx={{
              fontSize: 45,
              border: `1px solid red`,
              p: 1,
              borderRadius: 50,
              color: "red",
            }}
          />
          <Typography variant="h6">
            Are you sure you want to logout from the application?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <CustomButton
              title="Yes"
              variant="contained"
              width="150px"
              onClick={() => {
                if (onClick) onClick();
                onClose();
              }}
            />
            <CustomButton
              title="Cancel"
              variant="outlined"
              width="150px"
              onClick={onClose}
            />
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default OnSuccessModal;
