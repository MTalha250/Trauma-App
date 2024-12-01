import React, { useEffect, useState } from "react";
import invoicesData from "@/data/invoicesData.json"; // Import JSON data

interface Invoice {
  id: string;
  date: string;
  amount: string;
}

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 8;

  useEffect(() => {
    // Load invoices from JSON or an API
    setInvoices(invoicesData);
  }, []);

  // Pagination calculations
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = invoices.slice(indexOfFirstInvoice, indexOfLastInvoice);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <thead>
            <tr className="">
              <th className="border p-4 text-left">Order ID</th>
              <th className="border  p-4 text-left">Created date</th>
              <th className="border  p-4 text-left">Amount</th>
              <th className="border p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((invoice) => (
              <tr key={invoice.id} className=" hover:bg-gray-100 transition-all ease-in-out duration-700 cursor-default">
                <td className="border border-gray-300 p-4">{invoice.id}</td>
                <td className="border border-gray-300 p-4">{invoice.date}</td>
                <td className="border border-gray-300 p-4">{invoice.amount}</td>
                <td className="border border-gray-300 p-4">
                  <button className="text-primary border border-primary px-3 py-2 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from(
          { length: Math.ceil(invoices.length / invoicesPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              } rounded`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Invoices;
