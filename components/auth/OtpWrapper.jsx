import { Input } from "antd";

const OtpWrapper = ({ otp, OtpChange }) => {
    return (
        <div className="w-full flex gap-4 justify-center items-enter mb-3">
            <Input.OTP
                length={4}
                value={otp}
                onChange={(val) => OtpChange(val)}
            />
        </div>
    );
};

export default OtpWrapper;