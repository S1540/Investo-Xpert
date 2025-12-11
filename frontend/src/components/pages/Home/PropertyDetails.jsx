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
  const [configRes, setConfigRes] = useState(null);
  const [Configurations, setConfigurations] = useState({
    propertyType: "",
    furnishing: "",
    bedrooms: null,
    bathrooms: null,
    balconies: null,
    parking: "",
    flat: "",
    amenities: [],
  });
  const updateConfiguration = (key, value) => {
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  const updateAmenities = (amenity) => {
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      amenities: prevConfig.amenities.includes(amenity)
        ? prevConfig.amenities.filter(
            (selectedAmenity) => selectedAmenity !== amenity
          )
        : [...prevConfig.amenities, amenity],
    }));
  };

  const handleGetPrice = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getPrice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Configurations),
      });

      const data = await response.json();
      // setConfigurations("");
      setConfigRes(data.message);
      // console.log("Response:", data.message);
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 scroll-smooth">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-800">
            Loading Property Details...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="text-center bg-white p-8 rounded-xs shadow-lg">
          <p className="text-xl font-semibold text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  const imageUrl = `http://localhost:5000/${property.image}`;
  const statusText = property.forSale ? "For Sale" : "For Rent";

  return (
    <section className="pt-20 pb-12 bg-linear-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 bg-white px-4 py-3 rounded-xs shadow-sm">
          <a
            href="/"
            className="hover:text-pink-600 transition-colors font-medium"
          >
            Home
          </a>
          <span className="text-gray-400">/</span>
          <a
            href="/properties"
            className="hover:text-pink-600 transition-colors font-medium"
          >
            Properties
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">
            {property.propertyName}
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative bg-white rounded-xs overflow-hidden shadow-lg group">
              <img
                src={imageUrl}
                alt={property.propertyName}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-linear-to-r from-pink-600 to-pink-700 text-white px-5 py-2 rounded-sm font-bold shadow-xl text-sm tracking-wide">
                {statusText}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-sm shadow-xl hover:bg-white hover:scale-110 transition-all duration-300"
                >
                  <Heart
                    size={20}
                    className={
                      isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
                    }
                  />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-sm shadow-xl hover:bg-white hover:scale-110 transition-all duration-300">
                  <Share2 size={20} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-linear-to-br from-white to-gray-50 rounded-xs shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-pink-600 inline-block">
                Property Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex flex-col items-center p-5 bg-linear-to-br from-pink-50 to-white rounded-sm shadow-sm hover:shadow-md transition-shadow border border-pink-100">
                  <Bed size={36} className="text-pink-600 mb-3" />
                  <span className="text-3xl font-bold text-gray-900">
                    {property.bedrooms || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600 font-medium mt-1">
                    Bedrooms
                  </span>
                </div>
                <div className="flex flex-col items-center p-5 bg-linear-to-br from-pink-50 to-white rounded-sm shadow-sm hover:shadow-md transition-shadow border border-pink-100">
                  <Bath size={36} className="text-pink-600 mb-3" />
                  <span className="text-3xl font-bold text-gray-900">
                    {property.bathrooms || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600 font-medium mt-1">
                    Bathrooms
                  </span>
                </div>
                <div className="flex flex-col items-center p-5 bg-linear-to-br from-pink-50 to-white rounded-sm shadow-sm hover:shadow-md transition-shadow border border-pink-100">
                  <Maximize2 size={36} className="text-pink-600 mb-3" />
                  <span className="text-3xl font-bold text-gray-900">
                    {`${property.size}` || "N/A"}
                  </span>
                  <span className="text-sm text-gray-600 font-medium mt-1">
                    Area Size
                  </span>
                </div>
                <div className="flex flex-col items-center p-5 bg-linear-to-br from-pink-50 to-white rounded-sm shadow-sm hover:shadow-md transition-shadow border border-pink-100">
                  <DollarSign size={36} className="text-pink-600 mb-3" />
                  <span className="text-xl font-bold text-gray-900">
                    {statusText}
                  </span>
                  <span className="text-sm text-gray-600 font-medium mt-1">
                    Status
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xs shadow-sm p-6 text-gray-950 border border-gray-100">
              <h1 className="text-xl font-bold sm:text-3xl pb-4 mb-4 bg-linear-to-r from-pink-600 to-pink-700 text-white px-4 py-3 rounded-sm tracking-wider uppercase shadow-sm">
                {`About ${property.propertyName}`}
              </h1>
              <div className="mb-6">
                <h2 className="text-lg font-bold text-pink-600 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-pink-600 rounded-full"></span>
                  Description
                </h2>
                <p className="leading-relaxed text-gray-700 pl-3">
                  {property.description ||
                    "No detailed description provided for this property."}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-bold text-pink-600 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-pink-600 rounded-full"></span>
                  Highlights
                </h2>
                <p className="leading-relaxed text-gray-700 pl-3">
                  {property.highlights ||
                    "No detailed highlights provided for this property."}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-pink-600 mb-2 flex items-center gap-2">
                  <span className="w-1 h-6 bg-pink-600 rounded-full"></span>
                  Loan Facilities
                </h2>
                <p className="leading-relaxed text-gray-700 pl-3">
                  {property.loanFacilities ||
                    "No detailed loan facilities provided for this property."}
                </p>
              </div>
            </div>

            {/* Configurations */}
            {configRes ? (
              <h1>
                <span className="text-xl font-medium text-green-600 mb-2 flex items-center gap-2">
                  {configRes}
                </span>
              </h1>
            ) : (
              <div className="bg-linear-to-br from-white to-gray-50 rounded-xs shadow-sm p-6 border border-gray-100">
                <h2 className="text-xl font-bold sm:text-3xl pb-4 mb-6 bg-linear-to-r from-pink-600 to-pink-700 text-white px-4 py-3 rounded-sm tracking-wider uppercase shadow-sm">
                  Find Your Perfect Fit
                </h2>
                <p className="text-sm text-gray-600 mb-6 font-medium">
                  Customize your property preferences
                </p>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Property Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"].map(
                      (type) => (
                        <button
                          onClick={() =>
                            updateConfiguration("propertyType", type)
                          }
                          key={type}
                          className={`px-4 py-3 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all text-sm font-semibold hover:shadow-md  ${
                            type === Configurations.propertyType &&
                            "bg-pink-600 text-white"
                          } `}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Furnishing */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Furnishing Status
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Unfurnished", "Semi-Furnished", "Fully Furnished"].map(
                      (status) => (
                        <button
                          onClick={() =>
                            updateConfiguration("furnishing", status)
                          }
                          key={status}
                          className={`px-4 py-3 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all text-sm font-semibold hover:shadow-md ${
                            status === Configurations.furnishing &&
                            "bg-pink-600 text-white"
                          }`}
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Bedrooms
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <button
                        onClick={() => updateConfiguration("bedrooms", num)}
                        key={num}
                        className={`w-14 h-14 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all font-bold text-lg hover:shadow-md ${
                          num === Configurations.bedrooms &&
                          "bg-pink-600 text-white"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Bathrooms
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        onClick={() => updateConfiguration("bathrooms", num)}
                        key={num}
                        className={`w-14 h-14 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all font-bold text-lg hover:shadow-md ${
                          num === Configurations.bathrooms &&
                          "bg-pink-600 text-white"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Balconies */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Balconies
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[0, 1, 2, 3].map((num) => (
                      <button
                        onClick={() => updateConfiguration("balconies", num)}
                        key={num}
                        className={`w-14 h-14 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all font-bold text-lg hover:shadow-md ${
                          num === Configurations.balconies &&
                          "bg-pink-600 text-white"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parking */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Parking
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["No Parking", "1 Car", "2 Cars"].map((option) => (
                      <button
                        onClick={() => updateConfiguration("parking", option)}
                        key={option}
                        className={`px-4 py-3 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer transition-all text-sm font-semibold hover:shadow-md ${
                          option === Configurations.parking &&
                          "bg-pink-600 text-white"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Amenities
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Gym",
                      "Swimming Pool",
                      "Power Backup",
                      "Lift",
                      "Security",
                      "Kids Play Area",
                      "Club House",
                      "Garden",
                    ].map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-sm  hover:border-pink-300 transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={Configurations.amenities.includes(amenity)}
                          onChange={() => updateAmenities(amenity)}
                          className="w-5 h-5 text-pink-600 rounded focus:ring-2 focus:ring-pink-500"
                        />
                        <span className="text-sm font-medium">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred bachelor or family */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-800 mb-3">
                    Preferred flat
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Family", "Bachelor"].map((flat) => (
                      <button
                        key={flat}
                        onClick={() => updateConfiguration("flat", flat)}
                        className={`px-4 py-3 border-2 border-gray-300 rounded-sm hover:border-pink-600 cursor-pointer  transition-all text-sm font-semibold hover:shadow-md ${
                          flat === Configurations.flat &&
                          "bg-pink-600 text-white"
                        }`}
                      >
                        {flat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={() => handleGetPrice()}
                  className="w-full bg-linear-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-4 rounded-sm font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                >
                  Get Price
                </button>
              </div>
            )}

            {/* Location Map */}
            <div className="w-full h-[420px] bg-white rounded-xs shadow-sm p-6 text-gray-950 overflow-hidden border border-gray-100">
              <h1 className="text-xl font-bold sm:text-3xl pb-4 mb-4 bg-linear-to-r from-pink-600 to-pink-700 text-white px-4 py-3 rounded-sm tracking-wider uppercase shadow-sm">
                {`Location of ${property.location}`}
              </h1>
              <iframe
                src={property.mapURL}
                allowFullScreen={true}
                className="w-full h-full py-1 rounded-sm"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-linear-to-br from-white to-gray-50 rounded-xs shadow-sm p-6 sticky top-18 border border-gray-100">
              <div className="py-4 border-b-2 border-pink-100">
                <p className="text-sm text-gray-600  font-medium">Price</p>
                <h2 className="text-4xl font-extrabold bg-linear-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                  ₹{property.price}
                </h2>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 py-4 border-b">
                <MapPin size={22} className="text-pink-600 mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    Location
                  </p>
                  <p className="text-gray-900 font-bold text-lg">
                    {property.location}
                  </p>
                </div>
              </div>

              {/* Property Name */}
              <div className="py-4 border-b">
                <h3 className="text-2xl font-bold text-gray-900">
                  {property.propertyName}
                </h3>
              </div>

              {/* Quick Details */}
              <div className="space-y-2 py-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-sm">
                  <span className="text-gray-700 font-semibold">Bedrooms</span>
                  <span className="font-bold text-gray-900 text-lg">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-sm">
                  <span className="text-gray-700 font-semibold">Bathrooms</span>
                  <span className="font-bold text-gray-900 text-lg">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-sm">
                  <span className="text-gray-700 font-semibold">Size</span>
                  <span className="font-bold text-gray-900 text-lg">
                    {property.size}
                  </span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-linear-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white py-4 rounded-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]">
                  <Phone size={20} />
                  Call Now
                </button>
                <button className="w-full bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 py-4 rounded-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:shadow-md hover:scale-[1.02]">
                  <Mail size={20} />
                  Send Message
                </button>
              </div>

              {/* Agent Info */}
              <div className="pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Listed by
                </p>
                <div className="flex items-center gap-4 p-4 bg-linear-to-r from-pink-50 to-white rounded-sm border border-pink-100">
                  <div className="w-14 h-14 bg-linear-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center shadow-md">
                    <User size={28} className="text-pink-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      Property Agent
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      Real Estate Expert
                    </p>
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
