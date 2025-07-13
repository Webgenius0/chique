import { useState } from "react";
const ResendCode = () => {
  const [resendActive, setResendActive] = useState(false);
  const [seconds, setSeconds] = useState(25);

  // handle resend
  const handleResend = () => {
    if (!resendActive) return;
    //  console.log("Resend code triggered");
    setSeconds(25);
    setResendActive(false);
    // Trigger your API call to resend the OTP here
    // resendOtp.mutate({ email: userData?.email });
  };
  return (
    <p className="text-base text-gray-400 font-primary text-center">
      Don&apos;t receive the code?{" "}
      {resendActive ? (
        <span
          className="cursor-pointer underline"
          onClick={handleResend}
        >
          Resend
        </span>
      ) : (
        <span>Resend in {seconds} seconds</span>
      )}
    </p>
  );
};
export default ResendCode;