import React from "react";
import { FaWhatsapp, FaPlane } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+918448591315?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  const handleTravelClick = () => {
    window.open("https://voyagersbeat.com", "_self");
  };

  return (
    <div className="fixed bottom-6 right-5 flex flex-col items-center space-y-4 z-50">
      {/* WhatsApp Button */}
      <div
        className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition transform hover:scale-110 cursor-pointer flex items-center justify-center"
        onClick={handleWhatsAppClick}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} className="animate-pulse" />
      </div>

      {/* Travel Enquiry Button */}
      <div
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition transform hover:scale-110 cursor-pointer flex items-center justify-center"
        onClick={handleTravelClick}
        title="Travel Enquiries"
      >
        <FaPlane size={24} className="animate-bounce" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
