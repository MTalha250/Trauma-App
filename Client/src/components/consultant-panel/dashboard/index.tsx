import React, { useEffect, useState } from "react";
import { Package, Heart, FileText, Plus, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";
import packagesData from "@/data/appointmentsData.json"; // Import JSON data

interface Appointment {
  id: number;
  date: string;
  name: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Simulate fetching appointments data
  useEffect(() => {

       setAppointments(packagesData)
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Info Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Package className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Check Package Detail</h3>
          <Link
            to="/consultant-panel/pricing-table"
            className="text-primary mt-2 underline text-sm"
          >
            Upgrade Now
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <FileText className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Check Your Invoices</h3>
          <Link
            to="/consultant-panel/invoices"
            className="text-primary mt-2 underline text-sm"
          >
            Click To View
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Plus className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Add Article</h3>
          <Link to="/consultant-panel/articles" className="text-primary mt-2 underline text-sm">
            Click To View
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <DollarSign className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Available Balance</h3>
          <p className="text-lg mt-2">$0.00</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <User className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold">Specialities and Services</h3>
          <Link to="#" className="text-primary mt-2 underline text-sm">
            Specialties and Services
          </Link>
        </div>
      </div>

      {/* Recent Appointments Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg md:text-xl font-semibold mb-4">
          Recent Appointments
        </h2>
        <div className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-base md:text-lg font-semibold">
                  {appointment.date}
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold">
                    {appointment.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    Status: {appointment.status}
                  </p>
                </div>
              </div>
              <button className="text-primary border border-primary px-3 py-2 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
