import { AppLayout } from "@muc/layout";
import { Box } from "@mui/material";
import { ProfileCard } from "../../components/component";
import { useModal } from "@muc/hooks";
import { ManageAccountModal } from "@muc/components";
import { useAuth } from "@muc/context";

const ManageAccountsContainer = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const {
    Open: isOpenAccountModal,
    onClose: closeAccountModal,
    onOpen: openAccountModal,
  } = useModal();

  return (
    <AppLayout title="Accounts" path="Home">
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map(() => (
          <ProfileCard
            key={""}
            name="Doe"
            profile="/assets/images/authImg.svg"
            role="Administrator"
            description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolore.`}
            openAccountModal={openAccountModal}
          />
        ))}
      </Box>
      {isOpenAccountModal && (
        <ManageAccountModal
          open={isOpenAccountModal}
          onClose={closeAccountModal}
        />
      )}
    </AppLayout>
  );
};

export default ManageAccountsContainer;
