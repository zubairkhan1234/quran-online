import React from "react";

function Buttons({ fill = false, children, className }) {
  return (
    <button
         className={`font-roboto font-bold px-4 rounded-[30px] mx-2 transition 
        ${fill 
          ? `border-2 py-2 bg-blue-500 hover:bg-blue-500 text-white ${className}`
          : "border-2 py-[4px] border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        }
        ${className}`}
    >
      {children || "Button "}
    </button>
  );
}

export default Buttons;
