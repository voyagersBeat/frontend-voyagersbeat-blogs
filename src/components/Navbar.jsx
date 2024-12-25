import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../redux/features/auth/AuthApi";
import { logout } from "../redux/features/auth/authSlice";
import logo from "../assets/vb-logo.png";
import Avater from "../../src/assets/user profile img.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // State for mobile menu
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Access user from Redux
  const [logoutUser] = useLogoutUserMutation();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLogout = async () => {
    try {
      // Call logout API
      await logoutUser().unwrap();
      // Clear Redux state
      dispatch(logout());
      // Redirect to login page
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLists = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "About us", path: "/about-us" },
    { name: "Contact us", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white py-6 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Voyagers Beat Logo" className="h-12" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-md font-medium">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={list.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#1e73be] font-bold"
                      : "text-gray-600 hover:text-[#1e73be]"
                  }`
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          {!user && (
            <li>
              <NavLink
                to="/login"
                className="text-gray-600 hover:text-[#1e73be] transition-colors duration-300"
              >
                Login
              </NavLink>
            </li>
          )}
          {user && user.role === "user" && (
            <li className="flex items-center gap-3">
              <img
                src={Avater}
                alt="User Avatar"
                className="h-8 w-8 rounded-full border border-gray-300"
              />
              <button
                className="bg-[#1e73be] px-4 py-2 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}
          {user && user.role === "admin" && (
            <li className="flex items-center gap-3">
              <img
                src={Avater}
                alt="Admin Avatar"
                className="h-8 w-8 rounded-full border border-gray-300"
              />
              <Link to="/dashboard">
                <button className="bg-[#1e73be] px-4 py-2 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Dashboard
                </button>
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            {openMenu ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {openMenu && (
        <ul className="absolute top-[60px] left-0 w-full bg-white shadow-md md:hidden py-5">
          {navLists.map((list, index) => (
            <li key={index} className="py-3 px-6">
              <NavLink
                onClick={() => setOpenMenu(false)}
                to={list.path}
                className={({ isActive }) =>
                  `block text-sm ${
                    isActive
                      ? "text-[#1e73be] font-bold"
                      : "text-gray-600 hover:text-[#1e73be]"
                  }`
                }
              >
                {list.name}
              </NavLink>
            </li>
          ))}
          {user && user.role === "admin" && (
            <li className="py-3 px-6 border-b">
              <NavLink
                to="/dashboard"
                onClick={() => setOpenMenu(false)}
                className="block text-sm text-[#1e73be] font-bold"
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="py-3 px-6">
              <NavLink
                to="/login"
                onClick={() => setOpenMenu(false)}
                className="block text-sm text-gray-600 hover:text-[#1e73be]"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
