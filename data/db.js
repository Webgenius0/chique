import wardrobe_image1 from "@/public/images/bannerImages/wardrobe_image1.png";
import wardrobe_image2 from "@/public/images/bannerImages/wardrobe_image2.png";
import wardrobe_image3 from "@/public/images/bannerImages/wardrobe_image3.png";
import wardrobe_image4 from "@/public/images/bannerImages/wardrobe_image4.png";
import wardrobe_image5 from "@/public/images/bannerImages/wardrobe_image5.png";
import wardrobe_image6 from "@/public/images/bannerImages/wardrobe_image6.png";
import image1 from "@/public/images/bannerImages/image1.jpg";
import image2 from "@/public/images/bannerImages/image2.jpg";
import image3 from "@/public/images/bannerImages/image3.jpg";
import outfit_image1 from "@/public/images/bannerImages/outfit_image1.png";
import outfit_image2 from "@/public/images/bannerImages/outfit_image2.png";
import outfit_image3 from "@/public/images/bannerImages/outfit_image3.png";

export const quizQuestions = [
  {
    id: 1,
    question: "How much do you like to cover your body?",
    options: [
      "I like to be fully covered (arms, legs, chest)",
      "I like to cover up but still look stylish",
      "I’m okay showing some skin if it looks nice",
      "I don’t mind anything — I wear what feels right in the moment",
    ],
    is_required: true,
  },
  {
    id: 2,
    question: "What colors do you wear most?",
    options: [
      "Neutral colors (black, white, beige, cream)",
      "Earthy colors (brown, olive, camel)",
      "Light colors (pink, mint, baby blue)",
      "Bold colors (red, green, blue)",
      "I don’t know",
    ],
    is_required: true,
  },
  {
    id: 3,
    question: "Which colors look best on your skin tone?",
    options: [
      "Warm tones (beige, camel, gold, rust)",
      "Cool tones (blue, grey, lilac, silver)",
      "Any color – I wear them all",
      "I don’t know",
    ],
    is_required: true,
  },
  {
    id: 4,
    question: "Which one describes your body shape best?",
    options: [
      "Hourglass (shoulders and hips same size, defined waist)",
      "Pear (hips wider than shoulders)",
      "Apple (upper body bigger than lower body, rounder middle)",
      "Rectangle (shoulders, waist, and hips are straight)",
      "I don’t know",
    ],
    is_required: true,
  },
  {
    id: 5,
    question: "Choose 2 words that sound like your style:",
    options: [
      "Elegant",
      "Feminine",
      "Simple",
      "Fashionable / Trendy",
      "Modest",
      "Bold",
      "GRelaxed",
    ],
    is_required: true,
  },
  {
    id: 6,
    question: "What kind of fabric or material do you like most?",
    options: [
      "Cotton or linen (soft and breathable)",
      "Silk or satin (smooth and shiny)",
      "Wool or thick warm fabric",
      "Denim or leather (cool and strong)",
      "Light fabric like chiffon or tulle (soft and flowy)",
      "I don’t know",
    ],
    is_required: true,
  },
  {
    id: 7,
    question: "What matters most when you dress?",
    options: [
      "Feeling comfortable",
      "Looking elegant",
      "Feeling confident",
      "Keeping it simple",
      "Looking unique and different",
    ],
    is_required: true,
  },
  {
    id: 8,
    question: "How do you wear accessories?",
    options: [
      "Just one simple item (watch, bag, or ring)",
      "One bold piece (scarf, big earrings, etc.)",
      "Many items together (jewelry, scarf, glasses…)",
      "I don’t wear accessories much",
    ],
    is_required: true,
  },
  {
    id: 9,
    question: "What kind of outfits do you admire most?",
    options: [
      "Clean, classy outfits",
      "Loose, elegant, and modest clothes",
      "Bright or cool street-style outfits",
      "Soft and feminine dresses",
      "Simple and neat outfits",
      "Creative, fun, or unique looks",
    ],
    is_required: true,
  },
  {
    id: 10,
    question: "Which city feels like your style?",
    options: [
      "Paris – simple and elegant",
      "Marrakech – rich colors and modest clothes",
      "New York – strong, modern, and cool",
      "Tokyo – fun, creative, and unique",
      "Cairo or Istanbul – modest with soft traditions",
      "I don’t know",
    ],
    is_required: true,
  },
];

export const wardrobeItems = [
  {
    id: 1,
    image: wardrobe_image1,
    name: "Pant",
    number: 12,
  },
  {
    id: 2,
    image: wardrobe_image2,
    name: "T-Shirt",
    number: 12,
  },
  {
    id: 3,
    image: wardrobe_image3,
    name: "Skirts",
    number: 12,
  },
  {
    id: 4,
    image: wardrobe_image4,
    name: "Skirts",
    number: 12,
  },
  {
    id: 5,
    image: wardrobe_image5,
    name: "Classic Trench Coat",
    number: 12,
  },
  {
    id: 6,
    image: wardrobe_image6,
    name: "Classic Trench Coat",
    number: 12,
  },
];

export const marqueData = [
  { id: 1, image: image1, title: "Perfect for today's weather" },
  { id: 2, image: image2, title: "Perfect for today's weather" },
  { id: 3, image: image3, title: "Perfect for today's weather" },
  { id: 4, image: image1, title: "Perfect for today's weather" },
  { id: 5, image: image2, title: "Perfect for today's weather" },
  { id: 6, image: image3, title: "Perfect for today's weather" },
  { id: 7, image: image2, title: "Perfect for today's weather" },
];

export const outfitData = [
  {
    id: 1,
    image: outfit_image1,
    title: "Perfect for 65-750F",
    subtitle: "Casual outfit for a warm day out",
  },
  {
    id: 2,
    image: outfit_image2,
    title: "Perfect for 65-750F",
    subtitle: "Casual outfit for a warm day out",
  },
  {
    id: 3,
    image: outfit_image3,
    title: "Perfect for 65-750F",
    subtitle: "Casual outfit for a warm day out",
  },
];
