import React, { useState } from "react";
import { Megaphone} from "lucide-react";
import Sidebar from "./Sidebar";
import PayoutSettingsOption from "./PayoutSettingsOption";
const PayoutSettings: React.FC = () => {
 const [activeTab, setActiveTab] = useState("Payouts Settings");

  const renderContent = () => {
    switch (activeTab) {
      case "Payouts Settings":
        return <PayoutSettingsOption />;
      default:
        return null;
    }
  };

  return (
    <div className="p-5 sm:p-10 min-h-screen  w-full lg:w-3/4 ">
    <form
     
       className=" flex-col flex md:flex-row bg-gray-50 shadow-xl min-h-fit lg:min-h-screen"
    >
  <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className=" w-full  bg-white p-6 md:py-6 md:px-12 shadow-md">
        {renderContent()}
      </div>
    </form>
    <div className="mt-6 flex justify-between items-center bg-white shadow-md rounded-lg p-4">
      {/* Left Section with Icon and Text */}
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <Megaphone className="w-10 h-10 text-gray-400" />
        {/* Text */}
        <p className="text-sm md:text-base text-gray-600">
          Update all the latest changes made by you, by just clicking on Save
          & Update button.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-primary border border-primary px-4 py-2 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition"
      >
        Save & Update
      </button>
    </div>
  </div>
  );
};

export default PayoutSettings;
