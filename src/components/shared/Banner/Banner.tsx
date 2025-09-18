import Image from "next/image";
import React from "react";
import bannerImage from "../../../../public/pngaaa.png";

const Banner = () => {
  return (
    <div className="w-[1920px] max-w-full mx-auto">
      <div className="hero min-h-screen bg-blue-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          {/* Banner Image */}
          <Image
            src={bannerImage}
            alt="Modern Shoes"
            width={600}
            height={600}
            className="rounded-xl drop-shadow-xl hover:scale-105 transition-transform duration-500"
            priority
          />

          {/* Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Step Into <span className="text-blue-600">Comfort</span> <br /> &
              Style
            </h1>
            <p className="py-6 text-gray-600 text-base sm:text-lg">
              Discover our latest collection of modern sneakers designed for
              ultimate comfort and timeless style. Perfect fit for every step of
              your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="btn btn-primary btn-wide">Shop Now</button>
              <button className="btn btn-outline btn-secondary btn-wide">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
