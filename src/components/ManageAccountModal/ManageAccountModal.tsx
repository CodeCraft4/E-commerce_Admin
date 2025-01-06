import { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Dialog,
  DialogContent,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { dragAndDrop } from "@muc/utils";

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
  role: string;
  previewImage: File | null;
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const ManageAccountModal = ({ open, onClose }: ModalProps) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      description: "",
      role: "",
      previewImage: null,
    },
  });

  const { setValue } = methods;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploadingPreview, setIsUploadingPreview] = useState<boolean>(false);

  console.log("Current Form Values:", methods.getValues());
  const handlePreviewDrop = (acceptedFiles: File[]) => {
    setIsUploadingPreview(true);
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);

    setTimeout(() => {
      setPreviewImage(preview);
      setIsUploadingPreview(false);
      setValue("previewImage", file);
    }, 1500);
  };

  const previewDropzone = useDropzone({
    onDrop: handlePreviewDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/svg": [".svg"],
    },
    multiple: false,
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "absolute",
          top: { md: 50, sm: 0, xs: 0 },
          width: { md: "80%", sm: "80%", xs: "auto" },
          left: { md: 245, sm: 50, xs: -0 },
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
      <Box sx={{ height: { md: 640 }, maxWidth: "100%" }}>
        <FormProvider {...methods}>
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
              }}
              component="form"
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
              <Box sx={{ width: { md: "50%", sm: "100%", xs: "100%" } }}>
                {/* Dropzone */}
                <Box
                  {...previewDropzone.getRootProps()}
                  sx={{
                    ...dragAndDrop,
                    width: { md: 320, sm: 320, xs: 200 },
                    height: { md: 320, sm: 320, xs: 200 },
                    borderRadius: 50,
                    display: "flex",
                    m: "auto",
                  }}
                >
                  <input {...previewDropzone.getInputProps()} />
                  {isUploadingPreview ? (
                    <Box
                      sx={{ width: "50%", position: "absolute", top: "50%" }}
                    >
                      <LinearProgress
                        sx={{
                          color: COLORS.primary.main,
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  ) : previewImage ? (
                    <Box
                      component="img"
                      src={previewImage}
                      alt="Preview"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Box>
                      <Box
                        component="img"
                        src="/assets/icons/dragDrop-icon.svg"
                      />
                      <Typography variant="h6" color={COLORS.primary.main}>
                        Drag and drop your image here
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* Role Dropdown */}
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    Role
                  </Typography>
                  <Controller
                    name="role"
                    control={methods.control}
                    render={({ field }) => (
                      <Select {...field} fullWidth>
                        <MenuItem value="Administrator">Administrator</MenuItem>
                        <MenuItem value="Contributor">Contributor</MenuItem>
                        <MenuItem value="Moderator">Moderator</MenuItem>
                      </Select>
                    )}
                  />
                </Box>
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: { md: "flex", sm: "flex", xs: "block" },
                justifyContent: "space-between",
                gap: "16px",
                mt: -1,
                mb: { xs: 2 },
                width: { md: "auto", sm: "auto", xs: "100%" },
              }}
            >
              <CustomButton
                title="Update"
                type="submit"
                variant="contained"
                width="250px"
              />
              <CustomButton
                title="Cancel"
                variant="outlined"
                width="250px"
                onClick={onClose}
              />
            </Box>
          </DialogContent>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default ManageAccountModal;
