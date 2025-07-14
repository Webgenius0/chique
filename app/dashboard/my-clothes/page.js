import AIStylist from "@/components/dashboard/clothe/AIStylist";
import OutfitSuggestion from "@/components/dashboard/clothe/OutfitSuggestion";
import TodayPicks from "@/components/dashboard/clothe/TodayPicks";
import Wardrobe from "@/components/dashboard/clothe/Wardrobe";

export const metadata = {
  title: "Chique | My Clothes",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const MyClothes = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="w-full lg:flex 2xl:gap-10 gap-5">
        <Wardrobe />
        <div className="3xl:max-w-[750px] w-full shrink-0 ">
          <TodayPicks />
          <AIStylist />
        </div>
      </div>
      <OutfitSuggestion />
    </div>
  );
};
export default MyClothes;