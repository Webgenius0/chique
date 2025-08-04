import { TiTick } from "react-icons/ti";
import CommonBtn from "../common/CommonBtn";
import { motion } from "framer-motion";
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
const PriceCard = ({ item = {}, index, billingType }) => {
    return (
        <motion.div
            key={item.id}
            className="w-full flex flex-col justify-between sm:gap-8 gap-5 border rounded-[20px] py-6 px-5 hover:bg-[#B1B0B0] transition duration-500"
            variants={flipVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            <CommonBtn className="rounded-[100px] font-primary text-nowrap w-fit !min-h-10 !p-2.5 !px-10">
                {item.buttonText}
            </CommonBtn>
            <p className="text-2xl font-semibold text-primary-dark font-primary border-b sm:pb-8 pb-5">
                $
                {billingType === "monthly"
                    ? item.monthlyPrice
                    : item.yearlyPrice}
                <span className="text-sm">
                    / {billingType === "monthly" ? "Month" : "Year"}
                </span>
            </p>
            <ul className="space-y-4">
                {item?.subtitle?.map((subtitle, index) => (
                    <li key={index} className="flex gap-2 items-center text-sm">
                        <div className="min-w-6 h-6 rounded-full bg-primary-dark p-0.5">
                            <TiTick className="text-white text-xl" />
                        </div>
                        <span className="text-sm font-primary">{subtitle}</span>
                    </li>
                ))}
            </ul>
            <CommonBtn className="rounded-[100px] font-primary text-nowrap !min-h-10 !p-2.5 !px-10">
                Get Started
            </CommonBtn>
        </motion.div>
    )
}

export default PriceCard