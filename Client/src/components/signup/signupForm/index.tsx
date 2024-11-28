import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // For Google icon
import image from "../../../assets/homepagge-overcome-banner.png";

// Define the form input types
interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-8 md:px-16 lg:px-24">
        {/* Left Image Section */}
        <div className="w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0">
          <img
            src={image} // Replace with your actual image path
            alt="Moisturizer"
            className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-[50%] bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-lg">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-primary heading-1">
            Create an account
          </h4>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            {/* Name Field */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Name"
                className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                {...register("email", {
                  required: "Email or phone number is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
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
                className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
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

            {/* Create Account Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
              >
                Create Account
              </button>
            </div>

            {/* Google Signup Button */}
            <div className="mb-4">
              <button
                type="button"
                className="w-full p-3 border border-gray-300 text-primary font-bold rounded-lg flex items-center justify-center gap-3 hover:border-gray-500 transition-all"
              >
                <FcGoogle size={20} /> Sign up with Google
              </button>
            </div>

            {/* Already have an account */}
            <div className="text-center mt-4">
              <span className="para-medium text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Log in
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
