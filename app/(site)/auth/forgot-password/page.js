"use client";

import AuthSubText from "@/components/auth/AuthSubText";
import AuthTitle from "@/components/auth/AuthTitle";
import AuthWrapper from "@/components/auth/AuthWrapper";
import CommonBtn from "@/components/common/CommonBtn";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // on submit
  const onSubmit = (data) => {
    console.log(data);
    router.push("/auth/reset-verification");
  };
  return (
    <div className="container min-h-screen py-32 flex justify-center items-center">
      <AuthWrapper>
        <div className="w-full flex flex-col gap-4 justify-start items-center">
          {/* Header */}
          <div className="w-full flex flex-col gap-2 items-center">
            <AuthTitle title="Forgot Password" />
            <AuthSubText
              text="Please provide your registered email address to receive a password reset code."
              className={"text-center"}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
          >
            {/* email */}
            <CommonInputWrapper
              register={register}
              errors={errors}
              type="email"
              name="email"
              placeholder="Enter your email"
              register_as="email"
              label="Email address:"
              validationRules={{
                required: "Email field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              }}
            />
            {/* submit button */}
            <CommonBtn type="submit" className={`mt-4`} isLoading={false}>
              Send code
            </CommonBtn>
          </form>
        </div>
      </AuthWrapper>
    </div>
  );
};
export default ForgotPassword;
