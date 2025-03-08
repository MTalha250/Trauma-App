const TestimonialsSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">OUR TESTIMONIALS</p>
          <h2 className="text-4xl font-medium text-slate-800">
            What our members say about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex-1">
              <p className="text-gray-700 mb-4">
                "Joining the Counselling Directory has been one of the easiest
                sign ups. The team check in with you and even contact you when
                all checks have been done and they make..."
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  read more
                </a>
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="ml-3 font-medium text-gray-900">Sarah</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="flex-1">
              <p className="text-gray-700">
                "The site is easy to navigate. Great, helpful, and prompt
                responses. A really good experience. Thank you!"
              </p>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="ml-3 font-medium text-gray-900">Poppy</span>
            </div>
          </div>

          {/* Google Reviews Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="50"
                viewBox="0 0 272 92"
              >
                <path
                  fill="#4285F4"
                  d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#EA4335"
                  d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                />
                <path
                  fill="#FBBC05"
                  d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                />
                <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z" />
                <path
                  fill="#34A853"
                  d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                />
              </svg>
            </div>
            <div className="flex items-center text-gray-600">
              <span>View our trusted Google reviews</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mt-10 gap-4">
          <a
            href="#"
            className="bg-primary text-white py-3 px-8 rounded-md font-medium text-center"
          >
            Join today
          </a>
          <a
            href="#"
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-8 rounded-md font-medium transition-colors duration-200 text-center"
          >
            Read more testimonials
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
