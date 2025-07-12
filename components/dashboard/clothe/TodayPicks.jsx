"use client";

import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsThermometerSun } from "react-icons/bs";
import { RiDownloadCloudFill } from "react-icons/ri";
import { marqueData } from "@/data/db";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TodayPicks = () => {
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
    <div className="w-full flex flex-col gap-10">
      {/* Top Weather Row */}
      <div className="w-full flex justify-between">
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <MdOutlineWbSunny className="text-[#0984E2] text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            {loading ? "Loading..." : `${Math.round(temperature)}°C`}
          </p>
        </div>
        <div className="w-fit flex items-center gap-3 text-primary-dark">
          <BsThermometerSun className="text-primary-dark text-2xl" />
          <p className="text-primary-dark text-base font-medium">
            Partly Cloudy
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="w-full flex flex-col gap-5">
        <p className="text-primary-dark text-2xl font-medium font-primary">
          Today’s Picks
        </p>

        {/* Marquee Section */}
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          {marqueData.map((item) => (
            <div
              key={item.id}
              className=" max-w-[240px] flex-shrink-0 mx-3 flex flex-col gap-2 bg-[#F8F8F8] rounded-lg p-3"
            >
              <div className="w-full h-[190px] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.title}
                  width={240}
                  height={190}
                />
              </div>
              <p className="text-base text-gray-400 font-normal font-primary">
                {item.title}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <p className="text-[28px] text-primary-dark font-primary font-bold text-center">
          Add an item to your closet
        </p>
        <button className="w-fit flex gap-2 items-center px-20 rounded-lg border py-3 text-base text-primary-dark font-medium font-primary">
          <RiDownloadCloudFill className="text-xl" />
          Upload from photos
        </button>
      </div>
    </div>
  );
};

export default TodayPicks;
