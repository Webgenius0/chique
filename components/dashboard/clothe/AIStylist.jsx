"use client";

import { useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";

const AIStylist = () => {
  const prompts = [
    "What Should I wear today?",
    "Help me style this jacket",
    "Show me a comfortable out.",
  ];

  return (
    <div className=" flex flex-col gap-4">
      {/* Title */}
      <p className="text-lg font-semibold text-gray-800">Ask AI stylist</p>
      {/* Prompt Buttons */}
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            className="border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            {prompt}
          </button>
        ))}
      </div>
      <button className="w-full text-[#888E9C] bg-[#F7FAFC] py-2.5 px-10 text-start rounded-xl">
        Ask about your outfits...
      </button>
    </div>
  );
};

export default AIStylist;
