import React from "react";
import { Edit3, Trash2 } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface ExperienceEducationProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<{ experience: string; education: string }>;
}

const ExperienceEducation: React.FC<ExperienceEducationProps> = () => {
  const inputClasses = "w-full p-3 border rounded-lg";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <div>
    
      <div className="space-y-6">
        {/* Education Section */}
        <div>
          <div className="flex items-center justify-between py-2 px-4 bg-gray-50 border-l-4 border-primary">
            <h2 className="text-lg">
              Add Your Education
            </h2>
            <button className="text-primary ">Add New</button>
          </div>
          <ul className=" mt-4">
            {[
              {
                title: "Delta Tricon Dental College",
                dateRange: "September 2010 - September 2012",
              },
              {
                title: "MBA - Hospital Management",
                dateRange: "September 2008 - September 2010",
              },
              {
                title: "New Apollo Hospital, California",
                dateRange: "September 2006 - September 2008",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-3 border"
              >
                <span>
                  {item.title}
                  <span className="text-gray-500 text-sm block">
                    {item.dateRange}
                  </span>
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

        {/* Experience Section */}
        <div>
          <div className="flex items-center justify-between py-2 px-4 bg-gray-50 border-l-4 border-primary">
            <h2 className="text-lg">
              Add Your Experience
            </h2>
            <button className="text-primary ">Add New</button>
          </div>
          <ul className="mt-4">
            {[
              {
                title: "Wide Smile Dental Clinic",
                dateRange: "August 2018 - December 2020",
              },
              {
                title: "Aurora Medical & Dental College",
                dateRange: "May 2019 - September 2018",
              },
              {
                title: "New Apollo Hospital, California",
                dateRange: "September 2014 - September 2016",
              },
              {
                title: "Shyamala Reddy Dental College",
                dateRange: "September 2010 - September 2014",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-3 border "
              >
                <span>
                  {item.title}
                  <span className="text-gray-500 text-sm block">
                    {item.dateRange}
                  </span>
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
      </div>
    </div>
  );
};

export default ExperienceEducation;
