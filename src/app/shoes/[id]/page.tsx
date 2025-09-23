
import shoes1 from "./../../../assets/15947562_30161559_1000-removebg-preview 1.png"
import shoes2 from "./../../../assets/Green 1.png"
import shoes3 from "./../../../assets/Yellow Shoe.png"
import shoes4 from "./../../../assets/PngItem_5550642 (2) 2.png"
import shoes5 from "./../../../assets/air-max-2021-shoes-gv0Z2s_prev_ui 1.png"
import shoes6 from "./../../../assets/nike-ah8050110-air_max_270-1-e_prev_ui 1.png"
import shoes7 from "./../../../assets/pngaaa.png"
import DetailsCard from "@/components/ui/DetailsCard"

export default async function DetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params;

 const shoes = [
  { 
    id: 1, 
    name: "Red Sports Shoes", 
    brand: "Nike",
    category: "Sports",
    price: 120, 
    rating: 4.5,
    stock: 25,
    description: "Lightweight red sports shoes designed for running and gym workouts.",
    image: shoes1 
  },
  { 
    id: 2, 
    name: "Green Running Shoes", 
    brand: "Adidas",
    category: "Running",
    price: 150, 
    rating: 4.7,
    stock: 18,
    description: "Comfortable green shoes with breathable mesh for long runs.",
    image: shoes2 
  },
  { 
    id: 3, 
    name: "Blue Casual Shoes", 
    brand: "Puma",
    category: "Casual",
    price: 100, 
    rating: 4.2,
    stock: 30,
    description: "Stylish blue casual shoes for everyday wear.",
    image: shoes3 
  },
  { 
    id: 4, 
    name: "Yellow Stylish Shoes", 
    brand: "Reebok",
    category: "Lifestyle",
    price: 130, 
    rating: 4.4,
    stock: 22,
    description: "Trendy yellow shoes that combine comfort and style.",
    image: shoes4 
  },
  { 
    id: 5, 
    name: "Air Max 2021", 
    brand: "Nike",
    category: "Sneakers",
    price: 160, 
    rating: 4.8,
    stock: 15,
    description: "Iconic Nike Air Max 2021 with superior cushioning and modern design.",
    image: shoes5 
  },
  { 
    id: 6, 
    name: "Nike Zoom Winflo", 
    brand: "Nike",
    category: "Running",
    price: 140, 
    rating: 4.6,
    stock: 20,
    description: "Durable running shoes with responsive cushioning for daily training.",
    image: shoes6 
  },
  { 
    id: 7, 
    name: "Black Casual Shoes", 
    brand: "Converse",
    category: "Casual",
    price: 110, 
    rating: 4.3,
    stock: 28,
    description: "Classic black casual shoes that go with any outfit.",
    image: shoes7 
  },
];


  // match করা shoe খুঁজে বের করো
  const shoe = shoes.find((item) => item.id === Number(id));

  if (!shoe) {
    return <h1>No shoe found with id: {id}</h1>;
  }

  return (
    <div className="p-6">
      <main>
        <h1 className="text-2xl font-bold mb-4">Shoe Details</h1>
  
          <DetailsCard  item={shoe} />

      </main>
    </div>
  );
}
