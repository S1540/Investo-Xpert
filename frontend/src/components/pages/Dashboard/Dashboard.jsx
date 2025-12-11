import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

const Dashboard = () => {
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
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Gett all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api");
        const data = await response.json();
        setAllProperties(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!form.propertyName || !form.price) {
      alert("Peroperty Name and Price is required");
      return;
    }
    const data = new FormData();
    data.append("propertyName", form.propertyName);
    data.append("location", form.location);
    data.append("price", form.price);
    data.append("size", form.size);
    data.append("bedrooms", form.bedrooms);
    data.append("bathrooms", form.bathrooms);
    data.append("status", form.status);
    data.append("description", form.description);
    data.append("forSale", form.forSale);
    data.append("forRent", form.forRent);
    data.append("image", image.file);

    try {
      const response = await fetch("http://localhost:5000/api/post", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        const propertyData = await response.json();
        setAllProperties([...allProperties, propertyData]);
        console.log(propertyData);
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
          forSale: false,
          forRent: false,
        });
        setImage(null);
        redirect("/");
      }
    } catch (err) {
      console.log(err);
      alert("An unexpected network error occurred.");
    }
  };
  // delete property
  const handleDeleteProperty = async (id) => {
    const response = await fetch(`http://localhost:5000/api/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      alert("Somthing error , network error");
    } else {
      setAllProperties(allProperties.filter((property) => property._id !== id));
    }
  };

  return (
    <>
      <section className="py-20 px-4 bg-gray-200 min-h-screen">
        <div className="max-w-7xl w-full mx-auto">
          {/* dashboard heading. */}
          <div className="flex flex-col gap-1 justify-center bg-white p-4 shadow-xl border border-gray-400 rounded-sm font-medium uppercase mb-4">
            <h1 className="text-2xl sm:text-3xl tracking-wider">
              Admin Dashboard
            </h1>
            <p className="text-gray-800">Add New Property</p>
          </div>

          {/* dashboard form */}
          <div className="w-full bg-white p-4 shadow-xl border border-gray-400 rounded-sm">
            <form action="" method="">
              {/* Image Upload Section */}
              <div className="mb-6">
                <label htmlFor="image" className="block font-medium mb-2">
                  Property Images *
                </label>

                {/* Image Preview Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                  {image && (
                    <div className="relative group">
                      <img
                        src={image.preview}
                        alt="Property"
                        className="w-full h-32 object-cover rounded-sm border-2 border-gray-300"
                      />
                      <button
                        onClick={() => setImage(null)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}

                  {/* Upload Button */}
                  <label className="w-full h-32 border-2 border-dashed border-gray-400 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:border-pink-600 hover:bg-pink-50 transition-colors">
                    <Upload size={28} className="text-gray-400 mb-1" />
                    <span className="text-xs text-gray-600">Upload Images</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="propertyName" className="font-medium">
                      Property Name *
                    </label>
                    <input
                      type="text"
                      id="propertyName"
                      name="propertyName"
                      value={form.propertyName}
                      onChange={handleFormChange}
                      placeholder="Enter Property Name..."
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="location" className="font-medium">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleFormChange}
                      placeholder="Eg. Noida, Gurgaon..."
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bedrooms" className="font-medium">
                      Bedrooms *
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      value={form.bedrooms}
                      onChange={handleFormChange}
                      placeholder="Eg. 4"
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="price" className="font-medium">
                      Price *
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      value={form.price}
                      onChange={handleFormChange}
                      placeholder="Eg. 2.5 Cr"
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="size" className="font-medium">
                      Size *
                    </label>
                    <input
                      id="size"
                      type="text"
                      name="size"
                      value={form.size}
                      onChange={handleFormChange}
                      placeholder="Eg. 1400 sq.ft"
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bathrooms" className="font-medium">
                      Bathrooms *
                    </label>
                    <input
                      id="bathrooms"
                      type="number"
                      name="bathrooms"
                      value={form.bathrooms}
                      onChange={handleFormChange}
                      placeholder="Eg. 3"
                      className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Status Checkboxes */}
              <div className="mt-6">
                <label className="block font-medium mb-2">Status *</label>
                <div className="flex gap-6">
                  <label
                    htmlFor="forSale"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="forSale"
                      name="forSale"
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-gray-700">For Sale</span>
                  </label>
                  <label
                    htmlFor="forRent"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      id="forRent"
                      type="checkbox"
                      name="forRent"
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-gray-700">For Rent</span>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <label className="block font-medium mb-2">
                  Property Description
                </label>
                <textarea
                  name="description"
                  id="descripition"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Enter property description..."
                  rows="5"
                  className="w-full border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-400 rounded-sm text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOnSubmit}
                  type="submit"
                  className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-sm font-medium transition-colors"
                >
                  Submit Property
                </button>
              </div>
            </form>
          </div>
          {/* New Added property */}
          <div className="bg-pink-200 h-auto ">
            {allProperties.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-600 font-semibold py-20">
                  No Properties Added
                </p>
              </div>
            ) : (
              <div className="px-5 border-b border-gray-300">
                <h1 className="text-2xl text-center font-bold uppercase tracking-wider py-4">
                  New Property Details Added
                </h1>
                {allProperties.map((property, index) => (
                  <div key={index} className="border-b border-gray-500 py-4">
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Property Name:</span>
                      <span>{property.propertyName}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Location</span>
                      <span>{property.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Price:</span>
                      <span>{property.price}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Bedrooms:</span>
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Bathrooms:</span>
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Status:</span>
                      <span>{property.status ? "For Sale" : "For Rent"}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 font-medium py-2">
                      <span>Property Description:</span>
                      <span>{property.description}</span>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
                        className="bg-red-500 rounded-full cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out "
                      >
                        <X size={30} color="white" />
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
