import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "@/components/consultant-panel/sidebar";
import { sidebarOptions } from "@/data/sidebarOptions";
import PricingTable from "@/components/consultant-panel/dashboard/PricingTable";
import Invoices from "@/components/consultant-panel/dashboard/Invoices";
import ArticleManagement from "@/components/consultant-panel/manageArticles";

const ConsultantPanel: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow sm:p-6 bg-gray-100 min-h-screen ml-20">
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
      </div>
    </div>
  );
};

export default ConsultantPanel;
