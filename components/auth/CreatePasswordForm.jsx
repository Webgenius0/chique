"use client";
import { useForm } from 'react-hook-form';
import CommonInputWrapper from '../common/CommonInputWrapper';
import { validatePassword } from '@/utils/validatePassword';
import CommonBtn from '../common/CommonBtn';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CreatePasswordForm = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors }
    } = useForm();

    // password checks state
    const [passwordChecks, setPasswordChecks] = useState({
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
        hasMinLength: false
    });

    const password = watch("password");

    useEffect(() => {
        if (password) {
            setPasswordChecks({
                hasUpperCase: /[A-Z]/.test(password),
                hasLowerCase: /[a-z]/.test(password),
                hasNumber: /[0-9]/.test(password),
                hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
                hasMinLength: password.length >= 8
            });
        } else {
            setPasswordChecks({
                hasUpperCase: false,
                hasLowerCase: false,
                hasNumber: false,
                hasSpecialChar: false,
                hasMinLength: false
            });
        }
    }, [password]);
    // on submit
    const onSubmit = (data) => {
        console.log(data);
        router.push("/welcome");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
            {/* password */}
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="password"
                control={control}
                placeholder="New Password"
                register_as="password"
                validationRules={{
                    required: "This field is required",
                    validate: validatePassword
                }}
            />
            {/* confirm password */}
            <CommonInputWrapper
                register={register}
                errors={errors}
                type="password"
                name="confirm_password"
                control={control}
                placeholder="Confirm password"
                register_as="confirm_password"
                validationRules={{
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                }}
            />
            {/* password validation */}
            <div className="flex flex-col gap-3">
                <p className="text-[rgba(0,0,0,0.80)]">Password must contain:</p>
                {/* uppercase and lowercase characters check */}
                <div className='grid grid-cols-2 gap-2'>
                    <p className={`text-base ${passwordChecks.hasUpperCase ? 'text-[#2FA75F]' : 'text-[#FF3B3B]'}`}>
                        <input
                            type="checkbox"
                            className={passwordChecks.hasUpperCase ? 'accent-green-400' : '[#FF3B3B]'}
                            checked={passwordChecks.hasUpperCase}
                            readOnly
                        /> Uppercase letter
                    </p>
                    <p className={`text-base ${passwordChecks.hasLowerCase ? 'text-[#2FA75F]' : 'text-[#FF3B3B]'}`}>
                        <input
                            type="checkbox"
                            className={passwordChecks.hasLowerCase ? 'accent-green-400' : '[#FF3B3B]'}
                            checked={passwordChecks.hasLowerCase}
                            readOnly
                        /> Lowercase letter
                    </p>
                    <p className={`text-base ${passwordChecks.hasNumber ? 'text-[#2FA75F]' : 'text-[#FF3B3B]'}`}>
                        <input
                            type="checkbox"
                            className={passwordChecks.hasNumber ? 'accent-green-400' : '[#FF3B3B]'}
                            checked={passwordChecks.hasNumber}
                            readOnly
                        /> Number
                    </p>
                    <p className={`text-base ${passwordChecks.hasSpecialChar ? 'text-[#2FA75F]' : 'text-[#FF3B3B]'}`}>
                        <input
                            type="checkbox"
                            className={passwordChecks.hasSpecialChar ? 'accent-green-400' : 'accent-[#FF3B3B]'}
                            checked={passwordChecks.hasSpecialChar}
                            readOnly
                        /> Special character
                    </p>
                    <p className={`text-base ${passwordChecks.hasMinLength ? 'text-[#2FA75F]' : 'text-[#FF3B3B]'}`}>
                        <input
                            type="checkbox"
                            className={passwordChecks.hasMinLength ? 'accent-green-400' : 'accent-[#FF3B3B]'}
                            checked={passwordChecks.hasMinLength}
                            readOnly
                        /> 8+ characters
                    </p>
                </div>
            </div>
            {/* change button */}
            <CommonBtn className={""} type='submit' >Change</CommonBtn>
        </form>
    );
};
export default CreatePasswordForm;