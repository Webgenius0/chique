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
    <div className="container px-4 md:px-6 flex flex-col gap-5 lg:gap-10 items-center py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center font-secondary text-primary-dark">
        Your Style Profile Results
      </h1>

      {/* card wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 w-full">
        {styleProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="border rounded-lg md:rounded-xl p-4 xl:p-6 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <p className="text-lg sm:text-xl md:text-[22px] font-secondary font-semibold text-primary-dark mb-2 sm:mb-4">
              {profile.title}
            </p>
            <p className="text-sm sm:text-base font-primary font-medium text-primary-dark/90 mb-3 sm:mb-4">
              {profile.subtitle}
            </p>
            {/* list */}
            <ul className="text-xs sm:text-sm text-gray-700 space-y-1 mb-3">
              {profile.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-dark mt-0.5 sm:mt-1">✔</span>
                  <span className="text-primary-dark font-primary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            {/* keywords */}
            <p className="text-sm sm:text-base text-primary-dark font-primary mb-1 sm:mb-2">
              Keywords:
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {profile.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="text-[10px] xs:text-xs bg-gray-100 px-2 py-0.5 sm:py-1 rounded-full text-primary-dark font-primary"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full sm:w-fit flex gap-2 rounded-lg bg-primary-dark font-primary text-white px-6 py-3 sm:py-4 justify-center items-center cursor-pointer hover:bg-primary-dark/90 transition-colors"
        onClick={() => router.push("/dashboard")}
      >
        <GiShoppingBag className="text-lg sm:text-xl" />
        <span>Shop My Style</span>
      </button>
    </div>
  );
};
export default ProfileResults;