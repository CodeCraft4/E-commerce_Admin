import { storage } from "@muc/appwrite";
import { COLORS, DATABASE } from "@muc/constants";
import { dragAndDrop } from "@muc/utils";
import {
  Box,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";

const UploadProfile = ({ initialPreview }: any) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploadingPreview, setIsUploadingPreview] = useState<boolean>(false);

  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID as string;

  const { setValue, control, getValues } = useFormContext();

  const handlePreviewDrop = async (acceptedFiles: File[]) => {
    setIsUploadingPreview(true);
    const file = acceptedFiles[0];

    try {
      const currentFileUrl = getValues("profileImg");
      const currentFileId = currentFileUrl
        ?.split("/files/")[1]
        ?.split("/view")[0];

      // Delete the existing file if it exists
      if (currentFileId) {
        await storage.deleteFile(DATABASE.storageId, currentFileId);
      }
      const response = await storage.createFile(
        DATABASE.storageId,
        `${null}`,
        file
      );

      // Generate the file URL
      const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${DATABASE.storageId}/files/${response.$id}/view?project=${projectId}`;
      setPreviewImage(fileUrl);
      setValue("profileImg", fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploadingPreview(false);
    }
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

  useEffect(() => {
    if (initialPreview) {
      setPreviewImage(initialPreview);
    }
  }, [initialPreview]);

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
            src={previewImage || initialPreview}
            alt={"..."}
            onError={() => console.error("Failed to load image:", previewImage)}
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
