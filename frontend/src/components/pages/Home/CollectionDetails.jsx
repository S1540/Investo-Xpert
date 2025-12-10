import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Maximize2,
  Bed,
  Bath,
  DollarSign,
  FileText,
} from "lucide-react";

const CollectionDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("Property ID is missing.");
      return;
    }

    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/${id}`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch property. Status: ${response.status}`
          );
        }

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
  }, [id]);

  if (loading) {
    return (
      <section className="py-32 flex justify-center">
        <div className="text-xl font-medium text-pink-600">
          Loading Property Details...
        </div>
      </section>
    );
  }

  const imageUrl = `http://localhost:5000/${property.image}`;
  const statusText = property.forSale ? "For Sale" : "For Rent";

  return (
    <>
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section: Name and Price */}
          <div className="flex justify-between  mb-8 border-b pb-4">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-1">
                {property.propertyName}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} className="text-pink-600" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500">{statusText}</p>
              <span className="text-4xl font-bold text-pink-600">
                ₹{property.price}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Imagess */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt={property.propertyName}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Property details   */}
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Quick Facts
              </h2>
              <div className="space-y-4">
                {/* Bedrooms */}
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="flex items-center text-gray-600 font-medium">
                    <Bed size={20} className="text-pink-600 mr-2" /> Bedrooms
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {property.bedrooms || "N/A"}
                  </span>
                </div>

                {/* Bathrooms */}
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="flex items-center text-gray-600 font-medium">
                    <Bath size={20} className="text-pink-600 mr-2" /> Bathrooms
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {property.bathrooms || "N/A"}
                  </span>
                </div>

                {/* Size */}
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="flex items-center text-gray-600 font-medium">
                    <Maximize2 size={20} className="text-pink-600 mr-2" /> Area
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {property.size || "N/A"}
                  </span>
                </div>

                {/*  Status */}
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="flex items-center text-gray-600 font-medium">
                    <DollarSign size={20} className="text-pink-600 mr-2" />{" "}
                    Status
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    {statusText}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-3 flex items-center">
              <FileText size={24} className="text-pink-600 mr-2" /> Property
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {property.description ||
                "No detailed description provided for this property."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetails;
