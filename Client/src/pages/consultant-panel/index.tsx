import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "@/components/consultant-panel/sidebar";
import { sidebarOptions } from "@/data/sidebarOptions";
import PricingTable from "@/components/consultant-panel/dashboard/PricingTable";
import Invoices from "@/components/consultant-panel/dashboard/Invoices";
import ArticleManagement from "@/components/consultant-panel/manageArticles";
import Navbar from "@/components/consultant-panel/navbar";

const ConsultantPanel: React.FC = () => {
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
          <Route path="articles" element={<ArticleManagement />} />
          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to="/consultant-panel/dashboard" />}
          />
        </Routes>
      </div></div>
    </div>
  );
};

export default ConsultantPanel;
