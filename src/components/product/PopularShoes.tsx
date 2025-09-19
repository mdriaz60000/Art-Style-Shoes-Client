import React from 'react';
import shoes1 from "./../../assets/15947562_30161559_1000-removebg-preview 1.png"
import shoes2 from "./../../assets/Green 1.png"
import shoes3 from "./../../assets/PngItem_5550642 (2) 2.png"
import shoes4 from "./../../assets/Yellow Shoe.png"

import ShoesCard from '../ui/ShoesCard';

const PopularShoes = () => {
    const shoes = [
        { id: 1, name: "Red Sneakers", price: 120, image: shoes1 },
        { id: 2, name: "Green Running Shoes", price: 150, image: shoes2 },
        { id: 3, name: "Blue Casual Shoes", price: 100, image: shoes3 },
        { id: 4, name: "Yellow Stylish Shoes", price: 130, image: shoes4 },

    ]
    return (
    <div className='w-[1920px] max-w-full mx-auto px-4 sm:px-8 lg:px-20 my-10'>
      <p className="text-xl font-semibold mb-4">Popular Shoes</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {shoes.map((item : any) => (
          <ShoesCard item={item} key={item.id} />
        ))}
      </div>
    </div>
    );
};

export default PopularShoes;