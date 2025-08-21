import OutfitSuggestion from "@/components/dashboard/clothe/OutfitSuggestion";
import Wardrobe from "@/components/dashboard/clothe/Wardrobe";
import PageWrapper from "@/components/dashboard/PageWrapper";

// meta data
export const metadata = {
  title: "Chique | My Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const MyClothes = () => {
  return (
    <PageWrapper>
      <Wardrobe />
      <OutfitSuggestion />
    </PageWrapper>
  );
};
export default MyClothes;