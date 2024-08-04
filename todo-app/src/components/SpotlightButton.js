import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../App.css';
import '../index.css'; 

const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const [newPriority, setNewPriority] = useState('medium');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });

      if (offset < width / 3) {
        setNewPriority('low');
      } else if (offset < (2 * width) / 3) {
        setNewPriority('medium');
      } else {
        setNewPriority('high');
      }
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-6 text-lg font-medium text-white"
    >
      <span className="pointer-events-none absolute left-1/4 transform -translate-x-1/2 mix-blend-difference">
        Low
      </span>
      <span className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 mix-blend-difference">
        Medium
      </span>
      <span className="pointer-events-none absolute left-3/4 transform -translate-x-1/2 mix-blend-difference">
        High
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100 opacity-50"
      />
    </motion.button>
  );
};

export default SpotlightButton;
