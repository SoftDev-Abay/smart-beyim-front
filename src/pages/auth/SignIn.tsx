import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInForm, signInFormSchema } from "../../validation/SignInSchema";

import useSignIn from "react-auth-kit/hooks/useSignIn";
import { IUserDataAuth, isAllowedToSignIn } from "../../auth/auth";

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
    formState: { errors, isDirty, isSubmitting },
    reset,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { username: "", password: "" },
  });

  const navigate = useNavigate();

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { ref: passwordRefForm, ...rest } = register("password");

  const signIn = useSignIn<IUserDataAuth>();

  const onClickPasswordIcon = () => togglePasswordVisibility(passwordRef);

  const onSubmitForm = async (formData: FieldValues) => {
    try {
      const requestResult = await axiosInstance.post(
        `/api/login/`,
        JSON.stringify(formData),
        { headers: { "Content-Type": "application/json" } },
      );

      if (requestResult.status === 200 && requestResult.statusText === "OK") {
        if (isAllowedToSignIn(requestResult, formData, signIn)) {
          navigate("/dashboard");
        } else {
          setError("password", {
            type: "error",
            message: "Something went wrong",
          });
          setError("username", {
            type: "error",
            message: "Something went wrong",
          });
        }
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data.detail) {
        setError("password", {
          type: error.response?.data.status,
          message: error.response?.data.detail,
        });
        setError("username", {
          type: error.response?.data.status,
          message: error.response?.data.detail,
        });
      }
    } finally {
      reset(undefined, { keepDirtyValues: true, keepErrors: true });
    }
  };

  return (
    <>
      <FormHeader>
        <p className="mb-2 font-headings text-subHeading3 font-medium">
          Welcome back!
        </p>
        <p className="font-sans text-p2 font-normal text-black-300">
          Login to your account
        </p>
      </FormHeader>

      <FormBody
        buttonText="Войти"
        isDirty={isDirty}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="mb-3 flex flex-col gap-[25px]">
          <InputForm
            placeholder="Write your username"
            type="text"
            errorMessage={errors.username?.message}
            leftIconName="UserSvg"
            {...register("username", { required: true })}
          />

          <InputForm
            placeholder="Write your password"
            required
            type="password"
            errorMessage={errors.password && errors.password?.message}
            leftIconName="LockSvg"
            {...rest}
            ref={(e) => {
              passwordRefForm(e);
              passwordRef.current = e;
            }}
          >
            <Icon
              className="cursor-pointer"
              name="ClosedEyeSvg"
              onClick={onClickPasswordIcon}
            />
          </InputForm>
        </div>

        <p className="flex cursor-pointer justify-end pb-12 font-sans text-p2 text-primary-1000">
          Restore your password
        </p>
        <p className="pb-12 font-sans font-normal text-black-300">
          Don’t have an account?{" "}
          <NavLink
            to="/auth/sign-up"
            className="cursor-pointer text-primary-1000"
          >
            Sign up
          </NavLink>
        </p>
      </FormBody>
    </>
  );
};

export default SignIn;
