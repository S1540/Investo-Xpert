import React, { useState, useEffect } from "react";
import {
  MapPin,
  Maximize2,
  Bed,
  Bath,
  DollarSign,
  Heart,
  Share2,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Could not load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-medium text-gray-700">
            Loading Property Details...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl font-medium text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  const imageUrl = `http://localhost:5000/${property.image}`;
  const statusText = property.forSale ? "For Sale" : "For Rent";

  return (
    <section className="pt-20 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-pink-600">
            Home
          </a>
          <span>/</span>
          <a href="/properties" className="hover:text-pink-600">
            Properties
          </a>
          <span>/</span>
          <span className="text-gray-900">{property.propertyName}</span>
        </div>

        {/* Main Grid - Image Leftt or Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Image & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative bg-white rounded-xs overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt={property.propertyName}
                className="w-full h-[500px] object-cover"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-md font-semibold shadow-lg">
                {statusText}
              </div>
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-white p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <Heart
                    size={20}
                    className={
                      isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
                    }
                  />
                </button>
                <button className="bg-white p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors">
                  <Share2 size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-white rounded-xs shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bed size={32} className="text-pink-600 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">
                    {property.bedrooms || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Bath size={32} className="text-pink-600 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">
                    {property.bathrooms || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <Maximize2 size={32} className="text-pink-600 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">
                    {`${property.size} sq.ft` || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600">Area Size</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <DollarSign size={32} className="text-pink-600 mb-2" />
                  <span className="text-2xl font-bold text-gray-900">
                    {statusText}
                  </span>
                  <span className="text-sm text-gray-600">Status</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xs shadow-sm p-6 text-gray-950">
              <h1 className="text-2xl font-medium sm:text-3xl pb-4 border-b border-gray-700 tracking-wider uppercase">{`About ${property.propertyName}`}</h1>
              <div>
                <h2 className="text-lg font-medium text-pink-600 ">
                  Description
                </h2>
                <p className=" leading-relaxed">
                  {property.description ||
                    "No detailed description provided for this property."}
                </p>
              </div>
              {/* Highlights */}
              <div className="py-3">
                <h2 className="text-lg font-medium text-pink-600 ">
                  Highlights
                </h2>
                <p>
                  {property.highlights ||
                    "No detailed highlights provided for this property."}
                </p>
              </div>
              {/* Loan Facilities */}
              <div className="py-3">
                <h2 className="text-lg font-medium text-pink-600 ">
                  Loan Facilities
                </h2>
                <p>
                  {property.loanFacilities ||
                    "No detailed loan facilities provided for this property."}
                </p>
              </div>
            </div>
            {/* Location map on g-map */}
            <div className="w-full h-[420px] overflow-hidden">
              <h1 className="text-2xl font-medium sm:text-3xl pb-4  border-b border-gray-700 tracking-wider uppercase">
                {`Location of ${property.location}`}
              </h1>
              <iframe
                src={property.mapURL}
                allowFullScreen={true}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xs shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <h2 className="text-4xl font-bold text-pink-600">
                  ₹{property.price}
                </h2>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 mb-6 pb-6 border-b">
                <MapPin size={20} className="text-pink-600 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900 font-medium">
                    {property.location}
                  </p>
                </div>
              </div>

              {/* Property Name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.propertyName}
                </h3>
              </div>

              {/* Quick Details */}
              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms</span>
                  <span className="font-semibold text-gray-900">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms</span>
                  <span className="font-semibold text-gray-900">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-semibold text-gray-900">
                    {property.size}
                  </span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-linear-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-3 rounded-md font-semibold transition-all duration-300 shadow-sm hover:shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                  <Phone size={20} />
                  Call Now
                </button>
                <button className="w-full bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                  <Mail size={20} />
                  Send Message
                </button>
              </div>

              {/* Agent Info */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">Listed by</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Property Agent
                    </p>
                    <p className="text-sm text-gray-600">Real Estate Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
