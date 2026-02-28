 import * as yup from 'yup'

 export const registerSchema = yup.object({
    userName: yup.string()
      .required("userName is required")
      .min(3, "userName must be atleast 3 charecter")
      .matches(/^[a-zA-Z0-9_-]+$/, "userName must contain only letters, numbers, underscore and hyphens"),
    fullName: yup.string()
      .required("fullName hs required"),
    email: yup.string()
      .email("email must be valid email").required("email is requrid"),
    phoneNumber: yup.string()
      .required("phoneNumber is requrid"),
    password: yup.string()
      .required("password is requied")
      .min(6, "password must be at least 6 character")
      .matches(/[A-Z]/, "passwoed must contain atleast one uppercase letter")
      .matches(/[a-z]/, "passwoed must contain atleast one lowercase letter")
      .matches(/[\d]/, "passwoed must contain atleast one  number")
      .matches(/[@$%*?&]/, "passwoed must contain atleast one special character"),

  });