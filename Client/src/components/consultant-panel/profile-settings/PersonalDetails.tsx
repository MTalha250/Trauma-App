import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Edit3, Trash2 } from "lucide-react";
interface PersonalDetailsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  register,
  errors,
}) => {
  return (
    <div className="">
      <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Your Details
      </h2>
      <div className="space-y-6 ">
        {/* Gender and Qualification */}
        <div className="grid grid-cols-2 gap-4">
          <div>
           
            <select
              {...register("personalDetails.gender", { required: "Gender is required" })}
              className={`w-full p-3 border rounded-lg ${
                errors.personalDetails?.gender ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.personalDetails?.gender && (
              <p className="text-red-500 text-sm">{errors.personalDetails.gender.message}</p>
            )}
          </div>
          <div>
       
            <input
              type="text"
              {...register("personalDetails.qualification", { required: "Qualification is required" })}
              placeholder="E.g., MBBS, MCPS, MSc"
              className={`w-full p-3 border rounded-lg ${
                errors.personalDetails?.qualification ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.personalDetails?.qualification && (
              <p className="text-red-500 text-sm">{errors.personalDetails.qualification.message}</p>
            )}
          </div>
        </div>

        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
           
            <input
              type="text"
              {...register("personalDetails.firstName", { required: "First name is required" })}
              placeholder="Enter your first name"
              className={`w-full p-3 border rounded-lg ${
                errors.personalDetails?.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.personalDetails?.firstName && (
              <p className="text-red-500 text-sm">{errors.personalDetails.firstName.message}</p>
            )}
          </div>
          <div>
          
            <input
              type="text"
              {...register("personalDetails.lastName", { required: "Last name is required" })}
              placeholder="Enter your last name"
              className={`w-full p-3 border rounded-lg ${
                errors.personalDetails?.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.personalDetails?.lastName && (
              <p className="text-red-500 text-sm">{errors.personalDetails.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div>
         
          <input
            type="text"
            {...register("personalDetails.phone", { required: "Mobile number is required" })}
            placeholder="Enter your mobile number"
            className={`w-full p-3 border rounded-lg ${
              errors.personalDetails?.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.personalDetails?.phone && (
            <p className="text-red-500 text-sm">{errors.personalDetails.phone.message}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          
          <textarea
            {...register("personalDetails.bio")}
            placeholder="Add a short description about yourself"
            rows={4}
            className="w-full p-3 border rounded-lg border-gray-300"
          ></textarea>
        </div>

        {/* Select Languages */}
        <div>
          <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">Select Languages</h2>
          <div className="border p-3 rounded-lg border-gray-300">
            {["English", "Arabic", "Urdu", "German", "Dutch"].map((language) => (
              <label key={language} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  value={language}
                  {...register("personalDetails.languages")}
                  className="mr-2"
                />
                {language}
              </label>
            ))}
          </div>
        </div>

        {/* Profile Photo Upload */}
        <div>
          <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">Profile Photo</h2>
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg mb-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
          Select File
        </button>
        <span className="text-gray-500 ml-4">Drop files here to upload</span>
      </div>
        </div>

        {/* Memberships */}
        <div>
          <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">Memberships</h2>
          <div className="flex items-center space-x-2">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Your Memberships"
      className="flex-grow px-3 py-2 rounded-lg border b"
    />
    {/* Add Button */}
    <button
      type="button"
      className="px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition"
    >
      Add Now
    </button>
  </div>

  {/* Membership List */}
  <ul className="mt-4 ">
    {[
      "Sydney Academy of Aesthetic & Cosmetic Dentistry",
      "Behavioral Health Charge Nurse",
      "Cardiac Catheterization Lab Nurse",
      "Speech-Language Pathologist",
    ].map((membership, index) => (
      <li
        key={index}
        className="flex items-center justify-between px-4 py-3 border divide-y bg-gray-50  border-gray-200 "
      >
        {/* Membership Name */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">{membership}</span>
        </div>
        {/* Action Buttons */}
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

export default PersonalDetails;
