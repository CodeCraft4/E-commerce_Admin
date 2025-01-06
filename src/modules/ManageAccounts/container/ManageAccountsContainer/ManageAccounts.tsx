import { AppLayout } from "@muc/layout";
import { Box } from "@mui/material";
import { ProfileCard } from "../../components/component";

const ManageAccountsContainer = () => {
  return (
    <AppLayout title="Accounts" path="Home">
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map(() => (
          <ProfileCard
            name="Doe"
            profile="/assets/images/authImg.svg"
            role="Administrator"
            description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolore.`}
          />
        ))}
      </Box>
    </AppLayout>
  );
};

export default ManageAccountsContainer;
