import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ShoesCard = ({ item }: { item: { id: number; name: string; price: number; image: string } }) => {
    return (
        <div className="border rounded-lg shadow-md  flex flex-col items-center hover:scale-105 transition-transform duration-300">
            {/* Product Image */}
            <Image
                src={item.image}
                alt={item.name}
                className="w-48 h-48 object-contain mb-4"
            />

            {/* Product Name */}
            <h3 className="text-lg font-semibold mb-2 text-center">{item.name}</h3>

        <section className=''>
                {/* Product Price */}
            <p className="text-blue-600 font-bold">${item.price}</p>

            {/* Add to Cart Button */}
            <button className=" right-0 -mt-4 text-blue-600  px-4 rounded pb-2  transition-colors">
               <IoIosArrowRoundForward />
            </button>
        </section>
        </div>
    );
};

export default ShoesCard;
