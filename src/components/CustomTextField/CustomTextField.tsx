import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

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
            rows={multiline ? 4 : 1}
            sx={{
              width: {
                md: width ? width : "auto",
                sm: width ? width : "auto",
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
                <Typography
                  component="span"
                  variant="caption"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "red",
                    marginLeft: -2,
                    textTransform: "capitalize",
                  }}
                >
                  {fieldState.error.message.toString()}
                </Typography>
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
