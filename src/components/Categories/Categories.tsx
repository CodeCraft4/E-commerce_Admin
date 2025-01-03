import { COLORS } from "@muc/constants";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const CategoriesMenu = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (menu: string) => {
    setOpen((prev) => (prev === menu ? null : menu));
  };

  const menuItems = [
    {
      title: "Categories",
      key: "womens",
      subItems: ["Dresses", "Tops", "Sweaters", "Jackets", "Jeans", "Shorts"],
    },
  ];

  return (
    <List>
      {menuItems.map(({ title, key, subItems }) => (
        <Box key={key}>
          <ListItem>
            <Typography variant="h5" onClick={() => handleToggle(key)}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap={"40px"}
              >
                <Typography variant="h5">{title}</Typography>
                <IconButton size="small">
                  {open === key ? (
                    <ExpandLess sx={{ color: COLORS.dark.main }} />
                  ) : (
                    <ExpandMore sx={{ color: COLORS.dark.main }} />
                  )}
                </IconButton>
              </Box>
            </Typography>
          </ListItem>
          <Collapse in={open === key} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subItems.map((item, idx) => (
                <ListItem key={idx}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: COLORS.primary.main,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List>
  );
};

export default CategoriesMenu;
