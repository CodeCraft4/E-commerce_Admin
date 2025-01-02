import React from "react";
import Box from "@mui/system/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Sidebar } from "../Sidebar/Sidebar";
import { COLORS } from "@muc/constants";
import { Footer, Navbar } from "@muc/layout";
import { useModal } from "@muc/hooks";
import { DropdownModal, TitleHeader } from "@muc/components";

type Props = {
  children: React.ReactNode;
  title: string;
  path: string;
  isProduct?: boolean;
};

const AppLayout = (props: Props) => {
  const { children, title, path, isProduct } = props || {};

  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  const handleSideBarToggle = () => setSideBarOpen(!isSideBarOpen);

  const {
    Open: openDropdownModal,
    onClose: closeDropdownModal,
    onOpen: onOpenDropdownModal,
  } = useModal();

  return (
    <Box display="flex" position="relative" width="100%" overflow="hidden">
      <Box
        component="nav"
        sx={{
          width: { md: 260, sm: 200, xs: "auto" },
          flexShrink: { sm: 0 },
        }}
      >
        <Sidebar open={isSideBarOpen} onClose={handleSideBarToggle} />
      </Box>
      <Box sx={{ position: "absolute", display: { sm: "none", xs: "block" } }}>
        <IconButton
          sx={{
            color: COLORS.primary.main,
          }}
          aria-label="open sidebar"
          onClick={handleSideBarToggle}
        >
          <MenuIcon sx={{ width: "30px", height: "30px" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          bgcolor: COLORS.gray.main,
          height: "100vh",
        }}
      >
        <Navbar onOpenModal={onOpenDropdownModal} Open={openDropdownModal} />
        <Box m={{ md: "20px", sm: "20px", xs: "10px" }} height={"100vh"}>
          <TitleHeader title={title} path={path} isProduct={isProduct} />
          {children}
          <Box sx={{ flex: 1, paddingTop: "14em" }}>
            <Footer />
          </Box>
        </Box>
      </Box>

      {openDropdownModal && (
        <DropdownModal open={openDropdownModal} onClose={closeDropdownModal} />
      )}
    </Box>
  );
};

export default AppLayout;
