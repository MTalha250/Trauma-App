import img from "@/assets/dr.3.png";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            JOIN TRAUMA THERAPY
          </p>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-800 mb-6 leading-tight">
            Advertise your counselling practice
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Join our professional network from just £24.50 per month and start
            meeting new clients. Whether you're a sole practitioner or
            organisation, we're here to help build your practice.
          </p>
          <button className="bg-primary text-white py-3 px-8 rounded-md font-medium">
            Join today
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* Main device mockup */}
            <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 z-10 relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-slate-800 font-semibold text-lg">
                    Counselling Directory
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <div className="rounded-full overflow-hidden border-4 border-white">
                        <img
                          src={img}
                          alt="Counselor"
                          className="h-24 w-24 object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-800">
                          Daisy Morgan
                        </h3>
                        <span className="text-xs bg-green-100 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">she/her</p>
                      <p className="text-sm font-medium text-gray-600 mt-1">
                        MBACP (Registered Member)
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button className="flex-1 bg-primary text-white py-2 px-4 rounded flex items-center justify-center gap-1 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Book intro call
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-600 py-2 px-4 rounded flex items-center justify-center gap-1 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email me
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements for decoration */}
            <div className="absolute -bottom-8 -right-6 -z-10 w-32 h-32 rounded-full bg-orange-100"></div>
            <div className="absolute -top-6 -left-6 -z-10 w-24 h-24 rounded-full bg-blue-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
