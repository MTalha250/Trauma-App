import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Icons for boolean values
import packagesData from "@/data/packagesData.json"; // Import JSON data

// Define the type for the package data
interface Package {
  name: string;
  price: string;
  duration: string;
  services: number;
  brochures: number;
  articles: number;
  awards: number;
  memberships: number;
  privateChat: boolean;
  bookings: boolean;
  featuredProfile: boolean;
  featuredDays: string;
  durationDays: number;
}

const PricingTable: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setPackages(packagesData);
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-8">Packages</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          {/* Table Header */}
          <thead>
            <tr className="">
              <th className="border border-gray-300 p-4"></th>
              {packages.map((pkg, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-4 text-lg font-bold text-center"
                >
                  {pkg.name}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Price Row */}
            <tr>
              <td className="border border-gray-300 p-4">Price</td>
              {packages.map((pkg, index) => (
                <td
                  key={index}
                  className="border border-gray-300 p-4 text-center text-xl font-bold text-primary"
                >
                  {pkg.price} <span className="text-sm">/ {pkg.duration}</span>
                </td>
              ))}
            </tr>

            {/* No of Services Row */}
            <tr>
              <td className="border border-gray-300 p-4">
                No of services per specialty
              </td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.services}
                </td>
              ))}
            </tr>

            {/* No of Brochures Row */}
            <tr>
              <td className="border border-gray-300 p-4">No of Brochures</td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.brochures}
                </td>
              ))}
            </tr>

            {/* No of Articles Row */}
            <tr>
              <td className="border border-gray-300 p-4">No of Articles</td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.articles}
                </td>
              ))}
            </tr>

            {/* Private Quick Chat Row */}
            <tr>
              <td className="border border-gray-300 p-4">Private Quick Chat</td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.privateChat ? (
                    <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                  ) : (
                    <XCircle className="text-red-500 w-5 h-5 mx-auto" />
                  )}
                </td>
              ))}
            </tr>

            {/* Featured Days Row */}
            <tr>
              <td className="border border-gray-300 p-4">Featured Days</td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.featuredDays}
                </td>
              ))}
            </tr>

            {/* Duration Days Row */}
            <tr>
              <td className="border border-gray-300 p-4">Duration (days)</td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  {pkg.durationDays}
                </td>
              ))}
            </tr>

            {/* Buy Button Row */}
            <tr>
              <td className="border border-gray-300 p-4"></td>
              {packages.map((pkg, index) => (
                <td key={index} className="border border-gray-300 p-4 text-center">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                    Buy Now
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
