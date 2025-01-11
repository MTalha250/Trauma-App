import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "@/components/patient-panel/sidebar";
import { sidebarOptions } from "@/data/patientSidebarOptions";
import PricingTable from "@/components/patient-panel/dashboard/PricingTable";
import Invoices from "@/components/patient-panel/dashboard/Invoices";
import Navbar from "@/components/patient-panel/navbar";

const PatientPanel: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}

      <div className="flex-grow w-[120px] m-auto min-h-screen sm:ml-12 ">
        <Navbar/>
      <div className="  bg-gray-100 ">
        <Routes>
          {sidebarOptions.map((option) => (
            <Route
              key={option.name}
              path={option.path}
              element={<option.component />}
            />
          ))}

          <Route path="pricing-table" element={<PricingTable />} />
          <Route path="invoices" element={<Invoices />} />
          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to="/patient-panel/dashboard" />}
          />
        </Routes>
      </div></div>
    </div>
  );
};

export default PatientPanel;
