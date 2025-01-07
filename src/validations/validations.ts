import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});


export const myAccountSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
  role: yup.string().required("Role is required"),
  previewImage: yup
    .mixed()
    .nullable()
    .test("fileType", "Invalid file type", (value) => {
      return value === null || value instanceof File;
    }),
});

