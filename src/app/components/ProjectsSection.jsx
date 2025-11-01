"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blogilife",
    description:
      "It offers a seamless platform for creators to share their insights and stories. Fostering a vibrant community of readers and writers. Developed using HTML, CSS, Javascript, Nodejs, Express, JWT, MongoDB",
    image: "/images/projects/Blogilife.png",
    gitUrl: "https://github.com/ishitagupta657/Blogilife",
    previewUrl: "https://blogilife.vercel.app/",
  },
  
  {
    id: 2,
    title: "worSkY",
    description:
      "Designed and implemented a Donation website with seamless Instamojo Integration. Developed a responsive frontend using HTML, CSS, and JavaScript for user interaction",
    image: "/images/projects/worSkY.png",
    gitUrl: "https://github.com/ishitagupta657/worSkY-Jobapp",
    previewUrl: "https://worsk.netlify.app/",
  },
  {
    id: 3,
    title: "FinX",
    description:
      "Developed ChatGPT replica using React and OpenAI, replicating key functionalities of the original ChatGPT web app",
    image: "/images/projects/FinX.png",
    gitUrl: "https://github.com/ishitagupta657/finX",
    previewUrl: "https://next-finx.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-12" id="projects">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h2>
        <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
      </div>

      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
