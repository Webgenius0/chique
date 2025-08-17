import CategoryItems from "@/components/dashboard/clothe/categoryItems/CategoryItems";
import PageWrapper from "@/components/dashboard/PageWrapper";
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
  // main render
  return (
    <PageWrapper>
      <p className="xs:text-2xl text-xl font-semibold font-primary text-primary-dark">
        Pants
      </p>
      <CategoryItems category_slug={category_slug} />
    </PageWrapper>
  );
};

export default AiFashion;