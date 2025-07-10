import { cn } from "@/lib/utils";

const CommonTitle = ({ text = "", className }) => {
  return (
    <h3
      className={cn(
        "text-[56px] font-semibold text-center text-primary-dark",
        className
      )}
    >
      {text}
    </h3>
  );
};

export default CommonTitle;
