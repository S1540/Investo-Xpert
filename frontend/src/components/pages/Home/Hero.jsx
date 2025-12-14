import React, { useState } from "react";
import { Search, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  const [searchType, setSearchType] = useState("buy");

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://ganeshhousing.com/assets/images/milionmindtech/1.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-pink-900/40 to-black/80 z-[1]"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse z-[2]"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse z-[2]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white px-6 py-20">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <TrendingUp size={16} className="text-green-400" />
          <span className="text-sm font-medium">
            India's Fastest Growing Property Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 leading-tight">
          <span className="text-pink-500">Discover</span> Your Dream
          <br />
          Property <span className="text-green-400">in India</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-center mb-12 max-w-2xl text-gray-200 font-light">
          Find verified properties for buying or renting in Noida, Gurugram,
          Delhi, Pune & more
        </p>

        {/* Search Container */}
        <div className="w-full max-w-5xl mb-12">
          {/* Type Selector */}
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => setSearchType("buy")}
              className={`relative px-8 py-3 rounded-sm font-bold text-sm tracking-wide transition-all duration-300 ${
                searchType === "buy"
                  ? "bg-pink-600 text-white shadow-2xl shadow-pink-600/50 scale-105"
                  : "bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20"
              }`}
            >
              {searchType === "buy" && (
                <div className="absolute inset-0 bg-white/20 rounded-sm blur animate-pulse"></div>
              )}
              <span className="relative">Buy Property</span>
            </button>

            <button
              onClick={() => setSearchType("rent")}
              className={`relative px-8 py-3 rounded-sm font-bold text-sm tracking-wide transition-all duration-300 ${
                searchType === "rent"
                  ? "bg-pink-600 text-white shadow-2xl shadow-pink-600/50 scale-105"
                  : "bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20"
              }`}
            >
              {searchType === "rent" && (
                <div className="absolute inset-0 bg-white/20 rounded-sm blur animate-pulse"></div>
              )}
              <span className="relative">Rent Property</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-green-400 rounded-md blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white rounded-md shadow-2xl p-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-sm shrink-0">
                <Search size={20} className="text-white" />
              </div>

              <input
                type="text"
                placeholder={`Search ${searchType} properties: locality, project, builder...`}
                className="flex-1 bg-transparent outline-none text-gray-800 px-2 py-3 text-sm md:text-base font-medium placeholder-gray-500"
              />

              <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-pink-600/50 transition-all duration-300 hover:scale-105 shrink-0">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats & CTA */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Stats */}
          <div className="flex gap-8 text-center">
            <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-sm border border-white/20">
              <div className="text-2xl font-bold text-pink-500">50K+</div>
              <div className="text-xs text-gray-300">Properties</div>
            </div>

            <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-sm border border-white/20">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-xs text-gray-300">Verified</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/50 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Explore Properties
              </span>
            </button>

            <button className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wide hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Shield size={16} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
