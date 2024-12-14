import React, { useState } from "react";
import ServiceSection from "./ServiceSection";

const SpecialitiesServices: React.FC = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Emergency Medicine",
      services: [
        { id: 1, title: "Anesthesiology", price: 76 },
        { id: 2, title: "Medical Services", price: 434 },
      ],
    },
    {
      id: 2,
      category: "Emergency ZZZZ",
      services: [
        { id: 1, title: "AADS", price: 76 },
        { id: 2, title: "ASDAD", price: 434 },
      ],
    },
    {
      id: 3,
      category: "Emergency XYZ",
      services: [
        { id: 1, title: "ABC", price: 76 },
        { id: 2, title: "AA A", price: 434 },
      ],
    },
  ]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  // Handler to start adding a category
  const startAddCategory = () => {
    setIsAddingCategory(true);
  };

  // Handler to save a new category
  const saveCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: Date.now(),
        category: newCategoryName,
        services: [],
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName("");
      setIsAddingCategory(false);
    }
  };

  // Handler to delete a category
  const deleteCategory = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const updateCategory = (id: number, updatedServices: any) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, services: updatedServices } : cat
      )
    );
  };

  return (
    <div className="p-5 sm:p-10 min-h-screen  w-full lg:w-5/6 ">
      <div className="w-full lg:w-3/4 bg-white space-y-4">
        <div className="px-8 py-4 border-b-[1px]">
          <h2 className="text-lg font-bold">Manage Services</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between py-1 px-4 bg-gray-50 border-l-4 border-primary">
            <h2 className="text-base font-semibold">Offered Services</h2>
            <button
              onClick={startAddCategory}
              className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
            >
              Add New
            </button>
          </div>

          {/* New Category Input */}
          {isAddingCategory && (
            <div className="mt-4 flex items-center space-x-4">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Enter Category Name"
                className="flex-grow p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={saveCategory}
                className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition"
              >
                Save
              </button>
            </div>
          )}

          {/* List of Categories */}
          {categories.map((category) => (
            <ServiceSection
              key={category.id}
              category={category}
              deleteCategory={deleteCategory}
              updateCategory={updateCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialitiesServices;
