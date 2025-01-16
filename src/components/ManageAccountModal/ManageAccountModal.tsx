import { FormProvider, useForm } from "react-hook-form";
import { Box, Dialog, DialogContent } from "@mui/material";
import { CustomButton, CustomTextField, UploadProfile } from "@muc/components";
import { COLORS } from "@muc/constants";
import { useAuth } from "@muc/context";
import { fetchAdminAccount, updateAdminAccount } from "@muc/services";
import { useEffect, useState } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  description?: string;
  role: string;
  profileImg?: any | null;
};

const ManageAccountModal = ({ open, onClose }: ModalProps) => {
  const { user, loading } = useAuth();
  const userId = user?.$id;
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      description: "",
      role: "",
      profileImg: "",
    },
  });

  const { reset } = methods;
  const [initialPreview, setInitialPreview] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const adminData: FormValues | any = await fetchAdminAccount(userId);
          if (adminData) {
            console.log(adminData.previewImageUrl, "----");
            setInitialPreview(adminData.profileImg);
            reset({
              fullName: adminData.fullName || "",
              email: adminData.email || "",
              phoneNumber: adminData.phoneNumber || "",
              address: adminData.address || "",
              description: adminData.description || "",
              role: adminData.role || "Administrator",
              profileImg: adminData.profileImg || "",
            });
          }
        } catch (error) {
          console.error("Error fetching admin data:", error);
        }
      }
    };

    fetchData();
  }, [userId, reset]);

  const onSubmit = async (data: FormValues) => {
    await updateAdminAccount(data, userId);
    console.log("Profile updated successfully");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "absolute",
          top: { md: 50, sm: 0, xs: 0 },
          width: { md: "80%", sm: "70%", xs: "auto" },
          left: { md: 245, sm: 80, xs: -0 },
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.secondary.main,
            borderRadius: "50px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
      }}
      maxWidth="lg"
    >
      <FormProvider {...methods}>
        <Box
          sx={{ height: { md: 640 }, maxWidth: "100%" }}
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <DialogContent
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { md: "flex", sm: "block", xs: "block" },
                gap: "16px",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                m: "auto",
              }}
            >
              {/* Left Side Inputs */}
              <Box sx={{ width: { md: "50%", sm: "100%", xs: "100%" } }}>
                <CustomTextField
                  label="Full Name"
                  name="fullName"
                  placeHolder="Type name here"
                  type="text"
                  width="556px"
                />
                <CustomTextField
                  label="Email"
                  name="email"
                  placeHolder="Type Email here"
                  type="email"
                  width="556px"
                />
                <CustomTextField
                  label="Phone Number"
                  name="phoneNumber"
                  placeHolder="Type Phone Number here"
                  type="text"
                  width="556px"
                />
                <CustomTextField
                  label="Address"
                  name="address"
                  placeHolder="Type Address here"
                  type="text"
                  width="556px"
                />
                <CustomTextField
                  label="Description"
                  name="description"
                  placeHolder="Type Description here"
                  type="text"
                  multiline
                  width="556px"
                />
              </Box>

              {/* Right Side */}
              <UploadProfile initialPreview={initialPreview} />
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: { md: "flex", sm: "flex", xs: "block" },
                justifyContent: "space-between",
                gap: "16px",
                mt: { md: -2, sm: -1, xs: 0 },
                mb: { md: 0, sm: 0, xs: 2 },
                width: { md: "auto", sm: "auto", xs: "100%" },
              }}
            >
              <CustomButton
                title="Update"
                type="submit"
                variant="contained"
                width="250px"
                isLoading={loading}
              />
              <CustomButton
                title="Cancel"
                variant="outlined"
                width="250px"
                onClick={onClose}
              />
            </Box>
          </DialogContent>
        </Box>
      </FormProvider>
    </Dialog>
  );
};

export default ManageAccountModal;
