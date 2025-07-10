import { cn } from "@/lib/utils";

const CommonSectionTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "text-4xl font-semibold text-center text-primary-dark",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default CommonSectionTitle;
