import { motion } from "framer-motion";
import { useState } from "react";
import '../App.css';
import '../index.css'; 
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
// import { FiAlertCircle } from "react-icons/fi";



const tabs = [
  { text: "Low", icon: FiChevronDown },
  { text: "Medium", icon: FiHome },
  { text: "High", icon: FiPieChart },
];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="">
      {tabs.map((tab) => (
        <Chip
          text={tab.text}
          icon={tab.icon}
          selected={selected === tab.text}
          setSelected={setSelected}
          key={tab.text}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  icon:Icon,
// icon: Icon について:これは「分割代入」と「renaming」を同時に行なっている。
//  icon を直接使うと小文字で始まってしまうので、Icon としてrename
  selected,
  setSelected,

}) => {
  return (
    <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-xs transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <Icon className="mb-2 text-xl text-indigo-300" />
      <span className="text-xs">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
    </div>
  );
};

export default ChipTabs;