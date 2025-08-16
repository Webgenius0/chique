import OutfitSuggestion from "@/components/dashboard/clothe/OutfitSuggestion";
import Wardrobe from "@/components/dashboard/clothe/Wardrobe";

// meta data
export const metadata = {
  title: "Chique | My Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const MyClothes = () => {
  return (
    <div className="w-full flex flex-col gap-6 xs:py-10 py-5">
      <OutfitSuggestion />
      <Wardrobe />
    </div>
  );
};
export default MyClothes;