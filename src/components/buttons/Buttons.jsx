import React from "react";

function Buttons({ fill = false, children, className }) {
  return (
    <button
         className={`font-roboto font-bold px-4 rounded-[30px] mx-2 transition  cursor-pointer
        ${fill 
          ? `bg-[#659a68] text-white py-2 ${className}`
          : "border-2 py-[4px] border-white text-white hover:bg-[#659a68] hover:text-white hover:border-[#659a68] "
        }
        ${className}`}
    >
      {children || "Button "}
    </button>
  );
}

export default Buttons;
