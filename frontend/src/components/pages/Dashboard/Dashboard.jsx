import React, { useState, useEffect } from "react";
import {
  Upload,
  X,
  MapPin,
  DollarSign,
  Home,
  Bed,
  Bath,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [allProperties, setAllProperties] = useState([]);

  const [form, setForm] = useState({
    propertyName: "",
    location: "",
    price: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    status: "",
    description: "",
    highlights: "",
    loanFacilities: "",
    mapURL: "",
    forSale: false,
    forRent: false,
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage({
      file: file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
        [name === "forSale" ? "forRent" : "forSale"]: false,
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Gett all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");

        if (!response.ok) throw new Error("Failed to fetch properties.");
        const data = await response.json();
        setAllProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!form.propertyName || !form.price || (!form.forSale && !form.forRent)) {
      alert("Property Name, Price, and Status (Sale/Rent) are required");
      return;
    }
    if (!image) {
      alert("Property Image is required");
      return;
    }

    const data = new FormData();
    data.append("propertyName", form.propertyName);
    data.append("location", form.location);
    data.append("price", form.price);
    data.append("size", form.size);
    data.append("bedrooms", form.bedrooms);
    data.append("bathrooms", form.bathrooms);
    data.append("mapURL", form.mapURL);
    data.append("description", form.description);
    data.append("highlights", form.highlights);
    data.append("loanFacilities", form.loanFacilities);

    data.append("forSale", form.forSale);
    data.append("forRent", form.forRent);
    data.append("image", image.file);

    try {
      const response = await fetch("http://localhost:5000/api/post", {
        method: "POST",
        body: data,
      });

      const data = await response.data();
      let propertyData;
      try {
        propertyData = JSON.parse(data);
      } catch (e) {
        // console.error("JSON parse error", data);
        alert("Submission failed: Server returned error.");
        return;
      }

      if (response.ok) {
        setAllProperties([...allProperties, propertyData]);
        alert("Property added successfully");
        setForm({
          propertyName: "",
          location: "",
          price: "",
          size: "",
          bedrooms: "",
          bathrooms: "",
          status: "",
          description: "",
          highlights: "",
          loanFacilities: "",
          mapURL: "",
          forSale: false,
          forRent: false,
        });
        setImage(null);
        navigate("/");
      } else {
        alert(`Submission Failed: ${propertyData.message || "Unknown Error"}`);
      }
    } catch (err) {
      console.error(err);
      alert("An unexpected network error occurred.");
    }
  };

  // delete property
  const handleDeleteProperty = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Deletion failed on server.");
      }

      setAllProperties(allProperties.filter((property) => property._id !== id));
      alert("Property deleted successfully.");
    } catch (error) {
      console.error("Deletion Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <section className="py-20 px-4 bg-gray-100 min-h-screen">
        <div className="max-w-7xl w-full mx-auto">
          {/* Dashboard Heading */}
          <div className="flex flex-col gap-1 justify-center bg-white p-4 shadow-sm border border-gray-300 rounded-xs font-medium uppercase mb-6">
            <h1 className="text-3xl tracking-wider text-pink-600 font-extrabold">
              Admin Dashboard
            </h1>
            <p className="text-gray-700">Add New Property Listing</p>
          </div>

          {/* Dashboard Form */}
          <div className="w-full bg-white p-6 shadow-sm border border-gray-300 rounded-xs">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Listing Details
            </h2>
            <form onSubmit={handleOnSubmit}>
              {/* Image Upload Section */}
              <div className="mb-8">
                <label
                  htmlFor="image"
                  className="block font-semibold mb-3 text-gray-700"
                >
                  Property Images *
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {image && (
                    <div className="relative group shadow-md">
                      <img
                        src={image.preview}
                        alt="Property Preview"
                        className="w-full h-32 object-cover rounded-sm border-2 border-pink-400"
                      />
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}

                  <label className="w-full h-32 border-2 border-dashed border-gray-400 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:border-pink-600 hover:bg-pink-50 transition-colors">
                    <Upload size={28} className="text-pink-500 mb-1" />
                    <span className="text-sm text-gray-600 font-medium">
                      Upload Image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Property Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="propertyName"
                    className="font-medium text-gray-700"
                  >
                    Property Name *
                  </label>
                  <input
                    type="text"
                    id="propertyName"
                    name="propertyName"
                    value={form.propertyName}
                    onChange={handleFormChange}
                    placeholder="Enter Property Name..."
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="price" className="font-medium text-gray-700">
                    Price *
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={handleFormChange}
                    placeholder="Eg. 2.5 Cr"
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="location"
                    className="font-medium text-gray-700"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleFormChange}
                    placeholder="Eg. Noida, Gurgaon..."
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>

                {/* Size */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="size" className="font-medium text-gray-700">
                    Size *
                  </label>
                  <input
                    id="size"
                    type="text"
                    name="size"
                    value={form.size}
                    onChange={handleFormChange}
                    placeholder="Eg. 1400 sq.ft"
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>

                {/* Bedrooms */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="bedrooms"
                    className="font-medium text-gray-700"
                  >
                    Bedrooms *
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    value={form.bedrooms}
                    onChange={handleFormChange}
                    placeholder="Eg. 4"
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>

                {/* Bathrooms */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="bathrooms"
                    className="font-medium text-gray-700"
                  >
                    Bathrooms *
                  </label>
                  <input
                    id="bathrooms"
                    type="number"
                    name="bathrooms"
                    value={form.bathrooms}
                    onChange={handleFormChange}
                    placeholder="Eg. 3"
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>
                {/* Map URL */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="mapURL" className="font-medium text-gray-700">
                    Map URL *
                  </label>
                  <input
                    id="mapURL"
                    type="text"
                    name="mapURL"
                    value={form.mapURL}
                    onChange={handleFormChange}
                    placeholder="Eg. https://googlemapURL.com"
                    className="border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm transition duration-150"
                  />
                </div>
              </div>

              {/* Status Checkboxes */}
              <div className="mt-8">
                <label className="block font-semibold mb-3 text-gray-700">
                  Listing Status *
                </label>
                <div className="flex gap-8">
                  <label
                    htmlFor="forSale"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="forSale"
                      name="forSale"
                      checked={form.forSale}
                      onChange={handleFormChange}
                      className="w-4 h-4 cursor-pointer text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="text-gray-700 font-medium">For Sale</span>
                  </label>
                  <label
                    htmlFor="forRent"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      id="forRent"
                      type="checkbox"
                      name="forRent"
                      checked={form.forRent}
                      onChange={handleFormChange}
                      className="w-4 h-4 cursor-pointer text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="text-gray-700 font-medium">For Rent</span>
                  </label>
                </div>
              </div>

              {/* Description Group */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                {/* Full Description */}
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="block font-medium text-gray-700">
                    Full Description
                  </label>
                  <textarea
                    name="description"
                    id="descripition"
                    value={form.description}
                    onChange={handleFormChange}
                    placeholder="Detailed property overview..."
                    rows="5"
                    className="w-full border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm resize-none transition duration-150"
                  ></textarea>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="block font-medium text-gray-700">
                    Key Highlights
                  </label>
                  <textarea
                    name="highlights"
                    id="highlights"
                    value={form.highlights}
                    onChange={handleFormChange}
                    placeholder="Enter key selling points (e.g., Near Metro, Open Views)..."
                    rows="5"
                    className="w-full border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm resize-none transition duration-150"
                  ></textarea>
                </div>

                {/* Loan Facilities */}
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="block font-medium text-gray-700">
                    Loan Facilities
                  </label>
                  <textarea
                    name="loanFacilities"
                    id="loanFacilities"
                    value={form.loanFacilities}
                    onChange={handleFormChange}
                    placeholder="Details about available loans/banks..."
                    rows="5"
                    className="w-full border focus:border-pink-400 outline-0 border-gray-300 p-2 rounded-sm resize-none transition duration-150"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-400 rounded-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-sm font-medium transition-colors shadow-md"
                >
                  Submit Property
                </button>
              </div>
            </form>
          </div>

          {/* New Added property Display Section */}
          <div className="mt-10 p-6 shadow-sm border border-gray-300 rounded-xs bg-white">
            <h2 className="text-2xl font-bold uppercase tracking-wider py-4 text-center text-gray-800 border-b mb-6">
              Recently Added Properties
            </h2>

            {allProperties.length === 0 ? (
              <div className="flex items-center justify-center h-40">
                <p className="text-gray-500 font-semibold">
                  No Properties Added Yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProperties.map((property) => (
                  <div
                    key={property._id}
                    className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
                  >
                    <Link to={`/property/${property._id}`}>
                      <img
                        loading="lazy"
                        src={`http://localhost:5000/${property.image}`}
                        alt={property.propertyName}
                        className="w-full h-40 object-cover rounded-sm mb-3"
                      />
                    </Link>

                    <h3 className="text-xl font-bold text-pink-600 mb-1">
                      {property.propertyName}
                    </h3>
                    <p className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-1 text-gray-500" />
                      {property.location}
                    </p>

                    <div className="flex justify-between items-center text-sm font-medium border-t pt-2 mt-2">
                      <span className="text-green-600 flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        {property.price}
                      </span>
                      <span className="text-indigo-600 font-bold">
                        {property.forSale ? "FOR SALE" : "FOR RENT"}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span className="flex items-center">
                        <Bed size={14} className="mr-1" /> {property.bedrooms}{" "}
                        Beds
                      </span>
                      <span className="flex items-center">
                        <Bath size={14} className="mr-1" /> {property.bathrooms}{" "}
                        Baths
                      </span>
                      <span>{property.size}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-sm"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
