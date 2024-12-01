import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DoctorImage from "../../../assets/dr.3.png";
import { sidebarOptions } from "@/data/sidebarOptions";
import { Menu, X } from "lucide-react";
import { LogOut } from "lucide-react";
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Hamburger Menu for Small Screens */}
      <div className="p-4 bg-primary text-white shadow-md lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed min-h-screen top-0 left-0 z-50 w-64 bg-primary text-white flex flex-col justify-between  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 flex flex-col justify-between`}
      >
        {/* Profile Section */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <img
              src={DoctorImage} // Replace with actual profile image
              alt="Profile"
              className="w-24 h-24 rounded-full shadow-md border-4 border-white"
            />
            <h3 className="text-lg font-semibold mt-4">Ava Nguyen</h3>
            <p className="text-sm opacity-80">@ava-nguyen</p>
          </div>
          <div className="mt-8">
            {/* Dynamic Navigation Items */}
            <ul className="space-y-4">
              {sidebarOptions.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 text-sm rounded-lg transition ${
                      location.pathname.split("/").pop() === item.path
                        ? "bg-white text-primary"
                        : "hover:bg-white hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)} // Close the sidebar on click
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="p-6 text-center text-sm opacity-80">
        <Link
                    to={"/"}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition hover:bg-white hover:text-primary`}
                    onClick={() => setIsOpen(false)} // Close the sidebar on click
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </Link>
        </footer>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
