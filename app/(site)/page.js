import About from "@/components/home/About";
import ChiqueAI from "@/components/home/ChiqueAI";
import Evolution from "@/components/home/Evolution";
import Hero from "@/components/home/Hero";
import Price from "@/components/home/Price";
import WhyCreated from "@/components/home/WhyCreated";

export const metadata = {
  title: "Chique | Home",
  description:
    "Your Personal Style Assistant.Discover your unique style, organize your wardrobe, and get personalized fashion advice with Chique Al.",
};
const Home = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <ChiqueAI />
      <WhyCreated />
      <About />
      <Price />
      <Evolution />
    </div>
  );
};
export default Home;