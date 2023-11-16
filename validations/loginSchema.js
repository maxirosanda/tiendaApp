import {object, string} from "yup"

export const loginSchema =  object().shape({
    email: string()
          .required("Email is required")
          .email("Not a valid email"),
    password:string()
          .required("Password is required")
          .min(6,"Password must be at least 6 characters")
          .matches(
        /^(?=.*[a-zA-Z!@#$%^&*])(?=.*\d)/,
        "Password must contain at least one letter or special character and one number")
})