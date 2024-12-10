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
    <div className="p-6 bg-gray-100 min-h-screen">
    <div className=" bg-white  rounded-xl shadow-lg pb-5">
      <div className="p-5  border">
      <h2 className="text-left font-prata text-lg font-light ">Invoices</h2>
      </div>
      <div className="overflow-x-auto p-8">
        <table className="table-auto w-full border-collapse border-gray-50">
          <thead>
            <tr className="bg-gray-50 ">
              <th className="border p-3 text-primary font-prata text-sm font-bold text-left ">Order ID</th>
              <th className="border  p-3  font-prata text-primary  text-sm font-bold text-left ">Created date</th>
              <th className="border  p-3 font-prata  text-primary text-sm  text-left font-bold">Amount</th>
              <th className="border p-3 font-prata  text-primary text-sm  text-left font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices.map((invoice) => (
              <tr key={invoice.id} className=" hover:bg-gray-100 transition-all text-sm ease-in-out duration-700 cursor-default">
                <td className="border border-gray-200 py-2 px-4">{invoice.id}</td>
                <td className="border border-gray-200 py-2 px-4">{invoice.date}</td>
                <td className="border border-gray-200 py-2 px-4">{invoice.amount}</td>
                <td className="border border-gray-200 py-2 px-4">
                  <button className="text-primary border border-primary px-3 py-1 text-sm md:text-base rounded-lg hover:bg-primary hover:text-white transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center ">
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
    </div>     </div>

  );
};

export default Invoices;
