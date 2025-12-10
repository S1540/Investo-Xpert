import React, { useState } from "react";
import { Heart, Logs, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [serviceView, setServiceView] = useState(false);

  const navItems = ["Project", "BLOGS", "Terms & Conditions", "Services"];

  const ServicesNav = [
    "Rental Properties",
    "Resale Properties",
    "Commercial Properties",
    "EMI Calculator",
    "Compare Properties",
  ];

  return (
    <>
      <header className="max-w-full w-full bg-zinc-800 text-gray-200 fixed top-0 right-0 left-0 z-50">
        <div className="flex justify-around items-center p-2">
          {/* left side */}
          <div className="flex gap-2 font-sans items-center font-medium">
            <img
              src="https://www.investoxpert.com/_next/image?url=%2FIX-white-logo.png&w=384&q=75"
              alt="INVESTOXPERT"
              className="h-14 cursor-pointer"
            />
            <select name="city" id="city" className="border-none outline-0 ">
              <option disabled value="Select City">
                Select City
              </option>
              <option value="India">India</option>
              <option value="Noida">Noida</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          {/* nav bar */}
          <nav className="hidden lg:flex gap-6 uppercase font-medium  ">
            {navItems.map((item, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => item === "Services" && setServiceView(true)}
                onMouseLeave={() =>
                  item === "Services" && setServiceView(false)
                }
              >
                <a href="#">{item}</a>
                {item === "Services" && serviceView && (
                  <div className="absolute top-3 left-0 mt-2 w-56 bg-black rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                    {ServicesNav.map((service, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-800 transition-colors duration-150"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Right side */}
          <div className="flex gap-4">
            <Link to={"/admin"}>Admin Dashboard</Link>
            <LayoutDashboard size={28} className="cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
