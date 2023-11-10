import * as Yup from "yup";



export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter a password")
});


export const RegisterSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    name: Yup.string().min(4).required("Please your name")
});





   
  
