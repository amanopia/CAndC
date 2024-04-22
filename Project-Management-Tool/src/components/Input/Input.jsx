import React from "react";
import { forwardRef } from "react";
const Input = forwardRef(({ isTextArea, label, ...props }, ref) => {
  const classes = "w-[80%] border-[3px] border-black rounded-xl p-4";
  return (
    <div className="flex flex-col gap-4 mb-10">
      <div className="flex gap-2 items-center">
        <img
          src={props.image}
          alt={label + " img"}
          className="object-cover h-6"
        />
        <h1 className="md:text-xl font-semibold">{label}</h1>
      </div>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={classes + " min-h-52"} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </div>
  );
});

export default Input;
