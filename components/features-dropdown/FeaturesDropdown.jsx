import React from "react";

function FeaturesDropdown() {
  return (
    <ul className="absolute  mt-2 bg-transparent border border-black flex">
      <li className="py-2 px-4 hover:bg-gray-200 flex-1 text-center">
        Feature 1
      </li>
      <li className="py-2 px-4 hover:bg-gray-200 flex-1 text-center">
        Feature 2
      </li>
      <li className="py-2 px-4 hover:bg-gray-200 flex-1 text-center">
        Feature 3
      </li>
    </ul>
  );
}

export default FeaturesDropdown;
