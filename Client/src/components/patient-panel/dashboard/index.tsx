import React, { useState } from "react";
import {Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [newMessages] = useState<number>(0); // State for new messages count

  return (
    <div className="p-11 bg-gray-100 min-h-screen">
      {/* Info Cards Section */}
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
{/* Card 1: New Messages */}
<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative">
  <div className="relative">
    <Mail className="text-primary w-14 h-14 mb-4" />
    {newMessages >= 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
        {newMessages}
      </span>
    )}
  </div>
  <h3 className="text-lg font-semibold">New Messages</h3>
  <Link
    to="/patient-panel/inbox"
    className="text-secondary mt-2 text-sm"
  >
    Click To View
  </Link>
</div>
      </div>

    
    </div>
  );
};

export default Dashboard;
