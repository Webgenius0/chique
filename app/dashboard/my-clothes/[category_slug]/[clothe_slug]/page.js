import Image from "next/image";
import image from "@/public/images/bannerImages/pant_image1.png";
import { use } from "react"; // Import the use hook

export const metadata = {
  title: "Chique | My Clothe Details",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const AiStyle = ({ params }) => {
  // Unwrap the params promise
  const unwrappedParams = use(params);
  const { clothe_slug } = unwrappedParams;

  // main render
  return (
    <div className="w-full flex flex-col justify-center items-center xl:py-20 lg:py-16 md:py-12 xs:py-8 py-4">
      <div className="w-full max-w-[360px] flex flex-col gap-3">
        <div className="w-full xs:h-[550px] 3xs:h-[400px] h-[300px] overflow-hidden rounded-2xl border 3xs:p-4 p-1.5">
          <Image
            src={image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex gap-4">
          <button className="w-full border rounded-lg p-2">
            Ask a Question
          </button>
          <button className="w-full border rounded-lg p-2">Style It</button>
        </div>
      </div>
    </div>
  );
};
export default AiStyle;

// xs:h-[360px] 3xs:h-[300px] h-[250px]