import React from "react";
import { Trash2, FileCheck } from "lucide-react";

const Registrations: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Registrations
      </h2>

      {/* Registration File Section */}
      <div className="space-y-4">
        {/* Uploaded File */}
        <div className="flex flex-col items-center w-56 h-56 relative bg-gray-100 rounded-lg shadow-md">
        <div className="absolute inset-0 flex items-center justify-center">
          <FileCheck className="text-green-500 w-10 h-10" />
        </div>
        <div className="absolute flex items-center bottom-0 left-0 right-0 text-center bg-white p-2 rounded-b-lg">
        <div className="text-start">  <p className="text-sm font-medium truncate">
            doctreat-sample-pdf.pdf
          </p>
          <p className="text-gray-500 text-xs">File size: 222.24 KB</p>
          </div>
          <button className="p-2 text-red-500">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

        {/* Registration Number */}
        <div>
          <input
            type="text"
            placeholder="832659-WL"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Registrations;
