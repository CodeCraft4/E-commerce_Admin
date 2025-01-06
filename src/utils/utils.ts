import { COLORS } from "@muc/constants";

export const dragAndDrop = {
  width: { md: "441px", sm: "100%", xs: "100%" },
  height: { md: "350px", sm: 300, xs: 200 },
  bgcolor: COLORS.gray.lightGray,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  textAlign: "center",
  position: "relative",
};

export const dragAndDropGallary = {
  border: `2px dashed ${COLORS.gray.darkGray}`,
  borderRadius: "10px",
  width: "100%",
  maxWidth: { md: "401px", sm: "100%", xs: 220 },
  p: 3,
  my: 2,
  height: 150,
  cursor: "pointer",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};
