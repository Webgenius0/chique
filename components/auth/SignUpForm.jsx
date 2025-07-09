"use client"
import { useForm } from "react-hook-form"
import CommonInputWrapper from "@/components/common/CommonInputWrapper"
import { validatePassword } from "@/utils/validatePassword"
import CommonBtn from "../common/CommonBtn"

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            terms: true // Set default checked state here
        }
    })
    // on submit
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="text"
                name="name"
                control={control}
                placeholder="Name"
                register_as="name"
                label="Your Name:"
                validationRules={{
                    required: "This field is required",
                }}
            />
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="email"
                name="email"
                control={control}
                placeholder="abc@gmail.com"
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
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="password"
                control={control}
                placeholder="6544A@#Avb"
                register_as="password"
                label="Password:"
                validationRules={{
                    required: "This field is required",
                    validate: validatePassword
                }}
            />
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="confirm_password"
                control={control}
                placeholder="6544A@#Avb"
                register_as="confirm_password"
                label="Confirm Password:"
                validationRules={{
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                }}
            />
            {/* terms */}
            <label htmlFor="terms" className="w-full flex gap-2 cursor-pointer justify-start items-center">
                <input
                    type="checkbox"
                    id="terms"
                    defaultChecked
                    className={`w-4 h-4 ${errors.terms ? 'accent-red-500' : 'accent-primary-dark'}`}
                    {...register("terms", {
                        required: "You must accept the terms to continue"
                    })}
                />
                <span className={`text-base capitalize ${errors.terms ? 'text-red-500' : ''}`}>
                    I'm at least 18 years old or I'm the legal guardian of the user.
                </span>
            </label>
            {/* error terms */}
            {errors.terms && (
                <ErrorText error={errors?.terms?.message} />
            )}
            {/* submit button */}
            <CommonBtn type="submit" className={`mt-4`} isLoading={true} >
                Sign Up
            </CommonBtn>
        </form>
    )
}

export default SignUpForm