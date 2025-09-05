"use client";
import { Button, Result } from "antd"
import Link from "next/link";

const PaymentCancelClient = () => {
    return (
        <Result
            status="error"
            title="Payment Cancelled"
            subTitle="It looks like your payment was cancelled. Please try again if you want to continue."
            extra={[
                <Link href="/#subscriptions" key="pricing">
                    <Button type="primary" className="bg-black">
                        Try Again
                    </Button>
                </Link>,
                <Link href="/" key="home">
                    <Button>Back to Home</Button>
                </Link>,
            ]}
        />
    )
}

export default PaymentCancelClient