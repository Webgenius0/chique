"use client";
import { useRouter } from "next/navigation";
import CommonInputWrapper from "../common/CommonInputWrapper"
import { useForm } from "react-hook-form";
import CommonBtn from "../common/CommonBtn";

const ForgotPasswordForm = () => {
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
    // form render
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
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
    )
}

export default ForgotPasswordForm