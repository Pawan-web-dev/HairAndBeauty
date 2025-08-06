export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  image: string;
}

export const services: Service[] = [
  // Haircut & Styling
  {
    id: 1,
    name: "Classic Cut & Style",
    description: "Professional haircut with wash, blow-dry, and styling",
    price: "$65",
    duration: "60 min",
    category: "haircut",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Luxury Hair Treatment",
    description: "Deep conditioning treatment with premium products",
    price: "$85",
    duration: "90 min",
    category: "haircut",
    image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Bridal Hair Styling",
    description: "Elegant updo or styling for your special day",
    price: "$150",
    duration: "120 min",
    category: "haircut",
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  
  // Hair Color
  {
    id: 4,
    name: "Full Color Treatment",
    description: "Complete hair coloring with professional grade products",
    price: "$120",
    duration: "180 min",
    category: "color",
    image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    name: "Highlights & Lowlights",
    description: "Dimensional coloring for natural-looking depth",
    price: "$140",
    duration: "210 min",
    category: "color",
    image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    name: "Balayage Technique",
    description: "Hand-painted highlights for a sun-kissed look",
    price: "$180",
    duration: "240 min",
    category: "color",
    image: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // Facials & Skincare
  {
    id: 7,
    name: "Deep Cleansing Facial",
    description: "Purifying facial with extractions and mask",
    price: "$75",
    duration: "75 min",
    category: "facial",
    image: "https://images.pexels.com/photos/3985341/pexels-photo-3985341.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    name: "Anti-Aging Treatment",
    description: "Advanced facial targeting fine lines and aging",
    price: "$95",
    duration: "90 min",
    category: "facial",
    image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    name: "Hydrating Glow Facial",
    description: "Moisturizing treatment for radiant, glowing skin",
    price: "$80",
    duration: "60 min",
    category: "facial",
    image: "https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // Bridal Makeup
  {
    id: 10,
    name: "Bridal Makeup Package",
    description: "Complete bridal look with trial session included",
    price: "$200",
    duration: "150 min",
    category: "bridal",
    image: "https://images.pexels.com/photos/1447302/pexels-photo-1447302.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 11,
    name: "Engagement Makeup",
    description: "Glamorous makeup for engagement photos and events",
    price: "$85",
    duration: "90 min",
    category: "bridal",
    image: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=400"
  },

  // Spa & Massage
  {
    id: 12,
    name: "Relaxation Massage",
    description: "Full body massage for ultimate relaxation",
    price: "$90",
    duration: "60 min",
    category: "spa",
    image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 13,
    name: "Hot Stone Therapy",
    description: "Therapeutic massage with heated volcanic stones",
    price: "$110",
    duration: "75 min",
    category: "spa",
    image: "https://images.pexels.com/photos/3188613/pexels-photo-3188613.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const serviceCategories = [
  { id: "all", name: "All Services", icon: "✨" },
  { id: "haircut", name: "Haircut & Styling", icon: "✂️" },
  { id: "color", name: "Hair Color", icon: "🎨" },
  { id: "facial", name: "Facials & Skincare", icon: "🧴" },
  { id: "bridal", name: "Bridal Makeup", icon: "💄" },
  { id: "spa", name: "Spa & Massage", icon: "🌸" }
];