import React from "react";

interface ContactCardProps {
  title: string;
  children: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const ContactInformation: React.FC = () => {
  return (
    <div className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-primary font-medium mb-2">
            OTHER WAYS OF CONTACTING US
          </h3>
          <h2 className="text-4xl font-medium text-slate-800 mb-4">
            Need more information?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Simply get in touch with our Membership Services Team, who will be
            happy to answer any queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ContactCard title="Contact us by phone¹">
            <div className="space-y-4">
              <p className="font-medium text-slate-800">
                Tel:{" "}
                <a href="tel:03332502500" className="hover:text-teal-600">
                  0333 325 2500
                </a>
                ²
              </p>
              <div>
                <p className="text-gray-600">Opening hours:</p>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600">10am to 4pm</p>
              </div>
            </div>
          </ContactCard>

          <ContactCard title="Write to us">
            <address className="not-italic text-gray-600 space-y-1">
              <p>Counselling Directory</p>
              <p>Building B, Riverside Way</p>
              <p>Camberley</p>
              <p>Surrey</p>
              <p>GU15 3YL</p>
            </address>
          </ContactCard>

          <ContactCard title="Use our online form">
            <div className="space-y-4">
              <p className="text-gray-600">
                Our online form is safe and secure and probably the quickest way
                to send us a message.
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="inline-block bg-primary text-white py-3 px-6 rounded text-center hover:bg-teal-700 transition-colors"
                >
                  Contact Trauma Therapy
                </a>
              </div>
            </div>
          </ContactCard>
        </div>

        <div className="mt-8 text-sm text-gray-500 space-y-2">
          <p>
            <sup>¹</sup> Excluding bank holidays. Calls are recorded for
            training and security purposes.
          </p>
          <p>
            <sup>²</sup> Calls to 03 numbers cost the same as calling an 01 or
            02 number and count towards any inclusive minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
