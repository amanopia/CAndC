import React from "react";
import abs from "../assets/abstract.png";
import myImg from "../assets/my_img1.png";
import social from "../assets/social-media.png";
import videoC from "../assets/vc.png";
import chat from "../assets/chat.png";
const Header = () => {
  return (
    <div className="">
      <img
        className="h-40 md:h-72 w-full object-cover"
        src={abs}
        alt="Abstract"
      />

      <div className="m-5 p-4 h-full text-center sm:text-left">
        {/* CONTENT LEFT */}
        <div className="flex flex-col items-center top:36 sm:relative sm:h-28">
          <img
            className="object-cover w-min rounded-full border-4 border-white h-40 md:h-32 lg:h-64 sm:absolute sm:-top-20 sm:left-0"
            src={myImg}
            alt=""
          />
          <div className="my-12 relative sm:-top-16 sm:left-8 ">
            <h1 className="text-2xl md:text-xl font-semibold ">Aman Verma</h1>
            <p className="text-sm my-2 md:text-xs font-light text-slate-400">
              I am a Full Stack Developer based in Delhi.
            </p>
            <img
              src={social}
              className="h-10 absolute -top-20 right-20 sm:top-12 sm:-left-16"></img>
          </div>
        </div>
        {/* CONTENT RIGHT */}
        <div className="right-10 flex gap-x-6 sm:mx-4">
          <button className="text-sm my-2 md:text-xs flex items-center gap-x-2 border-2 px-4 py-2 rounded-md bg-white hover:invert transition-all">
            <img src={videoC} alt="video call" className="h-4" />
            Video call
          </button>
          <button className="text-sm my-2 md:text-xs flex items-center gap-x-2 bg-black px-4 py-2 text-white rounded-md hover:invert border-2 transition-all border-white">
            <img src={chat} alt="message" className="h-4" />
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
