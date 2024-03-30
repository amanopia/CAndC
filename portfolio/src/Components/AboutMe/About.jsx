import React from "react";

import flag from "../../assets/InFlag.png";
import hy from "../../assets/hy.gif";

import "./About.css";

const About = () => {
  return (
    <div className="px-8 text-sm flex flex-col md:flex-row md:justify-between md:items-start">
      {/* MY DESCRIPTION */}
      <div className="about-content md:w-96 ">
        I am a Full Stack Developer based in Delhi, India. They say creativity
        meets logic in the world of development, and that's where I thrive. As a
        Full Stack Developer, I'm fluent in the language of the MERN stack
        (Mongo, Express, React, Node.js), building applications from the backend
        to the user-facing magic. But for me, code is just one part of the
        equation.
        <br />
        <br />
        My journey into the world of development was sparked by my strong
        inclination towards design. I believe that great software not only
        functions flawlessly but also looks stunning and user-friendly. I love
        experimenting with different design styles, finding the perfect blend to
        match the application's purpose. This design-centric approach goes
        beyond aesthetics, though. My strong understanding of software processes
        allows me to meticulously build applications from scratch, ensuring
        everything runs smoothly from the very first line of code to the final
        user test.
        <br />
        <br />
        Let's collaborate and bring your vision to life!
        <br />
        <br />
        P.S. A lot of people say they "can work under pressure", I can't. I've
        tried it and realised that the results are terrible. I only work well in
        peace. Thanks! ✌️
      </div>

      {/* HYPER LINKS */}
      <div className="my-10 grid grid-rows-2 grid-cols-2 gap-4 md:mt-0 md:gap-x-8">
        {/* LOCATION */}
        <div>
          <p className="text-slate-400 font-semibold text-xs">Location</p>
          <p className="font-semibold text-sm flex items-center gap-2 mt-1">
            <img
              src={flag}
              alt="flag"
              className="rounded-full object-cover h-6 w-6"
            />
            Delhi, India
          </p>
        </div>

        {/* LINKEDIN */}
        <div>
          <p className="text-slate-400 font-semibold text-xs">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/aman-verma-82b823185/"
            target="_blank"
            className="font-semibold text-sm flex items-center gap-2 mt-1 transition-all hover:text-slate-400 ">
            Aman Verma <img src={hy} alt="" className={`h-4`} />
          </a>
        </div>

        {/* TWITTER */}
        <div>
          <p className="text-slate-400 font-semibold text-xs">Twitter</p>
          <a
            href="https://twitter.com/volvidem"
            target="_blank"
            className="font-semibold text-sm flex items-center gap-2 mt-1 transition-all hover:text-slate-400 ">
            @volvidem <img src={hy} alt="" className={`h-4`} />
          </a>
        </div>

        {/* BLOG */}
        <div>
          <p className="text-slate-400 font-semibold text-xs">Hashnode</p>
          <a
            href="https://devaman.hashnode.dev/"
            target="_blank"
            className="font-semibold text-sm flex items-center gap-2 mt-1 transition-all hover:text-slate-400 ">
            @thegooddev <img src={hy} alt="" className={`h-4`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <a target="_blank" href="https://icons8.com/icon/esGVrxg9VCJ1/india">India</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
