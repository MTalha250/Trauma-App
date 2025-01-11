import React, { useEffect, useState } from "react";
import { Package, Mail, Plus, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";
import packagesData from "@/data/appointmentsData.json"; // Import JSON data

interface Appointment {
  id: number;
  date: string;
  name: string;
  month: string;
  status: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newMessages, setNewMessages] = useState<number>(0); // State for new messages count

  // Simulate fetching appointments data
  useEffect(() => {
    setAppointments(packagesData);
    setNewMessages(0); // Simulate fetching new messages count (0 for now)
  }, []);

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
