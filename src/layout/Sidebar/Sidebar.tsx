import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "@muc/styles";
import { useLocation, useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import { COLORS, ROUTES } from "@muc/constants";
import { LogoutOutlined } from "@mui/icons-material";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export const Sidebar = (props: SidebarProps) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  type ListItemProps = {
    path: string;
    icon: string;
    active: string[];
    title: string;
  };

  const generateListItem = ({ path, icon, active, title }: ListItemProps) => {
    const isActive = active.includes(pathname);

    return (
      <ListItem
        key={path}
        disablePadding
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate(path)}
      >
        <Button
          variant="contained"
          disableFocusRipple
          disableRipple
          sx={{
            bgcolor: isActive ? COLORS.primary.main : "transparent",
            mb: 1,
            width: "70%",
            gap: "5px",
            ".img": {
              filter: isActive
                ? "invert(100%) brightness(200%) contrast(200%)"
                : "inherit",
            },
            color: isActive ? "white" : COLORS.dark.darBlack,
            "&:hover": {
              backgroundColor: COLORS.primary.main,
              color: COLORS.white.main,
            },
            "&:hover .img": {
              filter: "invert(100%) brightness(200%) contrast(200%)",
            },
          }}
        >
          <Box
            component={"img"}
            className="img"
            src={icon}
            alt="icon"
            width={20}
            height={20}
          />
          <Typography variant="h5">{title}</Typography>
        </Button>
      </ListItem>
    );
  };

  return (
    <Drawer
      variant={isSmUp ? "permanent" : "temporary"}
      sx={{ height: "100vh" }}
      {...props}
    >
      <List
        className="MuiList-sideBar-menu"
        component={"ul"}
        sx={{
          width: { md: 260, sm: 200, xs: 180 },
          height: "100%",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            component={"img"}
            height={99}
            width={"70%"}
            mx={"auto"}
            src="/assets/images/logo.svg"
            alt="logo"
          />
        </Box>
        {generateListItem({
          path: ROUTES.ADMIN.DASHBOARD,
          icon: "/assets/icons/dashboard-icon.svg",
          active: [ROUTES.ADMIN.DASHBOARD],
          title: "DASHBOARD",
        })}
        {generateListItem({
          path: ROUTES.ADMIN.PRODUCTS,
          icon: "/assets/icons/products-icon.svg",
          active: [ROUTES.ADMIN.PRODUCTS, ROUTES.ADMIN.ADD_NEW_PRODUCT],
          title: "ALL PRODUCTS",
        })}
        {generateListItem({
          path: ROUTES.ADMIN.ORDERS,
          icon: "/assets/icons/orderlist-icon.svg",
          active: [ROUTES.ADMIN.ORDERS],
          title: "ORDER LIST",
        })}
        {generateListItem({
          path: ROUTES.ADMIN.ANALYTICS,
          icon: "/assets/icons/analytics-icon.svg",
          active: [ROUTES.ADMIN.ANALYTICS],
          title: "ANALYTICS",
        })}

        <div style={{ flex: 1, paddingTop: "4em" }} />
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
            "&:hover": {
              color: COLORS.primary.main,
            },
          }}
        >
          <LogoutOutlined />
          LogOut
        </Typography>
      </List>
    </Drawer>
  );
};

export default Sidebar;
