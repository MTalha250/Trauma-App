import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Sidebar from "./Sidebar";
import PersonalDetails from "./PersonalDetails";
import { Megaphone } from "lucide-react";

interface PersonalDetailsData {
  gender: string;
  qualification: string;
  firstName: string;
  lastName: string;
  phone: string;
  bio?: string;
  languages?: string[];
}

interface FormInput {
  personalDetails: PersonalDetailsData;
  experience: string;
  education: string;
}

const ProfileSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Personal Details");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      personalDetails: {
        gender: "",
        qualification: "",
        firstName: "",
        lastName: "",
        phone: "",
        bio: "",
        languages: [],
      },
      experience: "",
      education: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("Form submitted:", data);
    alert("Changes saved successfully!");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Personal Details":
        return (
          <PersonalDetails
            register={register}
            errors={errors.personalDetails || {}}
          />
        );
  
      default:
        return null;
    }
  };

  return (
    <div className="p-5 sm:p-10 min-h-screen  w-full lg:w-3/4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex-col flex md:flex-row bg-gray-50 shadow-xl min-h-screen"
      >
        {/* Sidebar */}
      
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className=" w-full  bg-white p-6 md:py-6 md:px-12 shadow-md">
          {renderContent()}
        </div>
      </form>
      <div className="mt-6 flex justify-between items-center bg-white shadow-md rounded-lg p-4">
        {/* Left Section with Icon and Text */}
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <Megaphone className="w-10 h-10 text-gray-400" />
          {/* Text */}
          <p className="text-sm md:text-base text-gray-600">
            Update all the latest changes made by you, by just clicking on Save
            & Update button.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-primary border border-primary px-4 py-2 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition"
        >
          Save & Update
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
