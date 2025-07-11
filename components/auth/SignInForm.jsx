"use client";
import { useForm } from "react-hook-form";
import CommonInputWrapper from "../common/CommonInputWrapper";
import { validatePassword } from "@/utils/validatePassword";
import Link from "next/link";
import CommonBtn from "../common/CommonBtn";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: true, // Set default checked state here
    },
  });
  const router = useRouter();
  // on submit
  const onSubmit = (data) => {
    console.log(data);
    router.push("/dashboard");
  };
  return (
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
      {/* password */}
      <CommonInputWrapper
        register={register}
        errors={errors}
        type="password"
        name="password"
        placeholder="Enter your password"
        register_as="password"
        label="Password:"
        validationRules={{
          required: "Password field is required",
          validate: validatePassword,
        }}
      />

      {/* terms and forgot password */}
      <div className="flex justify-between">
        {/* terms */}
        <label
          htmlFor="terms"
          className="flex gap-2 cursor-pointer justify-start items-center"
        >
          <input
            type="checkbox"
            id="terms"
            defaultChecked
            className={`w-4 h-4 ${
              errors.terms ? "accent-red-500" : "accent-primary-dark"
            }`}
            {...register("terms", {
              required: "You must accept the terms to continue",
            })}
          />
          <span
            className={`text-base capitalize ${
              errors.terms ? "text-red-500" : ""
            }`}
          >
            Remember me
          </span>
        </label>
        {/* error terms */}
        {errors.terms && <ErrorText error={errors?.terms?.message} />}
        {/* forgot password */}
        <Link
          href="/auth/forgot-password"
          className="text-[##0D0E10] text-base underline"
        >
          Forget your password
        </Link>
      </div>
      {/* submit button */}
      <CommonBtn type="submit" className={`mt-4`} isLoading={false}>
        Log in
      </CommonBtn>
    </form>
  );
};
export default SignInForm;
