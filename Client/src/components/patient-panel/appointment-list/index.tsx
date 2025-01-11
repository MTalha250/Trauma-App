import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar"; // Assuming you are using a calendar package like 'react-calendar'
import "react-calendar/dist/Calendar.css"; // Calendar CSS
import AppointmentItem from "./AppointmentItem";
import "./style.css"; // Import the custom CSS
import { CalendarX } from "lucide-react"; // Import the icon
interface Appointment {
  id: number;
  date: string;
  time: string;
  status: "Scheduled" | "Completed" | "Cancelled";
  patientName: string;
}

// Sample appointments data
const appointmentsData: Appointment[] = [
  {
    id: 1,
    date: "2025-01-15",
    time: "10:00 AM",
    status: "Scheduled",
    patientName: "John Doe",
  },
  {
    id: 2,
    date: "2025-01-15",
    time: "02:00 PM",
    status: "Completed",
    patientName: "Jane Smith",
  },
  {
    id: 3,
    date: "2025-01-11",
    time: "01:00 PM",
    status: "Cancelled",
    patientName: "Michael Johnson",
  },
];

const AppointmentList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const formattedDate = selectedDate ? selectedDate.toISOString().split("T")[0] : "";

  // Filter appointments by the selected date
  const filteredAppointments = appointmentsData.filter(
    (appointment) => appointment.date === formattedDate
  );

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value.length > 0) {
      setSelectedDate(value[0]); // Select the first date if it's a range
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="p-6 bg-dullwhite min-h-screen">
      {/* Calendar Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="p-6 bg-dullwhite rounded-lg shadow-lg">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="w-full custom-calendar"
            tileClassName={({ date, view }) =>
              view === "month" &&
              selectedDate &&
              date.toDateString() === selectedDate.toDateString()
                ? "selected-date"
                : ""
            }
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-prata text-primary">
            {filteredAppointments.length} Appointments
          </h3>
          {selectedDate && (
            <p className="text-gray-600">
              {selectedDate.toLocaleDateString("en-US", { dateStyle: "long" })}
            </p>
          )}
        </div>
      </div>

      {/* Appointments Section */}
      <div className="mt-8 bg-offwhite p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-prata text-primary mb-4">
          Recent Appointments
        </h2>
        {filteredAppointments.length > 0 ? (
          <ul className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <AppointmentItem key={appointment.id} appointment={appointment} />
            ))}
          </ul>
        ) : (
            <div className="flex flex-col items-center justify-center py-16">
            <CalendarX className="w-24 h-24 text-gray-400 mb-4" /> {/* Icon instead of image */}
            <p className="text-gray-500 text-sm">
              There are no appointments booked.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
