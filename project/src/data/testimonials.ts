export interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  review: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Bridal Package",
    rating: 5,
    review: "Absolutely incredible experience! The team made me feel like a princess on my wedding day. Every detail was perfect, and I've never felt more beautiful.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    service: "Balayage & Cut",
    rating: 5,
    review: "I'm obsessed with my new hair! The balayage technique was flawless, and the cut frames my face beautifully. I get compliments everywhere I go!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Maria Chen",
    service: "Anti-Aging Facial",
    rating: 5,
    review: "The facial was pure bliss! My skin looks years younger and feels incredibly smooth. The ambiance and service were both outstanding.",
    image: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 4,
    name: "Amanda White",
    service: "Hot Stone Massage",
    rating: 5,
    review: "Most relaxing experience ever! The hot stone massage melted away all my stress. The salon atmosphere is so peaceful and luxurious.",
    image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 5,
    name: "Jessica Taylor",
    service: "Color Treatment",
    rating: 5,
    review: "Perfect color match and application! The stylist really listened to what I wanted and delivered exactly that. My hair has never looked better!",
    image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];