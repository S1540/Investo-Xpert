import React, { useEffect, useState } from "react";
import { Heart, Logs, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [serviceView, setServiceView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = ["Project", "SUPPORT", "Terms & Conditions", "Services"];

  const ServicesNav = [
    "Rental Properties",
    "Resale Properties",
    "Commercial Properties",
    "EMI Calculator",
    "Compare Properties",
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location.pathname]);

  return (
    <>
      <header
        className={`max-w-full w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${
            location.pathname === "/"
              ? scrolled
                ? "bg-zinc-800"
                : "bg-transparent"
              : "bg-zinc-800"
          }
        `}
      >
        <div className="flex justify-around items-center p-2">
          {/* left side */}
          <div className="flex gap-2 font-sans items-center font-medium">
            <Link to={"/"}>
              <img
                src="https://www.investoxpert.com/_next/image?url=%2FIX-white-logo.png&w=384&q=75"
                alt="INVESTOXPERT"
                className="h-14 cursor-pointer"
              />
            </Link>

            <select
              name="city"
              id="city"
              className="border-none outline-0 py-2 px-4 text-white bg-zinc-800"
            >
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
          <nav className="hidden lg:flex gap-6 uppercase font-medium text-white">
            {navItems.map((item, index) => (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => item === "Services" && setServiceView(true)}
                onMouseLeave={() =>
                  item === "Services" && setServiceView(false)
                }
              >
                <span className="cursor-pointer">{item}</span>

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
          <div className="flex gap-4 items-center text-white">
            <Link to={"/admin/login"}>Admin Dashboard</Link>
            <LayoutDashboard size={28} className="cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
