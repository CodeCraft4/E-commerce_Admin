import { CustomButton } from "@muc/components";
import { Logout } from "@mui/icons-material";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void | boolean;
};
const OnSuccessModal = (prop: ModalProps) => {
  const { open, onClose } = prop || {};
  const navigate = useNavigate();
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
              fontSize: 40,
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
              onClick={() => navigate(-1)}
            />
            <CustomButton
              title="Cancel"
              variant="outlined"
              width="150px"
              onClick={() => navigate(-1)}
            />
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default OnSuccessModal;
