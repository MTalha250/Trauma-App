import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Sidebar from "./Sidebar";
import PersonalDetails from "./PersonalDetails";
import ExperienceEducation from "./ExperienceEducation";
import { Megaphone } from "lucide-react";
import AwardsDownloads from "./AwardsDownloads";
import Registrations from "./Registrations";
import Gallery from "./Gallery";
import DefaultLocation from "./DefaultLocation";

interface FormInput {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
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
        return <PersonalDetails register={register} errors={errors} />;
      case "Experience & Education":
        return <ExperienceEducation register={register} errors={errors} />;
        case "Awards & Downloads":
          return <AwardsDownloads register={register} errors={errors} />;
          case "Registrations":
            return <Registrations register={register} errors={errors} />;
            case "Gallery":
              return <Gallery register={register} errors={errors} />;
              case "Default Location":
                return <DefaultLocation register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (<div className=" p-10 min-h-screen w-3/4"  >
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex bg-gray-50  shadow-xl min-h-screen"
    >
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="w-3/4 bg-white py-6 px-12 shadow-md">
        {renderContent()}
      </div>

    
    </form>
    <div className="mt-6 flex justify-between  items-center bg-white shadow-md rounded-lg p-4">
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
