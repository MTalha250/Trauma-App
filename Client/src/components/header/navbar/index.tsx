import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderTop from "../headertop";
import search from "../../../assets/serch.svg";
import { Menu, X, ChevronDown, ChevronUp, Search } from "lucide-react";

const Navbar = () => {
  const [isOpenTrouma, setIsOpenTrouma] = useState(false);
  const [isOpenSupport, setIsOpenSupport] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenTrouma(false);
    setIsOpenSupport(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavbarMouseEnter = () => {
    setIsHoveringNavbar(true);
  };

  const handleNavbarMouseLeave = () => {
    setIsHoveringNavbar(false);
    setIsOpenTrouma(false);
    setIsOpenSupport(false);
  };

  return (
    <>
      <HeaderTop />
      <div className="container lg:mt-5 mt-3 relative mb-0 z-[200]">
        <div
          className="lg:min-h-[80px] flex justify-between items-center px-6 py-2 lg:py-5 bg-white"
          onMouseEnter={handleNavbarMouseEnter}
          onMouseLeave={handleNavbarMouseLeave}
        >
          <div>
            <Link to="/">
              <h3 className="text-lg lg:text-2xl font-bold">
                trauma<span className="text-primary">therapy</span>
              </h3>
              <p className="text-xs ml-1">Directory</p>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-gray-800"
            >
              {!isMobileMenuOpen ? (
                <Menu strokeWidth={2} size={32} />
              ) : (
                <X strokeWidth={2} size={32} />
              )}
            </button>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex space-x-3 text-sm font-medium text-[rgb(61,89,97)]">
              <li
                onMouseEnter={() => {
                  setIsOpenTrouma(false);
                  setIsOpenSupport(false);
                }}
              >
                <Link to="/find-a-therapist">Find a therapist</Link>
              </li>
              <li className="text-primary">•</li>
              <li
                onMouseEnter={() => {
                  setIsOpenTrouma(false);
                  setIsOpenSupport(false);
                }}
              >
                <Link to="/therapist-chat">What are you experiencing?</Link>
              </li>
              <li className="text-primary">•</li>

              <li className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => {
                    setIsOpenTrouma(false);
                    setIsOpenSupport(true);
                  }}
                  onMouseLeave={() => {
                    if (!isHoveringNavbar) setIsOpenSupport(false);
                  }}
                >
                  Discover
                  <span className="ml-1">
                    {isOpenSupport ? (
                      <ChevronUp strokeWidth={1} size={18} />
                    ) : (
                      <ChevronDown strokeWidth={1} size={18} />
                    )}
                  </span>
                </div>
                {isOpenSupport && (
                  <ul className="absolute left-0 top-10 mt-2 w-60 bg-white shadow-lg font-normal">
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/understanding-trouma">Trauma Details</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/stories">Personal Stories</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/resource-library">Resources</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/resource-library/details">
                        Detailed Resources
                      </Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/stories">Personal Stories</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/chat-room">Community Chat</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/promotion">Promote Your Business</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => {
                  setIsOpenTrouma(false);
                  setIsOpenSupport(false);
                }}
              >
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex space-x-5 items-center">
            <Search strokeWidth={1.5} />
            <div className="h-8 w-[1px] bg-black"></div>
            <button className="border border-primary rounded-md py-2 px-6">
              <Link to={"/therapist-chat"}>Join Now</Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Updated to match desktop navigation */}
        <div
          className={`z-10 lg:hidden mt-4 bg-dullwhite p-6 rounded-lg absolute top-9 right-8 border-2 border-[#E3E3E3] w-[280px] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        >
          <ul className="flex flex-col space-y-6 text-[16px] font-medium">
            <li>
              <Link to="/find-a-therapist">Find a therapist</Link>
            </li>
            <li>
              <Link to="/therapist-chat">What are you experiencing?</Link>
            </li>
            <li>
              <div
                className="flex items-center justify-between"
                onClick={() => setIsOpenSupport((prev) => !prev)}
              >
                <span>Discover</span>
                <span className="ml-1">
                  {isOpenSupport ? (
                    <ChevronUp strokeWidth={1.5} size={18} />
                  ) : (
                    <ChevronDown strokeWidth={1.5} size={18} />
                  )}
                </span>
              </div>
              {isOpenSupport && (
                <ul className="pl-4 mt-2 font-medium space-y-2">
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/understanding-trouma">Trauma Details</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/stories">Personal Stories</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/resource-library">Resources</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/resource-library/details">
                      Detailed Resources
                    </Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/stories">Personal Stories</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/chat-room">Community Chat</Link>
                  </li>
                  <li className="py-1 hover:bg-gray-100">
                    <Link to="/promotion">Promote Your Business</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="pt-4 flex items-center gap-3">
              <Search strokeWidth={1.5} size={20} className="text-gray-700" />
              <button className="border border-primary rounded-md py-2 px-6 w-full">
                <Link to={"/therapist-chat"}>Join Now</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
