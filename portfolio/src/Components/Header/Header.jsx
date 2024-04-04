import React from "react";
import abs from "../../assets/abstract.png";
import myImg from "../../assets/my_img1.png";
import social from "../../assets/social-media.png";
import videoC from "../../assets/vc.png";
import chat from "../../assets/chat.png";
import "./Header.css";

import AlertDialogComponent from "./AlertDialogComponent.jsx";

const Header = () => {
  return (
    <div className="">
      <img
        className="h-40 md:h-72 w-full object-cover"
        src={abs}
        alt="Abstract"
      />
      {/* OUTER BOX FOR PADDING AND MARGIN*/}
      <div className="relative items-center m-auto h-80 sm:h-56 md:h-36 lg:h-32">
        {/* INNER BOX CONTAINING ALL THE COTENTS SHIFTED TO TOP-16 */}
        <div
          className="absolute -top-16 left-0 right-0 m-auto text-center flex flex-col items-center 
        sm:items-start sm:-top-8 sm:mx-5 md:flex-row md:items-center md:justify-between xl:-top-12">
          {/* CONTENT LEFT */}
          <div className="flex flex-col items-center sm:flex-row sm:gap-x-6">
            <img
              className="object-cover w-min rounded-full border-4 border-white h-40 md:h-32 lg:h-32 xl:h-56 "
              src={myImg}
              alt="pfp"
            />
            <div className="relative my-12 sm:text-left">
              <h1 className="text-2xl font-semibold md:text-xl xl:text-4xl">
                Aman Verma
              </h1>
              <p className="text-sm my-2 font-light text-slate-400 md:text-xs xl:text-base">
                I am a Full Stack Developer based in Delhi
              </p>
              <img
                src={social}
                alt="tick"
                className="h-10 absolute -top-24 right-20 sm:top-16 sm:-left-16 md:top-12 md:-left-16 xl:h-12"></img>
            </div>
          </div>
          {/* CONTENT RIGHT */}
          <div className="right-10 flex gap-x-6 sm:mx-4">
            <button className="text-sm my-2 md:text-xs flex items-center gap-x-2 border-2 px-4 py-2 rounded-md bg-white hover:invert transition-all">
              <img src={videoC} alt="video call" className="h-4 " />
              Video call
            </button>
            {/* HERE WE WILL ADD A ALERT DIALOG */}
            <AlertDialogComponent image={chat}></AlertDialogComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
