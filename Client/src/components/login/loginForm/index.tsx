import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import image from "../../../assets/homepagge-get--the-care-banner.png";

// TypeScript types for form data
interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Predefined admin credentials
    const adminCredentials = {
      email: "admin@gmail.com",
      password: "123123",
    };

    // Check if the entered credentials match the admin credentials
    if (data.email === adminCredentials.email && data.password === adminCredentials.password) {
      console.log("Login Successful: Welcome Admin!");
      // Reset error state on success
      setLoginError(null);
      // You can redirect the user to another page (e.g., dashboard) here
      // Example with react-router-dom: history.push("/dashboard");
    } else {
      console.log("Invalid credentials! Please try again.");
      setLoginError("Invalid email or password!");  // Display error message
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-8 md:px-16 lg:px-24">
        {/* Left Image Section */}
        <div className="w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0">
          <img
            src={image}
            alt="care-banner"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Right Login Form Section */}
        <div className="w-full lg:w-[50%] bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-lg">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-primary heading-1" >
            Log in to Trauma Support
          </h4>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            {/* Email or Phone Field */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className={`w-full p-3 text-sm sm:text-base border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                {...register("email", {
                  required: "Email or phone number is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-3 text-sm sm:text-base border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Error Message */}
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

            {/* Login Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full  p-3 text-sm sm:text-base bg-primary text-white font-bold rounded-lg shadow-md hover:bg-hover"
              >
                Log In
              </button>
            </div>

            {/* Links Section */}
            <div className="flex justify-between text-xs sm:text-sm">
              <Link to="/signup" className="text-secondary para-medium hover:underline">
                Create a new account
              </Link>

              <Link to="/forgot-password" className="text-accent para-medium hover:underline">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
