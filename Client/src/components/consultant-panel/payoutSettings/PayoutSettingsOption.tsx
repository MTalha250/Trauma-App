import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const PayoutSettings: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("paypal");
  const [bankDetails, setBankDetails] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    routingNumber: "",
    iban: "",
    bicSwift: "",
  });
  

  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [paypalEmail, setPaypalEmail] = useState("");

  const handlePayoutChange = (method: string) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankDetails({ ...bankDetails, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Bank Details Submitted:", bankDetails);
    alert("Bank details saved successfully!");
  };
  const handleDetailsChange = () => {
    setIsEditingDetails(true); // Enable editing mode
  };
  const handleSubmitDetails = () => {
    if (paypalEmail) {
      alert(`PayPal Email Updated: ${paypalEmail}`);
      setIsEditingDetails(false); // Exit editing mode
    } else {
      alert("Please enter a valid PayPal email.");
    }
  };

  return (
    <div className="p-6 space-y-5">
      <p className="text-gray-600">
        All the earnings will be sent to the below selected payout method.
      </p>


      {/* PayPal Section */}
      <div
        className={`flex flex-col items-start p-4 border rounded-lg ${
          selectedMethod === "paypal"
            ? "border-primary bg-primary-light"
            : "border-gray-300"
        }`}
        onClick={() => handlePayoutChange("paypal")}
      >
        <div className="flex items-center w-full">
          <CheckCircle
            className={`mr-4 ${
              selectedMethod === "paypal" ? "text-primary" : "text-gray-300"
            }`}
            size={24}
          />
          <div className="flex-grow">
            <h3 className="text-lg font-medium">PayPal</h3>
            {!isEditingDetails && (
              <>
                <p className="text-sm text-gray-500">Your Payout Details</p>
                <p className="text-sm text-gray-700">
                  {paypalEmail || "Ava@******"}
                </p>
              </>
            )}
          </div>
        </div>
        {!isEditingDetails && selectedMethod === "paypal" && (
          <button
            className="mt-2 text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
            onClick={handleDetailsChange}
          >
            Change Payout Details
          </button>
        )}
      </div>

      {/* Editing PayPal Details */}
      {isEditingDetails && selectedMethod === "paypal" && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <p className="text-sm text-gray-700">
            You need to add your PayPal ID below in the text field. For more
            about{" "}
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              PayPal
            </a>{" "}
            |{" "}
            <a
              href="https://www.paypal.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Create an account
            </a>
          </p>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Add PayPal Email Address"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <button
            onClick={handleSubmitDetails}
            className="mt-3 text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Submit
          </button>
        </div>
   )}

      {/* Bank Transfer Section */}
      <div
        className={`flex items-center p-4 border rounded-lg ${
          selectedMethod === "bank"
            ? "border-primary bg-primary-light"
            : "border-gray-300"
        }`}
        onClick={() => handlePayoutChange("bank")}
      >
        <input
          type="radio"
          checked={selectedMethod === "bank"}
          onChange={() => handlePayoutChange("bank")}
          className="mr-4"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-medium">Bank Transfer</h3>
        </div>
      </div>

      {/* Bank Transfer Form */}
      {selectedMethod === "bank" && (
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">
            Please add all required settings for the bank transfer.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="accountName"
              placeholder="Bank Account Name"
              value={bankDetails.accountName}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Bank Account Number"
              value={bankDetails.accountNumber}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={bankDetails.bankName}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="routingNumber"
              placeholder="Bank Routing Number"
              value={bankDetails.routingNumber}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="iban"
              placeholder="Bank IBAN"
              value={bankDetails.iban}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="bicSwift"
              placeholder="Bank BIC/SWIFT"
              value={bankDetails.bicSwift}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default PayoutSettings;
