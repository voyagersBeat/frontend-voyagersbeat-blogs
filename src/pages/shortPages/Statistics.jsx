import React from "react";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaPlane,
  FaUserTie,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import FooterImg from "../../assets/backgroundImgPages.webp";

const Statistics = () => {
  const stats = [
    { id: 1, icon: <FaMapMarkerAlt />, title: "Locations", count: "100+" },
    { id: 2, icon: <FaUsers />, title: "Happy Clients", count: "5,000+" },
    { id: 3, icon: <FaPlane />, title: "Trips Conducted", count: "1,500+" },
    {
      id: 4,
      icon: <FaUserTie />,
      title: "Experienced Tour Guides",
      count: "200+",
    },
    {
      id: 5,
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      count: "100%",
    },
    { id: 6, icon: <FaPhone />, title: "24/7 Support", count: "Yes" },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Plan Your Holiday with{" "}
          <span className="text-[#1e73be]">Voyagers Beat</span> ?
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          We are committed to creating extraordinary travel experiences by
          personalizing trips, ensuring quality, and offering 24/7 support for
          your peace of mind.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#1e73be] text-4xl mb-4 flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-lg mt-2 font-bold">
                {stat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {" "}
          Let's Explore
        </h2>
        <p className="text-gray-600 text-lg">
          At <span className="text-[#1e73be]">Voyagers Beat</span>, we
          specialize in curating the perfect travel experiences for adventurers,
          families, and explorers. From breathtaking destinations to
          unparalleled service, your journey is our priority.
        </p>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div
      className="relative h-[50vh] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${FooterImg})`,
      }}
    >
      {/* Glassmorphism Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 max-w-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-white mb-6">
            Let us help you create unforgettable memories. Start your journey
            with <span className="font-bold">Voyagers Beat</span> today.
          </p>
          <button className="bg-[#1e73be] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <a href="https://voyagersbeat.com">Plan Your Trip</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfessionalPage = () => {
  return (
    <div>
      <Statistics />
      <AboutUs />
      <CallToAction />
    </div>
  );
};

export default ProfessionalPage;
