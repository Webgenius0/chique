"use client";

import { useRouter } from "next/navigation";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const AIStylist = () => {
  const router = useRouter();

  const prompts = [
    "What Should I wear today?",
    "Help me style this jacket",
    "Show me a comfortable out.",
  ];

  const handlePromptClick = (prompt) => {
    // You can also pass prompt as query param if needed
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col gap-4 pt-20">
      {/* Title */}
      <p className="text-lg font-semibold text-gray-800">Ask AI stylist</p>

      {/* Prompt Buttons */}
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handlePromptClick(prompt)}
            className="border border-gray-300 px-4 py-2 rounded-full text-sm text-[#121212] hover:bg-gray-100 transition font-medium font-primary"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Ask input (also navigates to dashboard) */}
      <button
        onClick={() => router.push("/dashboard")}
        className="w-full flex justify-between text-[#888E9C] bg-[#F7FAFC] py-3 px-10 text-start rounded-xl cursor-pointer"
      >
        Ask about your outfits...
        <BsFillQuestionCircleFill className="text-[#5F6368] text-xl" />
      </button>
    </div>
  );
};

export default AIStylist;
