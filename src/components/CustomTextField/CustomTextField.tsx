import React from "react";
import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { theme } from "@muc/styles";

interface CustomTextFieldProps {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  type: string;
  placeHolder: string;
  width?: string;
  defaultValue?: string;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
  showHelperText?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  multiline?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  rules,
  placeHolder,
  width,
  defaultValue,
  showHelperText = true,
  label,
  multiline,
  ...props
}) => {
  const { control } = useFormContext();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width={{ md: width, sm: width, xs: "auto" }} pb={2}>
      <Typography variant="h6" fontWeight={600} mb={"8px"}>
        {label}
      </Typography>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            placeholder={placeHolder}
            {...props}
            fullWidth
            multiline={multiline}
            rows={multiline ? (isSmUp ? 4 : 8) : 1}
            sx={{
              width: {
                md: width ? width : "auto",
                sm: 480,
                xs: "auto",
              },
              height: {
                md: multiline ? "auto" : "48px",
                sm: multiline ? "auto" : "48px",
                xs: multiline ? "auto" : "auto",
              },
            }}
            error={!!fieldState.error}
            helperText={
              showHelperText && fieldState.error?.message ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mt: -0.5,
                  }}
                >
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "red",
                      textTransform: "capitalize",
                    }}
                  >
                    {fieldState.error.message.toString()}
                  </Typography>
                </Box>
              ) : (
                ""
              )
            }
          />
        )}
      />
    </Box>
  );
};
export default CustomTextField;
