import { COLORS } from "@muc/constants";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

type MenuDataType = {
  Icon?: React.ReactNode;
  title?: string;
  MoreIcon: React.ReactNode;
  DeleteTitle?: string;
  DeleteIcon?: React.ReactNode;
};
const MenuButton = (props: MenuDataType) => {
  const { Icon, title, MoreIcon, DeleteIcon, DeleteTitle } = props || {};

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          bgcolor: COLORS.gray.lightGray,
          color: COLORS.dark.darBlack,
          borderRadius: "4px",
          padding: "8px 12px",
          minWidth: "auto",
          height: "30px",
        }}
      >
        {MoreIcon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#E7E7E3",
            borderRadius: "10px",
            mt: 1,
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {title && Icon && (
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button
              startIcon={Icon}
              sx={{ width: "100%", color: COLORS.dark.darBlack }}
            >
              {title}
            </Button>
          </MenuItem>
        )}

        {DeleteIcon && DeleteTitle && (
          <MenuItem onClick={handleClose} sx={{ padding: 0 }}>
            <Button startIcon={DeleteIcon} sx={{ width: "100%", color: "red" }}>
              {DeleteTitle}
            </Button>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default MenuButton;