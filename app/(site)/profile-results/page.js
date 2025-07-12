"use client";

import { useRouter } from "next/navigation";
import { GiShoppingBag } from "react-icons/gi";

const styleProfiles = [
  {
    title: "A-Dominant: Elegant Minimalist / Parisian Classic",
    subtitle:
      "Likes fun coverage, wears neutrals. proritizes elegance, structur",
    points: [
      "Likes full coverage",
      "Wears neutrals",
      "Prioritizes elegance, structure, or simplicity",
      "Loves cotton, silk, or clean accessories",
    ],
    keywords: ["Blazers", "flowy skirts", "high necks", "neutral tones"],
  },
  {
    title: "B-Dominant: Soft Modest / Romantic Feminine",
    subtitle:
      "Loves modesty with light fabrics, earthy or soft colors, chocs...",
    points: [
      "Loves modesty with light fabrics",
      "Chooses comfort and femininity",
      "Admires gentle, layered looks",
    ],
    keywords: ["Maxi dresses", "ruffles", "loose cardigans", "pastels"],
  },
  {
    title: "C-Dominant: Trend-Aware Feminine / Confident Cool",
    subtitle:
      "Okay with light skin show, wears bold or pastel colors, choos...",
    points: [
      "Okay with light skin show",
      "Wears bold or pastel colors",
      "Chooses confidence, trends, and expression",
      "Loves cotton, silk, or clean accessories",
    ],
    keywords: ["Fitted tops", "color blocking", "playful accessorizing"],
  },
  {
    title: "D-Dominant: Bold $ Street-Chic / Creative Edge",
    subtitle: "Oversized or mix styles, bold colors or leather/denim, Choos...",
    points: [
      "Oversized or mix styles",
      "Bold colors or leather/denim",
      "Chooses uniqueness",
    ],
    keywords: ["Wide pants", "oversized shirts", "layered scarves"],
  },
  {
    title: "E or F Mix: Mixed Style or Still Exploring",
    subtitle:
      "Mix Of modesty and boldness, likes trying everything, may need...",
    points: [
      "Mix of modesty and boldness",
      "Likes trying everything",
      "May need time to define preferences",
    ],
    keywords: ["Modest Trendy", "Boho Easy", "capsule outfits"],
  },
];

const ProfileResults = () => {
  const router = useRouter();
  return (
    <div className="container flex flex-col gap-16 justify-center items-center py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center font-secondary">
        Your Style Profile Results
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {styleProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <p className="text-[22px] font-secondary font-semibold text-primary-dark mb-4">
              {profile.title}
            </p>
            <p className="text-base font-primary font-semibold text-primary-dark mb-4">
              {profile.subtitle}
            </p>

            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              {profile.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-dark mt-1">✔</span>
                  <span className="text-primary-dark font-primary text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-base text-primary-dark font-primary mb-1">
              Keywords:
            </p>
            <div className="flex gap-2">
              {profile.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full text-primary-dark font-primary"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-fit flex gap-2 rounded-lg bg-primary-dark font-primary text-white p-4 justify-center items-center cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        {" "}
        <GiShoppingBag className="text-xl" /> Shop My Style
      </button>
    </div>
  );
};

export default ProfileResults;
