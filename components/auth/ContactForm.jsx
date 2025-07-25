"use client";
import CommonBtn from "@/components/common/CommonBtn";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { useForm } from "react-hook-form";

const ContactForm = () => {
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
    <div className="bg-[#FAFAFB] max-w-[646px] w-full flex flex-col xl:gap-8 lg:gap-7 md:gap-5 gap-4 rounded-3xl border border-[#DFE0E4] xl:p-8 lg:p-7 md:p-6 p-4 items-start justify-start">
      <p className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-extrabold text-primary-dark font-secondary">Contact now</p>
      {/* contact now form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
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
        <label htmlFor="terms" className="w-full flex gap-2 cursor-pointer justify-start items-start xl:py-5 lg:py-4 md:py-3 py-2">
          <input
            type="checkbox"
            id="terms"
            defaultChecked
            className={`w-4 h-4 ${errors.terms ? 'accent-red-500' : 'accent-primary-dark'}`}
            {...register("terms", {
              required: "You must accept the terms to continue"
            })}
          />
          <span className={`text-sm -mt-1 capitalize text-[#0B0B0B] max-w-[458px] ${errors.terms ? 'text-red-500' : ''}`}>
            I agree that my data may be processed to respond to my request for information.
          </span>
        </label>
        {/* error terms */}
        {errors.terms && (
          <ErrorText error={errors?.terms?.message} />
        )}

        {/* send message button */}
        <CommonBtn className={""}>Send Message</CommonBtn>
      </form>
    </div>
  );
};
export default ContactForm;