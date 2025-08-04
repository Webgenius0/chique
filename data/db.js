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
import pant_image1 from "@/public/images/bannerImages/pant_image1.png";
import pant_image2 from "@/public/images/bannerImages/pant_image2.png";
import pant_image3 from "@/public/images/bannerImages/pant_image3.png";
import pant_image4 from "@/public/images/bannerImages/pant_image4.png";
import pant_image5 from "@/public/images/bannerImages/pant_image5.png";

export const quizQuestions = [
  {
    id: 1,
    question: "How much do you like to cover your body?",
    options: [
      "A. I like to be fully covered (arms, legs, chest)",
      "B. I like to cover up but still look stylish",
      "C. I’m okay showing some skin if it looks nice",
      "D. I don’t mind anything — I wear what feels right in the moment",
    ],
    is_required: true,
  },
  {
    id: 2,
    question: "What colors do you wear most?",
    options: [
      "A. Neutral colors (black, white, beige, cream)",
      "B. Earthy colors (brown, olive, camel)",
      "C. Light colors (pink, mint, baby blue)",
      "D. Bold colors (red, green, blue)",
      "E. I don’t know",
    ],
    is_required: true,
  },
  {
    id: 3,
    question: "Which colors look best on your skin tone?",
    options: [
      "A. Warm tones (beige, camel, gold, rust)",
      "B. Cool tones (blue, grey, lilac, silver)",
      "C. Any color – I wear them all",
      "D. I don’t know",
    ],
    is_required: true,
  },
  {
    id: 4,
    question: "Which one describes your body shape best?",
    options: [
      "A. Hourglass (shoulders and hips same size, defined waist)",
      "B. Pear (hips wider than shoulders)",
      "C. Apple (upper body bigger than lower body, rounder middle)",
      "D. Rectangle (shoulders, waist, and hips are straight)",
      "E. I don’t know",
    ],
    is_required: true,
  },
  {
    id: 5,
    question: "Choose 2 words that sound like your style:",
    options: [
      "A. Elegant",
      "B. Feminine",
      "C. Simple",
      "D. Fashionable / Trendy",
      "E. Modest",
      "F. Bold",
      "G. Relaxed",
    ],
    is_required: true,
  },
  {
    id: 6,
    question: "What kind of fabric or material do you like most?",
    options: [
      "A. Cotton or linen (soft and breathable)",
      "B. Silk or satin (smooth and shiny)",
      "C. Wool or thick warm fabric",
      "D. Denim or leather (cool and strong)",
      "E. Light fabric like chiffon or tulle (soft and flowy)",
      "F. I don’t know",
    ],
    is_required: true,
  },
  {
    id: 7,
    question: "What matters most when you dress?",
    options: [
      "A. Feeling comfortable",
      "B. Looking elegant",
      "C. Feeling confident",
      "D. Keeping it simple",
      "E. Looking unique and different",
    ],
    is_required: true,
  },
  {
    id: 8,
    question: "How do you wear accessories?",
    options: [
      "A. Just one simple item (watch, bag, or ring)",
      "B. One bold piece (scarf, big earrings, etc.)",
      "C. Many items together (jewelry, scarf, glasses…)",
      "D. I don’t wear accessories much",
    ],
    is_required: true,
  },
  {
    id: 9,
    question: "What kind of outfits do you admire most?",
    options: [
      "A. Clean, classy outfits",
      "B. Loose, elegant, and modest clothes",
      "C. Bright or cool street-style outfits",
      "D. Soft and feminine dresses",
      "E. Simple and neat outfits",
      "F. Creative, fun, or unique looks",
    ],
    is_required: true,
  },
  {
    id: 10,
    question: "Which city feels like your style?",
    options: [
      "A. Paris – simple and elegant",
      "B. Marrakech – rich colors and modest clothes",
      "C. New York – strong, modern, and cool",
      "D. Tokyo – fun, creative, and unique",
      "E. Cairo or Istanbul – modest with soft traditions",
      "F. I don’t know",
    ],
    is_required: true,
  },
];

export const wardrobeItems = [
  {
    id: "1",
    category: "pants",
    name: "Slim Fit Jeans",
    image: wardrobe_image1,
    description: "Comfortable slim fit jeans for everyday wear",
    color: "Blue",
    size: "M",
    number: 5
  },
  {
    id: "2",
    category: "shirts",
    name: "Casual Button-Up",
    image: wardrobe_image2,
    description: "Lightweight button-up shirt for casual occasions",
    color: "White",
    size: "L",
    number: 8
  },
  {
    id: "3",
    category: "t-shirts",
    name: "Casual Button-Up",
    image: wardrobe_image3,
    description: "Lightweight button-up shirt for casual occasions",
    color: "White",
    size: "L",
    number: 8
  },
  {
    id: "4",
    category: "jokers",
    name: "Casual Button-Up",
    image: wardrobe_image4,
    description: "Lightweight button-up shirt for casual occasions",
    color: "White",
    size: "L",
    number: 8
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

export const pantData = [
  {
    id: 1,
    image: pant_image1,
    title: "Classic Blue Denim Jeans",
  },
  {
    id: 2,
    image: pant_image2,
    title: "Formal Navy Dress Pants",
  },
  {
    id: 3,
    image: pant_image3,
    title: "Khaki Chino Pants",
  },
  {
    id: 4,
    image: pant_image4,
    title: "Cream Slim Fit Cotton Pants",
  },
  {
    id: 5,
    image: pant_image5,
    title: "Olive Green Cargo Pants",
  },
];


export const testimonials = [
  {
    id: 1,
    review: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
    name: 'Chris Evans',
    image: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 2,
    review: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
    name: 'Chris Evans',
    image: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 3,
    review: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
    name: 'Chris Evans',
    image: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 4,
    review: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
    name: 'Chris Evans',
    image: "https://i.pravatar.cc/300",
    rating: 5,
  },
  {
    id: 5,
    review: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.',
    name: 'Chris Evans',
    image: "https://i.pravatar.cc/300",
    rating: 5,
  }
]