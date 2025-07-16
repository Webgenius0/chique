import AnalysisForm from "@/components/dashboard/clothe/add-item/AnalysisForm";


export const metadata = {
  title: "Chique | Add Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};

const AddItem = () => {
  return (
    <div className="w-full flex flex-col gap-6 xs:py-10 py-5">
      <p className="xs:text-2xl text-xl text-primary-dark font-special font-medium">
        Al Analysis Results
      </p>
      <AnalysisForm />
    </div>
  );
};

export default AddItem;
