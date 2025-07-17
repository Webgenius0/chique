import ShopButton from "@/components/common/ShopButton";

const styleProfiles = [
  {
    title: "A-Dominant: Elegant Minimalist / Parisian Classic",
    subtitle: " → Style is polished, modest, timeless, and clean.",
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
    subtitle: " → Style is delicate, comfortable, and elegant.",
    points: [
      "Loves modesty with light fabrics",
      "Chooses comfort and femininity",
      "Admires gentle, layered looks",
    ],
    keywords: ["Maxi dresses", "ruffles", "loose cardigans", "pastels"],
  },
  {
    title: "C-Dominant: Trend-Aware Feminine / Confident Cool",
    subtitle: " → Style is feminine but bold, modern, expressive.",
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
    subtitle: " → Style is fun, layered, expressive, fashion-forward.",
    points: [
      "Oversized or mix styles",
      "Bold colors or leather/denim",
      "Chooses uniqueness",
    ],
    keywords: ["Wide pants", "oversized shirts", "layered scarves"],
  },
  {
    title: "E or F Mix: Mixed Style or Still Exploring",
    subtitle: " → Try hybrid styles like “Modest Trendy” or “Boho Classy”",
    points: [
      "Mix of modesty and boldness",
      "Likes trying everything",
      "May need time to define preferences",
    ],
    tips: "Tip: Build capsule outfits with a mix of fabrics and styles until they feel “right.”",
  },
];
const ProfileResults = () => {
  return (
    <div className="container px-4 md:px-6 flex flex-col xl:gap-10 sm:gap-8 gap-5 items-center xl:py-12 xs:py-10 py-8">
      <h1 className=" xl:text-4xl sm:text-3xl text-2xl font-bold text-center font-secondary text-primary-dark">
        Your Style Profile Results
      </h1>

      {/* card wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 w-full">
        {styleProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="border rounded-lg md:rounded-xl p-4 xl:p-6 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <p className=" xl:text-[22px] xs:text-xl text-lg font-secondary font-semibold text-primary-dark mb-2 sm:mb-4">
              {profile.title}
            </p>

            {/* list */}
            <ul className="text-sm text-gray-700 space-y-1 mb-3">
              {profile.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-dark mt-0.5 sm:mt-1">✔</span>
                  <span className="text-primary-dark font-primary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base font-primary font-medium text-primary-dark/90 mb-3 sm:mb-4">
              {profile.subtitle}
            </p>
            {/* keywords */}
            {profile.keywords && (
              <p className="text-base text-primary-dark font-primary mb-1 sm:mb-2">
                Keywords:
              </p>
            )}

            <div className="flex flex-wrap gap-1 sm:gap-2">
              {/* keywords */}
              {profile.keywords && profile.keywords.length > 0 && (
                <>
                  <p className="text-base text-primary-dark font-primary mb-1 sm:mb-2">
                    Keywords:
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {profile.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 p-2 rounded-full text-primary-dark font-primary"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <p>{profile.tips}</p>
          </div>
        ))}
      </div>
      <ShopButton />
    </div>
  );
};
export default ProfileResults;
