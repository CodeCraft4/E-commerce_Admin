import { FormProvider, useForm } from "react-hook-form";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import { CustomButton, CustomTextField } from "@muc/components";
import { COLORS, ROUTES } from "@muc/constants";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { loginSchema } from "@muc/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@muc/context";
import { useEffect } from "react";
interface SignUpFormFields {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<SignUpFormFields>({
    resolver: yupResolver(loginSchema),
  });

  const {
    formState: { isValid },
  } = methods;

  const { logIn, loading, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ROUTES.ADMIN.DASHBOARD);
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = async (data: SignUpFormFields) => {
    await logIn(data.email, data.password);
    navigate(ROUTES.ADMIN.DASHBOARD);
  };

  return (
    <FormProvider {...methods}>
      <Box textAlign={{ md: "start", sm: "start", xs: "center" }}>
        <Typography variant="h1">Login</Typography>
        <Typography variant="h6" color={COLORS.dark.main}>
          Enter your details below
        </Typography>
        <Box component="form" pt={3} onSubmit={methods.handleSubmit(onSubmit)}>
          <CustomTextField
            placeHolder="Email or Phone Number"
            type="email"
            name="email"
            width="406px"
          />
          <CustomTextField
            placeHolder="Password"
            type="password"
            name="password"
            width="406px"
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
            sx={{
              display: "flex",
              justifyContent: "center",
              m: "auto",
              my: { md: 2 },
              width: { md: "100%", sm: "100%", xs: "70%" },
            }}
          >
            <CustomButton
              title="Log In"
              variant="contained"
              type="submit"
              width="100%"
              icon={<ArrowForwardIosOutlined fontSize="small" />}
              disabled={!isValid}
              isLoading={loading}
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
