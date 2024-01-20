import React from "react";
import * as yup from "yup";

const HomeSchema = yup.object({
  email: yup
    .string("enter your email")
    .email("enter a valid email")
    .required("email is required"),
  age: yup
    .number()
    .positive("your age should be a postive number")
    .required("age is required"),
  password: yup
    .string("enter your password")
    .min(8, "password should be of minimum 8 characters")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});

export default HomeSchema;
