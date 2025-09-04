'use client';

import Loader from "@/components/common/Loader";
import { useUser } from "@/hooks/get-user.hook";
import { Result, Button, Descriptions, Tag, List } from "antd";

const SubscriptionInfoClient = () => {
    const { userData, isLoading } = useUser();

    // Loading state
    if (isLoading) {
        return (
            <div className="w-full h-[80vh] flex flex-col items-center justify-center py-10 text-gray-500">
                <Loader />
                <span className="ml-2">Loading profile information...</span>
            </div>
        );
    }

    // No user data
    if (!userData) {
        return (
            <div className="w-full flex items-center justify-center py-10 text-gray-500">
                <Result
                    status="500"
                    title="Error getting profile information"
                    subTitle="No profile information available."
                />
            </div>
        );
    }

    const { subscription } = userData || {};

    if (!subscription) {
        return (
            <div className="w-full flex items-center justify-center py-10 text-gray-500">
                <Result
                    status="404"
                    title="No Subscription Found"
                    subTitle="You are not currently subscribed to any plan."
                />
            </div>
        );
    }

    const {
        subscribed,
        status,
        type,
        ends_at,
        canceled_at,
        on_grace_period,
        checkout_url,
        plan,
    } = subscription;

    return (
        <div className="w-full flex flex-col text-black">
            <h2 className="sm:text-xl text-base font-semibold border-b border-gray-300 pb-2 mb-4">
                Subscription Information
            </h2>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Plan Name">
                    {plan?.name || "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Subscribed">
                    {subscribed ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>}
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    <Tag color={status === "active" ? "green" : "red"}>
                        {status || "N/A"}
                    </Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Type">{type || "N/A"}</Descriptions.Item>
                <Descriptions.Item label="Price">
                    {plan ? `${plan.price} ${plan.currency} / ${plan.interval}` : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Trial Days">
                    {plan?.trial_days ?? "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Ends At">
                    {ends_at ? new Date(ends_at).toLocaleDateString() : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Canceled At">
                    {canceled_at ? new Date(canceled_at).toLocaleDateString() : "N/A"}
                </Descriptions.Item>
                <Descriptions.Item label="Grace Period">
                    {on_grace_period ? "Yes" : "No"}
                </Descriptions.Item>
                <Descriptions.Item label="Checkout URL">
                    {checkout_url ? (
                        <a href={checkout_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            Manage Subscription
                        </a>
                    ) : "N/A"}
                </Descriptions.Item>
            </Descriptions>
            {/* Features List */}
            {plan?.features && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <List
                        bordered
                        dataSource={plan.features}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </div>
            )}
            {/* Cancel button */}
            <div className="mt-6 flex justify-end">
                <Button danger type="primary" onClick={() => alert("Cancel subscription logic here")}>
                    Cancel Subscription
                </Button>
            </div>
        </div>
    );
};

export default SubscriptionInfoClient;
