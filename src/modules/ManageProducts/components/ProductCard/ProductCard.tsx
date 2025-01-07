import {
    Box,
    Button,
    Divider,
    LinearProgress,
    Menu,
    MenuItem,
    Typography,
  } from "@mui/material";
  import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
  import { COLORS } from "@muc/constants";
  import EditIcon from "@mui/icons-material/Edit";
  import DeleteIcon from "@mui/icons-material/Delete";
  import React from "react";
  
  
  type ItemType = {
    title: string;
    img: string;
    category: string;
    sales: number;
    price: number;
    description: string;
    remainingProduct: number;
  };
  const ProductCard = (props: ItemType) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  
    const { title, category, sales, price, description, remainingProduct, img } =
      props || {};
    return (
      <>
        <Box
          sx={{
            bgcolor: COLORS.white.main,
            width: "330px",
            height: "298px",
            justifyContent: "space-between",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            gap: "16px",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", gap: "16px" }}>
            <img src={img} style={{ width: "84px", height: "84px" }} alt="item" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flexGrow: "1",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    variant="body1"
                    color="#232321"
                    sx={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ opacity: "60%", fontWeight: 600 }}
                  >
                    {category}
                  </Typography>
                </Box>
                <Button
                  onClick={handleClick}
                  sx={{
                    bgcolor: "#E7E7E3",
                    borderRadius: "4px",
                    padding: "8px 12px",
                    minWidth: "auto",
                    height: "30px",
                  }}
                >
                  <MoreHorizIcon sx={{ color: COLORS.dark.main }} />
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
                  <MenuItem onClick={handleClose}>
                    <Box
                      sx={{
                        color: COLORS.dark.darBlack,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <EditIcon /> Edit
                    </Box>
                  </MenuItem>
  
  
                  <MenuItem onClick={handleClose}>
                    <Box
                      sx={{
                        color: COLORS.dark.darBlack,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <DeleteIcon />
                      Delete
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: COLORS.dark.main }}
              >
                ₹{price}
              </Typography>
            </Box>
          </Box>
  
  
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: COLORS.dark.main,
              }}
            >
              Summary
            </Typography>
            <Typography variant="body2" sx={{ color: "232321", opacity: "60%" }}>
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              border: `.75px solid ${COLORS.dark.main}`,
              padding: "12px",
              borderRadius: "8px",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                sx={{
                  color: COLORS.dark.main,
                  opacity: "80%",
                  fontWeight: "600",
                }}
              >
                Sales
              </Typography>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <img src="assets/icons/salesArrow.svg" alt="increase" />
                <Typography
                  variant="body1"
                  sx={{ opacity: "60%", fontWeight: 600 }}
                >
                  {sales}
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body1"
                sx={{
                  color: COLORS.dark.main,
                  opacity: "80%",
                  fontWeight: "600",
                }}
              >
                Remaining Products
              </Typography>
              <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <LinearProgress
                  variant="determinate"
                  color="warning"
                  value={60}
                  sx={{ height: "4px", width: "52px" }}
                />
  
  
                <Typography
                  variant="body1"
                  sx={{ opacity: "60%", fontWeight: 600 }}
                >
                  {remainingProduct}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  
  export default ProductCard;
  