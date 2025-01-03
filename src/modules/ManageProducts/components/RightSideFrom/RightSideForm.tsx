import { useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { COLORS } from "@muc/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFormContext } from "react-hook-form";
import { dragAndDrop, dragAndDropGallary } from "@muc/utils";

type ImageFile = {
  preview: string;
  name: string;
};

const RightSideForm: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [images, setImages] = useState<ImageFile[]>([]);
  const [isUploadingPreview, setIsUploadingPreview] = useState<boolean>(false);
  const [isUploadingGallery, setIsUploadingGallery] = useState<boolean>(false);

  const { setValue } = useFormContext();

  const handlePreviewDrop: DropzoneOptions["onDrop"] = (acceptedFiles) => {
    setIsUploadingPreview(true);
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);

    setTimeout(() => {
      setPreviewImage(preview);
      setIsUploadingPreview(false);
      setValue("previewImage", file);
    }, 1500);
  };

  const handleGalleryDrop: DropzoneOptions["onDrop"] = (acceptedFiles) => {
    setIsUploadingGallery(true);

    const newImages = acceptedFiles.map((file) => ({
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setTimeout(() => {
      setImages((prevImages) => [...prevImages, ...newImages]);
      setIsUploadingGallery(false);
      setValue("galleryImages", [...images, ...newImages]);
    }, 1500);
  };

  const galleryDropzone = useDropzone({
    onDrop: handleGalleryDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/svg": [".svg"],
    },
    multiple: true,
  });

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: "auto",
        width: "100%",
      }}
    >
      {/* Preview Image Dropzone */}
      <Box {...previewDropzone.getRootProps()} sx={dragAndDrop}>
        <input {...previewDropzone.getInputProps()} />
        {isUploadingPreview ? (
          <Box sx={{ width: "50%", position: "absolute", top: "50%" }}>
            <LinearProgress
              sx={{ color: COLORS.primary.main, borderRadius: "10px" }}
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
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ) : (
          <Box>
            <Box component={"img"} src="/assets/icons/dragDrop-icon.svg" />
            <Typography variant="h6" color={COLORS.primary.main}>
              Drag and drop your image here
            </Typography>
          </Box>
        )}
      </Box>

      {/* Gallery Section */}
      <Typography
        variant="h4"
        sx={{
          mt: 3,
          textAlign: "start",
          fontWeight: 600,
          justifyContent: "flex-start",
        }}
      >
        Product Gallery
      </Typography>
      <Box {...galleryDropzone.getRootProps()} sx={dragAndDropGallary}>
        <input {...galleryDropzone.getInputProps()} />
        {isUploadingGallery ? (
          <Box sx={{ width: "50%", position: "absolute", top: "50%" }}>
            <LinearProgress
              sx={{ color: COLORS.primary.main, borderRadius: "10px" }}
            />
          </Box>
        ) : (
          <Box>
            <Box component={"img"} src="/assets/icons/dragDrop-icon.svg" />
            <Typography
              variant="body1"
              color={COLORS.primary.main}
              width={"250px"}
              fontSize={'15px'}
            >
              Drop your image here, or browse Jpeg , png , svg are allowed
            </Typography>
          </Box>
        )}
      </Box>

      {/* Product Gallery Thumbnails */}
      <Box>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: COLORS.gray.main,
                  borderRadius: "10px",
                  p: 1,
                  justifyContent: "center",
                  m: "auto",
                  width: "440px",
                }}
              >
                <Box
                  component="img"
                  src={image?.preview}
                  alt={`Product Thumbnail ${index + 1}`}
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    mr: 2,
                  }}
                />
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {image?.name}
                </Typography>
                <IconButton>
                  <CheckCircleIcon sx={{ color: COLORS.primary.main }} />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RightSideForm;
