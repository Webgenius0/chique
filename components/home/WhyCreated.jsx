"use client"

import CommonSectionTitle from "../common/CommonSectionTitle";

const WhyCreated = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 py-20">
      <CommonSectionTitle
        text="Why It was Created"
        className={"!font-bold !font-secondary"}
      />
      <p className="text-base text-center font-light font-primary text-primary-dark">
        Despite full wardrobes and endless options, many still ask the same
        question: "What should I wear?" Chique AI was built to bring styling,
        clarity, and smart shopping into one elegant experience.
      </p>
    </div>
  );
};

export default WhyCreated;
