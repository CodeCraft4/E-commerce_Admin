import { COLORS } from "@muc/constants";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

type MenuDataType = {
  Icon?: React.ReactNode;
  title?: string;
  MoreIcon: React.ReactNode;
  DeleteTitle?: string;
  DeleteIcon?: React.ReactNode;
  onEdit?: () => void;
};
const MenuButtons = (props: MenuDataType) => {
  const { Icon, title, MoreIcon, DeleteIcon, DeleteTitle, onEdit } =
    props || {};

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
      <IconButton onClick={handleClick}>{MoreIcon}</IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            mt: 1,
          },
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {title && Icon && (
          <MenuItem onClick={onEdit} sx={{ padding: 0 }}>
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

export default MenuButtons;
