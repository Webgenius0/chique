import CommonSectionTitle from "../common/CommonSectionTitle";
import { FaRegCircleCheck } from "react-icons/fa6";

const About = () => {
  const items = [
    {
      id: 1,
      icon: <FaRegCircleCheck />,
      title: "You care about how you dress",
      subtitle:
        "Your appearance matters to you, and you want to present yourself in the best possible way.",
    },
    {
      id: 2,
      icon: <FaRegCircleCheck />,
      title: "You want to look chic without wasting time",
      subtitle:
        "You value efficiency and want to streamline your styling process while maintaining elegance.",
    },
    {
      id: 3,
      icon: <FaRegCircleCheck />,
      title: "You struggle with styling",
      subtitle:
        "Creating cohesive outfits can be challenging, and you're looking for expert guidance.",
    },
    {
      id: 4,
      icon: <FaRegCircleCheck />,
      title: "You're ready for a glow-up that feels effortless",
      subtitle:
        "You want to elevate your style without it feeling like a complicated or overwhelming process.",
    },
  ];
  return (
    <div className="container flex flex-col gap-14 py-20 px-28">
      <CommonSectionTitle
        text="Who It's For"
        className={"!font-bold !font-secondary"}
      />
      <div className="w-full grid grid-cols-2 gap-20">
        {items.map((item) => (
          <div key={item.id}>
            <div className="w-full flex gap-4 justify-center">
              <div className="text-2xl">{item.icon}</div>
              <div className="w-full flex flex-col gap-3">
                <p className="text-3xl font-bold font-secondary text-primary-dark leading-10">
                  {item.title}
                </p>
                <p className="text-base font-light font-primary text-primary-dark">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
