import CommonBtn from "../common/CommonBtn";
import CommonSectionTitle from "../common/CommonSectionTitle";

const Evolution = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-8 py-20">
      <CommonSectionTitle
        text="Begin Your Style Evolution"
        className={"!font-bold !font-secondary"}
      />
      <p className="text-xl text-center font-medium font-primary text-primary-dark">
        Discover your aesthetic. Streamline your wardrobe. Dress with clarity.
      </p>
      <CommonBtn className="rounded-lg text-nowrap w-fit !min-h-10 !p-2.5 !px-10">
        Try Chique Al
      </CommonBtn>
    </div>
  );
};

export default Evolution;
