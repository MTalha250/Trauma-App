import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DoctorImage from "../../../assets/user.jpg";
import BackgroundImage from "../../../assets/sidebar-bg.png"; // Replace with your background image
import { sidebarOptions } from "@/data/patientSidebarOptions";
import { ChevronRight, ChevronLeft, LogOut } from "lucide-react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar
  const location = useLocation(); // Get the current route

  return (
    <div className="flex relative z-50">
      {/* Sidebar */}
      <aside
        className={`fixed  overflow-hidden   top-0 left-0 h-screen bg-primary text-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-72" : " w-0  sm:w-12"
        }`}
      >
        {/* Profile Section */}
        <div className="relative">
  {/* Background Container */}
  
    <img className=" object-cover w-full h-44" src={BackgroundImage} alt="SidebarBackground" />
  

  {/* Profile Content */}
  <div className={` relative ${isOpen ? "left-[0px]" : "left-[1000px] h-32 "}  -mt-10 text-center`}>
  {/* Circular Profile Image */}
  <div className="flex justify-center">
    <div className="w-24 h-24 rounded-full shadow-md border-4 border-white overflow-hidden">
      <img
        src={DoctorImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Profile Name and Username */}
  <div className={` mb-9`}>
    <h3 className="text-lg font-semibold text-white">Summerlin</h3>
    <p className="text-sm text-white opacity-80">@summerlin</p>
  </div>
</div>
</div>


        {/* Navigation Links */}
        <ul className="mt-4 border-y border-[#ffffff79]">
  {sidebarOptions.map((item, index) => (
    <li
      key={index}
      className={`border-b border-[#ffffff79] ${index === sidebarOptions.length - 1 ? "border-b-0" : ""}`}
    >
      <Link
        to={item.path}
        className={`flex items-center ${
          isOpen ? "justify-start space-x-4" : "justify-center"
        } p-3 text-sm transition-all duration-500 ease-in-out ${
          location.pathname === item.path
            ? "bg-white text-primary"
            : "hover:bg-white hover:text-primary"
        }`}
      >
        <item.icon size={20} />
        {isOpen && <span>{item.name}</span>}
      </Link>
    </li>
  ))}
</ul>
        {/* Logout Section */}
        <div className="absolute bottom-4 w-full">
          <Link
            to="/"
            className={`flex items-center ${
              isOpen ? "justify-start space-x-4" : "justify-center"
            } p-3 text-sm transition hover:bg-white hover:text-primary`}
          >
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        className={`fixed top-36 transition-all duration-300 ease-in-out ${
          isOpen ? "left-[270px]" : "left-0 sm:left-10"
        } z-50 bg-white text-primary p-1 rounded-md shadow-md`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={30} /> : <ChevronRight size={30} />}
      </button>
    </div>
  );
};

export default Sidebar;
