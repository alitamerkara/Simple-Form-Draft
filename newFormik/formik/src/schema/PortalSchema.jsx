import React from "react";
import * as yup from "yup";

const PortalSchema = yup.object({
  username: yup
    .string("enter your username")
    .min(3, "the username must be minimum 3 characters")
    .required("username is required"),
  university: yup
    .string()
    .oneOf(["ybu", "odtu", "ytu"], "please choose a valid university")
    .required("choosing university is required"),
  checkbox: yup.boolean().oneOf([true], "you must to accept the conditions"),
});

export default PortalSchema;
