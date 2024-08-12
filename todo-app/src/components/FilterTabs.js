import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { motion } from "framer-motion";

const filterTabs = [
  { name: "Category", filters: ["All", "Work", "Personal"] },
  { name: "Priority", filters: ["All", "Low", "Medium", "High"] },
];

const FilterTabs = ({ onCategoryChange, onPriorityChange, categoryFilter, priorityFilter }) => {
  const [activeFilterTab, setActiveFilterTab] = useState("Category");
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (value) => {
    if (activeFilterTab === "Category") {
      onCategoryChange(value);
    } else {
      onPriorityChange(value);
    }
  };

  return (
    <div className="bg-transparent text-white p-6">
      <div className="space-y-4">
        <ul className="flex space-x-4">
          {filterTabs.map((filterTab) => (
            <li
              key={filterTab.name}
              className={`cursor-pointer flex px-4 py-2 rounded-full items-center gap-2 text-slate-500
              shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
              cursor-pointer hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
              hover:text-violet-500 ${activeFilterTab === filterTab.name ? "bg-white text-black !important" : "text-gray-500"}`}
              onClick={() => setActiveFilterTab(filterTab.name)}
            >
              {filterTab.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6 py-4">
          <motion.div
            className="bg-white bg-opacity-10 rounded-full px-4 py-2 cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          >
            <div className="flex items-center align-middle">
              <HiOutlineAdjustmentsHorizontal className="inline-block mr-1" />
              <span>Filters</span>
            </div>
          </motion.div>

          {filterTabs
            .find((filterTab) => filterTab.name === activeFilterTab)
            .filters.map((filter) => (
              <motion.div
                key={filter}
                className={`rounded-full px-4 py-2 flex items-center gap-2 text-slate-500
                shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                cursor-pointer ${ (activeFilterTab === "Category" ? categoryFilter : priorityFilter) === filter
                  ? "bg-white text-black transition-all shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]"
                  : "hover:text-violet-500 text-slate-500 bg-transparent bg-opacity-10 hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]"
                }`}
                onClick={() => handleFilterChange(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
