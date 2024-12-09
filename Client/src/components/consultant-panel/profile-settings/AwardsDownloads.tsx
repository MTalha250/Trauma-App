import React from "react";
import { Edit3, Trash2, FileText } from "lucide-react";

const AwardsDownloads: React.FC = () => {
  return (
    <div>
      {/* Add Awards Section */}
      <div className="flex items-center justify-between py-2 mb-5 px-4 bg-gray-50 border-l-4 border-primary">
            <h2 className="text-lg">
            Add Your Awards
            </h2>
            <button className="text-primary ">Add New</button>
          </div>

      <div className="space-y-4">
        <ul className="">
          {[
            { name: "Recognized by American Dental Council of America", year: 2006 },
            { name: "Recognized by Karnataka State Dental Council", year: 2007 },
            { name: "Recognized by Manchester Academy of Oral Medicine and Radiology", year: 2019 },
          ].map((award, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-3 border "
            >
              <span>
                {award.name}
                <span className="text-gray-500 text-sm block">({award.year})</span>
              </span>
              <div className="flex space-x-2">
                <button className="px-2 py-1 bg-blue-100 text-blue-500 rounded-lg">
                  <Edit3 size={16} />
                </button>
                <button className="px-2 py-1 bg-red-100 text-red-500 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
     

      {/* Downloads Section */}
      <h2 className="text-lg mt-8 mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Downloads
      </h2>
      <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg mb-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
          Select File
        </button>
        <span className="text-gray-500 ml-4">Drop files here to upload</span>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {[
          { name: "Gap_Between_Teeth.pdf", size: "222.55 KB" },
          { name: "Muscles_Strength_Recovery-1.pdf", size: "223.47 KB" },
          { name: "Wisdom_Tooth_Coming-2.pdf", size: "222.66 KB" },
        ].map((file, index) => (
          <div
            key={index}
            className="flex min-w-[320px] justify-between  items-center px-4 py-3 border rounded-lg shadow"
          >
            <div className="flex items-center space-x-2">
              <FileText className="text-red-500 w-5 h-5" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-gray-500 text-xs">File size: {file.size}</p>
              </div>
            </div>
            <button className="text-red-500">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsDownloads;
