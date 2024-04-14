import { useRef } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpForm, signUpFormSchema } from "../../validation/SignUpSchema";

import { AxiosError } from "axios";
import axiosInstance from "../../api/axios";

import { togglePasswordVisibility } from "../../utils/utils";

import FormHeader from "../../components/auth/FormHeader";
import FormBody from "../../components/auth/FormBody";

import InputForm from "../../components/UI/Input/InputForm";
import Icon from "../../components/UI/Icon/Icon";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: { username: "", email: "", password: "" },
  });
  const navigate = useNavigate();

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { ref: passwordRefForm, ...rest } = register("password");

  const onClickPasswordIcon = () => togglePasswordVisibility(passwordRef);

  async function onSubmitForm(formData: FieldValues) {
    try {
      const requestResult = await axiosInstance.post(
        `/api/sign-up/`,
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } },
      );

      if (
        requestResult.status === 201 &&
        requestResult.statusText === "Created"
      ) {
        navigate("/auth/sign-in");
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError && error.response) {
        const errorMessage = error.response?.data.username[0];
        const errorStatusCode = error.response?.data.status;
        // TODO: add check email after backenders do their part

        if (errorMessage === "A user with that username already exists.")
          setError(
            "username",
            {
              type: errorStatusCode,
              message: "User with this username already exists",
            },
            { shouldFocus: true },
          );
      }
    } finally {
      reset(undefined, { keepDirtyValues: true, keepErrors: true });
    }
  }

  return (
    <>
      <FormHeader>
        <p className="mb-2 font-headings text-subHeading3 font-medium">
          Learn with <span className="text-primary-1000">Beyim Analytics</span>
        </p>
        <p className="font-sans text-p2 font-normal text-black-300">
          Create an account to start learning
        </p>
      </FormHeader>

      <FormBody
        buttonText="Sign Up"
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="mb-3 flex flex-col gap-[25px]">
          <InputForm
            placeholder="Write your username"
            required
            type="text"
            errorMessage={errors.username && errors.username?.message}
            leftIconName="UserSvg"
            {...register("username")}
          />
          <InputForm
            placeholder="Write your email"
            required
            type="email"
            errorMessage={errors.email && errors.email?.message}
            leftIconName="LetterSvg"
            {...register("email")}
          />

          <InputForm
            placeholder="Write your password"
            required
            type="password"
            errorMessage={errors.password && errors.password?.message}
            leftIconName="LockSvg"
            {...rest} //* same as register, just need ref
            ref={(e) => {
              passwordRefForm(e);
              passwordRef.current = e;
            }}
          >
            <Icon
              className=" cursor-pointer"
              onClick={onClickPasswordIcon}
              name="ClosedEyeSvg"
            />
          </InputForm>
        </div>

        <p className="flex cursor-pointer justify-end pb-12 font-sans text-p2 text-primary-1000">
          Forgot your password?
        </p>
        <p className="pb-12 font-sans font-normal text-black-300">
          Already have an account?{" "}
          <NavLink
            to="/auth/sign-in"
            className="cursor-pointer text-primary-1000"
          >
            Login
          </NavLink>
        </p>
      </FormBody>
    </>
  );
};

export default SignIn;
