"use client";

import CommonBtn from "@/components/common/CommonBtn";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { useForm } from "react-hook-form";

const AnalysisForm = () => {
  const {
    register,
    handleSubmit,
    control,
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
    <div className="w-full flex flex-col gap-6">
      <p className="text-2xl text-primary-dark font-special font-medium">
        Al Analysis Results
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
        <div className="w-full grid grid-cols-2 gap-8">
          {/* clothe */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="clothe"
            control={control}
            placeholder="Clothing Type"
            register_as="clothe"
            label="Clothing Type"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* Category*/}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="category"
            control={control}
            placeholder="Category"
            register_as="category"
            label="Category"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* Material */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="material"
            control={control}
            placeholder="Material"
            register_as="material"
            label="Material"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* clothe */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="clothe"
            control={control}
            placeholder="Clothing Type"
            register_as="clothe"
            label="Clothing Type"
            validationRules={{
              required: "This field is required",
            }}
          />
        </div>
        {/* full name */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="text"
          name="fname"
          control={control}
          placeholder="Your name"
          register_as="fname"
          label="Full Name:"
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
          control={control}
          placeholder="abc@gmail.com"
          register_as="email"
          label="Email Address:"
          validationRules={{
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          }}
        />
        {/* phone number */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="number"
          name="phoneNumber"
          control={control}
          placeholder="ex 012345678"
          register_as="phoneNumber"
          label="Phone Numbers:"
          validationRules={{
            required: "Phone number field is required",
          }}
        />
        {/* subject */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="text"
          name="subject"
          control={control}
          placeholder="Enter Keyword"
          register_as="subject"
          label="Subject:"
          validationRules={{
            required: "Phone number field is required",
          }}
        />
        {/* your message */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="textarea"
          name="yourMessage"
          control={control}
          placeholder="Message"
          register_as="yourMessage"
          label="Your Message:"
          validationRules={{
            required: "Phone number field is required",
          }}
        />

        {/* terms and conditions */}
        <label
          htmlFor="terms"
          className="w-full flex gap-2 cursor-pointer justify-start items-start py-5"
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
            className={`text-sm -mt-1 capitalize text-[#0B0B0B] max-w-[458px] ${
              errors.terms ? "text-red-500" : ""
            }`}
          >
            I agree that my data may be processed to respond to my request for
            information.
          </span>
        </label>
        {/* error terms */}
        {errors.terms && <ErrorText error={errors?.terms?.message} />}

        {/* send message button */}
        <CommonBtn className={""}>Send Message</CommonBtn>
      </form>
    </div>
  );
};

export default AnalysisForm;
