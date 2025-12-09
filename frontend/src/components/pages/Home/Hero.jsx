import React from "react";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="mt-14 text-white ">
      <div className="relative w-full h-[400px] sm:h-[630px] ">
        <img
          src="https://images.unsplash.com/photo-1758687126877-b37052a20a4d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="absolute left-0 right-0 top-5 sm:top-20 md:top-40 flex flex-col items-center z-10 px-4">
          <div className="max-w-7xl mx-auto w-full py-5 sm:py-10 flex items-center ">
            <Search
              size={40}
              color="black"
              className="bg-gray-300 h-10 rounded-l-sm p-2 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search locality, landmark, project or builder "
              className=" bg-gray-300 text-gray-950 w-full px-4 py-2 rounded-r-sm outline-0 border-0"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4 drop-shadow-lg">
            <span className="text-pink-600">Discover</span> Your Dream Property
            <span className="text-green-500"> in India</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center mb-8 max-w-2xl drop-shadow-md">
            Discover the best real estate deals in Noida, Gurugram, Delhi, and
            Pune
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-pink-600 hover:bg-pink-800 text-white px-8 py-3 rounded-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
              Explore Properties
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white px-8 py-3 rounded-sm font-semibold transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
