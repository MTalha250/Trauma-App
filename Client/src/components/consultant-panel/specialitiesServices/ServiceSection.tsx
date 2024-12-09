import React, { useState } from "react";
import { Trash2, Edit } from "lucide-react";

interface Service {
  id: number;
  title: string;
  price: number;
}

interface ServiceSectionProps {
  category: { id: number; category: string; services: Service[] };
  deleteCategory: (id: number) => void;
  updateCategory: (id: number, services: Service[]) => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  category,
  deleteCategory,
  updateCategory,
}) => {
  const [newService, setNewService] = useState({ title: "", price: "" });

  const addService = () => {
    if (newService.title.trim() && newService.price.trim()) {
      const updatedServices = [
        ...category.services,
        { id: Date.now(), title: newService.title, price: parseFloat(newService.price) },
      ];
      updateCategory(category.id, updatedServices);
      setNewService({ title: "", price: "" });
    }
  };

  const deleteService = (serviceId: number) => {
    const updatedServices = category.services.filter((service) => service.id !== serviceId);
    updateCategory(category.id, updatedServices);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="font-semibold">{category.category}</h3>
        <button
          onClick={() => deleteCategory(category.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 size={20} />
        </button>
      </div>
      <div className="mt-4">
        {category.services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center bg-gray-50 p-3 border rounded-lg"
          >
            <span>{service.title}</span>
            <div className="flex items-center space-x-4">
              <span className="font-medium">${service.price.toFixed(2)}</span>
              <button className="text-blue-500">
                <Edit size={16} />
              </button>
              <button
                onClick={() => deleteService(service.id)}
                className="text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          value={newService.title}
          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
          placeholder="Service title"
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          placeholder="Price"
          className="w-28 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={addService}
          className="text-primary border border-primary px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition"
        >
          Add Services
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
