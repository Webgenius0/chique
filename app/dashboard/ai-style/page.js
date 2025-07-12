import Image from "next/image";
import image from "@/public/images/bannerImages/pant_image1.png";

const AiStyle = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      <div className="w-full max-w-[360px] flex flex-col gap-3">
        <div className="w-full h-[550px] overflow-hidden rounded-2xl border p-4">
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
