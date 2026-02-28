import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string()
        .email("email must be valid email").required("email is requrid"),
    password: yup.string()
        .required("password is requied")
        .min(6, "password must be at least 6 character")
        .matches(/[A-Z]/, "passwoed must contain atleast one uppercase letter")
        .matches(/[a-z]/, "passwoed must contain atleast one lowercase letter")
        .matches(/[\d]/, "passwoed must contain atleast one  number")
        .matches(/[@$%*?&]/, "passwoed must contain atleast one special character"),

});