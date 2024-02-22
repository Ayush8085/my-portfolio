import React from "react";
import Project from "./Project";
import { useUser } from "../hooks/useUser";

const Projects = () => {
  const { userData } = useUser();

  return (
    <section
      id="projects"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        My Projects
      </h2>

      <ul className="list-none mx-auto my-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="projects">
          {userData.all_projects.map((project, index) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </ul>

      <div className="max-w-full flex flex-col text-center items-center">
        <a
          href="https://github.com/Ayush8085"
          target="_blank"
          className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-2xl text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Projects;
