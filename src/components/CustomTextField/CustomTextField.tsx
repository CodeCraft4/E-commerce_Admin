import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

interface CustomTextFieldProps {
  name: string;
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
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  rules,
  placeHolder,
  width,
  defaultValue,
  showHelperText = true,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Box width={{ md: width, sm: width, xs: "auto" }} pb={2}>
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
            sx={{
              width: {
                md: width ? width : "auto",
                sm: width ? width : "auto",
                xs: "auto",
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
