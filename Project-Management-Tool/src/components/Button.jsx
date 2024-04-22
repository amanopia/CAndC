import React from "react";
import book from "../assets/book.png";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="add-btn flex px-4 py-3 rounded-lg border-stone-200 bg-slate-50 border-2 w-full items-center justify-between md:text-sm transition-all hover:bg-slate-100"
      {...props}>
      <div className="flex items-center gap-2">
        <img src={book} alt="" />
        <p>{children}</p>
      </div>
      <p>{props.projectsNum}</p>
    </button>
  );
};

export default Button;
