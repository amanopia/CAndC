import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // builtin method
      },
    };
  });
  // this function will be exposed by react that returns an object with the properties that we want to be called, such as an open method
  return createPortal(
    <dialog
      ref={dialog}
      className="p-12 rounded-lg backdrop:bg-stone-900/90 shadow-md">
      {children}
      <form method="dialog">
        <button className=" bg-red-500 px-4 py-2  text-white rounded-lg transition-all hover:bg-red-600 mt-5">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

// to render the dialog
// the content wrapped by the dialog

// extra param ref might be set by outside the function

// to expose a function that can be called from outside the function, we use useImperative Handle
