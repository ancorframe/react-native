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

export const PostSchema = yup
  .object({
    name: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
