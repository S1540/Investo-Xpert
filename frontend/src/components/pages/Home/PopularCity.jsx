import React from "react";

const PopularCity = () => {
  const cities = [
    {
      id: 1,
      city: "Noida",
      image:
        "https://images.unsplash.com/photo-1688978022482-00702c9eb83c?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      totalProperties: "₹45.7 Cr",
    },
    {
      id: 2,
      city: "Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
      totalProperties: "₹32.6 Cr",
    },
    {
      id: 3,
      city: "Gurgram",
      image:
        "https://media.istockphoto.com/id/2174386366/photo/aerial-view-of-gurugrams-rapid-metro.webp?a=1&b=1&s=612x612&w=0&k=20&c=0V_b80s7req8giBcgtVqT1mB4Ios1Q-cbHXdtJAFw_Q=",
      totalProperties: "₹32.7 Cr",
    },
    {
      id: 4,
      city: "Mumbai",
      image:
        "https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D",
      totalProperties: "₹18.4 Cr",
    },
    {
      id: 5,
      city: "Pune",
      image:
        "https://images.unsplash.com/photo-1594233666755-d1cb282abd25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1bmV8ZW58MHx8MHx8fDA%3D",
      totalProperties: "₹45 Cr",
    },
    {
      id: 6,
      city: "Chennai",
      image:
        "https://images.unsplash.com/photo-1585999322539-fee6e6321a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D",
      totalProperties: "₹20.2 Cr",
    },
  ];
  return (
    <>
      <section className="py-16 bg-gray-200 overflow-hidden px-4">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col items-center justify-center mb-16">
            <h4 className="uppercase text-pink-600 text-sm tracking-widest mb-2 font-medium">
              Discover your property in
            </h4>
            <div className="flex items-center gap-4 w-full max-w-4xl">
              <div className="flex-1 h-[2px] bg-linear-to-r from-transparent via-gray-400 to-pink-600"></div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center tracking-wider uppercase ">
                Popular City
              </h1>
              <div className="flex-1 h-[2px] bg-linear-to-l from-transparent via-gray-400 to-pink-600"></div>
            </div>
          </div>
          {/* citiess */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden">
            {cities.map((city, index) => (
              <div
                key={index}
                className="max-w-sm w-full overflow-hidden relative group"
              >
                <div className="w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300 ease-in-out">
                  <h3 className="translate-y-32 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white text-3xl font-medium transition-all duration-300 ease-in-out cursor-pointer">
                    {city.totalProperties}
                  </h3>
                </div>
                <img
                  src={city.image}
                  alt=""
                  className=" w-full h-54 object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
                <h3 className="font-medium">{city.city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCity;
