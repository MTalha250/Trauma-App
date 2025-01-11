import React from "react";

interface Appointment {
  id: number;
  date: string;
  time: string;
  status: "Scheduled" | "Completed" | "Cancelled";
  patientName: string;
}

interface AppointmentItemProps {
  appointment: Appointment;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-dullwhite border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:border-primary transition">
      <div className="flex flex-col">
        <h3 className=" text-base text-primary">{appointment.patientName}</h3>
        <p className="text-sm text-gray-600">
          {appointment.date} • {appointment.time}
        </p>
      </div>
      <span
        className={`px-4 py-1 text-sm font-medium rounded-full ${
          appointment.status === "Scheduled"
            ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
            : appointment.status === "Completed"
            ? "bg-green-100 text-green-800 border border-green-200"
            : "bg-red-100 text-red-800 border border-red-200"
        }`}
      >
        {appointment.status}
      </span>
    </li>
  );
};

export default AppointmentItem;
