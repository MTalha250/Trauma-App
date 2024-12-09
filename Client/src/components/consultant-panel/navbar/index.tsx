import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react"; // Import required icons
import { motion, AnimatePresence } from "framer-motion"; // Importing framer-motion
import DoctorImage from "../../../assets/dr.3.png"; // Replace with your image path

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown visibility

  return (
    <motion.nav
      className="bg-white shadow-md w-full flex items-center justify-between px-6 py-4 z-40 relative" // Ensure proper z-index
      initial={{ opacity: 0, y: -20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Animation on load
      transition={{ duration: 0.5, ease: "easeInOut" }} // Timing of the animation
    >
      {/* Left Section: Logo */}
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-lg font-bold text-primary ml-3 heading-5">
          Trauma Support
        </h1>
      </motion.div>

      {/* Middle Section: Links */}
      <motion.ul
        className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <li>
          <Link to="/" className="hover:text-primary transition">
            Main
          </Link>
        </li>
        <li>
          <Link to="/health-forum" className="hover:text-primary transition">
            Health Forum
          </Link>
        </li>
        <li>
          <Link to="/pharmacy-store" className="hover:text-primary transition">
            Pharmacy & Store
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" className="hover:text-primary transition">
            How It Work?
          </Link>
        </li>
        <li>
          <Link to="/pages" className="hover:text-primary transition">
            Pages
          </Link>
        </li>
      </motion.ul>

      {/* Right Section: Cart and Profile */}
      <motion.div
        className="flex items-center space-x-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Cart Icon */}
        <div className="relative">
          <ShoppingCart size={20} className="text-primary cursor-pointer" />
          <motion.span
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            0
          </motion.span>
        </div>

        {/* Profile Dropdown */}
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            src={DoctorImage}
            alt="Doctor Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Ava Nguyen</p>
            <p className="text-xs text-blue-500">MBBS, MCPS, MS...</p>
          </div>
          <ChevronDown size={16} className="text-gray-600" />
        </motion.div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-48 z-50" // Position the dropdown
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="text-sm text-gray-700">
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
