export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  // Hair Transformations
  {
    id: 1,
    url: "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Balayage Transformation",
    category: "hair"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Color Correction",
    category: "hair"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Modern Cut & Style",
    category: "hair"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bridal Hair Updo",
    category: "bridal"
  },
  
  // Makeup & Beauty
  {
    id: 5,
    url: "https://images.pexels.com/photos/1447302/pexels-photo-1447302.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Bridal Makeup Look",
    category: "makeup"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Glamour Makeup",
    category: "makeup"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/3985341/pexels-photo-3985341.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Skincare Treatment",
    category: "skincare"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Facial Treatment",
    category: "skincare"
  },

  // Salon Interior
  {
    id: 9,
    url: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Salon Interior",
    category: "salon"
  },
  {
    id: 10,
    url: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Styling Station",
    category: "salon"
  },
  {
    id: 11,
    url: "https://images.pexels.com/photos/3188613/pexels-photo-3188613.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Spa Treatment Room",
    category: "salon"
  },
  {
    id: 12,
    url: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Relaxation Area",
    category: "salon"
  }
];