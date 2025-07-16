import CategoryItems from "@/components/dashboard/clothe/categoryItems/CategoryItems";
import { use } from "react";

export const metadata = {
  title: "Chique | My Clothe Categories",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const AiFashion = ({ params }) => {
  // Unwrap the params promise
  const unwrappedParams = use(params);
  const { category_slug } = unwrappedParams;
  return (
    <div className="w-full flex flex-col xs:gap-6 gap-4 xs:py-10 py-5">
      <p className="xs:text-2xl text-xl font-semibold font-primary text-primary-dark">
        Pants
      </p>
      <CategoryItems category_slug={category_slug} />
    </div>
  );
};

export default AiFashion;