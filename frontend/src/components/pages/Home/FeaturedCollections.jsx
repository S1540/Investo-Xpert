import React from "react";
import CollectionCardDemo from "../../common/CollectionCard";
import { MoveRight, MoveLeft } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedCollections = () => {
  const [propertysDetails, setPropertysDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");
        const data = await response.json();
        setPropertysDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen mx-auto py-16">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h4 className="uppercase text-pink-600 text-sm tracking-widest mb-2 font-medium">
            We have handpicked our
          </h4>
          <div className="flex items-center gap-4 w-full max-w-4xl">
            {/* Left Line */}
            <div className="flex-1 h-[2px] bg-linear-to-r from-transparent via-gray-400 to-pink-600"></div>
            {/* heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center tracking-wider uppercase">
              Featured Collections
            </h1>
            {/* Right Line */}
            <div className="flex-1 h-[2px] bg-linear-to-l from-transparent via-gray-400 to-pink-600"></div>
          </div>
        </div>

        {/* Cardss */}
        {propertysDetails && propertysDetails.length === 0 && (
          <p className="text-center text-3xl animate-pulse ">
            No properties found.. pls add property in dashboard
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertysDetails.map((property, index) => (
            <Link to={`/property/${property._id}`}>
              <CollectionCardDemo key={index} property={property} />
            </Link>
          ))}
        </div>
        <div className="flex gap-4 py-10 justify-center">
          <MoveLeft
            color="white"
            size={35}
            className="bg-pink-600 px-2 py-2 rounded-sm transition-all duration-300 hover:shadow-lg hover:bg-pink-700 transform hover:-translate-x-0.5 cursor-pointer"
          />
          <MoveRight
            color="white"
            size={35}
            className="bg-pink-600 px-2 py-2 rounded-sm transition-all duration-300 hover:shadow-lg hover:bg-pink-700 transform hover:translate-x-0.5 cursor-pointer"
          />
          <button className="bg-pink-600 hover:bg-pink-700  text-white py-1 rounded-sm px-4 font-semibold transition-all duration-300 hover:shadow-lg transform hover:translate-x-0.5 cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
