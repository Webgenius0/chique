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
    <div className="w-full flex flex-col gap-10 pt-3">
      <div className="w-full justify-between items-start flex gap-10">
        <Wardrobe />
        <div className="w-[700px] gap-20 flex flex-col justify-start items-start shrink-0">
          <TodayPicks />
          <AIStylist />
        </div>
      </div>
      <OutfitSuggestion />
    </div>
  );
};
export default MyClothes;