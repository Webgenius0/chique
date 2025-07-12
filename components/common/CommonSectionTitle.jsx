import { cn } from "@/lib/utils";

const CommonSectionTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "xl:text-4xl lg:text-3xl text-2xl font-semibold text-center text-primary-dark pt-7 xs:pt-0",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default CommonSectionTitle;
