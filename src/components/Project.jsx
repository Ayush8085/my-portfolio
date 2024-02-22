const Project = ({ project }) => {
  return (
    <li className="w-full flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black shadow-xl">
      <img src={project.img} alt="" className="w-full mb-6" />

      <h3 className="text-3xl text-center text-slate-900 dark:text-white">
        {project.title}
      </h3>

      <p className="max-w-5xl text-xl m-2 text-center text-slate-500 dark:text-slate-400">
        {project.description}
      </p>

      <p className="my-2 text-xl text-center text-indigo-700 dark:text-indigo-300">
        {project.tech_stack.map((stack, idx) => {
          return (
            <span key={idx} className="">
              {stack},{" "}
            </span>
          );
        })}
      </p>
      <div className="mb-4 flex justify-evenly gap-8">
        <a
          href={project.source_link}
          target="_blank"
          className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-30 rounded-xl border border-solid border-slate-900 dark:border-none"
        >
          Source
        </a>
        <a
          href={project.live_link}
          target="_blank"
          className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-30 rounded-xl border border-solid border-slate-900 dark:border-none"
        >
          Live
        </a>
      </div>
    </li>
  );
};

export default Project;
