import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Lock } from "lucide-react";

interface IFormInput {
  password?: string;
  confirmPassword?: string;
  reason?: string;
  description?: string;
}

const AccountsSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Delete Account");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form submitted:", data);
    alert("Changes saved successfully!");
  };

  const renderContent = () => {
    switch (activeTab) {
        case "Security & Settings":
            return (
              <div>
                <h2 className="text-lg font-bold mb-4">Account Security & Settings</h2>
                <form className="space-y-4">
                  <div className="flex items-center">
                    {/* Toggle Switch */}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:bg-primary peer-checked:ring-2 peer-checked:ring-primary after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5"></div>
                    </label>
                    {/* Label */}
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      Disable my account temporarily
                    </span>
                  </div>
                </form>
              </div>
            );
          
      case "Password":
        return (
          <div>
            <h2 className="text-lg font-bold mb-4">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={`w-full p-3 border rounded-lg ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className={`w-full p-3 border rounded-lg ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}
              </div>
            </form>
          </div>
        );
        case "Email Notification":
            return (
              <div>
                <h2 className="text-lg font-bold mb-4">Manage Email Notifications</h2>
                <p className="text-sm text-gray-500 mb-4">
                  All the emails will be sent to the below email address
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Registered Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="Ava@amentotech.com" // Replace with dynamic data if needed
                        readOnly
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock/>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            );
          
      case "Delete Account":
        return (
          <div>
            <h2 className="text-lg font-bold mb-4 text-red-500">Delete Account</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className={`w-full p-3 border rounded-lg ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium">Retype Password</label>
                  <input
                    type="password"
                    placeholder="Retype Password"
                    className={`w-full p-3 border rounded-lg ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    }`}
                    {...register("confirmPassword", {
                      required: "Please retype your password",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Reason for Leaving</label>
                <select
                  className="w-full p-3 border rounded-lg"
                  {...register("reason", { required: "Please select a reason" })}
                >
                  <option value="">Select Reason</option>
                  <option value="privacy">Privacy Concerns</option>
                  <option value="usability">Usability Issues</option>
                  <option value="other">Other</option>
                </select>
                {errors.reason && (
                  <p className="text-red-500 text-sm">{errors.reason.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Description (Optional)</label>
                <textarea
                  placeholder="Add any additional details"
                  className="w-full p-3 border rounded-lg border-gray-300"
                  rows={4}
                  {...register("description")}
                ></textarea>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md">
        <ul className="p-6 space-y-4">
          {["Security & Settings", "Password", "Email Notification", "Delete Account"].map(
            (tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-3 rounded-lg text-sm font-medium ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          {renderContent()}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-primary border border-primary px-3 py-2 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition"
            >
              Save & Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsSettings;
