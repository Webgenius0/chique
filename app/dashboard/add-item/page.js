import AnalysisForm from "@/components/dashboard/clothe/add-item/AnalysisForm";
import ClothingUploader from "@/components/dashboard/clothe/add-item/ClothingUploader";

const page = () => {
  return (
    <div className="w-full flex gap-16 p-10">
      <ClothingUploader />
      <AnalysisForm />
    </div>
  );
};

export default page;
