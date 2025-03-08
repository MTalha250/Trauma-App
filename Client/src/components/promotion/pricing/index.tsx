import React from "react";

interface PlanProps {
  title: string;
  price: string;
  period: string;
  description: string[];
  badge?: string;
  cta: string;
  onClick: () => void;
}

const PricingCard: React.FC<PlanProps> = ({
  title,
  price,
  period,
  description,
  badge,
  cta,
  onClick,
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-8 border shadow-md flex flex-col ${
        badge ? "border-primary" : ""
      }`}
    >
      {badge && (
        <div className="self-center mb-2">
          <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded">
            {badge}
          </span>
        </div>
      )}
      <div className="text-center mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <div className="text-center mb-4">
        <span className="text-5xl font-bold text-slate-800">{price}</span>
        {period && <p className="text-gray-500 mt-1">{period}</p>}
      </div>
      {description.map((line, index) => (
        <p key={index} className="text-gray-600 text-center text-sm my-1">
          {line}
        </p>
      ))}
      <div className="mt-auto pt-6">
        <button
          onClick={onClick}
          className={`w-full py-3 px-4 rounded text-center ${
            badge
              ? "bg-primary text-white"
              : "bg-white border border-gray-300 text-slate-700"
          }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

const PricingPlans: React.FC = () => {
  const handleJoin = (plan: string) => {
    console.log(`Joined the ${plan} plan`);
    // Add your implementation here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-primary font-medium mb-2">
          SIMPLE, FAST AND SECURE
        </h2>
        <h1 className="text-4xl font-medium text-slate-800">
          Choose your plan and apply
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Monthly"
          price="£24.50"
          period=""
          badge="MOST FLEXIBLE"
          description={[
            "Rolling monthly plan.",
            "Cancel any time with 30 days' notice.",
          ]}
          cta="Join today"
          onClick={() => handleJoin("monthly")}
        />

        <PricingCard
          title="Yearly"
          price="£245"
          period="Save £49 a year"
          badge="BEST VALUE"
          description={[
            "Secure our best pricing by",
            "signing up for a full year in",
            "advance.",
          ]}
          cta="Join today"
          onClick={() => handleJoin("yearly")}
        />

        <PricingCard
          title="Charity"
          price="Free"
          period=""
          description={["Registered charities may have a", "free listing."]}
          cta="Join today"
          onClick={() => handleJoin("charity")}
        />
      </div>

      {/* Optional: Add the background illustration shown in the image */}
      <div className="absolute right-0 bottom-0 z-0 opacity-70 pointer-events-none">
        <div
          className="w-64 h-64 bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: "url('/api/placeholder/400/320')" }}
        ></div>
      </div>
    </div>
  );
};

export default PricingPlans;
