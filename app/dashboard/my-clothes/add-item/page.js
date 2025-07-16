import AnalysisForm from "@/components/dashboard/clothe/add-item/AnalysisForm";


export const metadata = {
  title: "Chique | Add Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};

const AddItem = () => {
  return (
    <div className="w-full flex flex-col gap-6 pt-3">
      <p className="text-2xl text-primary-dark font-special font-medium">
        Al Analysis Results
      </p>
      <AnalysisForm />
    </div>
  );
};

export default AddItem;
