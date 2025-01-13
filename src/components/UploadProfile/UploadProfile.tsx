import { COLORS } from "@muc/constants";
import { dragAndDrop } from "@muc/utils";
import {
  Box,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";

const UploadProfile = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploadingPreview, setIsUploadingPreview] = useState<boolean>(false);

  const { setValue, control } = useFormContext();

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
          <Box sx={{ width: "50%", position: "absolute", top: "50%" }}>
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
            <Box component="img" src="/assets/icons/dragDrop-icon.svg" />
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
          control={control}
          render={({ field }) => (
            <Select {...field} sx={{ width: { md: 550, sm: 480, xs: "auto" } }}>
              <MenuItem value="Administrator">Administrator</MenuItem>
              <MenuItem value="Contributor">Contributor</MenuItem>
              <MenuItem value="Moderator">Moderator</MenuItem>
            </Select>
          )}
        />
      </Box>
    </Box>
  );
};

export default UploadProfile;
