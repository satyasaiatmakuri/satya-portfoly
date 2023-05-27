import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "docs",
    "Satya_MernDeveloper_Resume.pdf"
  );
  const fileData = fs.readFileSync(filePath).toString("base64");

  return {
    props: {
      fileData,
    },
  };
}

const resume = ({ fileData }) => {
  return (
    <>
      <Head>
        <title>Satya Sai Atmakuri | Resume</title>
        <meta
          name="description"
          content="I’m a MERN Stack Developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <div className="flex justify-end items-center md:block md:relative">
          <div className="flex justify-end md:block md:absolute md:right-0 md:bottom-0">
            <a
              href={`data:application/pdf;base64,${fileData}`}
              download="Satya_MernDeveloper_Resume.pdf"
              className="flex items-center"
            >
              <BsDownload />
              &nbsp;Download Resume
            </a>
          </div>
        </div>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Satya Sai Atmakuri</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/satya-sai-atmakuri/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/satyasaiatmakuri"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              MERN Stack Development <span className="px-1">|</span> Complex
              Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2"> MERN Stack Development </p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am an developer who aims to be able to find an exciting and
          Technology industry alongside a company who will continously motivate
          and drivenbest and improve on my skills and abilities in order to be
          able to assist the company in achieving its company mission and goals.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 break-words break-words">
            <span className="font-bold">UI Web Technologies</span>
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React.js
            <span className="px-2">|</span>ES6
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Express.js
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> OAuth
          </p>
          <p className="py-2 break-words">
            <span className="font-bold">IDE Editor</span>
            <span className="px-2">|</span>Visuial Studio Code
            <span className="px-2">|</span> Notepad++
          </p>
          <p className="py-2 break-words">
            <span className="font-bold">Databases</span>
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span> MySQL Server
          </p>
          <p className="py-2 break-words">
            <span className="font-bold">Frameworks</span>
            <span className="px-2">|</span>NodeJs
            <span className="px-2">|</span> NextJs
            <span className="px-2">|</span>PWA Venia
          </p>
          <p className="py-2 break-words">
            <span className="font-bold">PWA Venia</span>
            <span className="px-2">|</span>PWA Venia
            <span className="px-2">|</span> C++
            <span className="px-2">|</span>MySQL
          </p>
          <p className="py-2 break-words">
            <span className="font-bold">Tools & Others</span>
            <span className="px-2">|</span>Data Structures
            <span className="px-2">|</span>PostMan
            <span className="px-2">|</span>GraphQl
            <span className="px-2">|</span>RestApi`s
            <span className="px-2">|</span>AWS ( Cognito, SNS, ApiGateway )
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Futuresoft India Pvt Ltd</span>
            <span className="px-2">|</span>Noida UP
          </p>
          <p className="py-1 italic">
            Web Developer Intern (16 August 2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Writing well designed, testable, efficient code by using best
              software development practices.
            </li>
            <li>
              Creating website layout/user interface by using standard HTML/CSS
              practices.
            </li>
            <li>
              Integrating data from various back-end services and databases.
            </li>
            <li>
              Gathering and refine specifications and requirements based on
              technical needs.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">10X Academy</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Full Stack Mentor (10 July 2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              As a mentor of full stack developer my responsibility to Mentor
              students through their web development journey.
            </li>
            <li>
              Guide students to perform and learn better through the program
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">JV Technologies</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Front End Developer Intern (01 June 2022 – 01 August 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Leverage the inbuilt React toolkit for creating frontend features.
            </li>
            <li>
              Creating data visualization tools, libraries, and reusable code
              for prospects.
            </li>
            <li>
              Integrating designs and wireframes within the application code.
            </li>
            <li>
              Monitoring the interaction of users and convert them into
              insightful information.
            </li>
            <li>Writes application interface code with JavaScript.</li>
            <li>Good understanding of CSS libraries, GIT.</li>
            <li>Developing responsive web-based UI.</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Achievement & Certifications
        </h5>

        {/* Achievements & Certifications */}
        <div className="py-6">
          <ul className="list-disc list-outside px-7 md:p-0 py-1 leading-relaxed">
            <li>
              <p className="italic">
                <a
                  href="https://drive.google.com/file/d/1XOVSbNzSNucT_5WKyTGjtiJ40hrN-l2q/view?usp=sharing"
                  target="blank"
                  className="underline"
                >
                  <span className="font-bold">
                    Intern of the Quarter (January-March 2023)
                  </span>
                </a>
                <span className="px-2">|</span>by FutureSoft Pvt Ltd
              </p>
            </li>
            <li>
              <p className="italic">
                <a
                  href="https://www.udemy.com/certificate/UC-b05d9bd8-2316-49a2-b767-4f252278d038/"
                  target="blank"
                  className="underline"
                >
                  <span className="font-bold">
                    MERN Stack Full Ecommerce Site
                  </span>
                </a>
                <span className="px-2">|</span>by Udemy
              </p>
            </li>
            <li>
              <p className="italic">
                <a
                  href="https://drive.google.com/file/d/1x3eVcnL6kFPunhYJh5_seBsgB0EQx_Ga/view?usp=sharing"
                  target="blank"
                  className="underline"
                >
                  <span className="font-bold">MERN Workshop</span>
                </a>
                <span className="px-2">|</span>by Cuvette
              </p>
            </li>
            <li>
              <p className="italic">
                <a
                  href="https://codedamn.com/certificate/verify/9b4d988ff0be4ed3cd4170152a1639b8c173a2bc"
                  target="blank"
                  className="underline"
                >
                  <span className="font-bold">Advanced NodeJs</span>
                </a>
                <span className="px-2">|</span>by CodeDamn
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
