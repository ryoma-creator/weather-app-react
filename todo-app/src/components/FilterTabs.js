import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiChevronsDown,
  FiChevronsLeft,
  FiChevronsUp,
} from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

// ここでChipTabsコンポーネントが使用されていないのでコメントアウト
// import ChipTabs from './ChipTabs';


const filterTabs = [
  { name: "Category", filters: ["All", "Work", "Personal"] },
  { name: "Priority", filters: ["All", "Low", "Medium", "High"] },
];

export const FilterTabs = () => {
  const [activeFilterTab, setActiveFilterTab] = useState("Category");
//
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [showFilters, setShowFilters] = useState(false);


  const handleFilterChange = (value) => {
    // value は、選択されたフィルターの文字列値。
    // 例えば、"All Category"、"Work"、"Low"、"High" など
    if (activeFilterTab === "Category") {
      setCategoryFilter(value);
    } else {
      setPriorityFilter(value);
    }
  };


  return (
    <div className="bg-transparent text-white p-6">
      <div className="space-y-4">
        
        <ul className="flex space-x-4" >
        {/* Componentの基本構造を定義 */}  

        {/* 一番上のCategoryとPriorityの選択部分 */}   
          {filterTabs.map((filterTab) => (
            <li
              key={filterTab.name}
              className={`cursor-pointer flex 
              px-4 py-2 rounded-full 
              items-center gap-2 
              text-slate-500
              shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
              cursor-pointer
              hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
              ${
                activeFilterTab === filterTab.name ? "bg-white text-black !important" : "text-gray-500"
                // CategoryとPriorityの選択部分のtextのcolor
              }`}
              onClick={() => setActiveFilterTab(filterTab.name)}
            >
              {filterTab.name}
            </li>
          ))}
        </ul>
        {/* 一番上のCategoryとPriorityの選択部分 */}

        <div className="flex items-center space-x-6 overflow-x-auto py-4">
            {/* Filtersのここで行間を変えられる */}
          <motion.div 
            className="bg-white bg-opacity-10 rounded-full px-4 py-2 cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
            // 保留中　FilterをClickして開くならonClickでFilterの隠れMenu開くようにしたいけど。。
          >
            <div className="flex items-center align-middle">
                <HiOutlineAdjustmentsHorizontal className="inline-block mr-1" /> 
                <span>Filters</span>
            </div>
             {/* <i className="fas fa-chevron-down ml-2"></i> */}
          </motion.div>

          {filterTabs
            .find((filterTab) => filterTab.name === activeFilterTab)
            // Clickして、Activeとなったtabと同じものを見つける。
            .filters.map((filter) => (
            //　そして、そのtabのfiltersのものをmapで表示させる。= ClickしたTabのもので表示を切り替えられる！
              <motion.div
                key={filter}
                className={`rounded-full px-4 py-2 px-4 py-2 rounded-full 
                flex items-center gap-2 
                text-slate-500
                shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                cursor-pointer ${
                  (activeFilterTab === "Category" ? categoryFilter : priorityFilter) === filter 
                //  選択されてactiveのFilterがcategoryなら、categoryFilterの値,　そうじゃないならpriorityFilterの値を使用
                    ? "bg-white px-4 py-2 rounded-full flex items-center gap-2 text-black  transition-all shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]" 
                    : " hover:text-violet-500 text-slate-500 bg-transparent bg-opacity-10 hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]"
                // その値が現在のフィルター (filter) と一致するかどうかをCheck (AllとかMediumとか)
                // 一致する場合は "bg-white text-black" 、一致しない場合は "bg-.. bg-opacity-10" を適用
                }`}
                onClick={() => handleFilterChange(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // hover時に要素を5%拡大し、タップ時に5%縮小するアニメーションを追加
              >
                {filter}
              </motion.div>
            ))}
        </div>

        {/* {showFilters && (
          <div className="filter-dropdown bg-white bg-opacity-10 p-4 rounded-md mt-2">
            <h3 className="text-xl mb-2">Filter by</h3>
            <div className="space-y-2">
              <select 
                className="w-full bg-black text-white p-2 rounded-md"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All Category">All Category</option>
                <option value="Uncategorized">Uncategorized</option>
                <option value="Work">Work</option>         
                <option value="Personal">Personal</option>
              </select>
              <select 
                className="w-full bg-black text-white p-2 rounded-md"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="All">All</option>        
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        )} */}
        
      </div>
    </div>
  );
};

export default FilterTabs;
