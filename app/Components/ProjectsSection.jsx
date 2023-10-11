"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Coding Environment - REACT & TYPESCRIPT",
    description: "You can check out the project by command: ' npx codenv2 serve '.JavaScript Coding Environment that handles importing libraries. Works like codepen.io",
    image: "/images/projects/1.png",
    tag: ["FrontEnd"],
    gitUrl: "https://github.com/dnaid4k/coen2",
  },
  {
    id: 2,
    title: "Portfolio Website - HTML CSS JS and Package Json - No extra libraries. Frameworks not allowed",
    description: "Uni assesment under git control. I have used html css js and package json in creation of this website.",
    image: "/images/projects/2.png",
    tag: ["FrontEnd"],
    gitUrl: "https://github.com/dnaid4k/website-dnaid4k-master",
  },
  {
    id: 3,
    title: "All - To be updated. I have done some more projects during studies that werent frontend unfortunantely",
    description: "",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/dnaid4k/website-dnaid4k-master",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("FrontEnd");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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