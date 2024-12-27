import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Logo from "../../src/assets/vb-logo.png";
import FooterImg from "../assets/footer-desktop.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <a
                href="/"
                className="flex items-center space-x-3 text-2xl font-bold"
              >
                <img src={Logo} alt="Voyagers Logo" className="w-16 sm:w-12" />
                <span className="text-lg">
                  Voyagers Beat <br />
                  <span className="text-sm font-light">Live to Travel</span>
                </span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                Voyagers Beat brings you closer to extraordinary experiences and
                unforgettable journeys. Explore the world, one destination at a
                time.
              </p>
            </div>

            {/* Our Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://voyagersbeat.com/"
                    className="hover:text-white"
                  >
                    Voyagers Beat
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.maplecomputers.in/index.html"
                    className="hover:text-white"
                  >
                    Maple Computers
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Voyagers Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/about-us" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/destination" className="hover:text-white">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/write-for-us" className="hover:text-white">
                    Write For Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/terms-and-conditions" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/career" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <span className="font-semibold text-white">Head Office:</span>
                  <br /> 2nd Floor, C 2/13, Phase 2, Ashok Vihar, Delhi, 110052
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Branch Office:
                  </span>
                  <br /> H7 B8 Aggarwal Plaza, Netaji Subhash Place, Delhi,
                  110033
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="xl:pr-96 px-0">
            <div className="xl:pr-96 px-0">
              <div className="xl:pr-52 px-0">
                <div className="flex justify-center items-center space-x-4 bg-gray-700 text-gray-400 my-6 rounded-full px-4 py-3">
                  <a
                    href="https://www.linkedin.com/company/voyagersbeat07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaLinkedin size={18} className="font-bold" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaTwitter size={18} className="font-bold" />
                  </a>
                  <a
                    href="https://www.facebook.com/voyagersBeat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaFacebook size={18} className="font-bold" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaYoutube size={18} className="font-bold" />
                  </a>
                  <a
                    href="https://www.instagram.com/voyagersbeat?igsh=OGI2cGh0NzdvamE4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaInstagram size={18} className="font-bold" />
                  </a>
                  <a
                    href="https://wa.me/8448591315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition-colors border border-white rounded-full p-1.5 bg-white"
                  >
                    <FaWhatsapp size={18} className="font-bold" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col md:flex-row text-gray-400 gap-3 md:gap-10  justify-center items-center">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>
                <a href="tel:+918448591315" className="hover:text-white">
                  +91 8448591315
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>
                <a
                  href="mailto:info@voyagersbeat.com"
                  className="hover:text-white"
                >
                  info@voyagersbeat.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe />
              <span>
                <a
                  href="https://www.voyagersbeat.com"
                  className="hover:text-white"
                >
                  www.voyagersbeat.com
                </a>
              </span>
            </div>
          </div>

          {/* Footer Image */}
          <div className="mt-8">
            <img
              src={FooterImg}
              alt="Footer Image"
              className="w-full md:h-auto h-[70px] object-cover"
            />
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-600 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2024. Crafted with <FaHeart className="inline text-red-500" />{" "}
              by
              <a
                href="https://voyagersbeat.com/"
                className="text-white hover:text-gray-300 ml-1"
              >
                Voyagers Beat
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
