"use client";

import Image from "next/image";
import { useState } from "react";


const DetailsCard = ({ item }: {item: any}) => {
  const [size, setSize] = useState(40);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src={item.image}
            alt={item.name}
            className="w-full max-w-md object-contain rounded-xl"
          />
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          {/* Title + Brand */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              Brand: <span className="font-semibold">{item.brand}</span>
            </p>
          </div>

          {/* Price + Rating */}
          <div className="flex items-center gap-6">
            <p className="text-2xl font-semibold text-blue-600">
              ${item.price}
            </p>
            <p className="text-yellow-500 font-medium">
              ⭐ {item.rating} / 5
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {item.description}
          </p>

          {/* Sizes */}
          <div>
            <p className="mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Select Size:
            </p>
            <div className="flex flex-wrap gap-3">
              {[36, 37, 38, 39, 40, 41, 42].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                    size === s
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
