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
    <div className="w-full flex flex-col gap-10 xs:py-10 py-5">
      <div className="w-full flex lg:flex-row flex-col justify-between items-start 2xl:gap-10 lg:gap-6 gap-10">
        <Wardrobe />
        <div className="2xl:w-[700px] xl:w-[500px] lg:w-[450px] w-full flex flex-col sm:gap-20 gap-10 justify-start items-start shrink-0">
          <TodayPicks />
          <AIStylist />
        </div>
      </div>
      <OutfitSuggestion />
    </div>
  );
};
export default MyClothes;