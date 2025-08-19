import ShopButton from "@/components/common/ShopButton";
import ProfileResultClient from "@/components/quiz/ProfileResultClient";

export const metadata = {
  title: "Chique | Your Style Profile Results",
  description:
    "Take our style quiz and find your perfect fashion match. Answer 10 simple questions to find your perfect style match",
};

const ProfileResults = () => {

  // main render
  return (
    <div className="container px-4 md:px-6 flex flex-col xl:gap-10 sm:gap-8 gap-5 items-center xl:py-12 xs:py-10 py-8">
      <h1 className=" xl:text-4xl sm:text-3xl text-2xl font-bold text-center font-secondary text-primary-dark">
        Your Style Profile Results
      </h1>
      <ProfileResultClient />
    </div>
  );
};
export default ProfileResults;
