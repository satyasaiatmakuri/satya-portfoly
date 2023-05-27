import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div className="pt-[120px]">
      {/* Customize the design and content of the 404 page */}
      <div className="text-center mt-20">
        <h1 className="text-5xl text-gray-800 mb-8 font-[Inter]">
          404 - Page Not Found
        </h1>
        <p className="text-2xl text-[#333] mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <Link href="/">
          <a className=" text-[#2980b9] no-underline text-[1.2rem] hover:underline">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Error;
