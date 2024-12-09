import React, { useState } from "react";

const DefaultLocation: React.FC = () => {
  const [clinicName, setClinicName] = useState("");
  const [uploadedLogo, setUploadedLogo] = useState<File | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("Australia");
  const [latitude, setLatitude] = useState("-24.004758");
  const [longitude, setLongitude] = useState("133.368101");

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedLogo(event.target.files[0]);
    }
  };

  return (
    <div>
      <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Your Clinic Details
      </h2>

      {/* Clinic Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Your Clinic Name</label>
        <input
          type="text"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
          placeholder="Your clinic name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Clinic Logo */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Clinic Logo</label>
        <div className="flex justify-between items-center border-dashed border-2 border-gray-300 p-4 rounded-lg">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            Select File
          </button>
          <input
            type="file"
            onChange={handleLogoUpload}
            className="hidden"
            accept="image/*"
          />
          <p className="text-gray-400 text-sm">Drop files here to upload</p>
        </div>
        {uploadedLogo && (
          <div className="mt-4">
            <p className="text-sm font-medium">{uploadedLogo.name}</p>
            <p className="text-xs text-gray-500">
              File size: {(uploadedLogo.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Your Location</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="Australia">Australia</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Google Maps Placeholder */}
        <div className="bg-gray-100 text-center py-10 rounded-lg shadow-md border border-gray-300">
          <p className="text-gray-400">
            <span className="block text-lg font-bold">!</span>
            Oops! Something went wrong.
          </p>
          <p className="text-sm text-gray-500">
            This page didn’t load Google Maps correctly. See the JavaScript
            console for technical details.
          </p>
        </div>
      </div>

      {/* Latitude and Longitude */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Latitude</label>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Longitude</label>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultLocation;
