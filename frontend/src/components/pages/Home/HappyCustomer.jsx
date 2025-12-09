import React from "react";

const HappyCustomer = () => {
  const clientsVideoLinks = [
    {
      id: 1,
      videoLink: "https://www.youtube.com/embed/fhxW8SoOZfA",
    },
    {
      id: 2,
      videoLink: "https://www.youtube.com/embed/IfmFqFguWN0",
    },
    {
      id: 3,
      videoLink: "https://www.youtube.com/embed/IAQkHMQBQ14",
    },
    {
      id: 4,
      videoLink: "https://www.youtube.com/embed/IfmFqFguWN0",
    },
    {
      id: 5,
      videoLink: "https://www.youtube.com/embed/fhxW8SoOZfA",
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-200 overflow-hidden px-4">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col items-center justify-center mb-16">
            <h4 className="uppercase text-pink-600 text-sm tracking-widest mb-2 font-medium">
              Happy Clients
            </h4>
            <div className="flex items-center gap-4 w-full max-w-4xl">
              {/* Left Line */}
              <div className="flex-1 h-[2px] bg-linear-to-r from-transparent via-gray-400 to-pink-600"></div>
              {/* heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center tracking-wider uppercase ">
                What Our Clients Say
              </h1>
              {/* Right Line */}
              <div className="flex-1 h-[2px] bg-linear-to-l from-transparent via-gray-400 to-pink-600"></div>
            </div>
          </div>
          {/* Video grid */}
          <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clientsVideoLinks.map((video, index) => (
              <div key={index} className="max-w-sm w-full">
                <iframe
                  allow="autoplay; picture-in-picture"
                  allowFullScreen
                  src={video.videoLink}
                  className="w-full h-54 shadow-2xl"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HappyCustomer;
