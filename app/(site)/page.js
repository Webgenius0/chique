import About from "@/components/home/About";
import ChiqueAI from "@/components/home/ChiqueAI";
import Hero from "@/components/home/Hero";
import WhyCreated from "@/components/home/WhyCreated";

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
      <WhyCreated />
      <About />
    </div>
  );
};

export default Home;
