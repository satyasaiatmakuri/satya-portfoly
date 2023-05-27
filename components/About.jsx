import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../public/assets/Profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI
            applications, back-end, production and maintenance using MERN Stack
            web development technologies. I’m passionate about learning new
            technologies and understand there is more than one way to accomplish
            a task. Though I am most proficient in building front-end
            applications using HTML, CSS, Javascript and React, back-end
            application using ExpressJs and NodeJs, Databases like MongoDb,
            MySql, I am a quick learner and can picsk up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2021. I have experience working in
            deployed applications. In my spare time I take responsibility of
            mentoring in an teaching platform where I teach web developement and
            various front-end & Back-end technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Profile} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
