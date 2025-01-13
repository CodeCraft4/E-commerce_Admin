import { CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const PaymentMethods = () => {
  const methods = useForm();
  return (
    <>
      <Box
        sx={{ display: { md: "flex", sm: "flex", xs: "block" }, gap: "16px" }}
      >
        <Box
          sx={{
            display: "flex",
            width: {md:"360px",sm:350,xs:'100%'},
            padding: "16px",
            height: "154px",
            borderRadius: "16px",
            gap: "16px",
            border: `1px solid ${COLORS.dark.darBlack}`,
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" color="initial">
            Payment Info
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", flexDirection: "column" }}>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Box component={"img"} src="assets/icons/masterCard.svg" />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px ",
                  fontWeight: "600",
                  color: COLORS.gray.darkGray,
                }}
              >
                Master Card **** **** 6557
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px ",
                fontWeight: "600",
                color: COLORS.gray.darkGray,
              }}
            >
              {" "}
              Business name: Shristi Singh
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px ",
                fontWeight: "600",
                color: COLORS.gray.darkGray,
              }}
            >
              {" "}
              Phone: +91 904 231 1212
            </Typography>
          </Box>
        </Box>
        <FormProvider {...methods}>
          <CustomTextField
            label="Type some notes"
            name="notes"
            placeHolder="Type some notes"
            type="text"
            width="100%"
            multiline
          />
        </FormProvider>
      </Box>
    </>
  );
};

export default PaymentMethods;
