import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="mb-4 text-teal-600">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// SVG icons for each feature
const PersonalProfileIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15C30 18.866 26.866 22 23 22C19.134 22 16 18.866 16 15C16 11.134 19.134 8 23 8C26.866 8 30 11.134 30 15Z"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <rect
      x="10"
      y="12"
      width="25"
      height="30"
      rx="2"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <circle cx="33" cy="8" r="3" fill="#EB6F2D" />
    <circle cx="10" cy="25" r="3" fill="#EB6F2D" />
  </svg>
);

const ProfileStatsIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15"
      y="15"
      width="10"
      height="20"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <rect
      x="30"
      y="10"
      width="10"
      height="25"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <circle cx="10" cy="20" r="3" fill="#EB6F2D" />
    <circle cx="40" cy="35" r="3" fill="#EB6F2D" />
  </svg>
);

const MembershipTeamIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 25C15 20 20 20 25 25C30 30 35 30 40 25"
      stroke="#EB6F2D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="15" cy="20" r="3" fill="#EB6F2D" />
    <circle cx="35" cy="20" r="3" fill="#EB6F2D" />
  </svg>
);

const BenefitsIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 10L35 20L25 40L15 20L25 10Z"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <circle cx="15" cy="35" r="3" fill="#EB6F2D" />
    <circle cx="35" cy="35" r="3" fill="#EB6F2D" />
  </svg>
);

const HappifulFamilyIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15"
      y="10"
      width="20"
      height="30"
      rx="2"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <circle cx="25" cy="20" r="5" stroke="#EB6F2D" strokeWidth="2" />
    <path
      d="M20 32.5C20 30.5 22.5 28 25 28C27.5 28 30 30.5 30 32.5"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <circle cx="40" cy="15" r="3" fill="#EB6F2D" />
    <circle cx="10" cy="35" r="3" fill="#EB6F2D" />
  </svg>
);

const CommunityIcon = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25" cy="20" r="8" stroke="#EB6F2D" strokeWidth="2" />
    <path
      d="M15 35C15 30 20 25 25 25C30 25 35 30 35 35"
      stroke="#EB6F2D"
      strokeWidth="2"
    />
    <path d="M15 20H35" stroke="#EB6F2D" strokeWidth="2" />
    <circle cx="35" cy="30" r="3" fill="#EB6F2D" />
    <circle cx="15" cy="30" r="3" fill="#EB6F2D" />
  </svg>
);

const FeaturesSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-medium text-slate-800 text-center mb-16">
        All plans include these features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        <Feature
          icon={<PersonalProfileIcon />}
          title="Personal profile"
          description="Your own dedicated web page to showcase your services, publish expert articles and advertise events."
        />

        <Feature
          icon={<ProfileStatsIcon />}
          title="Profile stats & trends"
          description="Track your profile's performance to find out where your clients are coming from and what they're looking for."
        />

        <Feature
          icon={<MembershipTeamIcon />}
          title="Our award-winning Membership Team"
          description="Our award-winning Membership Team are on hand to answer queries and help you get the best out of your membership."
        />

        <Feature
          icon={<BenefitsIcon />}
          title="Unique benefits"
          description="Exclusive media and press opportunities, plus access to insightful topic-specific CPD workshops."
        />

        <Feature
          icon={<HappifulFamilyIcon />}
          title="Happiful family"
          description="Reach individuals seeking professional support via your exclusive Happiful website profile - at no additional cost."
        />

        <Feature
          icon={<CommunityIcon />}
          title="Our community"
          description="Join your peers at the weekly Happiful Professionals Networking Lounge and our private Facebook group for ongoing peer support and engagement tips."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
