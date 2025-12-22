export interface Listing {
  id: string;
  title: string;
  category: "Real Estate" | "Hostel" | "Student Item" | "Land" | "Shop";
  price: string;
  location: string;
  image: string;
  description: string;
  condition?: "New" | "Used";
  features?: string[];
  isFeatured?: boolean;
}

// Use quality stock images for each content type
import realEstateImg from "@assets/stock_images/real_estate_hero.jpg"
import hostelImg from "@assets/stock_images/hostel_hero.jpg"
import studentItemsImg from "@assets/stock_images/student_items_hero.jpg"
import apartment2Img from "@assets/stock_images/apartment_2.jpg"
import laptopImg from "@assets/stock_images/laptop.jpg"
import booksImg from "@assets/stock_images/books.jpg"
import hostel2Img from "@assets/stock_images/hostel_2.jpg"

export const listings: Listing[] = [
  {
    id: "1",
    title: "Modern 3-Bedroom Apartment",
    category: "Real Estate",
    price: "₦250,000/mo",
    location: "OAU Campus Gate, Ile-Ife",
    image: realEstateImg,
    description: "Spacious modern apartment with excellent natural lighting, secure area with 24/7 gates. Close to campus, perfect for students or professionals.",
    features: ["3 Bedrooms", "2 Bathrooms", "Modern Kitchen", "Secured Area", "Easy Access"],
    isFeatured: true
  },
  {
    id: "2",
    title: "HP Laptop - Like New Condition",
    category: "Student Item",
    price: "₦180,000",
    location: "OAU Campus, Maintenance",
    image: laptopImg,
    description: "Barely used HP laptop, excellent working condition. Includes original charger. Great for studies and light work.",
    condition: "New",
    isFeatured: true
  },
  {
    id: "3",
    title: "Unik Student Hostel",
    category: "Hostel",
    price: "₦45,000/sem",
    location: "OAU Campus Gate, 5 min walk",
    image: hostel2Img,
    description: "Comfortable shared rooms with high-speed WiFi, study halls, and meal facilities. Safe and student-friendly environment.",
    features: ["WiFi Included", "Meal Plan Available", "Laundry Service", "Study Hall", "24/7 Security"],
    isFeatured: true
  },
  {
    id: "4",
    title: "Commercial Shop Space",
    category: "Shop",
    price: "₦5,000,000",
    location: "Ile-Ife Town Center",
    image: realEstateImg,
    description: "Prime retail location with excellent foot traffic. Ideal for clothing, phones, or food business.",
    isFeatured: false
  },
  {
    id: "5",
    title: "Engineering Textbooks Bundle",
    category: "Student Item",
    price: "₦8,000",
    location: "OAU Library Vicinity",
    image: booksImg,
    description: "Complete set of engineering reference books. In good condition, covers multiple courses.",
    condition: "Used",
    isFeatured: false
  },
  {
    id: "6",
    title: "Land Plot - Residential Area",
    category: "Land",
    price: "₦1,500,000",
    location: "Ile-Ife Outskirts",
    image: apartment2Img,
    description: "Spacious land suitable for building. Good soil, accessible road, water available nearby.",
    isFeatured: true
  }
];
