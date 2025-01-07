import { FormProvider, useForm } from "react-hook-form";
import { Box, Dialog, DialogContent } from "@mui/material";
import { CustomButton, CustomTextField, UploadProfile } from "@muc/components";
import { COLORS } from "@muc/constants";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const ManageAccountModal = ({ open, onClose }: ModalProps) => {
  const methods = useForm();


  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: "absolute",
          top: 50,
          width: "80%",
          left: 245,
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
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                width: "100%",
              }}
              component="form"
            >
              {/* Left Side Inputs */}
              <Box sx={{ width: "50%" }}>
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
<<<<<<< Updated upstream
              <Box sx={{ width: "50%" }}>
                {/* Dropzone */}
                <Box
                  {...previewDropzone.getRootProps()}
                  sx={{
                    ...dragAndDrop,
                    width: 320,
                    height: 320,
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
=======
              <UploadProfile />
>>>>>>> Stashed changes
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
<<<<<<< Updated upstream
                mt: -1,
=======
                mt: -2,
                mb: { md: 0, sm: 0, xs: 2 },
                width: { md: "auto", sm: "auto", xs: "100%" },
>>>>>>> Stashed changes
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
