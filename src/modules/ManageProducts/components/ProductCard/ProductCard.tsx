import { Box, Divider, LinearProgress, Typography } from "@mui/material";
import { COLORS, ROUTES } from "@muc/constants";
import EditIcon from "@mui/icons-material/Edit";
import { MenuButton } from "@muc/components";
import { ArrowUpwardOutlined, Delete, MoreVertOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ProductType } from "@muc/types";

type ItemType = {
  item: ProductType;
};
const ProductCard = (props: ItemType) => {
  const { item } = props || {};

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          bgcolor: COLORS.white.main,
          width: { md: "370px", sm: "250px", xs: "100%" },
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
          <img
            src={item?.img}
            style={{ width: "84px", height: "84px",borderRadius:3 }}
            alt="item"
          />
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
                  {item?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="initial"
                  sx={{ opacity: "60%", fontWeight: 600 }}
                >
                  {item?.category}
                </Typography>
              </Box>
              <MenuButton
                MoreIcon={<MoreVertOutlined />}
                DeleteIcon={<Delete />}
                DeleteTitle="Delete"
                title="Edit"
                Icon={<EditIcon />}
                onEdit={() =>
                  navigate(ROUTES.ADMIN.ADD_NEW_PRODUCT, { state: { item } })
                }
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: COLORS.dark.main }}
            >
              ₹{item?.price}
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
            {item?.description}
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
            <Box sx={{ display: "flex", gap: "5px",alignItems:'center' }}>
              <ArrowUpwardOutlined sx={{fontSize:'16px'}}/>
              <Typography
                variant="body1"
                sx={{ opacity: "60%", fontWeight: 600 }}
              >
                {item?.sales}
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
                sx={{ height: "4px", width: "52px",borderRadius:2 }}
              />

              <Typography
                variant="body1"
                sx={{ opacity: "60%", fontWeight: 600 }}
              >
                {item?.remainingProduct}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;
