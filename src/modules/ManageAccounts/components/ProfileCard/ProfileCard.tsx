import { COLORS } from "@muc/constants";
import { MoreVertOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

type ProfileCardProps = {
  profile: string;
  role: string;
  description?: string;
  name: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  const { profile, role, description, name } = props || {};
  return (
    <Box
      sx={{
        bgcolor: COLORS.white.main,
        p: 2,
        width: {md:200,sm:220},
        borderRadius: 2,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: { md: 2 },
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
        }}
      >
        <MoreVertOutlined />
      </IconButton>
      <Box
        component={"img"}
        src={profile}
        sx={{
          width: "120px",
          height: "120px",
          bgcolor: COLORS.gray.darkGray,
          borderRadius: 50,
          objectFit: "cover",
        }}
      />
      <Typography variant="h3" my={1}>
        {name}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={500}
        sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}
      >
        <span style={{ fontWeight: 600 }}>Role:</span>
        {role}
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        {description?.slice(0, 50)}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
