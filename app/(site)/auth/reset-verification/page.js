"use client";

import AuthTitle from "@/components/auth/AuthTitle";
import AuthWrapper from "@/components/auth/AuthWrapper";
import OtpWrapper from "@/components/auth/OtpWrapper";
import ResendCode from "@/components/auth/ResendCode";
import CommonBtn from "@/components/common/CommonBtn";
// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";

const ResetVerification = () => {
  //   const [otp, setOtp] = useState("");
  //   const [seconds, setSeconds] = useState(25);
  //   const [resendActive, setResendActive] = useState(false);
  // //   const axiosPublic = useAxiosPublic();
  // //   const navigate = useNavigate();
  //   const verify_email = localStorage.getItem("email");

  //   // otp change handler
  //   const OtpChange = (val) => {
  //     setOtp(val);
  //   };
  //   // Confirm OTP mutation
  //   const confirmSignUp = useMutation({
  //     mutationKey: ["confirmSignUp"],
  //     mutationFn: async (data) => {
  //       const response = await axiosPublic.post("/user/verify-user", data);
  //       return response?.data;
  //     },
  //     onSuccess: (res) => {
  //       toast.success(
  //         res?.message || "OTP verification successful, Please login"
  //       );
  //       localStorage.removeItem("email");
  //       setTimeout(() => {
  //         navigate("/sign-in");
  //       }, 1000);
  //     },
  //     onError: (err) => {
  //       toast.error(err?.response?.data?.message || "Something went wrong!");
  //     },
  //   });
  //   // final submit
    const handleSubmit = () => {
      if (otp.length !== 4)
        return toast.error("Please enter a valid 4-digit code");
      // confirmSignUp.mutate({ otp, email: verify_email });
    };

  //   // Resend OTP mutation
  //   const resendOtp = useMutation({
  //     mutationKey: ["resendOtp"],
  //     mutationFn: (data) =>
  //       axiosPublic
  //         .post("/user/resend/verify-otp", data)
  //         .then((res) => res?.data),
  //     onSuccess: (res) => {
  //       toast.success(res?.message || "OTP resent successfully");
  //     },
  //     onError: (err) => {
  //       toast.error(err?.response?.data?.message || "Something went wrong!");
  //     },
  //   });

  //   const handleResend = () => {
  //     if (!resendActive) return;
  //     setSeconds(25);
  //     setResendActive(false);
  //     resendOtp.mutate({ email: verify_email });
  //   };

  //   // Countdown timer effect
  //   useEffect(() => {
  //     let timer;
  //     if (seconds > 0) {
  //       timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
  //     } else {
  //       setResendActive(true);
  //     }
  //     return () => clearInterval(timer);
  //   }, [seconds]);

  return (
    <div className="container min-h-screen py-32 flex justify-center items-center">
      <AuthWrapper>
        <div className="w-full flex flex-col gap-4 justify-start items-center">
          {/* Header */}
          <div className="w-full flex flex-col gap-3 items-center">
            <AuthTitle title="Verification Code" />
            <h5 className="text-center text-xl text-gray-400 font-primary">
              Enter verification code sent to your email address <br />
              <span>{"farokafs100@gmail.com" || "--"}</span>
            </h5>
          </div>

          {/* Otp */}
          <div className="w-full font-medium flex flex-col gap-3 justify-start items-center">
            <OtpWrapper /> {/* label="Code" OtpChange={OtpChange} otp={otp} */}
            <CommonBtn
              type="button"
              isLoading={false}
              className="max-w-[300px]"
              link={true}
              path="/auth/create-new-password"
              onclick={handleSubmit}
              //   onclick={handleSubmit}
            >
              Continue
            </CommonBtn>
            {/* resend code */}
            <ResendCode
            //   handleResend={handleResend}
            //   seconds={seconds}
            //   resendActive={resendActive}
            />
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default ResetVerification;
