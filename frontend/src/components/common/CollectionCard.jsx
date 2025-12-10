import React, { useState } from "react";
import { Heart, MapPin, Maximize2, Bed, Bath } from "lucide-react";

const CollectionCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={`http://localhost:5000/${property.image}`}
          alt={property.propertyName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-linear-to-r from-pink-600 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
          {property.status}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <Heart
            size={20}
            className={`transition-all duration-300 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Property Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
          {property.propertyName}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl font-bold ">₹{property.price} Cr</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={18} className="text-pink-600" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-gray-300 via-transparent to-gray-300 mb-4"></div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-300">
            <Maximize2 size={20} className="text-pink-600 mb-1" />
            <span className="text-xs text-gray-500">Size</span>
            <span className="text-sm font-semibold text-gray-800">
              {property.size}
            </span>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-300">
            <Bed size={20} className="text-pink-600 mb-1" />
            <span className="text-xs text-gray-500">Bedrooms</span>
            <span className="text-sm font-semibold text-gray-800">
              {property.bedrooms}
            </span>
          </div>

          <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-pink-50 transition-colors duration-300">
            <Bath size={20} className="text-pink-600 mb-1" />
            <span className="text-xs text-gray-500">Bathrooms</span>
            <span className="text-sm font-semibold text-gray-800">
              {property.bathrooms}
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <button className="w-full mt-4 bg-pink-600 hover:bg-pink-700  text-white py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
