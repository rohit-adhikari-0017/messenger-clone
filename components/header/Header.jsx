"use client";
import React, { useState, useEffect } from "react";
import FeaturesDropdown from "../features-dropdown/FeaturesDropdown";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container flex justify-between items-center h-24">
        {/* Logo */}
        <div className="logo">
          <img src="logo.png" alt="Logo" className="w-10" />
        </div>

        {/* Navigation Menu (Desktop Only) */}
        <div className="flex">
          <ul className="nav-list flex justify-between h-[30px] items-center gap-8 relative">
            <li className="relative">
              {/* Features Button to Toggle Dropdown */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="font-bold hover:border-b-4 hover:border-blue-500"
              >
                Features
              </button>

              {/* Show Dropdown if Open */}
              {isDropdownOpen && <FeaturesDropdown />}
            </li>
            <li className="hover:border-b-4 hover:border-blue-500 font-bold">
              Privacy and safety
            </li>
            <li className="hover:border-b-4 hover:border-blue-500 font-bold">
              Desktop app
            </li>
            <li className="hover:border-b-4 hover:border-blue-500 font-bold">
              For developers
            </li>
            <li className="hover:border-b-4 hover:border-blue-500 font-bold">
              Help Center
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
