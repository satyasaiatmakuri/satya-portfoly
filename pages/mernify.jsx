import Image from "next/image";
import React from "react";
import MERNify from "../public/assets/projects/MERNify.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mernify = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={MERNify}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MERNify</h2>
          <h3>MongoDB / ExpressJS / ReactJs / NodeJs</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this app to demonstrate knowledge working in NodeJS, React
            JS and MongoDB. This app was built using MERN Stack and is hosted on
            render. This application supports user authentication. Users are
            able to create a new account using their email address, Password,
            avatar and can then sign in to shop products. This is made possble
            by creating a MongoDB storage database for total application data
            handling. Another feature of this application is there can be 2
            different roles called user & admin.
            <br />
            Admin can manage products, create products, create user, manage user
            specific order status, manage reviews also do shopping.
            <br />
            User can only shop the application, view products and add or
            custsomize his/her reviews.
            <br />
            Application got integrated with Stripe payment gateway.
          </p>
          <a
            href="https://github.com/satyasaiatmakuri/MERNify"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://mernify.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NodeJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mernify;
