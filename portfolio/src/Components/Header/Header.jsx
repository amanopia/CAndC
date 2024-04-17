import React from "react";
import abs from "../../assets/abstract.png";
import myImg from "../../assets/my_img1.png";
import social from "../../assets/social-media.png";
import videoC from "../../assets/vc.png";
import chat from "../../assets/chat.png";
import "./Header.css";

import AlertDialogComponent from "./AlertDialogComponent.jsx";
import useTheme from "../../Context/ThemeContext";

const Header = () => {
  const { themeMode, darkMode, lightMode } = useTheme();

  function changeHandler(e) {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }
  }

  return (
    <div className="">
      <img
        className="h-40 md:h-72 w-full object-cover lg:h-80"
        src={abs}
        alt="Abstract"
      />
      {/* OUTER BOX FOR PADDING AND MARGIN*/}
      <div className="relative items-center m-auto h-80 sm:h-56 md:h-36 lg:h-40 xl:h-48">
        {/* INNER BOX CONTAINING ALL THE COTENTS SHIFTED TO TOP-16 */}
        <div
          className="absolute -top-16 left-0 right-0 m-auto text-center flex flex-col items-center 
        sm:items-start sm:-top-8 sm:mx-5 md:flex-row md:items-center md:justify-between xl:-top-12">
          {/* CONTENT LEFT */}
          <div className="flex flex-col items-center sm:flex-row sm:gap-x-6">
            <img
              className="object-cover w-min rounded-full border-4 border-white h-40 md:h-32 lg:h-48  lg:border-8 2xl:h-56 "
              src={myImg}
              alt="pfp"
            />
            <div className="relative my-12 sm:text-left">
              <h1 className="text-2xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Aman Verma
              </h1>
              <p
                className="text-sm my-2 font-light text-slate-400 md:text-xs
              lg:text-base 2xl:text-lg">
                I am a Full Stack Developer based in Bhopal
              </p>
              <img
                src={social}
                alt="tick"
                className="h-10 absolute -top-24 right-20 sm:top-16 sm:-left-16 md:top-12 md:-left-16 lg:top-20 lg:-left-20
                xl:h-12"></img>
            </div>
          </div>
          {/* CONTENT RIGHT */}
          <div className="right-10 flex gap-x-6 sm:mx-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={changeHandler}
                checked={themeMode === "dark"}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[17px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            {/* HERE WE WILL ADD A ALERT DIALOG */}
            <AlertDialogComponent image={chat}></AlertDialogComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
