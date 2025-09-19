import React from 'react';

import shoes2 from "./../../assets/Green 1.png"
import shoes3 from "./../../assets/PngItem_5550642 (2) 2.png"
import shoes4 from "./../../assets/Yellow Shoe.png"
import shoes5 from "./../../assets/air-max-2021-shoes-gv0Z2s_prev_ui 1.png"
import shoes6 from "./../../assets/nike-zoom-winflo-3-831561-001-mens-running-shoes-11550187236tiyyje6l87_prev_ui 1.png"
import ShoesCard from '../ui/ShoesCard';

const LatestShoes = () => {
    const shoes = [
 
        { id: 3, name: "Blue Casual Shoes", price: 100, image: shoes3 },
        { id: 4, name: "Yellow Stylish Shoes", price: 130, image: shoes4 },
        { id: 5, name: "Air Max 2021", price: 160, image: shoes5 },
        { id: 6, name: "Nike Zoom Winflo", price: 140, image: shoes6 },
    ]
    return (
    <div className='w-[1920px] max-w-full mx-auto px-4 sm:px-8 lg:px-20 my-10'>
      <p className="text-xl font-semibold mb-4">Latest products</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {shoes.map((item : any) => (
          <ShoesCard item={item} key={item.id} />
        ))}
      </div>
    </div>
    );
};

export default LatestShoes;