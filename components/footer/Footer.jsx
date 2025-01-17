import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="container   h-[200px] flex justify-between items-center">
        <div className="copy-icon flex items-center gap-1 font-bold text-xs">
          <AiOutlineCopyrightCircle />
          Meta 2025
        </div>
        <div className="flex gap-14  items-center">
          <ul className="flex gap-4">
            <li className="text-[14px]">Privacy</li>
            <li className="text-[14px]">Cookie Policy</li>
            <li className="text-[14px]">Terms</li>
            <li className="text-[14px]">English (Uk)</li>
            <li className="text-[14px]"></li>
          </ul>
          <div className="fot-meta-icon">
            <img src="../assets/images/meta-img.png" className="w-[136px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
