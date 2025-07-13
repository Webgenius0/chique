"use client";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { validatePassword } from "@/utils/validatePassword";
import CommonBtn from "../common/CommonBtn";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: true, // Set default checked state here
    },
  });
  // on submit
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      {/* name */}
      <CommonInputWrapper
        register={register}
        errors={errors}
        type="text"
        name="name"
        placeholder="Your name"
        register_as="name"
        label="Your Name:"
        validationRules={{
          required: "This field is required",
        }}
      />
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
          required: "This field is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Enter a valid email address",
          },
        }}
      />
      {/* password */}
      <CommonInputWrapper
        register={register}
        errors={errors}
        type="password"
        name="password"
        placeholder="Enter password"
        register_as="password"
        label="Password:"
        validationRules={{
          required: "This field is required",
          validate: validatePassword,
        }}
      />
      {/* confirm password */}
      <CommonInputWrapper
        register={register}
        errors={errors}
        type="password"
        name="confirm_password"
        placeholder="Confirm password"
        register_as="confirm_password"
        label="Confirm Password:"
        validationRules={{
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        }}
      />
      {/* error terms */}
      {errors.terms && <ErrorText error={errors?.terms?.message} />}
      {/* submit button */}
      <CommonBtn
        type="submit"
        className={``}
        isLoading={false}
        link={true}
        path="/auth/user-verification"
      >
        Sign Up
      </CommonBtn>
    </form>
  );
};
export default SignUpForm;