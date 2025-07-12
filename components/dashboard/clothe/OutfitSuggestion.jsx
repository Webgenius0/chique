"use client";

import { outfitData } from "@/data/db";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";

const OutfitSuggestion = () => {
  const [temperature, setTemperature] = useState(24);
  const [loading, setLoading] = useState(true);

  const API_KEY = "YOUR_API_KEY";
  const city = "Dhaka";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setTemperature(data.main.temp);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between py-10">
        <p className="text-2xl text-primary-dark font-medium font-primary">
          Al Outfit Suggestions
        </p>
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny className="text-primary-dark text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            {loading ? "Loading..." : `${Math.round(temperature)}°C`}
          </p>
        </div>
      </div>
      <div className="w-full  grid grid-cols-3 gap-5">
        {outfitData.map((item) => (
          <div key={item.id} className="w-full  bg-[#FAFAFB] rounded-lg p-4">
            <div className="w-full h-[220px] overflow-hidden">
              <Image
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />
            </div>
            <div className="w-full flex flex-col gap-1 bg-[#F5F6F7] py-3">
              <p className="text-xl text-primary-dark font-primary">
                {item.title}
              </p>
              <p className="text-base text-[#2B2B2B] font-primary">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitSuggestion;
