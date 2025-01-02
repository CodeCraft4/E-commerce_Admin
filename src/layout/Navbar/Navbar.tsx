import { COLORS } from "@muc/constants";
import { Box, Button } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

type NavbarType = {
  onOpenModal: () => void;
  Open: boolean;
};

const Navbar = (props: NavbarType) => {
  const { onOpenModal, Open } = props || {};

  return (
    <Box
      sx={{
        bgcolor: COLORS.white.main,
        borderBottom: `1px solid ${COLORS.dark.darBlack}`,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Box component={"img"} src="/assets/icons/search-icon.svg" />
        <Box component={"img"} src="/assets/icons/notification-icon.svg" />
        <Button
          variant="outlined"
          sx={{
            height: "38px",
            alignItems: "center",
            gap: 1,
          }}
          onClick={onOpenModal}
          endIcon={Open ? <ExpandLess /> : <ExpandMore />}
        >
          Admin
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
