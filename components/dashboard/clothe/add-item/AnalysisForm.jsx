"use client";

import CommonBtn from "@/components/common/CommonBtn";
import CommonInputWrapper from "@/components/common/CommonInputWrapper";
import { useForm } from "react-hook-form";
import ClothingUploader from "./ClothingUploader";

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex lg:flex-row flex-col gap-6">
      <ClothingUploader />
      <div className="w-full flex flex-col gap-3">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5">
          {/* clothe */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="clothe"
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
            placeholder="Material"
            register_as="material"
            label="Material"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* Pattern */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="pattern"
            placeholder="Pattern"
            register_as="patern"
            label="Pattern"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* Color */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="Color"
            placeholder="Color"
            register_as="color"
            label="Color"
            validationRules={{
              required: "This field is required",
            }}
          />
          {/* Season */}
          <CommonInputWrapper
            register={register}
            errors={errors}
            type="text"
            name="season"
            placeholder="Season"
            register_as="season"
            label="Season"
            validationRules={{
              required: "This field is required",
            }}
          />
        </div>
        {/* item name */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="text"
          name="item_name"
          placeholder="Item name"
          register_as="item_name"
          label="Item name"
          validationRules={{
            required: "This field is required",
          }}
        />
        {/* Where did you buy this */}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="text"
          name="buy"
          placeholder="Enter store name or location"
          register_as="buy"
          label="Where did you buy this?"
          validationRules={{
            required: "This field is required",

          }}
        />
        {/* Link*/}
        <CommonInputWrapper
          register={register}
          errors={errors}
          type="text"
          name="link"
          placeholder="Enter link here"
          register_as="link"
          label="Link to item (optional)"
        />

        {/* error terms */}
        {errors.terms && <ErrorText error={errors?.terms?.message} />}

        {/* send message button */}
        <CommonBtn className={"rounded-xl mt-3"}>Save</CommonBtn>
      </div>
    </form>
  );
};

export default AnalysisForm;
