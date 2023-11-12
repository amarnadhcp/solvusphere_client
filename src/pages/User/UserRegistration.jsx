import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { RegisterSchema } from "../../validation/Yup";
import BlurredCircle from "../../components/UiElements/BlurredCircle";
import {} from "postcss";
import { useMutation } from "@tanstack/react-query";
import userRequest from "../../Utils/userRequest";

function UserRegistration() {
  const [RegError, setRegError] = useState(null);

  const initialValues = {
    email: "",
    username: "",
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      return userRequest.post("/register", data);
    },
    // Handle the mutation success
    onSuccess: (data) => {
      console.log("Login successful", data.data.message);
      console.log(values.username);
      localStorage.setItem("solvo-username",values.username)
      localStorage.setItem("solvo-email",values.email)
    },
    onError: (error) => {
      console.error("Login error", error);
      if (error.response && error.response.status === 409) {
        setRegError("Your aready registered with this email");
      } else {
        setRegError("An error occurred during my login");
      }
    },
  });


  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: async (values) => {
        // Backend call
        if (!mutation.isLoading) {
          try {
            await mutation.mutateAsync(values);
          } catch (error) {
            console.error( error.response.data.warning);
          }
        }
      },
    });

  return (
    <div className="bg-black relative overflow-hidden opacity-90 flex flex-col justify-center align-middle items-center min-h-screen md:px-0 px-5">
      <div className="mx-auto w-90pt md:w-65pt md:max-w-[70rem]">
        <BlurredCircle />
        <h1 className="mx-auto sm:w-90pt text-gray-200 text-2xl text-center md:text-left md:text-3xl py-2  sm:py-5 font-semibold">
          Registration
        </h1>
        <Card className="mx-auto sm:w-90pt rounded-lg px-3 border border-gray-700 bg-gray-900 bg-opacity-40">
          <CardBody className="flex flex-col  md-1:flex-row gap-5 overflow-x-clip items-center">
            <div className="md:mt-7 w-full" >
              <Input
                label="Email"
                name="email"
                size="lg"
                color="blue-gray"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              <div
                className={`${
                  touched.email && errors.email ? "opacity-100" : "opacity-0"
                } text-red-500 text-sm py-1`}
              >
                {errors.email ? errors.email : "None"}
              </div>
            </div>

            <div className="md:mt-7 w-full" >  
              <Input
                label="Name"
                name="username"
                size="lg"
                color="blue-gray"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={touched.username && errors.username}
              />
              <div
                className={`${
                  touched.username && errors.username ? "opacity-100" : "opacity-0"
                } text-red-500 text-sm py-1`}
              >
                {errors.username ? errors.username : "None"}
              </div>
            </div>

            <div>
              <Button onClick={handleSubmit} disabled={mutation.isLoading} type="button" variant="gradient" color="yellow" fullWidth>
                Next
              </Button>
            </div>
          </CardBody>
        </Card>
        <BlurredCircle bottomRight />
      </div>
    </div>
  );
}

export default UserRegistration;
