import React from "react";
import "./SideBar.css";
import text from "../../assets/text.png";
import book from "../../assets/book.png";

const SideBar = () => {
  return (
    <aside className="p-6 border-r-2 border-stone-200 md:w-80 h-screen">
      <div className="flex items-center gap-1 border-b-2 pb-5">
        <img src={text} alt="" className="md:h-10" />
        <h1 className="heading md:text-2xl font-bold">Coretan</h1>
      </div>

      <button className="add-btn flex px-4 py-3 rounded-lg border-stone-200 bg-slate-50 border-2 w-full mt-10 items-center justify-between md:text-sm transition-all hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <img src={book} alt="" />
          <p>Add project</p>
        </div>
        <p>10</p>
      </button>
    </aside>
  );
};

export default SideBar;
