import { ProjectCard } from "../components";

export const Projects = () => {
  const projects = [
    {
      title: "Project1",
      image: null,
      description: "Descripcion",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Descripcion",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
    {
      title: "Project1",
      image: null,
      description: "Description",
      technologies: ["React", "Javascript"],
    },
  ];
  return (
    <div id="projects" className="p-8 lg:p-28 antialised">
      <h1 className="sm:flex 2xl:ml-48 text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold antialiased ">
        Projects
      </h1>
      <div className="md:mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};
