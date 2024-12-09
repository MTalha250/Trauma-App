import React from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "Personal Details",
    "Experience & Education",
    "Awards & Downloads",
    "Registrations",
    "Gallery",
    "Default Location",
  ];

  return (
    <div className="w-1/4">
      <ul className="space-y-2">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer p-4 text-sm font-medium ${
              activeTab === tab
                ? "bg-white text-primary  shadow-md border-l-4 border-primary"
                : "hover:bg-white transition-all duration-500 ease-in-out hover:shadow-md border-l-gray-50 border-l-4 hover:border-primary text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
