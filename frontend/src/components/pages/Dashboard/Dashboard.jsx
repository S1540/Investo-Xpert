import React from "react";

const Dashboard = () => {
  return (
    <>
      <section className="py-20 px-4 bg-gray-200 h-screen">
        <div className="max-w-7xl w-full">
          {/* dashboard heading. */}
          <div className="flex flex-col gap-1 justify-center bg-white p-4 shadow-xl border border-gray-400 rounded-sm font-medium uppercase">
            <h1 className="text-2xl sm:text-3xl tracking-wider">
              Admin Dashboard
            </h1>
            <p className="text-gray-800">Add New Property</p>
          </div>
          {/* dashboard form */}
          <div className="w-full bg-white p-4 shadow-xl border border-gray-400 rounded-sm">
            <form action="">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium">
                  Property Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Property Name..."
                  className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Eg. Noida, Gurgaon..."
                  className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium">
                  Bedrooms *
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  placeholder="Eg. 4"
                  className="border focus:border-gray-400 outline-0 border-gray-300 p-2 rounded-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
