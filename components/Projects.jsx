import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rentisite from "../public/assets/projects/Rentisite.png";
import MERNify from "../public/assets/projects/MERNify.png";
import StoryTechImg from "../public/assets/projects/StoryTech.png";
import lpFashionImg from "../public/assets/projects/lpFashion.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MERNify"
            backgroundImg={MERNify}
            projectUrl="/mernify"
            tech="MERN"
          />
          <ProjectItem
            title="Rentisite"
            backgroundImg={Rentisite}
            projectUrl="/Rentisite"
            tech="React JS"
          />
          <ProjectItem
            title="StoryTech"
            backgroundImg={StoryTechImg}
            projectUrl="/storyTech"
            tech="React JS"
          />
          <ProjectItem
            title="LpFashion"
            backgroundImg={lpFashionImg}
            projectUrl="/lpFashion"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
