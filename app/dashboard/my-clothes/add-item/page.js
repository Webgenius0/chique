import AnalysisForm from "@/components/dashboard/clothe/add-item/AnalysisForm";
import PageWrapper from "@/components/dashboard/PageWrapper";


export const metadata = {
  title: "Chique | Add Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};

const AddItem = () => {
  return (
    <PageWrapper>
      <p className="xs:text-2xl text-xl text-primary-dark font-special font-medium">
        Al Analysis Results
      </p>
      <AnalysisForm />
    </PageWrapper>
  );
};

export default AddItem;
