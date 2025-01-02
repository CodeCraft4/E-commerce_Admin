import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS } from "@muc/constants";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

interface SignUpFormFields {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<SignUpFormFields>();

  const onSubmit = (e: SignUpFormFields) => {
    console.log(e, "Log in");
  };

  return (
    <FormProvider {...methods}>
      <Box textAlign={{ md: "start", sm: "start", xs: "center" }}>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h6" color={COLORS.dark.main}>
          Enter your details below
        </Typography>
        <Box
          component={"form"}
          pt={3}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <CustomTextField
            placeHolder="Email or Phone Number"
            type="email"
            name="email"
          />
          <CustomTextField
            placeHolder="Password"
            type="password"
            name="password"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Keep me logged in"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "16px",
              },
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", my: { md: 2 } }}
          >
            <CustomButton
              title="Log In"
              variant="contained"
              type="submit"
              width="100%"
              icon={<ArrowForwardIosOutlined fontSize="small" />}
            />
          </Box>
        </Box>
        <Typography
          variant="h6"
          sx={{ width: { md: "420px", sm: "auto", xs: "auto" }, my: 2 }}
        >
          By clicking 'Log In' you agree to our website{" "}
          <Link href="">Terms & Conditions.</Link>
        </Typography>
      </Box>
    </FormProvider>
  );
};

export default SignInForm;
