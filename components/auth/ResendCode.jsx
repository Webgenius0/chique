const ResendCode = () => {
    return (
        <p className="text-base text-[rgba(1,3,11,0.60)] mt-4 cursor-pointer">
            {/* Didn’t receive code?{" "}
            {resendActive ? (
                <span
                    className="cursor-pointer underline"
                    onClick={handleResend}
                >
                    Resend
                </span>
            ) : (
                <span>Resend in {seconds}s</span>
            )} */}
            Resend Code
        </p>
    );
};
export default ResendCode;