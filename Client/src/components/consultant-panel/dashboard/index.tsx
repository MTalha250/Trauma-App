import React, { useEffect, useState } from "react";
import { Package, FileText, Plus, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";
import packagesData from "@/data/appointmentsData.json"; // Import JSON data

interface Appointment {
  id: number;
  date: string;
  name: string;
  month:string;
  status: string;
  image:string;
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
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center  ">
          <Package className="text-primary w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Check Package Detail</h3>
          <Link
            to="/consultant-panel/pricing-table"
            className="text-secondary mt-2  text-sm"
          >
            Upgrade Now
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <FileText className="text-primary w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Check Your Invoices</h3>
          <Link
            to="/consultant-panel/invoices"
            className="text-secondary mt-2  text-sm"
          >
            Click To View
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <Plus className="text-primary w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Add Article</h3>
          <Link to="/consultant-panel/articles" className="text-secondary mt-2  text-sm">
            Click To View
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <DollarSign className="text-primary w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Available Balance</h3>
          <p className="text-lg mt-2">$0.00</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <User className="text-primary w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Specialities and Services</h3>
          <Link to="/consultant-panel/specialities-services" className="text-secondary mt-2  text-sm">
            Specialties and Services
          </Link>
        </div>
      </div>

      {/* Recent Appointments Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b-2"> <h2 className="text-lg font-semibold font-prata">Recent Appointments</h2></div>
 
  <div className=" space-y-5 p-6 ">
    {appointments.map((appointment) => (
      <div
        key={appointment.id}
        className="flex justify-between items-center  hover:bg-gray-50 border border-gray-200 pr-5 "
      >
        <div className="flex items-center space-x-4 ">
          {/* Date Section */}
          <div className="flex flex-col border-r-2 items-cente text-primary  w-16 h-16 justify-center text-center">
            <span className="text-2xl font-bold">{appointment.date}</span>
            <span className="text-sm font-light">{appointment.month}</span>
          </div>

          {/* Name and Status Section */}
          <div className="flex items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
    <img
      src={appointment.image} // Replace with the actual image source
      alt={appointment.name}
      className="w-full h-full object-cover"
    />
  </div>
          <div className="flex-col">
            <h4 className="text-base font-semibold">{appointment.name}</h4>
            <p className="text-sm text-gray-500 flex items-center">
             
              Status: {appointment.status}
            </p>
          </div>
        </div>
        </div>
        {/* View Details Button */}
        <button className="p-1 md:px-4 md:py-2 text-sm text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
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
