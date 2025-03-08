import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="h-48 w-48 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <h3 className="text-2xl font-medium text-slate-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

const WhyTherapistsChooseUs = () => {
  const features = [
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/visitors@2x.png",
      title: "Unrivalled number of client connections",
      description:
        "We're one of the UK's leading counselling websites, generating thousands of visits each month.",
    },
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/optimised@2x.png",
      title: "Instant web presence",
      description:
        "We make advertising online easy, giving you an instant and dedicated web presence so clients can find you quickly.",
    },
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/national@2x.png",
      title: "Optimised for search engines",
      description:
        "Our in-house SEO experts and fully responsive site keep us at the top of Google for the keywords your clients care about.",
    },
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/search@2x.png",
      title: "Powerful search",
      description:
        "Whether you're working online or face to face, our powerful search puts you in front of prospective clients and services that match your skills.",
    },
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/award@2x.png",
      title: "Award winning support team",
      description:
        "Our award-winning Membership Services Team are available to help you with all your queries, from setting up your profile to tips and suggestions.",
    },
    {
      image:
        "https://www.counselling-directory.org.uk/resources/images/illustrations/presence@2x.png",
      title: "The directory with heart",
      description:
        "We're the only network of UK wellness directories that's certified B Corp, showing our commitment to our social and environmental impact.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2">
          REASONS TO JOIN COUNSELLING DIRECTORY
        </p>
        <h2 className="text-4xl font-medium text-slate-800">
          Why therapists choose us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyTherapistsChooseUs;
