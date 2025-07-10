import ChiqueAI from "@/components/home/ChiqueAI";
import Hero from "@/components/home/Hero";

export const metadata = {
  title: "Chique | Home",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ChiqueAI />
    </div>
  );
};

export default Home;
