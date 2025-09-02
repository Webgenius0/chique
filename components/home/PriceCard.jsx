import { TiTick } from "react-icons/ti";
import CommonBtn from "../common/CommonBtn";
import { motion } from "framer-motion";
import { useUser } from "@/hooks/get-user.hook";
import toast from "react-hot-toast";
const PriceCard = ({ item = {}, index, billingType }) => {
    // destructuring props
    const {
        id,
        name,
        description,
        stripe_price_id,
        price,
        interval,
        features = [],
        currency,
    } = item || {};
    // variants
    const flipVariants = {
        hidden: { rotateY: 180, opacity: 0 },
        visible: (index) => ({
            rotateY: 0,
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: index * 0.2,
                ease: "easeOut",
            },
        }),
    };
    const { accessToken } = useUser();

    // functions
    const handleGetStarted = () => {
        if (!accessToken) {
            toast.error("Please login to get started");
            return;
        }

    };


    // main render
    return (
        <motion.div
            key={item.id}
            className="w-full flex flex-col justify-between  gap-5 border rounded-[20px] py-6 px-5 hover:bg-[#B1B0B0] transition duration-500"
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* name */}
            <span className="rounded-full capitalize text-center text-lg py-2 !px-6 max-w-fit  text-white bg-black font-primary">
                {name}
            </span>
            {/* price */}
            <p className="text-2xl font-semibold text-primary-dark font-primary border-b sm:pb-8 pb-5">
                $
                {billingType === "monthly"
                    ? (Number(price) / 12).toFixed(2)
                    : Number(price).toFixed(2)}
                <span className="text-sm">
                    / {billingType === "monthly" ? "Month" : "Year"}
                </span>
            </p>
            {/* features */}
            <ul className="space-y-4">
                {features?.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-center text-sm">
                        <div className="size-6 flex items-center justify-center rounded-full bg-primary-dark ">
                            <TiTick className="text-white text-lg" />
                        </div>
                        <span className="text-base font-primary">{feature}</span>
                    </li>
                ))}
            </ul>
            {/* CTA button */}
            <div className="w-full">
                {/* get started */}
                <button onClick={handleGetStarted} type="button" className="w-full cursor-pointer bg-black text-white p-3 flex justify-center items-center min-h-12 rounded-full">
                    Get Started
                </button>
            </div>
        </motion.div>
    )
}

export default PriceCard