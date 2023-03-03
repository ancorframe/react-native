import * as yup from "yup";

export const registerSchema = yup
  .object({
    login: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

  export const loginSchema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    })
    .required();
