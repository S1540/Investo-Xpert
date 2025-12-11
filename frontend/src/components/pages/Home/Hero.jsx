import React, { useState } from "react";
import { Search } from "lucide-react";

const Hero = () => {
  const [searchType, setSearchType] = useState("buy");

  return (
    <section className="relative w-full h-[90vh] sm:h-[100vh]">
      {/* Background Image */}
      <img
        src="https://ganeshhousing.com/assets/images/milionmindtech/1.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4 drop-shadow-xl">
          <span className="text-pink-500">Discover</span> Your Dream Property
          <span className="text-green-400"> in India</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-center mb-10 max-w-3xl drop-shadow-md">
          Find verified properties for buying or renting in Noida, Gurugram,
          Delhi, Pune & more
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl backdrop-blur-sm bg-white/20 p-4 rounded-lg shadow-xl border border-white/30">
          {/* Tabs */}
          <div className="flex gap-2 mb-2 sm:mb-0">
            <button
              onClick={() => setSearchType("buy")}
              className={`px-4 py-2 rounded-l-md font-semibold transition-all duration-200 ${
                searchType === "buy"
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-white/30 text-white hover:bg-white/50"
              }`}
            >
              Buy Property
            </button>
            <button
              onClick={() => setSearchType("rent")}
              className={`px-4 py-2 rounded-r-md font-semibold transition-all duration-200 ${
                searchType === "rent"
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-white/30 text-white hover:bg-white/50"
              }`}
            >
              Rent Property
            </button>
          </div>

          {/* Input */}
          <div className="flex flex-1 items-center gap-2 bg-white/80 rounded-md shadow-inner px-2 py-1">
            <Search size={28} color="#111" className="p-1" />
            <input
              type="text"
              placeholder={`Search ${
                searchType === "buy" ? "buy" : "rent"
              } properties: locality, project, builder...`}
              className="w-full bg-transparent outline-none text-gray-900 px-2 py-2 font-medium placeholder-gray-600"
            />
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-pink-600 hover:bg-pink-800 text-white px-10 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Properties
          </button>
          <button className="bg-white/20 hover:bg-white/30 border-2 border-white px-10 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
